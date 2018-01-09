import React, { Component } from 'react';
import SongForm from './components/SongForm';
import SongList from './components/SongList';
import axios from 'axios';


class App extends Component {

  state = {songs: [], edit:false}


 componentDidMount() {
    fetch('/api/songs')
    .then( res => res.json())
    .then( songs =>this.setState({songs}))
  }


  addSong = (title, artist) => {
    //axios.put(`/api/songs/$`)
    let song = { title, artist };
    fetch('/api/songs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(song)
    }).then( res => res.json() )
      .then( songe => {
        const { songs } = this.state;
        this.setState({ songs: [...songs, songe] });
    })
  }

  

  updateSong = (id, name, artist) => {
    console.log('dunia')

    axios.put(`/api/songs/${id}`)
    .then(res => { let songs = this.state.songs.map( t=> {
      if (t.id === id){
        debugger 
        return {...t, title: t.title, artist: t.artist}
      }
      this.setState({songs})
    })

    }) 
  
  }
  

  deleteSong = (id) => {

    fetch(`/api/songs/${id}`, { method: 'DELETE' })
    .then( () => {
      const{songs} = this.state;
      this.setState({songs: songs.filter( t=> t.id !== id)})
    })
  }

  toggleEdit= () => {
    this.setState(state => {
      return {edit: !this.state.edit}
    })
  }


  render() {
    return (
      <div className="container">
        <SongForm addSong={this.addSong}/>
        <SongList
          songs={this.state.songs}
          updateSong={this.updateSong}
          deleteSong={this.deleteSong}
        />
      </div>
    )
  }
}

export default App;


