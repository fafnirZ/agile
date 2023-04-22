import React from 'react'
import styled from 'styled-components'
import ItemContainer from './ItemContainer';
import { Draggable } from "react-beautiful-dnd";

type Props = {
  name: string;
  items: ItemType[];
  index: number;
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
  name, items, index
}: Props) {
  return (
    <Container>
      <TextContainer>{name}</TextContainer>
      <Draggable draggableId={name} index={index}>
        {
          provided => (
            <div 
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              {items.map((item, index) => (<ItemContainer title={item.title}/>))}
            </div>
          )
        }
      </Draggable>
    </Container>

  )
}