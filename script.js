// init

var gameMode = "medium";

// init quick play functions

// drawPartialDeck();
situationCards();
// hitCards();

//------------------------------
// Situation Cards
//------------------------------

function situationCards() {
  $(".situation-cards .show").show();
  $(".card").removeClass("no-bg");
  $(".card ul li").removeClass("show");

  $(".situation-cards").on("click", function () {
    var $this = $(this);

    $(".situation-cards .card").hide();

    // random roll

    var result;

    // roll the dice
    function rollSituationDice() {
      var dice = {
        sides: 12,
        roll: function () {
          var randomNumber = Math.floor(Math.random() * this.sides) + 1;
          return randomNumber;
        }
      };

      result = dice.roll();
      // console.log(result);
    }

    rollSituationDice();

    // hide prev result

    // remove .show from all cards
    $(".card ul li").removeClass("show");

    // show new result

    // show random situation card
    $(".s-card-" + result).addClass("show");

    // roll for wildcard
    wildcard();

    $(".card").removeClass("no-bg");

    $(".situation-cards .card").fadeIn();
  });
}

// wildcard = choose your batter
function wildcard() {
  var currCard = $(".situation-cards").find(".show");
  // console.log(currCard);

  var wildcardResult;

  // roll the dice
  function rollWildcardDice() {
    var dice = {
      sides: 100,
      roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
      }
    };

    wildcardResult = dice.roll();
    console.log(wildcardResult);
  }

  rollWildcardDice();

  if (wildcardResult < 11) {
    // console.log("wildcard result!");
    $(currCard).find(".wildcard").prop("hidden", false);
    $(currCard).find(".lineup-advance").prop("hidden", true);
  } else if (wildcardResult > 10) {
    $(currCard).find(".wildcard").prop("hidden", true);
    $(currCard).find(".lineup-advance").prop("hidden", false);
  }
}

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

  $(".card-result").removeClass("show");
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
      sides: 100,
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
  if (result > 0 && result <= 25) {
    suit = "<span>&spades;</span>";
  } else if (result > 25 && result <= 50) {
    suit = '<span style="color:red;">&hearts;</span>';
  } else if (result > 50 && result <= 75) {
    suit = "<span>&clubs;</span>";
  } else if (result > 75 && result <= 100) {
    suit = '<span style="color:red;">&diams;</span>';
  }

  cardSuitPlaceholder.html(suit);
  // console.log(suit);
}

$(".mode-select").on("change", function () {
  var mode = $(this).val();
  // console.log(mode);

  if (mode == "Medium Play") {
    gameMode = "medium";
    $(".situation-cards").show();
    $(".cards-wrapper").css({
      "grid-template-columns": "1fr 1fr"
    });
    $("#draw").css({
      "grid-column": "2"
    });
  } else if (mode == "Full Play") {
    gameMode = "full";
    $(".situation-cards").hide();
    $(".cards-wrapper").css({
      "grid-template-columns": "1fr"
    });
    $("#draw").css({
      "grid-column": "1"
    });
  }

  $(".card ul li").removeClass("show");
  $(".card-result").removeClass("show");
  $(".card").removeClass("no-bg");
  // $(".situation-cards .show").show();
});

$("#draw").on("click", function () {
  drawFullDeck();
});