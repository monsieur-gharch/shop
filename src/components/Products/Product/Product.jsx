//Smart component
import React , {Component} from 'react';
//
import './Product.css';
//
import {connect} from 'react-redux';
import {ADD_PACKAGE} from '../../../action/action';





class Product extends Component  {
    


    handler = () => {
        this.props.dispatch({ type: 'ADD_PACKAGE' });
    }



    render(){
        return(
            
            <div className="Container">
                <div className="Card">
              
                  <img src={this.props.img} alt="img" />

                  <h1>{this.props.title}</h1>

                  <p className="Price">${this.props.Price}</p>

                  <p> {this.props.Description} </p>

                  <button onClick={this.handler}>Add to Card</button>
                  
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {return {state : state} };


export default connect(mapStateToProps)(Product);
