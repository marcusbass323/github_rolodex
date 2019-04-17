import React, { Component } from 'react';

import './App.css';


const testData = [
  {
    "login": "marcusbass323",
    "id": 33775076,
    "node_id": "MDQ6VXNlcjMzNzc1MDc2",
    "avatar_url": "https://avatars1.githubusercontent.com/u/33775076?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/marcusbass323",
    "html_url": "https://github.com/marcusbass323",
    "followers_url": "https://api.github.com/users/marcusbass323/followers",
    "following_url": "https://api.github.com/users/marcusbass323/following{/other_user}",
    "gists_url": "https://api.github.com/users/marcusbass323/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/marcusbass323/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/marcusbass323/subscriptions",
    "organizations_url": "https://api.github.com/users/marcusbass323/orgs",
    "repos_url": "https://api.github.com/users/marcusbass323/repos",
    "events_url": "https://api.github.com/users/marcusbass323/events{/privacy}",
    "received_events_url": "https://api.github.com/users/marcusbass323/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Marcus Bass",
    "company": null,
    "blog": "",
    "location": "Las Vegas, NV",
    "email": null,
    "hireable": null,
    "bio": null,
    "public_repos": 71,
    "public_gists": 0,
    "followers": 2,
    "following": 1,
    "created_at": "2017-11-18T06:36:45Z",
    "updated_at": "2019-04-16T20:10:11Z"
  },
  {
    "login": "FireInjun",
    "id": 25806799,
    "node_id": "MDQ6VXNlcjI1ODA2Nzk5",
    "avatar_url": "https://avatars1.githubusercontent.com/u/25806799?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/FireInjun",
    "html_url": "https://github.com/FireInjun",
    "followers_url": "https://api.github.com/users/FireInjun/followers",
    "following_url": "https://api.github.com/users/FireInjun/following{/other_user}",
    "gists_url": "https://api.github.com/users/FireInjun/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/FireInjun/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/FireInjun/subscriptions",
    "organizations_url": "https://api.github.com/users/FireInjun/orgs",
    "repos_url": "https://api.github.com/users/FireInjun/repos",
    "events_url": "https://api.github.com/users/FireInjun/events{/privacy}",
    "received_events_url": "https://api.github.com/users/FireInjun/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Mykeal Kenny",
    "company": null,
    "blog": "",
    "location": "US",
    "email": null,
    "hireable": null,
    "bio": "Fullstack Web Developer and budding Computer Scientist with a knack for Windows automation.",
    "public_repos": 83,
    "public_gists": 7,
    "followers": 11,
    "following": 20,
    "created_at": "2017-02-16T00:03:34Z",
    "updated_at": "2019-04-15T14:47:02Z"
  }]

const CardList = (props) => (
    <div>
        {props.profiles.map(profile => <Card {...profile}/>)}
    </div>
)
class Card extends Component {
  render() {
    const profile = this.props;
    return (
      <div className="profileCard">
      <div>
      <img alt="" src={profile.avatar_url}/>
      </div>
      <div className="profileDetails">
      <h2>{profile.name}</h2>
      <p>{profile.login}</p>
        <p>{profile.company}</p>
      </div>
      </div>
    )
  }
}

class Form extends Component {

  state = { userName: ''};

  handleSubmit = (event) => {
      event.preventDefault();
      console.log(
        this.state.userName
      )
  };

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
      <input 
      type="text" 
      value={this.state.username}
      onChange={event => this.setState({ userName: event.target.value})}
      placeholder="Github username..."
      required
      />
      <button>Add User</button>
      </form>
    )
  }
}
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      profiles: testData,
    };
  }
  render() {
    return (
      <div>
          <h1>Github Rolodex</h1>
          <Form />
          <CardList profiles={this.state.profiles}/>
      </div>
    );
  }
}

export default App;
