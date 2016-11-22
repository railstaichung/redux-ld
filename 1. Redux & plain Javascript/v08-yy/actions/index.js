
var decrease = function(){
    return { type: 'DECREMENT' };
}

var increase = function(){
    return { type: 'INCREMENT' };
}

var getSum = function(a, b){
    return { type: 'SUM', a:a, b:b };
}

//ASYNC
var asyncIncrease = function(){
  _fakeServerApi.increaseCount(store.getState().count.result,
    function(data){
      store.dispatch({type: 'INCREMENT'})
    }
);
}
