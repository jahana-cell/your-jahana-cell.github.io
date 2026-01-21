'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  updateProfile,
  User,
} from 'firebase/auth';
import { auth, appCheck } from '@/lib/firebase';
import { getToken } from 'firebase/app-check';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAdmin: boolean;
  isSigner: boolean;
  isNotary: boolean;
  isMember: boolean;
  signIn: (email: string, pass: string) => Promise<any>;
  signUp: (email: string, pass: string, displayName: string) => Promise<any>;
  signOut: () => Promise<any>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  isAdmin: false,
  isSigner: false,
  isNotary: false,
  isMember: false,
  signIn: async () => {},
  signUp: async () => {},
  signOut: async () => {},
});

const memberEmails = [
    'aminuddin.khan@growshare.capital',
    'ashif.jahan@growshare.capital',
    'abid.abdullah@growshare.capital',
    'md.mansur@growshare.capital',
    'usman.nawid@growshare.capital',
    'babacar.thiaw@growshare.capital',
    'kazi.haque@growshare.capital',
    'khan.kaukab@icloud.com',
    'abir.hossain@growshare.capital',
    'mmansur9908@gmail.com',
];

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSigner, setIsSigner] = useState(false);
  const [isNotary, setIsNotary] = useState(false);
  const [isMember, setIsMember] = useState(false);
  const [appCheckReady, setAppCheckReady] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkAppCheck = async () => {
        if (appCheck) {
          try {
            await getToken(appCheck, false);
            setAppCheckReady(true);
          } catch (error) {
            console.error("App Check failed to initialize:", error);
            setAppCheckReady(true); // Still proceed to allow auth to be checked
          }
        } else {
          console.warn("App Check instance not available on client.");
          setAppCheckReady(true); // Proceed even if app check isn't there
        }
      };
      checkAppCheck();
    } else {
      setAppCheckReady(true); // Set ready on server to allow auth state to be checked
    }
  }, []);

  useEffect(() => {
    if (!appCheckReady) {
      return; // Wait for App Check to be ready
    }

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        try {
          const tokenResult = await user.getIdTokenResult();
          const hasAdminClaim = tokenResult.claims.admin === true;
          const isSuperUser = user.email === 'khan.kaukab@icloud.com';
          
          const effectiveIsAdmin = hasAdminClaim || isSuperUser;
          const userIsMember = user.email ? memberEmails.includes(user.email) : false;

          setIsAdmin(effectiveIsAdmin);
          setIsSigner(effectiveIsAdmin);
          setIsNotary(effectiveIsAdmin);
          setIsMember(userIsMember || effectiveIsAdmin);
        } catch (error) {
            console.error("Error getting ID token result:", error);
            setIsAdmin(false);
            setIsSigner(false);
            setIsNotary(false);
            setIsMember(false);
        }
      } else {
        setUser(null);
        setIsAdmin(false);
        setIsSigner(false);
        setIsNotary(false);
        setIsMember(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [appCheckReady]);

  const signIn = (email: string, pass: string) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const signUp = async (email: string, pass: string, displayName: string) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
    await updateProfile(userCredential.user, { displayName });
    return userCredential;
  };

  const signOut = () => {
    return firebaseSignOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, loading, isAdmin, isSigner, isNotary, isMember, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
