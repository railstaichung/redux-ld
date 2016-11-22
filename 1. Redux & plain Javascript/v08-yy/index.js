// middleware
const logger = function(store){
  return function(next) {
    return function(action) {
      console.group('logger')
      console.log('currentState == ', store.getState());
      console.info('next(action) // action == ', action)
      next(action);
      console.log('currentState == ', store.getState());
      console.groupEnd('logger')
    }
  }
}

//second middleware
const crashReporter = function(store){
  return function(next){
    return function(action){
      try{
        next(action);
      }catch(err){
        console.group('crashReporter');
        console.error('error hapen with action == ', action);
        console.error(err);
        console.groupEnd('crashReporter');
      }
    }
  }
}
//third middleware
const thunk = function(store){
  return function(next){
    return function(action){
      if(typeof action === 'function'){
        action(store.dispatch, store.getState());
      }else{
        next(action);
      }
    }
  }
}

// step 1.2
var store = Redux.createStore(combineReducer, Redux.applyMiddleware(logger, crashReporter, thunk))
// ~end step 1.2
// step 1.3

function render() {
    var state = store.getState();
    document.getElementById('value').innerHTML = state.count.result;
    document.getElementById('value2').innerHTML = state.sum;

    
};

store.subscribe(render);
// ~end step 1.3
render();
