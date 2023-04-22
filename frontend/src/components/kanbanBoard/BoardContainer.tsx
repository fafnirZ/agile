import React, { useState } from 'react'
import ListContainer from './ListContainer'
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from 'styled-components'

type Props = {}

// hard-coded lists
const listObjs = {
  todo: [
    {
      title: "code this thing"
    },
    {
      title: "another thing"
    }
  ],
  doing: [
    {
      title: "doing stuff"
    }
  ],
  done: [
    {
      title: "something I've completed"
    }
  ]
}

const Container = styled.div`
  display: flex;
  gap: 40px;
  padding: 50px;
`

// const reorder = (list, startIndex, endIndex) => {
//   const result = Array.from(list);
//   const [removed] = result.splice(startIndex, 1);
//   result.splice(endIndex, 0, removed);

//   return result;
// };


function BoardContainer({}: Props) {
  const [items, setItems] = useState(listObjs);

  const onDragEnd = (result: any) => {
    // if (!result.destination) {
    //   return;
    // }

    // if (result.destination.index === result.source.index) {
    //   return;
    // }

    // const itemsReordered = reorder(
    //   items.todo,
    //   result.source.index,
    //   result.destination.index
    // );

    // setItems({
    //   ...items,
    //   "todo": itemsReordered
    // });
  }

  const renderListContainers = () => Object.entries(listObjs).map(
    ([listName, listItems], index) => (
        <ListContainer name={listName} items={listItems} index={index}/>
    )
  )
 
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="kanban">
        {
          provided => (
            <Container ref={provided.innerRef} {...provided.droppableProps}>
              {renderListContainers()}
            </Container>
          )
        }
      </Droppable>
    </DragDropContext>
  )
}

export default BoardContainer