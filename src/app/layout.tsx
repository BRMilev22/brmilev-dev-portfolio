import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono'
})

export const metadata: Metadata = {
  title: {
    default: 'Boris Milev - Full-Stack Developer & Software Engineer',
    template: '%s | Boris Milev Portfolio'
  },
  description: 'Boris Milev - Full-Stack Developer & Software Engineer from Bulgaria. Explore 10+ cutting-edge projects in Swift iOS apps, React Native, Next.js web apps, C++, Python, and Node.js. Student at VSCPI Burgas specializing in mobile & web development.',
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
    url: 'https://borismilevdev.com',
    title: 'Boris Milev - Full-Stack Developer & Software Engineer Portfolio',
    description: 'Explore 10+ cutting-edge projects by Boris Milev including iOS apps in Swift, React Native apps, Next.js websites, and full-stack solutions. Student developer from Bulgaria.',
    siteName: 'Boris Milev Portfolio',
    images: [
      {
        url: 'https://borismilevdev.com/og-image.png',
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
    images: ['https://borismilevdev.com/og-image.png'],
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
    canonical: 'https://borismilevdev.com',
    languages: {
      'en-US': 'https://borismilevdev.com',
    },
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
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}