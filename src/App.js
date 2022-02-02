import 'bootstrap/dist/css/bootstrap.css';
import { Component } from 'react';
import inventory from './inventory.ES6';
import ComposeSalad from './ComposeSalad';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      order: []
    };
  }
  submitOrder(event){
    this.setState({
order: [...this.state.order, 
  
]
    });
  }
  render(){

  
  return (
   
    <div className="container py-4">
    <header className="pb-3 mb-4 border-bottom">
      <span className="fs-4">Min egen salladsbar</span>
    </header>

    <div className="continer col-12">
    
      <div className="row h-200 p-5 bg-light border rounded-3">
      <ComposeSalad inventory={inventory} />
      

      
      </div>
    </div>

    <footer className="pt-3 mt-4 text-muted border-top">
      EDAF90 - webprogrammering
    </footer>
  </div>
  );
  }
}
export default App;

/* Reflection 1: 
Reflection 2:  
Reflection 3: 
Reflection 4: Varje gång state ändras.
Reflection 5: 
Reflection 6:
Reflection 7:

*/