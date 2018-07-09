import React from 'react'
import { bindActionCreators } from 'redux'
import { Container } from 'semantic-ui-react'
import MainHeader from '../components/MainHeader'
import Content from '../components/Content'
import { connect } from 'react-redux'
import { fetchPlayers } from '../actions/footballPlayers'

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPlayers
}, dispatch)


class App extends React.Component {
  componentDidMount() {
    this.props.fetchPlayers();
  }

  render() {
  	return (
      <Container>
        <MainHeader />
        <Content />
      </Container>
    )
  }
}

export default connect(() => ({}), mapDispatchToProps)(App);