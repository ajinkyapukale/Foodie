
import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);
      this.state ={
        userInfo:{
            name:"Dummy",
            location:"Default",
          

        }
      };
    //   console.log("child constructor")
      
    }
   
     async componentDidMount(){
        // console.log("Child component did mount")
        //Api call
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        this.setState({
            userInfo:json,
        })
        console.log(json);
    }
    componentDidUpdate(){
        console.log("component Did Update")
    }
    componentWillUnmount(){
         console.log("component will unmount")
    }
    render(){
       
        // console.log("child render")

       
   const{name,location,avatar_url} = this.state.userInfo ;
        return (
        <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location:{location}</h3>
        <img src={avatar_url}/>
        <h4>Contact: @ajinkyapukale</h4>
        </div>
        );
    }
}

export default UserClass ;