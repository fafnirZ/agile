import React from 'react'
import styled from 'styled-components'
import ItemContainer from './ItemContainer';
import { Droppable } from '@hello-pangea/dnd';


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
    <Droppable 
      droppableId={`list-${index}`}
    >
      {(provided, snapshot) => (
        <div 
          ref={provided.innerRef} 
          {...provided.droppableProps}
        >
          <Container>
            <TextContainer>{name}</TextContainer>
            {items.map((item, index) => (<ItemContainer title={item.title} index={index}/>))}
          </Container>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}