import React,{Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.components';
import {SearchBox} from './components/search-box/search-box.compoments'
class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({monsters:user}))
  }

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return(
      <div className='App'>
      <h1> Monster Rolodex </h1>
        <SearchBox
        placeholder='search monster'
        handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}





export default App;
