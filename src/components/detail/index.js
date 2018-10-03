import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getFirstHero } from '../../actions/actionFirstHero'
import md5 from "js-md5";

const privateKey = "35792de2a5e56fb2892f5c34f9c4d1ac4207c14b";
const publicKey = "6b570a4f30c77f6280c0521ed75cfb94";
const ts = Date.now();
const apiKey = md5(Date.now() + privateKey + publicKey);


class Detail extends  Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch('http://gateway.marvel.com/v1/public/characters?ts=' + ts + '&apikey=' + publicKey + '&hash=' + apiKey)
      .then(response=> {
        return response.json();
      })
      .then(res => {
        this.props.dispatch(getFirstHero(res.data.results));
        return;
      })
      .catch(error => alert(error));

  }
  render(){
    console.log(this.props.hero)
    return(
      <div className="App">
        <h4>Герои</h4>
        <div className="heroCard">
          <img src="" alt=""/>
          <a href="#"><b></b></a>
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