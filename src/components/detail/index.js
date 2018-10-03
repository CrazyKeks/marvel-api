import React, { Component } from 'react';
import { connect } from 'react-redux'

class Detail extends  Component{
  constructor(props) {
    super(props);
  }
  render(){
    var heroList = this.props.hero;
    console.log(heroList);
    setTimeout(()=>console.log(Object.values(heroList)), 1000);
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