
import './App.css';
import Header from './component/header'
import {newsCategory} from './news'

import React, { Component } from 'react'
import NewsList from './component/newsList';
import Pagination from './component/pagination';
import Result from './component/result';

const fakeNews =[
  {
    title:"Title",
    content:'Content',
    url:'https://linktonews.com',
    urlToImage:'https://linktonews.com',
    publishedAt:'published date and time',
    source:{
      name:'CNN'
    },
  },
  {
    title:"Title",
    content:'Content',
    url:'https://linktonews.com',
    urlToImage:'https://linktonews.com',
    publishedAt:'published date and time',
    source:{
      name:'CNN'
    },
  }
]

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-md-3">
            
              <Header  category={newsCategory.technology}/>
              <Result/>
              <NewsList news={fakeNews}/> 
              <Pagination/>    
          </div>

        </div>
        
      </div>
    )
  }
}

