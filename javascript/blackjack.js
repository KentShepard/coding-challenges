var shuffleDeck = function(deck) {
  var m = deck.length, t, i;

  while (m) {
    i = Math.floor(Math.random() * m--);

    t = deck[m];
    deck[m] = deck[i];
    deck[i] = t;
  }

  return deck;
};

var orderedDeck = function() {
  var suits = [ '♥', '♣', '♠', '♦' ];
  var values = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ];
  var deck = [];

  suits.forEach(function(suit) {
    values.forEach(function(value) {
      deck.push(value + suit);
    });
  });

  return deck;
};

var blackjack = function() {
  var playing = true;
  var newHand = true;
  var deck = shuffleDeck(orderedDeck());
  var dealer, player, hands, string;
  
  while (playing) {
    if (deck.length <= 4) {
      deck = shuffleDeck(orderedDeck());
    }
    if (newHand) {
      hands = dealHand(deck);
      dealer = hands[0];
      player = hands[1];
      deck = hands[2];
      newHand = false;
    }

    string = playerMessage(player);  

    var currentScore = calcHand(player);
    if (currentScore === 21) {
      if (window.confirm(`${string} which is Blackjack! YOU WIN! Would you like to keep playing?`)) {
        newHand = true;
        continue;
      } else {
        playing = false;
      }
    }
    
    if (window.confirm(`${string}. The dealer is showing ${dealer[1]}. Would you like to hit?`)) {
      player.push(deck.pop());
      var score = calcHand(player);
      if (score > 21) {
        if (window.confirm('Sorry! You have busted. The dealer wins. Would you like to keep playing?')) {
          newHand = true;
        } else {
          playing = false;
        }
      } else if (score === 21) {
        if (window.confirm('Blackjack! YOU WIN! Would you like to keep playing?')) {
          newHand = true;
        } else {
          playing = false;
        }
      }
      continue;
    } else {
      var playerScore = calcHand(player);
      var dealerResult = playDealer(dealer, deck);
      deck = dealerResult.deck;
      if (dealerResult.busted) {
        window.alert(`You win! You had ${playerScore} and the dealer busted!`);
      } else if (dealerResult.score < playerScore) {
        window.alert(`You win! You had ${playerScore} and the dealer had ${dealerResult.score}!`);
      } else {
        window.alert(`Sorry! You lose. You had ${playerScore} and the dealer had ${dealerResult.score}.`);
      }
      newHand = true;
    }
    
    if (!window.confirm('Would you like to keep playing?')) {
      playing = false;
    }
  }
};

var dealHand = function(deck) {
  var dealer = [];
  var player = [];
  
  for (var i = 0; i < 2; i++) {
    dealer.push(deck.pop());
    player.push(deck.pop());
  }
  
  return [dealer, player, deck];
};

var playerMessage = function(player) {
  var string = '';
  player.forEach(card => {
    if (card === player[player.length - 1]) {
      if (player.length > 2) {
        string += `, and ${card}`;
      } else {
        string += ` and ${card}`;
      }
    } else if (card === player[0]) {
      string += card;
    } else {
      string += `, ${card}`;
    }
  });
  return `You have ${string}`;
};

var calcHand = function(hand) {
  var total = 0;
  var val;
  hand.forEach(card => {
    if (card.length === 2) {
      val = card.charAt(0);
    } else {
      val = '10';
    }
    if (!Number(val)) {
      if (val === 'A') {
        if ((total + 11) > 21) {
          total += 1;
        } else {
          total += 11;
        }
      } else {
        total += 10;
      }
    } else {
      total += Number(val);
    }
  });
  return total;
};

var playDealer = function(hand, deck) {
  var output;
  var calc = true;
  while (calc) {
    var score = calcHand(hand);
    
    if (score === 21) {
      output = {message: 'The dealer has blackjack', deck: deck, score: score};
      calc = false;
    } else if (score < 17) {
      hand.push(deck.pop());
    } else if (score > 21) {
      output = {message: 'The dealer has busted', deck: deck, score: score, busted: true};
      calc = false;
    } else {
      output = {message: `The dealer has ${score}`, deck: deck, score: score};
      calc = false;
    }
  }
  return output
};

blackjack();