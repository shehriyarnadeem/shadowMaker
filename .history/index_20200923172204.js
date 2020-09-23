function shadowMaker(options) {
  let images = document.querySelectorAll(".shadowMaker");

  if (options.shadow_type === "hard") {
    options.shadow_type = "0px";
  } else {
    options.shadow_type = "15px";
  }

  images.forEach((image) => {
    image.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,0.12)`;

    if (options.padding) {
      images.style.padding = "1rem";
    }
  });
}

module.exports.shadowMaker = shadowMaker;
