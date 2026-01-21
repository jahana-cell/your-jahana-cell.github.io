
import Image from 'next/image';

type TeamMember = {
  name: string;
  title: string;
  signatureImage: string;
  signatureAlt: string;
}

export const signatures: Record<string, TeamMember> = {
    "Dr. Aminuddin Khan, MBBS FCPS": {
        name: "Dr. Aminuddin Khan, MBBS FCPS",
        title: "Chairman, GrowShare Capital",
        signatureImage: "https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/Profile%20Picture%2FDr.AminuddinKhanSignature.png?alt=media&token=some-token",
        signatureAlt: "Dr. Aminuddin Khan Signature"
    },
    "MD Abul Mansur": {
        name: "MD Abul Mansur",
        title: "Chief Strategy Officer, GrowShare Capital",
        signatureImage: "https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/Profile%20Picture%2FMansurSignature.png?alt=media&token=some-token",
        signatureAlt: "MD Abul Mansur Signature"
    },
    "Abid Abdullah": {
        name: "Abid Abdullah",
        title: "Chief Operating Officer, GrowShare Capital",
        signatureImage: "https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/Profile%20Picture%2FAbidSignature.png?alt=media&token=some-token",
        signatureAlt: "Abid Abdullah Signature"
    },
    "Ashif Jahan, MBA": {
        name: "Ashif Jahan, MBA",
        title: "Chief Executive Officer, GrowShare Capital",
        signatureImage: "https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/Profile%20Picture%2FAshifSignature.png?alt=media&token=some-token",
        signatureAlt: "Ashif Jahan, MBA Signature"
    }
}


export function SignatureBlock({ memberName }: { memberName: keyof typeof signatures }) {
  const member = signatures[memberName];
  
  if (!member) {
    return null;
  }

  return (
    <div className="border-t pt-8">
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0">
            <Image 
              src={member.signatureImage}
              alt={member.signatureAlt}
              width={160} 
              height={60}
              className="object-contain"
              data-ai-hint="handwritten signature"
            />
        </div>
        <div className="border-l pl-4">
          <p className="font-bold text-lg text-foreground">{member.name}</p>
          <p className="text-md text-muted-foreground">{member.title}</p>
        </div>
      </div>
    </div>
  );
}
