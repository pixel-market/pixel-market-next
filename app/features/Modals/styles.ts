import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div)`
  position: fixed;
  z-index: 1200;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background: #212121e6;
  backdrop-filter: blur(2px);
`

export const Container = styled(motion.div)<{ order: number }>`
  position: fixed;
  z-index: 1199;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`
