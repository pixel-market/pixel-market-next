import { ProductList } from 'components/ProductList'
import { I_Category } from 'models/category'
import * as C from 'styles/components'

interface I_SubcategoriesProps {
  subcategories: I_Category[]
}

export const Subcategories = ({ subcategories }: I_SubcategoriesProps) => {
  if (!subcategories.length) return null

  return (
    <div style={{ paddingLeft: 24 }}>
      {subcategories.map((subcategory, index) => (
        <div key={subcategory.id}>
          <C.Title>{subcategory.name}</C.Title>
          <ProductList products={subcategory.products} />
          {index + 1 !== subcategories.length && <C.Divider />}
        </div>
      ))}
    </div>
  )
}
