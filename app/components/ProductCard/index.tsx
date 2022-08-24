import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import * as S from './styles'

import { E_Modals } from 'features/Modals/models'
import { openModal } from 'features/Modals/slice'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { I_Product, T_ProductId } from 'models/product'

interface I_ProductCardProps {
  product: I_Product
}

export const ProductCard = ({ product }: I_ProductCardProps) => {
  const dispatch = useStoreDispatch()

  const handleOpenModal = (id: T_ProductId) => () => {
    dispatch(openModal({ window: E_Modals.product, data: id }))
  }

  return (
    <Grid xs={6} md={4} lg={3}>
      <Card>
        <S.ImagePreview src={product.image} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {product.name}
          </Typography>
          <Typography gutterBottom variant='h5' component='div'>
            {product.price}$
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {product.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Add</Button>
          <Button size='small' onClick={handleOpenModal(product.id)}>
            More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}
