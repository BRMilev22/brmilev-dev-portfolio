import { useEffect } from 'react'

interface StructuredDataProps {
  type?: 'person' | 'portfolio'
}

export default function StructuredData({ type = 'person' }: StructuredDataProps) {
  useEffect(() => {
    // Remove existing structured data
    const existingScript = document.getElementById('structured-data')
    if (existingScript) {
      existingScript.remove()
    }

    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Boris Milev",
      "jobTitle": "Full-Stack Developer",
      "description": "Full-Stack Developer & iOS specialist from Bulgaria. Student at VSCPI creating innovative mobile & web solutions.",
      "url": "https://brmilev-dev-portfolio.vercel.app",
      "sameAs": [
        "https://github.com/BRMilev22",
        "https://www.linkedin.com/in/boris-milev-792546304/"
      ],
      "knowsAbout": [
        "Swift",
        "React Native", 
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Python",
        "C++",
        "Node.js",
        "iOS Development",
        "Web Development",
        "Full-Stack Development"
      ],
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Vocational School for Computer Programming and Innovation (VSCPI)",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Burgas",
          "addressCountry": "Bulgaria"
        }
      },
      "birthDate": "2008-04-08",
      "nationality": "Bulgarian",
      "email": "zvarazoku9@icloud.com",
      "worksFor": {
        "@type": "Organization",
        "name": "Freelance Developer"
      }
    }

    const portfolioSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Boris Milev Portfolio",
      "description": "Full-Stack Developer & iOS specialist portfolio showcasing 10+ projects in Swift, React Native, Next.js, and more.",
      "url": "https://brmilev-dev-portfolio.vercel.app",
      "author": {
        "@type": "Person",
        "name": "Boris Milev"
      },
      "inLanguage": "en-US",
      "copyrightYear": "2024",
      "genre": "Portfolio Website",
      "keywords": "Boris Milev, Full-Stack Developer, iOS Developer, Swift, React Native, Next.js, TypeScript, Portfolio"
    }

    const projectsSchema = {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": "Boris Milev Software Projects",
      "description": "Collection of 10+ software projects including mobile apps, web applications, and APIs",
      "creator": {
        "@type": "Person",
        "name": "Boris Milev"
      },
      "about": [
        {
          "@type": "SoftwareApplication",
          "name": "DreamWeaver",
          "description": "AI-powered story generation iOS app with SwiftUI, Supabase, and Mistral AI",
          "applicationCategory": "Mobile App",
          "operatingSystem": "iOS"
        },
        {
          "@type": "SoftwareApplication", 
          "name": "BookBite",
          "description": "Restaurant reservation system with custom C++ API using Crow framework",
          "applicationCategory": "Web Application",
          "programmingLanguage": ["C++", "Node.js", "Swift"]
        },
        {
          "@type": "SoftwareApplication",
          "name": "MoodyChat", 
          "description": "Revolutionary iOS chat app with emotion-based UI adaptation",
          "applicationCategory": "Mobile App",
          "operatingSystem": "iOS"
        }
      ]
    }

    const schemas = type === 'person' ? [personSchema, portfolioSchema, projectsSchema] : [portfolioSchema]
    
    schemas.forEach((schema, index) => {
      const script = document.createElement('script')
      script.id = `structured-data-${index}`
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(schema)
      document.head.appendChild(script)
    })

    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`structured-data-${index}`)
        if (script) {
          script.remove()
        }
      })
    }
  }, [type])

  return null
}