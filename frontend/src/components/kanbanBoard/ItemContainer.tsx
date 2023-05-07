import React from 'react'
import styled from 'styled-components'
import { Draggable } from "@hello-pangea/dnd";

type Props = {
  id: string; 
  title: string;
  index: number;
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

export default function ItemContainer({ id, title, index }: Props) {
  return (
    <Draggable draggableId={id} index={index}>
    {
      (provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Container>
            <p>{title}</p>
          </Container>
        </div>
      )
    }
    </Draggable>
  )
}