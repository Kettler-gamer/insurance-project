const mapFrame = document.getElementById("mapframe");

function onClick(event) {
  const target = event.target;

  switch (target.textContent) {
    case "Expand":
      mapFrame.style = "z-index:10;";
      target.textContent = "Minimize";
      break;
    case "Minimize":
      mapFrame.style = "z-index:0;";
      target.textContent = "Expand";
      break;
  }
}
