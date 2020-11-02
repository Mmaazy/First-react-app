import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header'
import NewsList from './components/news_list'
import NewsItem from './components/news_list_item'
import json from './db.json';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      news:json,
      filtered: json
    }

  }

  filterNews(keywords){
    let filtered = this.state.news.filter((item)=>{
      return item.title.indexOf(keywords) >-1;
    })
    this.setState({filtered:filtered})
  }


  render(){
    return(
      <div>
        <Header newsSearch={keywords=>this.filterNews(keywords)}/>
        <NewsList news={this.state.filtered}/>
        <NewsItem/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));