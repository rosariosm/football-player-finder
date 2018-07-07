import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const MainHeader = () => (
  <Header as='h1' dividing>
    <Icon name='futbol outline' />
    <Header.Content>Football Player Finder</Header.Content>
  </Header>
)

export default MainHeader