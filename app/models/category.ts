import { I_Product } from './product'

export type T_CategoryId = number

export interface I_Category {
  id: T_CategoryId
  name: string
  products: I_Product[]
  parentCategoryId: number | null
  subcategories: I_Category[]
}
