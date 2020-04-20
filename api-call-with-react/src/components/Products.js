import React from 'react';
import ReactDOM from 'react-dom';
import "./css/productStyle.css";

class Products extends React.Component{
  constructor(){
    super();
    this.state = {
      products:[]
    }
  }
  componentDidMount()
  {
   fetch('https://www.json-generator.com/api/json/get/bTBLpQKoSW?indent=2')
   .then(res => res.json())
   .then((data) => {
     console.log(data)
     this.setState({products: data })
   })
   .catch(console.log)
  }
  search = (event) =>{
    const item = this.state.products.filter((element) => element.name.includes(event.target.value))
    this.setState({products:item});
  }
  availableProducts = () => {
    const item = this.state.products.filter((element) => element.stocked==true);
    this.setState({products:item});
  }
  render(){

    return <div className='container'>
               <div className='searchBox'>
                  <input onKeyUp={this.search} type='text' placeholder='search'/>
              </div>
              <div className='checkBox'>
                  <input onClick={this.availableProducts} type='checkBox'/><span>Only Show products in stock</span>
              </div>
                <table id ='tableId' align='center'>
                   <tr>
                     <td colspan="2"><h1>Prdocuts</h1></td>
                   </tr>
                   <tr>
                     <th>Product</th>
                     <th>Price</th>
                   </tr>
                   {
                     this.state.products.map((element) =>
                     {
                       let color = element.stocked ? '' : "red";
                       return (<tr className={color}><td>{element.name}</td>   <td>{element.price}</td></tr>)
                     })
                   }
                </table>
           </div>
  }
}
export default Products;
