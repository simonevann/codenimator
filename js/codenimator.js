var cdmator = new Object();
cdmator.input = ""; //String to animate
cdmator.target = ""; //Container of animation
cdmator.delay = 10; //Delay of typing
cdmator.wait = 1000; //Pause in typewriting
cdmator.setDelay = function(delay){
  cdmator.delay = delay;
}
cdmator.setWait = function(wait){
  cdmator.wait = wait;
}
cdmator.init = function(target){
  cdmator.target = target;
}
cdmator.start = function(input){
  let i = 0;
  let w = input.length;
  let line = 0;
  let color = "";
  let colorClose = "";
  cdmator.clear();
  cdmator.newLine(line);
  let anim = setInterval(function(){
    //Nuew line case
    if (input[i] == '\\'){
      i++;
      if (input[i] == 'n'){
          line++;
          color = "";
          colorClose = "";
          cdmator.newLine(line);
      } else if (input[i] == 't') {
        $('.line' + line).append('<span style="padding-left:15px;"></span>');
      } else if (input[i] == 'x') {
        color = "";
        colorClose = "";
        //$('.line' + line).append('</span>');
      } else if (input[i] == '1') {
        color = "<span class=\"colorFirst\">";
        colorClose = "</span>";
        //$('.line' + line).append('<span class="colorFirst">');
      } else if (input[i] == '2') {
        color = "<span class=\"colorSecond\">";
        colorClose = "</span>";
        //$('.line' + line).append('<span class="colorSecond">');
      } else if (input[i] == '3') {
        color = "<span class=\"colorThird\">";
        colorClose = "</span>";
        //$('.line' + line).append('<span class="colorThird">');
      } else if (input[i] == '4') {
        color = "<span class=\"colorFourth\">";
        colorClose = "</span>";
        //$('.line' + line).append('<span class="colorFourth">');
      } else if (input[i] == '5') {
        color = "<span class=\"colorFiveth\">";
        colorClose = "</span>";
        //$('.line' + line).append('<span class="colorFiveth">');
      } else if (input[i] == '6') {
        color = "<span class=\"colorSixth\">";
        colorClose = "</span>";
        //$('.line' + line).append('<span class="colorSixth">');
      } else if (input[i] == 'b') {
        color = "<span style=\"font-weight:600\">";
        colorClose = "</span>";
        //$('.line' + line).append('<span style="font-weight:600">');
      }
    } else {
    //Add character
    $('.line' + line).append(color + input[i] + colorClose);
    }
    i++;
    if (i >= w){
      clearInterval(anim);
    }
  }, cdmator.delay)
}
cdmator.newLine = function(line){
  $(cdmator.target).append('<div class="terminalLine"><span class="numline">' + line + '</span><span class="codeArea line' + line +'"></span></div>')
}
cdmator.clear = function(){
  $(cdmator.target).empty();
}
