import React from 'react'
import { Form, Select, Icon } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import NumericInput from 'react-numeric-input'
import { connect } from 'react-redux'
import { updateFilters } from '../actions/footballPlayers'


const mapDispatchToProps = dispatch => bindActionCreators({
  updateFilters
}, dispatch)


class PlayerFilters extends React.Component {
  state = { name: '', position: '', age: '' }

  handleChange = (e, {name, value}) => {
  	this.setState({ [name]: value })
  }

  handleNumberChange = (valueAsNumber) => {
  	this.setState({ age: valueAsNumber })
  }

  handleSubmit = () => {
    const { name, position, age } = this.state
    let filters = {}

    if (name !== ''){
    	filters.name = name
    }

    if (position !== ''){
    	filters.position = position
    }

    if (age !== ''){
    	filters.age = age
    }

    this.props.updateFilters(filters);
  }

  handleClean = () => {
  	this.setState({ name: '', position: '', age: '' })
  	this.props.updateFilters(null)
  }

  render() {
    const { name, age} = this.state

    const positions = [
        {key: '', value: '', text: 'None'},
        {key: 'attackingMidfield', value: 'Attacking Midfield', text: 'Attacking Midfield' },
        {key: 'centralMidfield', value: 'Central Midfield', text: 'Central Midfield' },
        {key: 'centreBack', value: 'Centre-Back', text: 'Centre-Back' },
        {key: 'centreForward', value: 'Centre-Forward', text: 'Centre-Forward', },
        {key: 'defensiveMidfield', value: 'Defensive Midfield', text: 'Defensive Midfield' },
        {key: 'keeper', value: 'Keeper', text: 'Keeper' },
        {key: 'leftMidfield', value: 'Left Midfield', text: 'Left Midfield' },
        {key: 'leftWing', value: 'Left Wing', text: 'Left Wing' },
        {key: 'leftBack', value: 'Left-Back', text: 'Left-Back' },
        {key: 'rightBack', value: 'Right-Back', text: 'Right-Back'}
    ]

    return (

        <Form onSubmit={this.handleSubmit} >
          <Form.Group>
            <Form.Input placeholder='Name' name='name' value={name} onChange={this.handleChange} width={4}/>
            <Form.Field control={Select}  placeholder='Choose a position...' name='position' options={positions} onChange={this.handleChange} width={4} />
            <Form.Field
              control={NumericInput}
              min={18}
              max={40}
              placeholder='Age'
              name='age'
              value={age}
              onChange={this.handleNumberChange}
              width={4}
            />
            <Form.Button floated='right'color='green' width={2} fluid>
              <Icon name='search' /> Search
            </Form.Button>
            <Form.Button floated='right' basic onClick={this.handleClean} width={2} fluid>
              <Icon name='delete' /> Clean
            </Form.Button>
          </Form.Group>
        </Form>

    )
  }
}


export default connect(() => ({}), mapDispatchToProps )(PlayerFilters);