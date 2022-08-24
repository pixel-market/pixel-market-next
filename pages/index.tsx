import { MainLayout } from '../app/layouts/Main'

import { HomeScreen } from 'screens/Home'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <MainLayout title="Home">
      <HomeScreen />
    </MainLayout>
  )
}

export default Home
