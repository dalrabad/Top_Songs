import React from 'react';

class UpdateForm extends React.Component {
  
  defaultvalues = {id: 0, title: '', artist: ''}

  state = {...this.defaultvalues}

  componentDidMount() {
    if (this.props)
      this.setState({ ...this.props });
  }


  handleChange_name = (e) => {
    this.setState({ title: e.target.value }); // Ask TA about this? Is this pulling both title and artist 
  }

  handleChange_artist = (e) => {
    e.preventDefault();
    this.setState({ artist: e.target.value }); // Ask TA about this? Is this pulling both title and artist 
    debugger
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {id, title, artist, toggleEdit, updateSong} = this.props
    if (id){
      updateSong(this.state.id, this.state.title, this.state.artist);
      debugger
      toggleEdit();
    }
    else{
    //console.log(this.props.match.params.id)
    this.setState({ title: '', artist: ''}) 
    }

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="New title"
          required
          value={this.state.title}
          onChange={this.handleChange_name} // How to add the artist 
        />

        <input
          placeholder="New Artist"
          required
          value={this.state.artist} //what is this name? is this supposed to be title
          onChange={this.handleChange_artist} //Do we need this?
        />
        <button type='submit'>submit</button>
      </form>
    )
  }
  
}

export default UpdateForm;