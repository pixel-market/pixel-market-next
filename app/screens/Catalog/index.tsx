import { Container } from '@mui/material'

import { ProductList } from 'components/ProductList'
import { Subcategories } from 'components/Subcategory'
import { I_Category } from 'models/category'
import * as C from 'styles/components'

interface I_CatalogScreenProps {
  data: I_Category[]
}

export const CatalogScreen = ({ data }: I_CatalogScreenProps) => {
  return (
    <Container>
      <C.Divider />
      {data.map((category, index) => (
        <div key={category.id}>
          <C.Title>{category.name}</C.Title>
          <ProductList products={category.products} />
          <C.Divider h={16} />
          <Subcategories subcategories={category.subcategories} />
          {index + 1 !== data.length && <C.Divider decorated />}
        </div>
      ))}
    </Container>
  )
}
