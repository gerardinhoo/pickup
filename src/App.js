import React, { Component } from 'react';
import Navigation from "./components/Navigation/Navigation";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import Rank from "./components/Rank/Rank"
import Team from "./components/Team/Team";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      route: "signin",
      isSignedIn: false,
      user: {
        id: "",
        name: "",
        email: "",
        joined: ""
      }
    }
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      joined: data.joined

    }})
  }


  onInputChange = (event) => {
    console.log(event.target.value);
}

onButtonSubmit = () => {
  console.log("click");
}


onRouteChange = (route) => {
  if (route === "signout") {
    this.setState({isSignedIn: false})
  } else if (route === "home") {
    this.setState({isSignedIn: true})
  }
  this.setState({route: route});
}

  render() {
    return (
      <div className="App">
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange= {this.onRouteChange} />
        { this.state.route === "home"
          ? <div>
              <Rank />
              <Team />
            </div>
          :(
            this.state.route === "signin"
           ?  <Signin onRouteChange={this.onRouteChange}/> 
            : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/> 
          )
          
        }
      
      </div>

    );
  }
}

export default App;
