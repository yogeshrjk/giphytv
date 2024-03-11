var button = document.querySelector(".button");

button.addEventListener("click", function(){
  window.location.reload()
}
);



//Giphy API

var item = prompt("Search your gif here");
var query = item.split(' ').join('+')
  

  var url = "https://api.giphy.com/v1/gifs/search?q="+ query + "&api_key=ZZvgfdi4cOKxEu6jIapo44P94iVPpAj6";




// AJAX Request
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', url );
GiphyAJAXCall.send();


GiphyAJAXCall.addEventListener('load', function(e) {
var data = e.target.response
pushToDom(data)
});




// gif preview

function pushToDom(input) {
  var response = JSON.parse(input);
  var f = document.querySelector(".container");
 
 
    
    var imageUrls = response.data;
    var i;
    
     for(i=0; i < 20; i++){
      setTimeout(function(){
      var src = imageUrls[i].images.fixed_height.url;

        clear(f);
        f.innerHTML += "<img src=\"" + src + "\" class=\"image\">";
      
        i++;
        
  
      }, 3000*i);
     }
    
}

function clear(item){
  item.innerHTML = "";
}
