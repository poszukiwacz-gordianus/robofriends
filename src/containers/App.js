import React, { Component } from 'react';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {
  //Creating state to comunicate beetweene atoms
  constructor(){
    super()
    this.state = {
      robots: [],
      searchfield: '',
    }
    console.log('1. constructor()');
  }

  //Lifecycle hooks https://reactjs.org/docs/react-component.html

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}));
    console.log('2. componentDidMount()');
  }

  onSearchChange = (event) => {
    //Update state
    this.setState({ searchfield: event.target.value })
  }

  render(){
    const { robots, searchfield } = this.state;
    console.log('3. render()');
    //Filter robots using searchbar
    const filteredRobots = robots.filter( robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    return !robots.length ?
      <h1>Loadnig...</h1> :
      //Interactive searchbar
      //         (props)          (this = App)
      //View updated robots card
      (
        <div className='tc'>
          <h1 className='f2'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots}/>
            </ErrorBoundry>
          </Scroll>
        </div>
      );
  }
}

export default App;
