import { MainLayout } from '../app/layouts/Main'

import { CatalogScreen } from 'screens/Catalog'

import type { I_Category } from 'models/category'
import type { NextPage } from 'next'

interface I_CatalogProps {
  data: I_Category[]
}

const Catalog: NextPage<I_CatalogProps> = ({ data }) => {
  return (
    <MainLayout title="Catalog">
      <CatalogScreen data={data} />
    </MainLayout>
  )
}

export default Catalog

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:5000/catalog`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
