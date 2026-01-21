import Image from "next/image";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/fade-in";

const partners = [
  { name: "Nuspay", logo: "https://nuspay.com/images/logo_white.png", specialClass: "grayscale-0 drop-shadow-md" },
  { name: "Khalui Farm", logo: "https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/Website%20Pictures%2FKhaluifarm%20logo.jpg?alt=media&token=ae2f6758-1534-4e36-8dd9-f65d2f48ae60" },
  { name: "Tennessee State University", logo: "https://www.tnstate.edu/publications/images/Logo_Vertical_500w.png" },
  { name: "SkylineDB3", logo: "https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/Logo%2FSBD.png?alt=media&token=07ed4301-023d-42fa-9f69-2f3b789c8406" },
  { name: "3Dviewzz", logo: "https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/Website%20Pictures%2F3DViewzz%20%20Logo%20with%20Slogan.png?alt=media&token=874ceafe-7afc-402f-be43-37913d9d8a54", specialClass: "!max-h-24" },
  { name: "CSCR", logo: "https://cscrhospital.com/wp-content/uploads/2024/10/logo.png" },
  { name: "Marine City Medical College & Hospital", logo: "https://i.imgur.com/4a2muwt.jpeg" },
  { name: "SARPV", logo: "https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/Website%20Pictures%2FSARPV.jpg?alt=media&token=3fbd37ee-8769-4565-a9cb-f227ecf6a778"},
  { name: "FastPro.tax", logo: "https://fastpro.tax/wp-content/uploads/2025/02/logo.png" },
];

export default function OurPartners() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-headline">
            Trusted by Leading Organizations
          </h2>
          <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
            We are proud to have collaborated with and earned the trust of these esteemed institutions.
          </p>
          <div className="mt-12">
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-10 sm:gap-x-16">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className={cn("relative h-12 w-32 sm:h-12 sm:w-40", partner.specialClass?.includes('!max-h-24') && 'h-24')}
                >
                  <Image
                    fill
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className={cn(
                        "object-contain transition-all duration-300",
                        partner.specialClass
                    )}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
