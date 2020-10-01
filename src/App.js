 import React,{Component} from 'react';
 import {CardList} from './components/card-list/card-list.component';
 import {SearchBox} from './components/search-box/search-box.component';
// import logo from './logo.svg';
import './App.css';



class App extends Component{
  constructor(){
    super();
    this.state={
   monsters: [],
   searchFeild:'',

  };
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}))
  }


  handleChange = e => {
     this.setState({searchFeild: e.target.value});

  };

  
  render() {
    const {monsters , searchFeild} =this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchFeild.toLowerCase())
    );
    return(
      <div className="App">
        <h1>Monsters Relodex</h1>
        <SearchBox 
        type= 'search'
        placeholder='search monsters'
        handleChange={this.handleChange} 
        />
        <CardList monsters={filteredMonsters} />        
    </div>
    );
  }
}




// class declaration/////////////////////////////////////////////////////////
// class App extends Component{
//   constructor(){
//     super();
//     this.state = {
//       string:'hello manjeet'
//     }
//   }
//   render() {
//     return(
//       <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//         {this.state.string}
//         </p>
//       <button onClick = { () => this.setState({ string:'hello simmi'})}>
//         change text
//       </button>
//       </header>
//     </div>
//     );
//   }
// }


//function declartion/////////////////////////////////////////////////////

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           manjeet singh
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
