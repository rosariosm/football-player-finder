import React, { Component } from 'react'
import { Container, Menu, Icon } from 'semantic-ui-react'

export default class MainHeader extends Component {

  render() {

    return (
      <Menu className='gradient' inverted size={'huge'}>
        <Container fluid>
          <Menu.Item name='home' className={'borderless'}>
            <Icon name='futbol outline' />
            <strong>Football Player Finder</strong>
          </Menu.Item>
          </Container>
      </Menu>
    )
  }
}
