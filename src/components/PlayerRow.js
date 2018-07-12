import React from 'react'
import { Table } from 'semantic-ui-react'


const PlayerRow = props => {
  const player = props.player;

  return (
    <Table.Row className='player-row'>
      <Table.Cell>{player.name}</Table.Cell>
      <Table.Cell>{player.position}</Table.Cell>
      <Table.Cell>{player.nationality}</Table.Cell>
      <Table.Cell>{player.age}</Table.Cell>
    </Table.Row>
  )
};

export default PlayerRow;





