
import './App.css';
import Header from './component/header'
import {newsCategory} from './news'

import React, { Component } from 'react'
import NewsList from './component/newsList';
import Pagination from './component/pagination';
import Result from './component/result';
import axios from 'axios';


export default class App extends Component {


  state={
    news:[],
    category:newsCategory.technology
  }

  changeCategory =(category)=>{
    this.setState({
    category
    })
  }

componentDidMount(){
  const url= `${process.env.REACT_APP_NEWS_URL}?apiKey=${process.env.REACT_APP_NEWS_API_KEY}&category=technology&pageSize=10`;
  axios.get(url)
  .then( (response)=>{
    this.setState({
     news:response.data.articles,
   })
 })
  .catch((e)=>{
 console.log(e);
 })
console.log(url);
}
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-md-3">
            
              <Header  category={this.state.category}
              changeCategory={this.changeCategory}/>
              <Result/>
              <NewsList news={this.state.news}/> 
              <Pagination/>    
          </div>

        </div>
        
      </div>
    )
  }
}

