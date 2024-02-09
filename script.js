function submitForm() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  console.log("User:", username);
  console.log("Pass:", password);
  axios.post("http://localhost:3555/login",
    {username, password})
  .then((response) => response.data)
  .then((data) => {
    const jwtToken = data.token;
    localStorage.setItem("jwtToken", jwtToken);
    console.log("Login Workin!", jwtToken);
    window.location.href = "dashboard.html";
  })
}

function getLoginPage(){
  window.location.href = "index.html";
}

function logout() {
  localStorage.removeItem("jwtToken");
  window.location.href = "frontpage.html";
}

function getDashboard() {
  let token = localStorage.getItem("jwtToken");
  console.log(token);
  //this is the endpoint here instead of the other backend cahnge the number to 8080, change the endpoints,  would still work. dashboard endopoint is the only u need to make
  //axios.get("http://localhost:8080/dashboard", {
  axios.get("http://localhost:3555/dashboard", {
    headers: {
      'Authorization' : `Bearer ${token}`
    }
  } )
  .then(res => res.data)
  .then(data => {
    console.log(data.message);
    let userMessage = document.querySelector("#user-message");
    userMessage.innerHTML = data.message;
  })
  .catch(err => {
    window.location.href = "index.html";
  })
}
