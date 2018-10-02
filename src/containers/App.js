import React from 'react'
import { bindActionCreators } from 'redux'
import MainHeader from '../components/MainHeader'
import Content from '../components/Content'
import { connect } from 'react-redux'
import { fetchPlayers } from '../actions/footballPlayers'

import OverlappedCarousel from '../components/OverlappedCarousel'
import Carousel from '../components/Carousel'

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPlayers
}, dispatch)


class App extends React.Component {
  componentDidMount() {
    this.props.fetchPlayers();
  }

  render() {
  	return (
      <div>               
       <Carousel items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} active={0}/>       
      </div>
    )
  }
}

export default connect(() => ({}), mapDispatchToProps)(App);