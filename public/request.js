export async function postData(url, data) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    // headers: {
    //   "Content-Type": "application/json",
    // },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: data,
  });
  return response;
}
 
export async function getData(url) {
  const response = await fetch(url);
  return response;
}
