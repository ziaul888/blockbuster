import logo from './logo.svg';
import './App.css';
import Header from './component/header'
import {newsCategory} from './news'

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-md-3">
              <Header  category={newsCategory.technology}/>     
          </div>

        </div>
        
      </div>
    )
  }
}

