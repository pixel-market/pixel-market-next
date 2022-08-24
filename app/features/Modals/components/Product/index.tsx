import CloseIcon from '@mui/icons-material/Close'
import { Button } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import Image from 'next/image'

import * as S from './styles'

import { E_Modals } from 'features/Modals/models'
import { closeModal } from 'features/Modals/slice'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { T_ProductId } from 'models/product'
import { catalogApi } from 'services/catalog'
import * as C from 'styles/components'

export const TranslatorModal = () => {
  const dispatch = useStoreDispatch()
  const productId = useStoreSelector(
    (state) =>
      state.modalsManager.modals[
        state.modalsManager.modals.findIndex((modal) => modal.window === E_Modals.product)
      ].data,
  ) as T_ProductId

  const { data, isLoading } = catalogApi.useGetProductQuery(productId)

  const handleClose = () => {
    dispatch(closeModal())
  }

  return (
    <S.Window>
      <S.WindowClose onClick={handleClose}>
        <CloseIcon />
      </S.WindowClose>
      <S.WindowContent>
        <S.LeftSection>
          {isLoading ? (
            <S.ProgressWrapper>
              <CircularProgress color='secondary' />
            </S.ProgressWrapper>
          ) : (
            <img src={data!.image!} alt='product' />
          )}
        </S.LeftSection>
        <S.RightSection>
          {isLoading ? (
            <S.ProgressWrapper>
              <CircularProgress />
            </S.ProgressWrapper>
          ) : (
            <>
              <C.Title>{data?.name}</C.Title>
              <span>{data?.price}$</span>
              <C.Divider />
              <S.WindowContent>{data?.description}</S.WindowContent>
              <C.Divider decorated />
              <Button variant='contained'>Add</Button>
            </>
          )}
        </S.RightSection>
      </S.WindowContent>
    </S.Window>
  )
}
