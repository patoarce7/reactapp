import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import JSON from './db.json';

//components
import Header from './components/header'
import Newslist from './components/news_list'


class App extends Component {

  state={
    news:JSON
  }
  render(){
    return (
      <div>
        <Header/>
        <Newslist  news={this.state.news}/>
      </div>
      ) 
  }
 
}
  




ReactDOM.render(<App/>,document.querySelector('#root') )

