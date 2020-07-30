import React, { useState } from 'react';
import './app.sass'
import Axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import Recipe from './components/Recipe';
import Logo from './logo.png'
import Alert from './components/Alert'

import 'react-bulma-components/dist/react-bulma-components.min.css'

function App() {

  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const APP_ID = "069bf1cc";
  const APP_KEY = "159cd3e0841d92f2af27e4cf4b7281b4";
  const url =`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async() => {
    if(query !== "") {
      const result = await Axios.get(url);
    if(!result.data.more) {
      return setAlert("No food with such name")
    }
    setRecipes(result.data.hits);
    console.log(result);
    setQuery("");
    setAlert("");
    } else {
      setAlert('Please fill the form');
    }
  }

  const onChange = e => {
    setQuery(e.target.value);
  }
  
  const onSubmit = e => {
    e.preventDefault();
    getData();
  }

  return (
    <div className="body">
    <div className="app">
      
  <section className="section">

    <div className="has-text-centeredcontainer">
      <img onClick={getData} src={Logo} alt="recipe"/>
      <form className="field mgh-large" onSubmit={onSubmit}>
        {alert !== "" && <Alert alert={alert} />}
        <div className="control">
          <input 
          className="input" 
          type="text" 
          placeholder="Search Food" 
          autoComplete="off"
          onChange={onChange}
          value={query}
          />
        </div>
        <div className="control">
          <button className="button is-primary" type="text" value="search" >Search</button>
        </div>
      </form>
      </div>

  </section>

   
      <div className="sectionGrid">
        {recipes !== [] &&
          recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
      </div>

    </div>

    <div style={{backgroundColor:"hsl(171, 100%, 96%)", padding:"20px", fontFamily:"monospace", color:"hsl(171, 100%, 41%)"}}>
      <p className="has-text-centered">&copy; {new Date().getFullYear()} Sviluppato per <a target="_blank" rel="noopener noreferrer" href="https://estebansanmartin.it">Esteban San Martin</a></p>
    </div>

    </div>
  )
}

export default App
