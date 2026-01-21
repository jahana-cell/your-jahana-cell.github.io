
'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const socialData = [
  {
    name: 'WhatsApp',
    url: 'https://wa.me/12144736888',
    icon: 'https://cdn-icons-png.flaticon.com/512/15707/15707820.png',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61580158479663',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968764.png',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/growshare_capital/',
    icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384031.png',
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@GrowShareCapital',
    icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png',
  },
  {
    name: 'Pinterest',
    url: 'https://pin.it/pip2c8Ibg',
    icon: 'https://cdn-icons-png.flaticon.com/512/145/145808.png',
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@growshare.capital?is_from_webapp=1&sender_device=pc',
    icon: 'https://cdn-icons-png.flaticon.com/512/3046/3046122.png',
  },
];

interface SocialIconsProps {
  className?: string;
  iconClassName?: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ className, iconClassName }) => {
  return (
    <div className={cn("flex items-center gap-4 py-2", className)}>
      {socialData.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center transition-opacity hover:opacity-70"
          aria-label={social.name}
        >
          <Image
            src={social.icon}
            alt={social.name}
            width={24}
            height={24}
            className={cn("object-contain", iconClassName)}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
