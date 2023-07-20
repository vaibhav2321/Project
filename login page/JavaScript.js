document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Perform login validation here
    // Example: Check if username and password are correct
  
    if (username === "admin" && password === "password") {
      alert("Login successful!");
      // Redirect to a new page
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
  