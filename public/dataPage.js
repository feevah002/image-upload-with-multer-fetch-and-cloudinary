import { getData } from "./request.js";

getData("/get-data")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    let UIdata = ''
    data.data.forEach((element) => {
      UIdata += `
        <div>
          <h3>${element.text}</h3>
        </div>

        <div>
          <img src="${element.imageUrl}" class="img-thumbnail w-25">
        </div>
        <hr>
      `;
    });
    document.querySelector('#main').innerHTML = UIdata
  })
  .catch(() => {});
