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

  // handleSubmit= (query) =>{
  //   this.fetchGifs(query)
  // }
  //dont need this func bc i can just use fetchgifs

  fetchGifs= (query) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=fSZkMKFxXTnm5MFWDk5chpCOOWZ7YZaX&rating=g`)
    .then((response) => response.json())
    .then(({data}) => {
        this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
      }) 
      // dont map first bc youre gonna wanna set state within the map. 
  }
  
  render(){
      return( <div>
            {this.fetchGifs()}
            <GifList gifs={this.state.gifs}/>
            <GifSearch query= {this.handlesubmit}/>
          </div>
        )
      
  }

}