import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Orbitron, Rajdhani, Righteous, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono'
})

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron'
})

const rajdhani = Rajdhani({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-rajdhani'
})

const righteous = Righteous({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-righteous'
})

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://brmilev-dev-portfolio.vercel.app'),
  title: {
    default: 'Boris Milev - Full-Stack Developer & Software Engineer',
    template: '%s | Boris Milev Portfolio'
  },
  description: 'Full-Stack Developer & iOS specialist from Bulgaria. 10+ projects in Swift, React Native, Next.js, C++, Python & Node.js. VSCPI student creating innovative mobile & web solutions.',
  keywords: [
    'Boris Milev',
    'Full-Stack Developer', 
    'Software Engineer',
    'iOS Developer',
    'React Native Developer',
    'Swift Developer',
    'TypeScript',
    'JavaScript',
    'Python',
    'C++',
    'Next.js',
    'React',
    'Node.js',
    'Mobile App Development',
    'Web Development',
    'Portfolio',
    'Bulgaria',
    'VSCPI Burgas',
    'DreamWeaver',
    'MoodyChat',
    'BookBite',
    'ChemEco',
    'Firebase',
    'MySQL',
    'Supabase',
    'AI Integration',
    'SwiftUI'
  ],
  authors: [{ name: 'Boris Milev', url: 'https://borismilevdev.com' }],
  creator: 'Boris Milev',
  publisher: 'Boris Milev',
  applicationName: 'Boris Milev Portfolio',
  generator: 'Next.js',
  category: 'Technology',
  classification: 'Portfolio Website',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://brmilev-dev-portfolio.vercel.app',
    title: 'Boris Milev - Full-Stack Developer & Software Engineer Portfolio',
    description: 'Explore 10+ cutting-edge projects by Boris Milev including iOS apps in Swift, React Native apps, Next.js websites, and full-stack solutions. Student developer from Bulgaria.',
    siteName: 'Boris Milev Portfolio',
    images: [
      {
        url: 'https://brmilev-dev-portfolio.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Boris Milev - Full-Stack Developer Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boris Milev - Full-Stack Developer & Software Engineer',
    description: 'Explore 10+ cutting-edge projects including iOS apps, React Native apps, and full-stack web solutions.',
    images: ['https://brmilev-dev-portfolio.vercel.app/og-image.png'],
    creator: '@BRMilev22'
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://brmilev-dev-portfolio.vercel.app',
    languages: {
      'en-US': 'https://brmilev-dev-portfolio.vercel.app',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: '/favicon.ico'
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'theme-color': '#00d4ff',
    'color-scheme': 'dark'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`
        ${inter.variable} 
        ${jetbrainsMono.variable} 
        ${orbitron.variable} 
        ${rajdhani.variable} 
        ${righteous.variable} 
        ${poppins.variable} 
        font-sans bg-black text-white antialiased
      `}>
        {children}
      </body>
    </html>
  )
}