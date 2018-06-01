(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
  const drawCanvas = function() {
    const canvas = document.querySelector('.canvas');

    for (let i = 0; i < 1715; i++) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      canvas.appendChild(pixel);
    }
  }
  window.addEventListener("DOMContentLoaded", () => {
    const pixels = Array.from(document.querySelectorAll(".pixel"));

    const colorPicked = document.querySelector(".colorPicker");
    //onClick sets the background of the element to picked color value
    const onClickAdd = (event) => {
      event.target.style.backgroundColor = colorPicked.value;
      console.log(colorPicked.value)
    }
    const onClickRemove = (event) => {
      event.target.style.backgroundColor = "";
    }
    // Loops through each pixel and assigns changes color on each click.
    pixels.forEach((pixel) => {
      pixel.addEventListener("click", (event) => {
        if (event.target.style.backgroundColor === "") {
          onClickAdd(event);
        } else {
          onClickRemove(event);
        }
      })
    });
  });
  drawCanvas();

},{}]},{},[1]);
