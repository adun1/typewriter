const typewriter = function(sentence) {
  if (!sentence) return;
  for (let i = 0; i < sentence.length; i++) {
    setTimeout(function(sentence, index) {
      // print the char here
      process.stdout.write(sentence[index]);
      // setTimeout(run, 50, sentence, i);
    },50 * i, sentence, i); // <= 1s delay to make it noticeable. Can dial it down later.setTimeoutHelper
  }
  setTimeout(function() {
    console.log();
  }, 50 * sentence.length);
};

//note only one function can be run of the can interfere with eachother due to the nature of how timers are sheduled.
typewriter("hello there from lighthouse labs");
// typewriter("cat meows");
// typewriter();