export default (state =[], action) => {
    
          switch(action.type) {
              case "ADD_PACKAGE":
                  console.log(state)
                  return state;
                    
              default:
                  return state;
          }
}


