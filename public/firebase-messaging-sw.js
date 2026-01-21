
// Check if Firebase has already been initialized
if (typeof self.firebase === 'undefined' || !self.firebase.apps.length) {
    self.importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
    self.importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
}

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "REPLACE_WITH_YOUR_API_KEY",
  authDomain: "REPLACE_WITH_YOUR_AUTH_DOMAIN",
  projectId: "REPLACE_WITH_YOUR_PROJECT_ID",
  storageBucket: "REPLACE_WITH_YOUR_STORAGE_BUCKET",
  messagingSenderId: "REPLACE_WITH_YOUR_MESSAGING_SENDER_ID",
  appId: "REPLACE_WITH_YOUR_APP_ID",
  measurementId: "REPLACE_WITH_YOUR_MEASUREMENT_ID"
};

let app;
if (!self.firebase.apps.length) {
    app = self.firebase.initializeApp(firebaseConfig);
} else {
    app = self.firebase.app(); // if already initialized, use that one
}

const messaging = self.firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/Logo%2FOnly%20G%20White.png?alt=media&token=a72382f6-f56f-4a0b-a249-16104f69399e',
    badge: 'https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/Logo%2FOnly%20G%20White.png?alt=media&token=a72382f6-f56f-4a0b-a249-16104f69399e'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
