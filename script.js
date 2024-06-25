// init quick play functions

// drawPartialDeck();
// situationCards();
// hitCards();

//------------------------------
// Draw deck
//------------------------------
function drawPartialDeck() {
  $(".cards").on("click", function () {
    var $this = $(this);
    var cardSuitPlaceholder = $this.find(".card").find(".card-suit");

    var sides = 8;
    console.log("the away dice has " + sides + " sides");

    $(".cards .card").hide();

    // random roll

    var result;

    // roll the dice
    function rollCardDice() {
      var dice = {
        sides: sides,
        roll: function () {
          var randomNumber = Math.floor(Math.random() * this.sides) + 1;
          return randomNumber;
        }
      };

      result = dice.roll();
    }

    rollCardDice();

    // show new result

    // show random situation card
    if (result == 1) {
      result = 10;
    } else if (result == 2) {
      result = 10;
    } else if (result == 3) {
      result = 9;
    } else if (result == 4) {
      result = 8;
    } else if (result == 5) {
      result = 7;
    } else if (result == 6) {
      result = 6;
    } else if (result == 7) {
      result = 5;
    } else if (result == 8) {
      result = 4;
    }

    // choose suit
    var suit;
    cardSuit(cardSuitPlaceholder);

    $(".card-" + result).addClass("show");
    $this.find(".card").addClass("no-bg");

    $(".cards .card").fadeIn();
  });
}

function drawFullDeck() {
  var cardSuitPlaceholder = $(".card").find(".card-suit");

  var sides = 13;
  // console.log("the away dice has " + sides + " sides");

  $(".cards .card").hide();

  // random roll

  var result;

  // roll the dice
  function rollCardDice() {
    var dice = {
      sides: sides,
      roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
      }
    };

    result = dice.roll();
  }

  rollCardDice();

  // show new result

  // show random situation card
  if (result == 1) {
    result = 2;
  } else if (result == 2) {
    result = 3;
  } else if (result == 3) {
    result = 4;
  } else if (result == 4) {
    result = 5;
  } else if (result == 5) {
    result = 6;
  } else if (result == 6) {
    result = 7;
  } else if (result == 7) {
    result = 8;
  } else if (result == 8) {
    result = 9;
  } else if (result == 9) {
    result = 10;
  } else if (result == 10) {
    result = "jack";
  } else if (result == 11) {
    result = "queen";
  } else if (result == 12) {
    result = "king";
  } else if (result == 13) {
    result = "ace";
  }

  // choose suit
  var suit;
  cardSuit(cardSuitPlaceholder);

  $(".card-" + result).addClass("show");
  $(".card").addClass("no-bg");

  $(".cards .card").fadeIn();
}

//------------------------------
// Card Suit
//------------------------------

function cardSuit(cardSuitPlaceholder) {
  // roll the dice
  function rollSuitDice() {
    var dice = {
      sides: 8,
      roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
      }
    };

    result = dice.roll();
  }

  rollSuitDice();

  // show new result

  // show random situation card
  if (result == 1 || result == 2) {
    suit = "<span>&spades;</span>";
  } else if (result == 3 || result == 4) {
    suit = '<span style="color:red;">&hearts;</span>';
  } else if (result == 5 || result == 6) {
    suit = "<span>&clubs;</span>";
  } else if (result == 7 || result == 8) {
    suit = '<span style="color:red;">&diams;</span>';
  }

  cardSuitPlaceholder.html(suit);
  // console.log(suit);
}

function cardDraw() {
  $(".situation-cards .show").show();
  $(".card").removeClass("no-bg");
}

$("#draw").on("click", function () {
  $(".card ul li").removeClass("show");

  drawFullDeck();
});