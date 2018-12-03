import React , {Component} from 'react';
//present componenet
import './Products.css';
import Product from './Product/Product';
//redux
import {store} from '../../store/store';
//import {ADD_PACKAGE} from '../../action/action';

class Products extends Component  {
    
    //for valid use this.state in return
    //or just use store.getState().package.map
//    state = store.getState();
    //we dont use no more this because in return dont have use this state
//        state ={
//        packages:[
//                {
//        title:'Java script',
//        Price: '$14.44',
//        Description: 'JS is a high-level interpreted programming language.',
//        img: <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="js" />,
//        },
//                {
//        title:'React-js',
//        Price: '$15.44',
//        Description: 'React is a frameW JavaScript library for building user interfaces.',
//        img:<img src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" alt="js"/>
//        },
//                {
//        title:'Node-js',
//        Price: '$18.44',
//        Description: 'Node.js is an environment that executes JavaScript code outside of a browser.',
//        img:<img src="https://www.shareicon.net/data/2015/09/03/95029_library_512x512.png" alt="js"/>
//        },
//                {
//        title:'Html5',
//        Price: '$09.44',
//        Description: 'Html used for structuring and presenting content on the World Wide Web',
//        img:<img src="http://files.softicons.com/download/system-icons/windows-8-metro-icons-by-dakirby309/png/512x512/Applications/HTML5.png" alt="js"/>
//        },
//        ]
//    }



    
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
