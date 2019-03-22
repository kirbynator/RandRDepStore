import React, { Component } from 'react';
import axios from "axios";
import DepoForm from "./DepoForm"
import Depo from "./Depo"
import {Card,} from "semantic-ui-react"

class Items extends Component {
  state = { depos: [], name:"" };
  
componentDidMount() {
 this.refresh()
}
  
update = (id, data) => {
  console.log(data)
  axios.put(`/api/depos/${this.props.match.params.id}/items/${id}`, data)
  .then( res => {
    const depos = this.state.depos.map( d => {
      if (d.id === id){
        return res.data;}
      return d;
      })
  this.setState({ depos });
  })}

refresh = () =>
{
  axios.get(`/api/depos/${this.props.match.params.id}/items`)
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
<h1>{this.props.depos.name}</h1>

<Card.Group centered>
    {depos.map( depo => 
   <Depo key={depo.id} depo={depo} delete={this.delete} update={this.update} work={this.props.match.params.id}/>
    )}
</Card.Group>
<br />
  <div>
<DepoForm refresh ={this.refresh}/>
  </div> 
  </div>
)
};}
export default Items;