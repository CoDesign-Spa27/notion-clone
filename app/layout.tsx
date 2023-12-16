import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ui/providers/ThemeProvider'
import { ConvexClientProvider } from '@/components/ui/providers/convex-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lotion',
  description: 'The connected Workspace .',

  icons:{
    icon:[
      {
      media:"(prefers-color-scheme:light)",
      url:"/logo.svg",
      href:"/logo.svg",

      },
      {
        media:"(prefers-color-scheme:dark)",
        url:"/logo-dark.svg",
        href:"/logo-dark.svg",

      }
    ]
  }
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
        <ThemeProvider 
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
        storageKey='Lotion-Theme2'
        >
      {children}
        
        </ThemeProvider>
        </ConvexClientProvider>
        </body>
    </html>
  )
}
