import { FC } from 'react'

import { TranslatorModal } from './Product'

import { E_Modals } from '../models'

export const ModalComponents: Record<E_Modals, FC> = {
  [E_Modals.product]: TranslatorModal,
}
