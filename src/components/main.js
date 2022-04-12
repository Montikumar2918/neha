export function slickheightequal () {
    let herovideo = document.getElementsByClassName("slick-height-equal");
    for (let index = 0; index < herovideo.length; index++) {
      let element = herovideo[index];
      var slide = element.getElementsByClassName("slick-slide");
      for (let index = 0; index < slide.length; index++) {
        let element1 = slide[index];
        // console.log(element1);
        element1.getElementsByTagName("div")[0].classList.add("h-100");
      }
    }
  };
