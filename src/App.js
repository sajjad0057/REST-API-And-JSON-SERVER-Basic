import React,{ Component } from "react";
import './App.css';
import  fetch from "cross-fetch";

class App extends Component{
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then(data=>console.log(data))

  }
  render(){
    return(
      <div>

      </div>
    );
  }

}

export default App;
