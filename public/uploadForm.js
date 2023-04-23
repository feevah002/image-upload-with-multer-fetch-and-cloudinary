const submitBtn = document.querySelector("#submit");
const image = document.querySelector("#image");
const text = document.querySelector("#text");
const formData = new FormData();
import { postData } from "./request.js";

function clearFormObj() {
  formData.delete("image");
  formData.delete("text");
}

image.onchange = (e) => {
  formData.delete("image");
  formData.append("image", e.target.files[0]);
};

submitBtn.addEventListener("click", (e) => {
  // creating form data
  formData.delete("text");
  formData.append("text", text.value);

  // posting data
  postData("/upload-data", formData)
    .then((res) => {
      UIresponse("Data sent and uploaded successfully", "green");
    })
    .catch((err) => {
      UIresponse("Something went wrong", "red");
    });

  e.preventDefault();
});

function UIresponse(message, color) {
  document.querySelector("#message").innerHTML = message;
  document.querySelector("#message").style.color = color;

  setTimeout(() => {
    document.querySelector("#message").innerHTML = "";
    document.querySelector("#message").style.color = "black";
  }, 3000);
}
