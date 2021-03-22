import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Decode() {
  let { base62Str } = useParams();

  function decodeBase62(str) {
    const map =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var num = 0;
    var multiplier = 1;
    var len = str.length;
    for (var i = 0; i < len; i++) {
      multiplier = Math.pow(62, i);
      let index = map.indexOf(str[str.length - 1]);
      num += index * multiplier;
      str = str.slice(0, -1);
    }
    return num;
  }

  function navigate(url) {
    window.location.replace(url);
    return false;
  }

  useEffect(() => {
    var num = decodeBase62(base62Str);
    let data = { url_id: num };
    fetch("https://us-central1-stord-308319.cloudfunctions.net/GetIndex", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(response);
        // return response.json();
        return response.json();
      })
      .then((data) => {
        if (data['response'] === "null") {
          let url = window.location.href;
          console.log(url.slice(0, url.indexOf('/', 8)))
          alert("It looks like that short link doesn't exist!");
          return navigate(url.slice(0, url.indexOf('/', 8)));
        }
        return navigate(data["response"])
      });
  }, [base62Str]);

  return <></>;
}

export default Decode;
