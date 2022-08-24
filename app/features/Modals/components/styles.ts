import styled from '@emotion/styled'

import { E_MediaQuery } from 'styles/theme'

export const BaseWindow = styled.div`
  position: relative;

  overflow: hidden;
  display: flex;
  flex-direction: column;

  width: 580px;

  border-radius: 12px 0 0 12px;
  box-shadow: rgba(0, 0, 0, 50%) 0 6px 12px -2px, rgba(0, 0, 0, 65%) 0 3px 7px -3px;

  @media ${E_MediaQuery.lg} {
    gap: 16px;
    justify-content: flex-start;

    width: 100%;
    height: 100%;

    background: '#212121E6';
    border-radius: 0;
  }
`

export const BaseWindowClose = styled.span`
  cursor: pointer;
  user-select: none;

  position: absolute;
  top: 24px;
  right: 30px;

  width: 24px;
  height: 24px;

  & > svg {
    width: 100%;
    height: 100%;
  }
`

export const BaseWindowActions = styled.div`
  display: flex;
  justify-self: flex-end;
`
