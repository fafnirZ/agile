import React from 'react'
import styled from 'styled-components'
import ItemContainer from './ItemContainer';
import { Droppable } from '@hello-pangea/dnd';


type Props = {
  id: string;
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
  id, name, items
}: Props) {
  return (
    <Droppable 
      droppableId={id}
    >
      {(provided, snapshot) => (
        <div 
          ref={provided.innerRef} 
          {...provided.droppableProps}
        >
          <Container>
            <TextContainer>{name}</TextContainer>
            {items.map((item, index) => (
              <ItemContainer id={item.id} title={item.title} index={index}/>
            ))}
          </Container>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}