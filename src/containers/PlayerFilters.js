import React from 'react'
import { Container, Form, Select, Button } from 'semantic-ui-react'
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
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input placeholder='Name' name='name' value={name} onChange={this.handleChange} /> 
            <Form.Field control={Select} name='position' options={positions} onChange={this.handleChange} />       
            <Form.Field               
              control={NumericInput}
              min={18}
              max={40}
              placeholder='Age'
              name='age'
              value={age}
              onChange={this.handleNumberChange}
            />
            <Form.Button content='Search' />
            <Button content='Clean' onClick={this.handleClean}/>            
          </Form.Group>
        </Form>        
      </Container>
    )
  }
}


export default connect(() => ({}), mapDispatchToProps )(PlayerFilters);