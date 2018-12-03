//presentational component
import React , {Component} from 'react';
//
import './Product.css';


class Product extends Component  {
    
    render(){
        return(
            
            <div className="Container">
                <div className="Card">
              
                  <img src={this.props.img} alt="img" />

                  <h1>{this.props.title}</h1>

                  <p className="Price">${this.props.Price}</p>

                  <p> {this.props.Description}</p>

                  <button>Add to Card</button>
                  
            </div>
            </div>
        );
    }
}

export default Product;
