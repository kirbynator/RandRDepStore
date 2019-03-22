import React from 'react';
import axios from "axios";
import DepoForm from "./DepoForm"
import Depo from "./Depo"
import {Card,} from "semantic-ui-react"


class Home extends React.Component {
state = { depos: [], name:"" };
  
componentDidMount() {
 this.refresh()
}
  
update = (id, data) => {
  axios.put(`/api/depos/${id}`, data)
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
  axios.get("/api/depos")
    .then( res => {
      this.setState({ depos: res.data, });
    })
    .catch( err => {
      console.log(err);
    })}

    
delete = (id) => {
  axios.delete(`/api/depos/${id}`)
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

<Card.Group centered>
    {depos.map( depo => 
   <Depo key={depo.id} depo={depo} delete={this.delete} update={this.update}/>
    )}
</Card.Group>
<br />
  <div>
<DepoForm refresh ={this.refresh}/>
  </div> 
  </div>
)
};}

export default Home;