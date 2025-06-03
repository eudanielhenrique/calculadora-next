import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/historico',  // Página privada do usuário
          '/_next/',     // Arquivos internos do Next.js
          '/api/',       // APIs (se houver)
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/historico',
          '/_next/',
          '/api/',
        ],
      },
    ],
    sitemap: 'https://calculadora-emplacamento.vercel.app/sitemap.xml',
  }
}
