
var decrease = function(){
    return { type: 'DECREMENT' };
}

var increase = function(){
    return { type: 'INCREMENT' };
}

var getSum = function(a, b){
    return { type: 'SUM', a:a, b:b };
}

// ASYNC
var asyncIncrease = function(dispatch, state){
    dispatch({type:"INCREMENT_LOADING"});
    _fakeServerApi.increaseCount(state.count.result,
        function(data){
            dispatch({ type: 'INCREMENT' });
        }
    );
}

var getRandomImages = function(dispatch, state){
  dispatch({ type: 'IMAGES_LOADING' });
  var imgurAPI = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=american+psycho";
  $.getJSON(imgurAPI).done(function(data){
      dispatch({ type: 'IMAGES', data:data.data});
  })
}
