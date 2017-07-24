(function() {
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
})();