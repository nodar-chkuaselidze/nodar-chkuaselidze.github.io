var canvas = document.getElementById('gradient');
var ctx = canvas.getContext('2d');

var ERROR = document.getElementById('error');
var FROM  = document.getElementById('start');
var TO    = document.getElementById('end');
var STEPS = document.getElementById('steps');
var EQ    = document.getElementById('equation');

[FROM, TO, STEPS, EQ].forEach(function (el) {
  el.onkeyup = draw;
  el.onchange = draw;
});

var Fns = {
  'linear' : linearEquation,
  'quadratic' : quadraticEquation,
  'sqrt' : sqrtEquation
};

draw();

function draw() {
  var steps = parseInt(STEPS.value);
  var from  = FROM.value;
  var to    = TO.value;

  ERROR.innerHTML = '';

  if (!steps) {
    return error('incorrect steps')
  }

  if (steps > 5000) {
    return error('too many steps, sorry');
  }

  if (!hexToRGB(from)) {
    return error('incorrect color From(' + from + ')');
  }

  if (!hexToRGB(to)) {
    return error('incorrect color To(' + to + ')');
  }

  var colors = gradientEq(from, to, steps, Fns[EQ.value]);
  drawLines(colors);
}

function drawLines(colors) {
  ctx.clearRect(0, 0, 500, 500);
  colors.forEach(function (color, i) {
    var r = Math.round(color.r);
    var g = Math.round(color.g);
    var b = Math.round(color.b);

    ctx.fillStyle = "rgb(" + r + ", " + g + ", " + b + ")";
    ctx.fillRect(0, i, 500, 1);
  });
}

function drawDivs(colors) {
  var elem = document.getElementById('container');
  elem.innerHTML = '';

  colors.forEach(function (color, i) {
    var r = Math.round(color.r);
    var g = Math.round(color.g);
    var b = Math.round(color.b);

    var div = '<div style="background-color: rgb(' + r + ',' + g + ',' + b + ')"></div>' ;
    elem.innerHTML += div;
  });
}

function error(err) {
  ERROR.innerHTML = err;
}
