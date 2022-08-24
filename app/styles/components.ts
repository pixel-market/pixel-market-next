import { css } from '@emotion/react'
import styled from '@emotion/styled'

import theme, { E_MediaQuery } from './theme'

export const Title = styled.span`
  font-size: 32px;
  font-weight: 300;
  text-transform: uppercase;
`

interface I_DividerProps {
  h?: number
  md?: number

  decorated?: boolean
}

export const Divider = styled.div<I_DividerProps>`
  position: relative;

  width: 100%;
  height: ${({ h = 32 }) => h}px;

  ${({ decorated }) =>
    decorated
      ? css`
          &::before {
            content: '';

            position: absolute;
            top: 50%;

            height: 1px;
            width: 100%;
            background-color: ${theme.palette.primary.main};
          }
        `
      : css``}

  @media ${E_MediaQuery.md} {
    height: ${({ md = 16 }) => md}px;
  }
`
