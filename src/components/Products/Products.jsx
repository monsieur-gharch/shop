import React , {Component} from 'react';
//present componenet
import './Products.css';
import Product from './Product/Product';
//redux
import {store} from '../../store/store';

class Products extends Component  {



    
    render(){
        return(
            
            <div className="Cards">

					{store.getState().packages.map((_package,id) => {
						return (
							<Product
								key={id}
								title={_package.title}
								Price={_package.Price}
								Description={_package.Description}
								img={_package.img}

							/>
                            

						);
					})}

				</div>


             
        );
    }
}



export default Products;
