import styled from '@emotion/styled'

import theme from 'styles/theme'

export const ImagePreview = styled.img`
  object-fit: contain;
  height: 220px;
  width: 100%;

  background-color: ${theme.palette.primary.main};
`
