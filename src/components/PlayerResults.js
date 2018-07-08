import React from 'react';
import { bindActionCreators } from 'redux'
import {Container, Loader, Header, Icon} from 'semantic-ui-react';
import { connect } from 'react-redux'
import { fetchPlayers } from '../actions/footballPlayers'


const mapStateToProps = state => ({
  ...state.footballPlayers
});


const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPlayers
}, dispatch)


class PlayerResults extends React.Component {
  componentDidMount() {
    this.props.fetchPlayers();
  }

  render() {
    const players = this.props.players;

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
      <Container>
         <ul>
          {
            players.map(player => {
              return (
                <li>{player.name}</li>
              );
            })
          }         
        </ul>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerResults);



