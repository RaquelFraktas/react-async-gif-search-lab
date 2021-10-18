import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component{
  
  state = {
   gifs: [], 
//    query: ""
  }

  componentDidMount(){  

  }

  handleSubmit= (query) =>{
    this.fetchGifs(query)
  }

  fetchGifs= (query) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=fSZkMKFxXTnm5MFWDk5chpCOOWZ7YZaX&rating=g`)
    .then((response) => response.json())
    .then(response => {
      response.data.map(resp => this.setState({gifs: {resp}}))
    }) //set states etc
  }
  
  render(){
      //render gifsearch and giflist in here. call this.fetchgifs in componentdid mount. pass state in those components 
      return( <div>
            {this.fetchGifs()}
            <GifList gif1={this.state.gifs[0]}/>
            <GifList gif2={this.state.gifs[1]}/>
            <GifList gif3={this.state.gifs[2]}/>
            <GifSearch query= {this.handlesubmit}/>
          </div>
        )
      
  }

}