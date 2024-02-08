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
  })
}

function logout() {
  localStorage.removeItem("jwtToken");
}
