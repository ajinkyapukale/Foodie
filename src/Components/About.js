import UserContext from "../utils/UserContext";
import User from "./user";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
constructor(props){
    super(props) ;
    
}

componentDidMount(){
  
}
    render(){

        return(
            <div>
            <h1>About</h1>
              <div>
                Loggedin User :
                <UserContext.Consumer>
                    {({loggedInUser})=>(
                       <h1 className="text-xl font-bold"> {loggedInUser}</h1>
                    )}
                </UserContext.Consumer>
                </div>
            <h2>This is Namaste React</h2>
           

           <UserClass name={"Ajinkya Pukale (class)"} location={"Pune(class)"}/>
        </div>
        )
    }
}



export default About ;