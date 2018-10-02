import React, { Component } from 'react';
import { connect } from 'react-redux'

class Detail extends  Component{
  constructor(props) {
    super(props);
  }
  render(){

    const heroList = this.props.hero;
    console.log(Array.from(heroList));
    console.log(heroList);
    return(
      <div className="App">
        <h4>Герои</h4>
        <div className="heroCard">
          <img src={heroList.img} alt=""/>
          <a href="#"><b>{heroList.name}</b></a>
        </div>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    hero: store.hero
  }
}


export default connect(mapStateToProps)(Detail);