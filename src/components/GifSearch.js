import React, { Component } from 'react'

export default class GifSearch extends Component{


  render() {
      return (
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" name="query" value={this.props.query} />
        </form>
      );
  }

}