import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://via6ai.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Note: Hash URLs (#services, #pricing) are removed because Google doesn't index them
    // Add separate pages here when you create them (e.g., /blog, /case-studies)
  ]
}
