import { Container, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import * as C from 'styles/components'

export const HomeScreen = () => {
  return (
    <Container>
      <C.Divider />
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Typography variant="h1" justifyContent="center" display="flex">
            Pixel Market
          </Typography>
          <Typography
            variant="subtitle1"
            justifyContent="center"
            display="flex"
          >
            D&D MARKET
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <C.Divider decorated />
        <Grid xs={12}>
          <Typography variant="h2" justifyContent="center" display="flex">
            Are you...
          </Typography>
        </Grid>
        <Grid xs={12} md={6} lg={4}>
          <Typography
            variant="h3"
            fontWeight={300}
            justifyContent="center"
            display="flex"
          >
            a WARRIOR?
          </Typography>
        </Grid>
        <Grid xs={12} md={6} lg={4}>
          <Typography
            variant="h3"
            fontWeight={300}
            justifyContent="center"
            display="flex"
          >
            a MAGE?
          </Typography>
        </Grid>
        <Grid xs={12} md lg={4}>
          <Typography
            variant="h3"
            fontWeight={300}
            justifyContent="center"
            display="flex"
          >
            an ARCHER?
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
