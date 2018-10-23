function collect_gradient_data() {
  let gradient_form = document.getElementById("gradient_form");
  let gradient_data = [];
  for (let i = 0; i < gradient_form.length-1 ; i++) {
    gradient_data.push(gradient_form.elements[i].value);
  }
  console.log(`data: ${gradient_data}`)
  return gradient_data;
}

//  background-image: linear-gradient(45deg, red, blue);

function render_gradient(angle, start_color, end_color) {
  let gradient_value = `linear-gradient(${angle}deg, ${start_color}, ${end_color})`;
  console.log(gradient_value);
  return(gradient_value);
}

function create_gradient() {
  let gradient_data = collect_gradient_data();
  let gradient = render_gradient(gradient_data[2], gradient_data[1], gradient_data[0]);
  document.getElementById("gradient").style.backgroundImage = gradient;
}
