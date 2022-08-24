import Head from 'next/head'
import { ReactElement } from 'react'

import { Navbar } from '../../features/Navbar'

interface MainLayoutProps {
  children: ReactElement
  title: string
  subtitle?: string
  isAuth?: boolean
}

export function MainLayout({ children, title }: MainLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <div>{children}</div>
    </>
  )
}
