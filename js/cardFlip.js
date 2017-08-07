var timer;
var started = false;
var totalSec = 0;
var cardNumber = 0;
var hitCount = 0;
var chances = 0;
var cards = document.querySelectorAll(".card.effect-click");
var selectedCards = [];
var sec = 0;
var min = 0;
var time = 0 + " min "+0 + " sec";
document.getElementById("timer").innerHTML = "<h1>" +time+"</h1>";
document.getElementById('score').innerHTML = "<h1>"+chances+"</h1>";
document.getElementById('rating').innerHTML = '<span class="glyphicon glyphicon-star" aria-hidden="true"></span><span class="glyphicon glyphicon-star" aria-hidden="true"></span><span class="glyphicon glyphicon-star" aria-hidden="true"></span>';

(function() {
  for ( var i  = 0, len = cards.length; i < len; i++ ) {
    var card = cards[i];
    clickListener( card );
  }
})();

function reverseCards(selectedCards){
    return function(){
            selectedCards[0].classList.remove("flipped");
            selectedCards[1].classList.remove("flipped");
          }
  }

function clickListener(card) {
    card.addEventListener( "click", function() {
      if(started == false){

        // Update the count down every 1 second
        timer = setInterval(function() {
        totalSec++;
        sec = totalSec % 60;
        min = parseInt(totalSec / 60);
        time = min + " min "+sec + " sec";

        // Display the result in the element with id=
        document.getElementById("timer").innerHTML = "<h1>" +time+"</h1>";
        }, 1000);
      }
      started = true;
      var c = this.classList;
      if(card != selectedCards[0] && c.contains("flipped") == false){
        selectedCards[cardNumber] = card;
        cardNumber++;
      }
      if(!c.contains("flipped")){
        c.add("flipped");
      }
      // console.log(selectedCards);
      if(cardNumber == 2){
        chances++;
        if(chances<10){
          //3 stars
          document.getElementById('rating').innerHTML = '<span class="glyphicon glyphicon-star" aria-hidden="true"></span><span class="glyphicon glyphicon-star" aria-hidden="true"></span><span class="glyphicon glyphicon-star" aria-hidden="true"></span>';
        }else if(chances<14){
          //2 stars
          document.getElementById('rating').innerHTML = '<span class="glyphicon glyphicon-star" aria-hidden="true"></span><span class="glyphicon glyphicon-star" aria-hidden="true"></span>';
        }else{
          //1 star
          document.getElementById('rating').innerHTML = '<span class="glyphicon glyphicon-star" aria-hidden="true"></span>';
        }
        document.getElementById('score').innerHTML = "<h1>"+chances+"</h1>"
        if(selectedCards[1].getElementsByTagName('img')[0].src != selectedCards[0].getElementsByTagName('img')[0].src){
          setTimeout((reverseCards)(selectedCards),500);
        }else{
          hitCount++;
          if(hitCount == 8){
            clearInterval(timer);
            document.getElementById("modalScore").innerHTML = "<h3>You won in "+ chances +"</h3>";
            document.getElementById("modalTime").innerHTML = "<h3>Time Taken : " + time + "</h3>";
            $('#myModal').modal('show');
          }
        }
        selectedCards = [];
        cardNumber = 0;
      }
    });
  }

function onReset(){
  clearInterval(timer);
  time = 0 + " min "+0 + " sec";
  document.getElementById("timer").innerHTML = "<h1>"+time+"</h1>";
  document.getElementById("score").innerHTML = "<h1>"+0+"</h1>";
  document.getElementById('rating').innerHTML = '<span class="glyphicon glyphicon-star" aria-hidden="true"></span><span class="glyphicon glyphicon-star" aria-hidden="true"></span><span class="glyphicon glyphicon-star" aria-hidden="true"></span>';
  started = false;
  totalSec = 0;
  cardNumber = 0;
  hitCount = 0;
  chances = 0;
  console.log(cards)
  $("#myModal").modal('hide');
  for ( var i  = 0, len = cards.length; i < len; i++ ) {
    var card = cards[i];
    if(card.classList.contains("flipped")){
      card.classList.remove("flipped");
    }
  }
  document.getElementById("memory").innerHTML = "";
  var randInt;
  var cardNumber = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
  for(var i=1; i<=16;){
    randInt = Math.floor(Math.random() * (8)) + 1
    if(cardNumber.includes(randInt)){
      this.gameHTML = '<div class="col-xs-3 card effect-click"><div class="card-front"><h2>Click</h2></div><div class="card-back"><img class="img-responsive" src="imgs/img'+((randInt%8) +1)+'.png"/></div></div>'
      this.memory = document.getElementById("memory");
      this.gameContents = document.createElement("div");
      this.gameContents.innerHTML = this.gameHTML;
      this.memory.appendChild(this.gameContents);
      cardNumber[cardNumber.indexOf(randInt)] = 0;
      i++;
    }
  }
  cards = document.querySelectorAll(".card.effect-click");
  for ( var i  = 0, len = cards.length; i < len; i++ ) {
    var card = cards[i];
    clickListener( card );
  }
}