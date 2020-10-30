import React, { Component } from 'react'

export default class Pagination extends Component {
  
    state={
        isEditable: false
    }

    render() {
        return (
            <div className="d-flex my-5 align-items-center">
                <button className="btn btn-warning"> Previous</button>
                
                <div className="flex-grow-1 text-center">
                    {this.state.isEditable?(
                        <input
                        type='number'
                        value='1'
                        />
                    ):(
                        <p
                        style={{userSelect:'none',lineHeight:'1.1'
                    }} title='double tap tp jump page'
                    onDoubleClick={()=>{
                        this.setState({isEditable:!this.state.isEditable})
                    }}
                    >
                        {0}of {100}
                        <br />
                        <small>Double Tap tp edit</small>
                    </p>
                    )}
                </div>
                <button className="btn btn-warning ml-auto"> Next</button>
            </div>
        )
    }
}
