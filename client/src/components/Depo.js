import React from 'react';
import { Link } from "react-router-dom"; 
import {Button, Card, Icon, Form,} from "semantic-ui-react"


class Depo extends React.Component {
state = {flower: false, name: ""}
 
componentDidMount() {
this.setState({name: this.props.depo.name})
}

toggle = () => {
  this.setState({flower: !this.state.flower})
}

handleSubmit = (e) => {
  e.preventDefault();
  if(this.state.name !== this.props.depo.name){
      this.props.update(this.props.depo.id, this.state)
      this.toggle()}
}

handleChange = (e) => {
  const { target: { name, value, } } = e;
  this.setState({ [name]: value, });
}

form = () =>(
  <Form.Field >
<Form.Input name="name" value={this.state.name} onChange={this.handleChange} placeholder="Rename Department" />
</Form.Field>

 )
 
 
 
 render(){
  const depo = this.props.depo
  return(
    <Form onSubmit={this.handleSubmit}>
    <Card>
<Card.Content>
{/* <Image floated='right' size='mini' src='/images/avatar/large/steve.jpg' /> */}
<Card.Header>{this.state.flower ? this.form() : depo.name }</Card.Header>
</Card.Content>
<Card.Content extra>
<div className='ui two buttons'>
<Button basic color='green' as={this.state.flower ? '' : Link} to={`/depos/${depo.id}`} type="submit" ><h2>{this.state.flower ? 'Submit' : "Enter"}</h2></Button>
</div>
<div className='ui two buttons'>
<Button onClick={this.toggle}>
<Icon name="pencil alternate"></Icon>
</Button>
<Button onClick={() => this.props.delete(depo.id)}>
<Icon name="trash alternate"></Icon>
</Button>
</div>
</Card.Content>
</Card>
    </Form>
)
}
}

export default Depo;
