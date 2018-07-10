import React from 'react';
import {Loader, Table, Transition, Message} from 'semantic-ui-react';
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
        <Message
          icon='warning'
          header='Sorry, something went wrong'
          content='Please refresh your browser and try again'
        />
      );
    }

    if (players.length ===  0){
      return (
        <Message
          icon='warning'
          header='Sorry'
          content="We couldn't find any results"
        />
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