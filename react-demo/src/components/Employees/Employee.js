import React from 'react'

export default function Employee(props){

    return (

        <div class="container">

        <div className="card item">
 
  <div class="card-body">
    <h5 class="card-title">{props.id}</h5>
    <p class="card-text">{props.name}</p>
    <a href="www.google.com" class="btn btn-primary">{props.profile}</a>
    <p>hi</p>
  </div>
</div>
        
        </div>
    )
}