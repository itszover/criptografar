const input = document.querySelector(".input");

const l_button = document.querySelector(".l-button");
const r_button = document.querySelector(".r-button");
const copy_b = document.querySelector(".copy-b");

const main_card = document.querySelector(".main-card");
const text_crypt = document.querySelector(".text-crypt");
const new_txt = document.querySelector(".new-txt");

function encrypt(string) {
  string = string.replace(/e/g, "enter");
  string = string.replace(/i/g, "imes");
  string = string.replace(/a/g, "ai");
  string = string.replace(/o/g, "ober");
  string = string.replace(/u/g, "ufat");

  return string;
}

function decrypt(string) {
  string = string.replace(/enter/g, "e");
  string = string.replace(/imes/g, "i");
  string = string.replace(/ai/g, "a");
  string = string.replace(/ober/g, "o");
  string = string.replace(/ufat/g, "u");

  return string;
}

function copy(string) {
  navigator.clipboard.writeText(string);
}

l_button.addEventListener("click", () => {
  if (input.value.length > 0) {
    main_card.style = "display: none";
    text_crypt.style = "display: flex";

    new_txt.innerHTML = encrypt(input.value);
  } else {
    main_card.style = "display: flex";
    text_crypt.style = "display: none";
  }
});

r_button.addEventListener("click", () => {
  if (input.value.length > 0) {
    main_card.style = "display: none";
    text_crypt.style = "display: flex";
    new_txt.innerHTML = decrypt(input.value);
  } else {
    main_card.style = "display: flex";
    text_crypt.style = "display: none";
  }
});

copy_b.addEventListener("click", () => {
  copy(new_txt.innerHTML);
});