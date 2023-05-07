import React, { useEffect, useState } from 'react'
import ListContainer from './ListContainer'
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import styled from 'styled-components'
import { ListsMock } from '../../mock/list';
import { insert, reorder } from '../../utils/arrays';

type Props = {}

const Container = styled.div`
  display: flex;
  gap: 40px;
  padding: 50px;
`



function BoardContainer({}: Props) {
  const [lists, setLists] = useState<ListType[]>([])


  // onMount
  useEffect(() => {
    // use mock data
    setLists(ListsMock)
    // api call
    // TODO
  },[])

  const onDragEnd = (result: any) => {
    // console.log(result)
    const src = result.source
    const dest = result.destination
    const src_list = lists.filter(l => l.id == src.droppableId)[0].items
    const dest_list = lists.filter(l => l.id == dest.droppableId)[0].items

    if (!dest) return;
    if (src.droppableId == dest.droppableId && src.index == dest.index) return;
    if (src.droppableId == dest.droppableId && src.index != dest.index) {
      // intra-list movement
      const reordered = reorder<ItemType>(src_list, src.index, dest.index)
      setLists(prevState => prevState.map(list => {
        if (list.id == src.droppableId) {
          list.items = reordered
          return list
        }
        return list
      }))
      console.log(lists)
      return;
    }
    else {
      // inter-list movement
      // remove item from source from index
      const [ old_item ] = src_list.splice(src.index)
      // const new_src_list = [...src_list.splice(0, src.index), ...src_list.splice(src.index+1)]
      console.log(old_item)
      // // add item to destination in index
      const new_dest_list = insert<ItemType>(dest_list, dest.index, old_item)

      // // save
      setLists(prevState => prevState.map(list => {
        if (list.id == src.droppableId) {
          list.items = src_list; return list;
        } else if (list.id == dest.droppableId) {
          list.items = new_dest_list; return list;
        } else {
          return list;
        }
      }))

      console.log(lists)
    }

  }
 
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        {/* {Object.entries(items).map(
          ([listName, listItems], index) => (
              <ListContainer name={listName} items={listItems} index={index}/>
          )
        )} */}
        {lists.map(({name, id, items}) => (
          <ListContainer id={id} name={name} items={items} />
        ))}
      </Container>
    </DragDropContext>
  )
}

export default BoardContainer