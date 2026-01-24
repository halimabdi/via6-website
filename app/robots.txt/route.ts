export async function GET() {
  return new Response(
    `User-agent: *
Allow: /
Disallow: /private/

Sitemap: https://via6ai.com/sitemap.xml`,
    {
      headers: {
        'Content-Type': 'text/plain',
      },
    }
  )
}
