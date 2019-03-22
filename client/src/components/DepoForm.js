import React, {Component} from 'react';
import {Button, Form} from "semantic-ui-react"
import axios from "axios";

class Item extends Component {
  values = { name: ''};
  state = { ...this.values }

  handleSubmit = (e) => {
    e.preventDefault();
    const depos = { ...this.state, };
    axios.post("/api/depos", depos)
      .then( res => {
        this.props.refresh()
      })
      this.setState({ ...this.defaultValues, });
  }

  handleChange = (e) => {
    const { target: { name, value, } } = e;
    this.setState({ [name]: value, });
  }

  render(){
    const { name } = this.state;
    return(
    <Form onSubmit={this.handleSubmit}>
 <Form.Field >
<input name="name" value={name} required onChange={this.handleChange} placeholder='Create New Department' />
</Form.Field>
 <Button type='submit' >Submit</Button>
</Form>
    )
  }
}

export default Item;
