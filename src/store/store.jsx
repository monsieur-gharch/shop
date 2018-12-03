//
import {createStore} from 'redux';
import reducer from '../reducers/reducer';
//

//make store
const initialState ={
        packages:[
                {
        id: 1,
        title:'Java script',
        Price: '14.44',
        Description: 'JS is a high-level interpreted programming language.',
        img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        },
                {
        id: 2,
        title:'React-js',
        Price: '15.44',
        Description: 'React is a frameW JavaScript library for building user interfaces.',
        img:"https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"
        },
                {
        id: 3,
        title:'Node-js',
        Price: '18.44',
        Description: 'Node.js is an environment that executes JavaScript code outside of a browser.',
        img:"https://www.shareicon.net/data/2015/09/03/95029_library_512x512.png"
        },
                {
        id: 4,
        title:'Html5',
        Price: '09.44',
        Description: 'Html used for structuring and presenting content on the World Wide Web',
        img:"http://files.softicons.com/download/system-icons/windows-8-metro-icons-by-dakirby309/png/512x512/Applications/HTML5.png"
        },
        ],
        ////////////
        Basket:[],
    }
//call reducer to set state
export const store = createStore(reducer, initialState);
