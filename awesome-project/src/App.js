import React from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends NavBar {
  state = { 
    counters:[
        {id:1, value:50},
        {id:2, value:50},
        {id:3, value:50},
        {id:4, value:50},
        {id:5, value:50},
        {id:6, value:50},
        {id:7, value:50},
        {id:8, value:50}
    ]
 };
 handleIncrement = counter => {
     const counters = [...this.state.counters];
     const index =counters.indexOf(counter);
     counter[index] = {...counter};
     counters[index].value++;
     this.setState({counters});
 };
 handleReset = () =>{
    const counters = this.state.counters.map(c => {
        c.value = 0 ; 
        return c;
    });
        this.setState({ counters });
}

handleDecrncrement = counter => {
  const counters = [...this.state.counters];
  const index =counters.indexOf(counter);
  counter[index] = {...counter};
  counters[index].value--;
  this.setState({counters});
};
 
 handleDelete = counterId =>{
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState( {counters });


 };
  render(){
  return (
    <React.Fragment>
         <NavBar
         totalCounters={this.state.counters.filter(c=> c.value>0).length} />
   <main className="container">
     <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onDeclick={this.handleDecrncrement}

            />

   </main>
    </React.Fragment>

  );
 }
}
export default App;
