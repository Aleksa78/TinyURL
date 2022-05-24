import React, {Component} from 'react';



class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };
  
  

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/api/url/shortUrl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    
    this.setState({ responseToPost: body.split(`shortUrl":"`).pop().split(`"`)[0] });
  };

 
   render(){  return (
    <><h1>TinyURL</h1>
    <div className="HomePage">
      
      <p>{this.state.response}</p>
      <form onSubmit={this.handleSubmit}>

        <p>
          <strong>Enter URL:</strong>
        </p>
        <input
          type="text"
          value={this.state.post}
          onChange={e => this.setState({ post: e.target.value })} />
        <button type="submit">Submit</button>

      </form>
      <p>
          <strong>Your short URL:</strong>
        </p>
      <p>{this.state.responseToPost}</p>
    </div></>
  
  );}

   
  
};


export default HomePage;