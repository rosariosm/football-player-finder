import React from 'react'
import { Container, Segment } from 'semantic-ui-react'
import PlayerFilters from '../containers/PlayerFilters'
import PlayerResults from '../containers/PlayerResults'


const Content = () => (
   <Container>
     <Segment>
       <PlayerFilters />
     </Segment>
     <PlayerResults />
    </Container>
);

export default Content;