import React, { Component } from 'react';
import axios from 'axios'
import './App.css';


const CardList = (props) => (
    <div className="cardList">
        {props.profiles.map(profile => <Card {...profile}/>)}
    </div>
)
class Card extends Component {
  render() {
    const profile = this.props;
    return (
      <div className="profileCard">
      <div className="profileCardData">
      <div>
      <img alt="" src={profile.avatar_url}/>
      </div>
      <div className="profileDetails">
      <h2>{profile.name}</h2>
      <p>{profile.location}</p>
      <a href={profile.html_url} target="_blank"><p>{profile.login}</p></a>
      </div>
      </div>
      <strong>Bio:</strong> {profile.bio}
      </div>  
    )
  }
}

class Form extends Component {

  state = { userName: ''};

  handleSubmit = async (event) => {
      event.preventDefault();
      const resp = await
      axios.get(`https://api.github.com/users/${this.state.username}`);
      this.props.onSubmit(resp.data);
      console.log(resp.data)
  };

  

  render(){
    


    return(
      <form onSubmit={this.handleSubmit}>
      <input 
      type="text" 
      value={this.state.username}
      onChange={event => this.setState({ username: event.target.value})}
      placeholder="Enter the Github username of the develper you'd like to follow..."
      required
      />
      <button></button>
      </form>
    )
  }
}
class App extends Component {
state = {
  profiles: [],
}

addContact = (profileData) => {
  this.setState(prevState => ({
    profiles: [...prevState.profiles, profileData]
  }))
}

  render() {
    return (
      <div className="header">
        <div className="titleBar">
        <img className="titleContent" alt="github_logo" src="https://image.flaticon.com/icons/svg/25/25231.svg" />
          <h1>Github Rolodex</h1>
        </div>
          <Form onSubmit={this.addContact} />    
          <CardList  profiles={this.state.profiles}/>      
      </div>
    );
  }
}

export default App;
