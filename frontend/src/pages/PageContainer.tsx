import React from 'react'
import styled from 'styled-components';

type Props = {
  children: any;
}

const Container = styled.div`
  max-width: 1980px;
  max-height: 1080px;
  width: 100vw;
  height: 100vh;
  background: grey;
`

export default function PageContainer({children}: Props) {
  return (
    <Container>{children}</Container>
  )
}