import styled from '@emotion/styled'

import { BaseWindow, BaseWindowClose } from '../styles'

import theme from 'styles/theme'

export const Window = styled(BaseWindow)``

export const WindowClose = styled(BaseWindowClose)``

export const WindowContent = styled.div`
  display: grid;
  grid: 1fr / 1fr 2fr;
`

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 240px;

  background-color: ${theme.palette.primary.main};
`
export const RightSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 18px;

  background-color: white;
`

export const ProgressWrapper = styled.div`
  display: flex;
  justify-content: center;
`
