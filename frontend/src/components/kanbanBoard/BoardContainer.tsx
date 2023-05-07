import React, { useEffect, useState } from 'react'
import ListContainer from './ListContainer'
import { DragDropContext } from "@hello-pangea/dnd";
import styled from 'styled-components'
import { kanbanMockObj } from '../../mock/kanban';

type Props = {}

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

  const [items, setItems] = useState<Record<string, ItemType[]>>({});

  // onMount
  useEffect(() => {
    // use mock data
    setItems(kanbanMockObj)

    // api call
    // TODO
  },[])

  const onDragEnd = (result: any) => {
    console.log(result)
  }
 
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        {Object.entries(items).map(
          ([listName, listItems], index) => (
              <ListContainer name={listName} items={listItems} index={index}/>
          )
        )}
      </Container>

    </DragDropContext>
  )
}

export default BoardContainer