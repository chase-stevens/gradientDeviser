let current_gradient = {
  angle: 45,
  start_color: "#ff0000",
  end_color: "#0000ff",
};

document.onload = set_gradient_elements(render_gradient(
  current_gradient.angle,
  current_gradient.start_color,
  current_gradient.end_color
));

function collect_gradient_data() {
  let gradient_form = document.getElementById("gradient_form");
  current_gradient.angle = gradient_form[2].value;
  current_gradient.start_color = gradient_form[0].value;
  current_gradient.end_color = gradient_form[1].value;
}

//  background-image: linear-gradient(45deg, red, blue);

function render_gradient(angle, start_color, end_color) {
  let gradient_value = `linear-gradient(${angle}deg, ${start_color}, ${end_color})`;
  return(gradient_value);
}

function set_gradient_elements(gradient) {
  document.getElementById("gradient").style.backgroundImage = gradient;
  document.getElementById("gradient-css-code").innerHTML = "background-image: " + gradient + ";";
}

function create_gradient(){
  let els = collect_gradient_data();
  let gradient_rule = render_gradient(
    current_gradient.angle,
    current_gradient.start_color,
    current_gradient.end_color
  );
  set_gradient_elements(gradient_rule);
  console.log(current_gradient);
}

function load_gradient_preset(gradient_element){
  // loading gradient
  let el = document.getElementById(gradient_element);
  let style = window.getComputedStyle(el);
  let gradient = style.getPropertyValue('background-image');
  // rendering gradient to page elements
  console.log(gradient);

  parse_gradient(gradient);
}

/*
function parse_gradient(gradient_rule){
  let regex_rule = /linear-gradient\((.*)deg, (#.*|[rgb].*), (#.*|[rgb].*)\)/;
  let parse_gradient = gradient_rule.match(regex_rule);
  let x = parse_gradient[1];
  let y = parse_gradient[2];
  let z = parse_gradient[3];
  document.getElementById("angle").value = x;
  document.getElementById("start_color").value = y;
  document.getElementById("end_color").value = z;
  //return gradient_elements;
}
*/
function copy_to_clipboard(){
  /* Get the text field */
  let copyText = document.getElementById("gradient-css-code").innerHTML;

  const el = document.createElement('textarea');
  el.value = copyText;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  /* Alert the copied text */
  alert("Copied the text: " + copyText);
}
