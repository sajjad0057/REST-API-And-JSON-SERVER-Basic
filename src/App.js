import React,{ Component } from "react";
import './App.css';
import  axios from "axios";

class App extends Component{
  componentDidMount(){
    // axios.get('http://localhost:3001/dishes/')    // axios.get() function performing GET request for get data
    // .then(response=>response.data)
    // .then(data=>console.log(data))
    // .catch(error=>console.log(error.message))

    // axios.post('http://localhost:3001/dishes/',{name:"pizza",price: "449"})     //axios.post() function performing POST request for submit data to server.
    // .then(response=>console.log(response))

    // axios.put('http://localhost:3001/dishes/2',{name: "cheese cake", price:"99"})      // axios.put() function performing PUT request for change or update data to server.
    // .then(request=>console.log(request))

    axios.delete('http://localhost:3001/dishes/3')      // axios.delete() function performing DELETE request to delete data from server.
    .then(request=>console.log(request))

  }
  render(){
    return(
      <div>

      </div>
    );
  }

}

export default App;
