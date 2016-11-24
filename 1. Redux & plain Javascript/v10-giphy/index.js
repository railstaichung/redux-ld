
// step 1.2
var store = Redux.createStore(combineReducer, Redux.applyMiddleware(logger, crashReporter, thunk))
// ~end step 1.2
// step 1.3
function render() {
    var state = store.getState()
    document.getElementById('value').innerHTML = state.count.result;
    document.getElementById('value2').innerHTML = state.sum;

    if(state.count.loading){
        document.getElementById('status').innerHTML = "is loading...";
    }else{
         document.getElementById('status').innerHTML = "loaded";
    }
    // image
    document.getElementById('imagesStatus').innerHTML = state.images.loading;
    if(state.images.loading =="loading…"){
         document.getElementById('imagesList').innerHTML = "";
    }
     else if(state.images.loading =="loaded"){
       document.getElementById('imagesList').innerHTML=("<img src='"  + state.images.data.image_url + "' style='height:200px'>");
        //  for(var i=0; i< state.images.data.length; i++){
        //      document.getElementById('imagesList').innerHTML
        //            += ("<img src='"  + state.images.data[i].link + "' style='height:200px'>");
        //  }
     }

};
store.subscribe(render);
// ~end step 1.3
render();
