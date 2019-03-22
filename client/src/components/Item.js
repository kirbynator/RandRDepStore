import React, { Component } from 'react';
import axios from "axios";
import DepoForm from "./DepoForm"
import Depo from "./Depo"
import {Card,} from "semantic-ui-react"

class Item extends Component {
  state = { depos: [], name:"" };
  
componentDidMount() {
 this.refresh()
}
  
update = (res, id) => {
  const depos = this.state.depos.map( d => {
    if (d.id === id)
      return res.data;
    return d;
})
this.setState({ depos });
}

refresh = () =>
{
  const x = this.props.match.params.id
  console.log(x)
  axios.get(`/api/depos/${x}/items`)
    .then( res => {
      this.setState({ depos: res.data, });
    })
    .catch( err => {
      console.log(err);
    })}

    
delete = (id) => {
  axios.delete(`/api/depos/${this.props.match.params.id}/items/${id}`)
     .then( res => {
      const { depos, } = this.state;
      this.setState({ depos: depos.filter(t => t.id !== id), })
      alert(res.data.message)
      })}

render() {
  const { depos } = this.state;
return (
  <div>
<h1> Best Places to Shop in the Village </h1>

  
  </div>
)
};}
export default Item;