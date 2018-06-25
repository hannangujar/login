import React, { Component } from 'react';
import UserGreeting from './UserGreeting .jsx';
import GuestGreeting from './GuestGreeting.jsx'


class Greeting extends Component{
//     constructor(props){
//         super(props)
//         this.state = this.props.isLoggedIn
//         this.LoggedInn = this.LoggedInn.bind(this)
//         this.LoggedOut = this.LoggedOut.bind(this)
//     }
// LoggedInn(){
//     const userlogin = this.props.isLoggedIn ? true : 'Welcome to the world'
//     console.log(userlogin)
//     this.setState({userlogin: userlogin})
    

// }
// LoggedOut(){
//     const userlogout = this.props.isLoggedIn ? false : 'The Follwing New Articles'
//     this.setState({userlogout: userlogout})

// }const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

    render(){
        const isLoggedInn = this.props.isLoggedIn;
    if (isLoggedInn)  {  return  <UserGreeting />;} { return <GuestGreeting /> }

        return(
            <div>
                    {/* <h1>{this.LoggedInn}</h1> */}
                    {/* {isLoggedInn} */}
                    
            </div>
        )
    }
}

export default Greeting;