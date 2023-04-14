import React from 'react'
import styled from 'styled-components'

type Props = {
  title: string;
}

const Container = styled.div`
  border: 1px solid black;
  margin: 10px;
  border-radius: 5px;
  height: 30px;
`

export default function ItemContainer({ title }: Props) {
  return (
    <Container>{title}</Container>
  )
}