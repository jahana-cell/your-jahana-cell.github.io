
import { MetadataRoute } from 'next';
import { allSearchableLinks } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const allLinks = allSearchableLinks
    .filter(link => 
        !link.url.includes('/admin') &&
        !link.url.includes('/login') &&
        !link.url.includes('/register') &&
        !link.url.includes('/forgot-password') &&
        !link.url.includes('/skylinedb3-marketing') // Ensure this is removed
    )
    .map((link) => ({
      url: `https://www.growsharecapital.com${link.url}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as 'weekly',
      priority: link.url === '/' ? 1 : 0.8,
    }));

  return allLinks;
}
