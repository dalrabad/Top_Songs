import React from 'react';

class SongForm extends React.Component {
  
  defaultvalues = {title: '', artist: ''}

  state = {...this.defaultvalues}


  handleChange_name = (e) => {
    this.setState({ name: e.target.value }); // Ask TA about this? Is this pulling both title and artist 
  }

  handleChange_artist = (e) => {
    e.preventDefault();
    this.setState({ artist: e.target.value }); // Ask TA about this? Is this pulling both title and artist 
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addSong(this.state.name, this.state.artist);
    console.log(this.state.id)
    //console.log(this.props.match.params.id)
    this.setState({ name: '', artist: ''}) //Why is the name an empty string 
    console.log(this.props)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Add a song"
          required
          value={this.state.name}
          onChange={this.handleChange_name} // How to add the artist 
        />

        <input
          placeholder="Add Artist"
          required
          value={this.state.artist} //what is this name? is this supposed to be title
          onChange={this.handleChange_artist} //Do we need this?
        />
        <button type='submit'>submit</button>
      </form>
    )
  }
  
}

export default SongForm;