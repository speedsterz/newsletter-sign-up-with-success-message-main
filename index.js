const $ = document;
const btn = $.getElementsByTagName("button")[0];
const input = $.getElementsByTagName("input")[0];
const validationMessage = $.getElementById("validation");

function btnClick() {
  if (
    !input.value
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    input.classList.add("bg-red-100", "border-red-500", "myinput");
    input.placeholder = "ash#loremcompany.com";
    validationMessage.classList.remove("hidden");
    input.value = "";
  } else {
    $.getElementById("step1").classList.add("hidden");
    $.getElementById("step2").classList.remove("hidden");
    $.getElementById("email").innerHTML = input.value;
    input.value = "";
  }
}
function change() {
  input.classList.remove("bg-red-100", "border-red-500", "myinput");
  input.placeholder = "email@company.com";
  validationMessage.classList.add("hidden");
}

function btnClick2() {
  $.getElementById("step2").classList.add("hidden");
  $.getElementById("step1").classList.remove("hidden");
}
