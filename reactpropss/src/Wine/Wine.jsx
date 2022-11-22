import React, { Component } from 'react'

 class Wine extends Component {
  render() {
    const {title,description,rating}=this.props
    return (
      <div>
      <h2> Title:{title}</h2>
      <p> Description:{description} </p>
      <p> Rating:{rating}</p>
      </div>
    )
  }
}
export default Wine;