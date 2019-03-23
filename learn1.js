var getFriend = (e, o) => {
  const a = new XMLHttpRequest();
  (a.onreadystatechange = () => {
    (4 === a.readyState && 200 === a.status && a.open("GET", ""))
  })
}

var getShare = (e, n, o = !1) => {
}