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
