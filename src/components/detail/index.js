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
    this.state = {
      heroes: []
    }
  }
  componentWillMount() {
    return fetch('http://gateway.marvel.com/v1/public/characters?ts=' + ts + '&apikey=' + publicKey + '&hash=' + apiKey)
      .then(response=> {
        return response.json();
      })
      .then(res => {
        this.setState({
          'heroes': res.data.results
        });
        return res.data.results;
      })
      .catch(error => alert(error));
  }

  render(){
    return(
      <div className="card-list">
        <div className="wrap-search">
          <label htmlFor="">Поиск персонажа:</label>
          <input type="text" className="input-search"/>
        </div>
        <h4>Герои</h4>
        {
          this.state.heroes.map(hero => {
            return (
            <div className="heroCard" key={hero.id}>
              <img src={hero.thumbnail.path + '.' + hero.thumbnail.extension} alt=""/>
              <a href="#"><b>{hero.name}</b></a>
            </div>
            )
          })
        }


      </div>
    )
  }
}

const mapStateToProps = store => {
  return {}
}


export default connect(mapStateToProps)(Detail);