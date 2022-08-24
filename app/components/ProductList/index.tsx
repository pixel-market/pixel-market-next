import Grid from '@mui/material/Unstable_Grid2'

import { ProductCard } from 'components/ProductCard'
import { I_Product } from 'models/product'

interface I_ProductListProps {
  products: I_Product[]
}

export const ProductList = ({ products }: I_ProductListProps) => {
  if (!products.length) return null

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  )
}
