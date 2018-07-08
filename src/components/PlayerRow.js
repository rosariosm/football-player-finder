import React from 'react'
import { Table } from 'semantic-ui-react'


const PlayerRow = props => {
  const player = props.player;
  
  return (
    <Table.Row>
      <Table.Cell>{player.name}</Table.Cell>
      <Table.Cell>{player.position}</Table.Cell>
      <Table.Cell>{player.nationality}</Table.Cell>
      <Table.Cell>{player.dateOfBirth}</Table.Cell>     
    </Table.Row>
  ) 
};

export default PlayerRow;





