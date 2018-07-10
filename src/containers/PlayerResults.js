import React from 'react';
import {Loader, Header, Icon, Table, Transition} from 'semantic-ui-react';
import { connect } from 'react-redux'
import { getVisiblePlayers } from '../selectors'
import PlayerRow from '../components/PlayerRow'


const mapStateToProps = state => {
  return {
    visiblePlayers: getVisiblePlayers(state),
    error: state.footballPlayers.error,
    is_fetching: state.footballPlayers.is_fetching
  }
}



class PlayerResults extends React.Component {
  render() {
    const players = this.props.visiblePlayers;

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
      <div>
        <Table celled >
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={6}>Player</Table.HeaderCell>
              <Table.HeaderCell width={4}>Position</Table.HeaderCell>
              <Table.HeaderCell width={4}>Nacionality</Table.HeaderCell>
              <Table.HeaderCell width={2}>Age</Table.HeaderCell>
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
      </div>
      </Transition>
    );
  }
}

export default connect(mapStateToProps, () => ({}))(PlayerResults);