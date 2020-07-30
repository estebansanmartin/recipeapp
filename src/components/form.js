import React from "react"
import '../app.sass'

function Form() {
    return (
        <form className="field">
  <div className="control">
    <input className="input" type="text" placeholder="Search Food" autoComplete="off"/>
  </div>

  <div className="control">
  <button className="button is-primary" type="text" value="search" >Search</button>
</div>
</form>
        /*<div className="App">
        <form className="searchForm">
    <input className="input" type="text" placeholder="Search Food" autoComplete="off" />
    <input type="submit" value="search" />
        </form>
        </div>*/
    );
}

export default Form