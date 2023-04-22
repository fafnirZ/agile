import React from 'react'
import styled from 'styled-components'

type Props = {
  title: string;
}

const Container = styled.div`
  border: 0.5px solid grey;
  margin: 10px;
  padding: 20px 10px;
  border-radius: 5px;
  height: 30px;

  &:hover {
    background: grey;
    color: white;
  }
`

export default function ItemContainer({ title }: Props) {
  return (
    <Container>{title}</Container>
  )
}