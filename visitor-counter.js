function visitorCounter(){
  fetch("https://4oxr6i6qpa.execute-api.us-east-1.amazonaws.com/visitorCounter")
    .then(response => response.text())
    .then((body) => {
        document.getElementById("visitor-counter").innerHTML=body
    })
}