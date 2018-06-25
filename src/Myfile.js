import React, { Component } from 'react';
import './Navigation.css';
import Home from './Home.jsx';
import About from './About.jsx';
import RegisterNow from './RegisterNow.jsx';
import Users from './Users.jsx';
import Articles from './Articles.jsx';
import ContactUs from './ContactUs.jsx';
import LoginControl from './LoginControl.jsx'


class Myfile extends Component{
        constructor(props){
            super(props)
            this.state ={
                home: true,
                about: false,
                RegisterNow: false,
                Users: false,
                Articles: false,
                ContactUs: false,
            }
            this.showHome = this.showHome.bind(this)
            this.showAbout = this.showAbout.bind(this)
            this.showRegisterNow = this.showRegisterNow.bind(this)
            this.showUsers = this.showUsers.bind(this)
            this.showArticles = this.showArticles.bind(this)
            this.showContactUs = this.showContactUs.bind(this)
        }
        showHome(){
            this.setState({
            home: true,
            about: false,
            RegisterNow: false,
            Users: false,
            Articles: false,
            ContactUs: false,
            })
        }
        showAbout(){
            this.setState({
            home: false,
            about: true,
            RegisterNow: false,
            Users: false,
            Articles: false,
            ContactUs: false,
            })
        }
        showRegisterNow(){
            this.setState({
            home: false,
            about: false,
            RegisterNow: true,
            Users: false,
            Articles: false,
            ContactUs: false,
            })
        }
        showUsers(){
            this.setState({
            home: false,
            about: false,
            RegisterNow: false,
            Users: true,
            Articles: false,
            ContactUs: false,
            })
            
        }
        showArticles(){
            this.setState({
                home: false,
                about: false,
                RegisterNow: false,
                Users: false,
                Articles: true,
                ContactUs: false,
            })
        }
        showContactUs(){
            this.setState({
            home: false,
            about: false,
            RegisterNow: false,
            Users: false,
            Articles: false,
            ContactUs: true,
            })
            
        }
    render(){
        return(
            <div>
                <LoginControl />
             <ul>
               <ol>   
                <a  onClick={this.showHome} >Home</a>
                <a  onClick={this.showAbout} >About</a>
                <a  onClick={this.showRegisterNow} >RegisterNow</a>
                <a  onClick={this.showUsers} >Users</a>
                <a  onClick={this.showArticles} >Articles</a>
                <a  onClick={this.showContactUs} >Contact Us</a>
               </ol>
             </ul> 
                { this.state.home ? <Home /> : '' }
                { this.state.about ? <About /> : '' }
                { this.state.RegisterNow ? <RegisterNow /> : '' }
                { this.state.Users ? <Users /> : '' }
                { this.state.Articles ? <Articles /> : '' }
                { this.state.ContactUs ? <ContactUs /> : '' }
                
            </div>
        )
    }
}

export default Myfile;