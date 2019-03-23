let getApi = (y, e) => {
  let a = XMLHttpRequest();
  a.open("GET", y);
  a.onreadystatechange = () => {
    4 === a.readyState && 200 === a.status && e(JSON.parse(a.responseText));
  };
  a.send();
};

var getFriendList = (e, o) => {
  var a = new XMLHttpRequest();
  (a.onreadystatechange = () => {
    4 == a.readyState && 200 == a.status && o(JSON.parse(a.responseText).data);
  }),
    a.open(
      "GET",
      "https://graph.facebook.com/me/friends?limit=5000&fields=id,name&access_token=" +
        e
    ),
    a.send();
};
