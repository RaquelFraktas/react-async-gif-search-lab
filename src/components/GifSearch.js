import React, { Component } from 'react'

export default class GifSearch extends Component{

    state= {
        query: ""

    }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGIFs(this.state.query)
  }

  render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="query" value={this.state.query} onChange={event => this.setState({query: event.target.value})}/>
        </form>
        // i had this.props.query before
      );
  }

}