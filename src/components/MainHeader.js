import React, { Component } from 'react'
import { Container, Menu, Icon, Header } from 'semantic-ui-react'

export default class MainHeader extends Component {

  render() {

    return (
      <Menu className='main-header gradient' inverted size={'huge'}>
        <Container fluid>
          <Menu.Item  as={Header} name='home' className={'borderless'}>
            <Icon name='futbol outline' />
            Football Player Finder
          </Menu.Item>
          </Container>
      </Menu>
    )
  }
}
