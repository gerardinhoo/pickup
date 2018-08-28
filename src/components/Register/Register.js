import React from 'react';
import Tilt from 'react-tilt';
import soccer from "./soccer.png";
import "./Register.css"


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            name: ""
        }
    }
    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }
    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }


    onSubmitSignIn = () => {
        fetch("http://localhost:3000/register", {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name

            })
        })
        .then(response => response.json())
        .then(user => {
            if (user.id) {
                this.props.loadUser(user)
                this.props.onRouteChange("home");
            }
        })
}

    render() {
        return (
            <div>
                <div className="ma0">
                    <Tilt className="Tilt br2 shadow-1" options={{ max : 30 }} style={{ height: 150, width: 150 }} >
                        <div className="Tilt-inner pa3 white f4=5">UP</div>
                        <img style={{paddingTop: "2px", paddingLeft: "9px"}} src ={soccer} alt="soccer ball" />
                    </Tilt>
                </div>
                
                <h1 className="soccer">ULTIMATE PICKUP</h1>
                <article className="b32 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
                    <main className="pa4 black-80">
                        <div className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <label className="f1 fw6 ph0 mh0 center">Register</label>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                    <input
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="text"
                                        name="name" 
                                        id="name" 
                                        onChange = {this.onNameChange}
                                    />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                    <input 
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="email" 
                                        name="email-address"  
                                        id="email-address" 
                                        onChange = {this.onEmailChange}
                                     />
                                </div>
                                <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input 
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" 
                                name="password"  
                                id="password" 
                                onChange = {this.onPasswordChange}
                                />
                                </div>
                            </fieldset>
                            <div className="">
                                <input 
                                    onClick={this.onSubmitSignIn}
                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                    type="submit"
                                    value="Register" 
                                />
                            </div>
                        </div>
                    </main>
                </article>
            </div>
    )
  }    
}


export default Register;