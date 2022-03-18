import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      news: []
    }
  };

  componentDidMount() {
    axios.get('/api/login')
         .then(res => {
            const news = res.data;
            this.setState({ news: news.news });
          })
         .catch(error => console.log(error));
  };

  render() {
    return(
      <ul>
        {this.state.news.map(item => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <h2>{item.ID}</h2>
            <h2>{item.password}</h2>
            <div>{item.type}</div>
          </li>
        ))}
      </ul>
    )
  }
};

export default App;