import React from 'react'
import { Container } from 'semantic-ui-react'
import PlayerFilters from './PlayerFilters'
import PlayerResults from '../containers/PlayerResults'


const Content = () => (
   <Container>
      <PlayerFilters />
      <PlayerResults />
    </Container>
);

export default Content;