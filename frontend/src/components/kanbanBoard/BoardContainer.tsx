import React from 'react'
import ListContainer from './ListContainer'
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

function BoardContainer({}: Props) {

  const renderListContainers = () => Object.entries(listObjs).map(
    ([listName, listItems]) => (
      <ListContainer name={listName} items={listItems}/>
    )
  )

  return (
    <Container>
      {renderListContainers()}
    </Container>
  )
}

export default BoardContainer