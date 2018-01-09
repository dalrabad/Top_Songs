import React, { Component } from 'react';
import {Button} from 'semantic-ui-react'
import UpdateForm from './UpdateForm';

class Song extends Component {

  state = { editing: false }
  
  toggleEdit = () => this.setState({ editing: !this.state.editing });


  render (){
    if (this.props) {
      const {id, title, artist, updateSong, deleteSong} = this.props
      const { editing } = this.state;
      return (
  
        <div className="ui list">
        <div classNAme="item">
          <div className="header">{title}</div>
          { artist}
          </div>
          {
          editing ? 
            <UpdateForm id={id} title={title} artist={artist} toggleEdit={this.toggleEdit} updateSong={updateSong} />
          :
            <div> </div>
         }
          <Button primary onClick={()=>deleteSong(id)}>Delete</Button>
          <Button onClick={this.toggleEdit}>
              { editing ? 'Cancel' : 'Edit' }
          </Button>
      </div>
      )
    }
   return (
      <div>
        Loading
      </div>
    )
  }
}

export default Song;