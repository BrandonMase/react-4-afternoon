import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ClassList extends Component {
  constructor() {
    super();
    this.state = {
      students:[]
    }
    
  }

  componentDidMount(props) {
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then(res => {
      console.log(res.data);
      this.setState({ students: res.data });
    })
  }

  render() {
   let html = this.state.students.map((e,i) => {
     return <Link to={`/student/${e.id}`}><h3 key={i}>{`${e.first_name} ${e.last_name}`}</h3></Link>
    })
    return (
      <div className="box">
      <Link to={"/"}><button>Back to Home</button></Link>
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList</h2>
        {html}
      </div>
    )
  }
}