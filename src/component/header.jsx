import React, { Component } from 'react';
import {newsCategory} from '../news'

export default class Header extends Component {
    state={
        searchTerm:""
    }
     handlechange=(e)=>{
     this.setState({search:e.target.value})
     }
     handleKeyPress=(e)=>{

     }
     
    render() {
   const {category}=this.props
        return (
            <div className="my-4">
               <h1 className="mb-4" > Block Buster Headline</h1> 
               <input
               type="search"
               className="form-control"
               placeholder="Type Anything & press enter"
               value={this.state.searchTrem}
               onChange={this.onChange}
               onKeyPress={this.handleKeyPress}/>   
                <div className="my-4">
                 {newsCategory 
                 && Object.keys(newsCategory).map(item=>{
                     if(category === newsCategory[item]){
                       return(
                           <button className="btn btn-sm btn-warning mr-2 mb-2">
                               {`#${newsCategory[item]}`}
                           </button>
                       )
                     }
                     return(
                        <button className="btn btn-sm btn-light mr-2 mb-2">
                        {`#${newsCategory[item]}`}
                    </button>
                     )
                 })}
                 </div>          
            </div>
           
        )
    }
}
