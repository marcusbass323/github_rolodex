import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
      <div className="profileCard">
      <div>
      <img alt="" src="https://placehold.it/75"/>
      </div>
      <div className="profileDetails">
      <div>Name here...</div>
        <div>Company here...</div>
      </div>
      </div>
    )
  }
}
