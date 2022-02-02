import { Component } from 'react';


class ComposeSalad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foundation: [],
      protein: [],
      extra: [],
      dressing: [],
      price: 0,
    };
   
  
  this.handleOnSubmit = this.handleOnSubmit.bind(this);
  this.handleChangeSelect = this.handleChangeSelect.bind(this);
  this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
  }

  clearState = () => {
    this.setState({
        foundation: [],
        protein: [],
        extra: [],
        dressing: [],
        price: 0,
    });
}

  handleChangeSelect(event){
   this.setState({[event.target.name]: event.target.value,
  price: Number(this.state.price) + Number(this.props.inventory[event.target.value].price)} );
  }

  Uncheck(){
    document.getElementById("extra").checked = false;
  }

  handleChangeCheckbox(event){
    
  const isChecked = event.target.checked;
  if(isChecked){
    this.setState({ 
      extra: [...this.state.extra, event.target.value],
      price: Number(this.state.price) + Number(this.props.inventory[event.target.value].price)
      
     });
  } else{
    const index = this.state.extra.indexOf(event.target.value);
    this.state.extra.splice(index,1);
    this.setState({extra: this.state.extra});
  }
    
      
  
  }
   

   handleOnSubmit(event) {
    event.preventDefault();
        console.log(this.state);
        this.clearState();
         this.Uncheck();
        
        
    
}



  render() {
    let extra = Object.keys(this.props.inventory).filter(name => this.props.inventory[name].extra);
    let foundation = Object.keys(this.props.inventory).filter(name => this.props.inventory[name].foundation);
    let protein = Object.keys(this.props.inventory).filter(name => this.props.inventory[name].protein);
    let dressing = Object.keys(this.props.inventory).filter(name => this.props.inventory[name].dressing);
    console.log(this.state.extra);
    console.log(this.state);
   
   
    return (

  
      <div className="continer col-12">
        <form onSubmit={event => this.handleOnSubmit(event) }noValidate>
      <div className="row h-200 p-5 bg-light border rounded-3">
      
        <h2>Välj innehållet i din sallad</h2>
        Välj en bas:
        <select name="foundation" onChange={event => this.handleChangeSelect(event)} > 
          
        {foundation.map(name => <option value={name} className="col-4">{name}</option>)}
        
        </select>

        Välj protein:
        <select name="protein" onChange={event =>this.handleChangeSelect(event)} > 
          
        {protein.map(name => <option value={name} className="col-4">{name}</option>)}
        
        </select>

        <div>
                    <p>Välj tillbehör</p>
                    {extra.map(name =>
                        <div key={name}>
                            <input name="extra" type="checkbox"  value = {name} onChange={event => this.handleChangeCheckbox(event)} />
                            {name} ({this.props.inventory[name].price}kr)
                  </div>
                    )}
                    </div>
                    
            
          <br>
          </br>
         
          
          Välj en dressing:
        <select name="dressing" onChange={event => this.handleChangeSelect(event)} > 
          
        {dressing.map(name => <option value={name} className="col-4">{name}</option>)}
        
        </select>
        
        <input type="submit" value="Beställ" />
        
      </div>
      </form>
    </div>
    );
  }

}
export default ComposeSalad;