import React from 'react'
import BoardContainer from '../components/kanbanBoard/BoardContainer'
import PageContainer from './PageContainer'

type Props = {}

function BoardPage({}: Props) {
  return (
    <PageContainer>
      <BoardContainer/>
    </PageContainer>
  )
}

export default BoardPage