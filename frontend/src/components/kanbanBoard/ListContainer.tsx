import React from 'react'
import styled from 'styled-components'
import ItemContainer from './ItemContainer';

type Props = {
  name: string;
  items: ItemType[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 300px;
  height: 800px;
  background: white;
  border-radius: 20px;
  gap: 20px;
`

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
`

export default function ListContainer({
  name, items
}: Props) {
  return (
    <Container>
      <TextContainer>{name}</TextContainer>
      {items.map(item => (<ItemContainer title={item.title}/>))}
    </Container>
  )
}