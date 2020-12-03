import React,{ Component } from "react";
import './App.css';
import  axios from "axios";

class App extends Component{
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response=>response.data)
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
