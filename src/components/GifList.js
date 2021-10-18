import React, { Component } from 'react'

export default class GifList extends Component{


  render (){
    return ( <div>
      <ul>
          <li>{this.props.gif1}</li>
          <li>{this.props.gif2}</li>
          <li>{this.props.gif3}</li>
      </ul>

    </div>
    )

    
  }

}