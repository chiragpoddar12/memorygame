(function() {
  var cardNumber = 0;
  var hitCount = 0;
  var chances = 0;
  var selectedCards = [];
  document.getElementById('score').innerHTML = "<h1>"+chances+"</h1>"
  document.getElementById('rating').innerHTML = '<span class="glyphicon glyphicon-star" aria-hidden="true"></span><span class="glyphicon glyphicon-star" aria-hidden="true"></span><span class="glyphicon glyphicon-star" aria-hidden="true"></span>';
  var cards = document.querySelectorAll(".card.effect-click");
  for ( var i  = 0, len = cards.length; i < len; i++ ) {
    var card = cards[i];
    clickListener( card );
  }

  function clickListener(card) {
    card.addEventListener( "click", function() {
      var c = this.classList;
      if(card != selectedCards[0] && c.contains("flipped") == false){
        selectedCards[cardNumber] = card;
        cardNumber++;
      }
      if(!c.contains("flipped")){
        c.add("flipped");
      }
      console.log(selectedCards);
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
            setTimeout(function(){alert("You won in " + chances + " chances")}, 300);
          }
        }
        selectedCards = [];
        cardNumber = 0;
      }
    });
  }

  function reverseCards(selectedCards){
    return function(){
            selectedCards[0].classList.remove("flipped");
            selectedCards[1].classList.remove("flipped");
          }
  }
})();