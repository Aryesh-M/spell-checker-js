var check =  document.querySelector('#check');
var div = document.querySelector('#text');
var reset = document.querySelector('#reset');

var dictionary = 'https://rawcdn.githack.com/maheshmurag/bjspell/master/dictionary.js/en_US.js';
var lang = BJSpell(dictionary, function() {
  check.disabled = false;
});

check.addEventListener('click', function() {
    var text = div.innerText;
    var words = text.split(/\s/);
    
    div.innerHTML = words.map(function(word) {
       var correct = lang.check(word);
       var className = correct ? 'correct' : 'misspelled';
       var title = correct 
        ? 'Correct spelling' 
        : `Did you mean ${lang.suggest(word, 5).join(', ')}?`;
        if(correct) {
          return `<span title="${title}" class="${className}">${word}</span>`;
        }else {
          return `<span title="${title}" class="${className}" style="text-decoration: underline;text-decoration-color: red;color: red;">${word}</span>`;
        }        
     }).join(' ');
  });

  reset.addEventListener('click', function() {
    div.innerText = div.innerText;
  });