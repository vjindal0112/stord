
export function encodeBase62(base10Num) {
  const map =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var base62Num = "";
  while (base10Num > 0) {
    let leftover = base10Num % 62;
    base62Num = map[leftover] + base62Num;
    base10Num = Math.floor(base10Num / 62);
  }
  return base62Num;
}

export function decodeBase62(str) {
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

function checkValid(url) {
  if (url.startsWith("https://") || url.startsWith("http://")) {
    return true;
  } else {
    return false;
  }
}

export async function getSerial(url, setLoading) {
  if (!checkValid(url)) {
    alert("Please enter a valid url with http(s)://");
    return null;
  }
  setLoading(true);
  var data = {
    url: url,
  };
  return fetch(
    "https://us-central1-stord-308319.cloudfunctions.net/ReturnShortURL/",
    {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )
    .then((response) => {
      // return response.json();
      return response.json();
    })
    .then((data) => {
      setLoading(false);
      return data;
    });
}

export function getIndex(base62Str) {
  var num = decodeBase62(base62Str);
  let data = { url_id: num };
  return fetch("https://us-central1-stord-308319.cloudfunctions.net/GetIndex", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      // return response.json();
      return response.json();
    })
    .then((data) => {
      if (data['response'] === "null") {
        let url = window.location.href;
        alert("It looks like that short link doesn't exist!");
        return url.slice(0, url.indexOf('/', 8));
      }
      return data["response"];
    });
}