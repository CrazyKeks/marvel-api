import React, { Component } from 'react';
import { connect } from 'react-redux'
import md5 from "js-md5";

const privateKey = "35792de2a5e56fb2892f5c34f9c4d1ac4207c14b";
const publicKey = "6b570a4f30c77f6280c0521ed75cfb94";
const ts = Date.now();
const apiKey = md5(Date.now() + privateKey + publicKey);
const urlMarvel = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${apiKey}`;

class Detail extends  Component{
  constructor(props) {
    super(props);
    this.state = {
      heroes: [],
      valueInput : '',
    };
    this.searchHero = this.searchHero.bind(this);
  }

  componentWillMount() {
    return fetch(urlMarvel + '&nameStartsWith=D')
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

  searchHero(event) {
    this.setState({valueInput: event.target.value});
    fetch(urlMarvel + `&nameStartsWith=${this.state.valueInput}`)
      .then(respone=>respone.json())
      .then(res=>{
        res.data.results.map(hero=>{
          let div = document.createElement("div");
          let text = document.createTextNode(hero.name);
          div.appendChild(text);
          this._inputEl.append(div);
        })
      })
      .catch(error=>console.log(error));
  }

  getInputRef = (node) => {this._inputEl = node}
  render(){
    return(
      <div className="card-list" ref={this.getInputRef}>
        <div className="wrap-search">
          <label htmlFor="">Поиск персонажа:</label>
          <input type="text" className="input-search" onInput={this.searchHero}/>
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