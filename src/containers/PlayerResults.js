import React from 'react';
import {Container, Loader, Header, Icon, Table, Transition} from 'semantic-ui-react';
import { connect } from 'react-redux'
import { getNormalizedPlayers } from '../selectors'
import PlayerRow from '../components/PlayerRow'


const mapStateToProps = state => ({  
  normalizedPlayers: getNormalizedPlayers(state),
  error: state.footballPlayers.error,
  is_fetching: state.footballPlayers.is_fetching
});



class PlayerResults extends React.Component {  
  render() {
    const players = this.props.normalizedPlayers;

    if (this.props.is_fetching){
      return (
        <div className='half-viewport centered-aligned'>
           <Loader active inline='centered' />
        </div>
      );
    }

    if(this.props.error){
      return (
        <div className='full-viewport centered-aligned'>
        <Header as='h2' icon textAlign='center'>
          <Icon name='bug' />
            Error
          <Header.Subheader>
            Algo salió mal. Intentá nuevamente
          </Header.Subheader>
        </Header>
        </div>
      );
    }

    if (players.length ===  0){
      return (
        <div className='full-viewport centered-aligned'>
        <Header as='h2' icon textAlign='center'>
          <Icon name='bug' />
            No se encontraron resultados
          <Header.Subheader>
            Probá refinando tu búsqueda
          </Header.Subheader>
        </Header>
        </div>
      );
    }

    return (
      <Transition transitionOnMount={true} animation='fade' duration={500}>
      <Container>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Player</Table.HeaderCell>
              <Table.HeaderCell>Position</Table.HeaderCell>
              <Table.HeaderCell>Nacionality</Table.HeaderCell>
              <Table.HeaderCell>Age</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          
          <Table.Body>
            {
              players.map(player => {
                return (
                  <PlayerRow player={player} key={player.name} />
                );
              })
            }
          </Table.Body>
        </Table>
      </Container>
      </Transition>
    );
  }
}

export default connect(mapStateToProps, () => ({}))(PlayerResults);