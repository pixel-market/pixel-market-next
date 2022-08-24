import { T_ProductId } from 'models/product'

export enum E_Modals {
  product = 'product',
}
export interface I_Modal {
  window: E_Modals
  data: T_ProductId | null
}
