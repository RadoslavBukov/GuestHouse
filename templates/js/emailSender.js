(function () {
      const userID = ""; //User ID from EmailJS account //TODO replace it after make EmailJS Account
		  emailjs.init(userID);
		})();

		// Function to validate and send the email
		function sendEmail() {
      const serviceID = ""; //Service ID from EmailJS account //TODO replace it after make EmailJS Account
      const templateID = ""; //Template ID from EmailJS account //TODO replace it after make EmailJS Account


		  let loader = document.getElementById("loader");
		  let name = document.getElementById("name").value;
		  let email = document.getElementById("email").value;
		  let phone = document.getElementById("phone").value;
		  let msg = document.getElementById("message").value;
	  
		  // Validate the form fields
		  if (name === "" || email === "" || phone === "" || msg === "") {
			emptyError();
		  } else {
			loader.style.display = "flex"; // Show the loader
			emailjs.send(serviceID, templateID, {
			  to_name: "Guest House Meraklii",
			  name: name,
			  email: email,
			  phone: phone, //TODO replace it after make EmailJS Account
			  message: msg,
			})
			.then(function() {
			  // Email sent successfully
			  loader.style.display = "none"; // Hide the loader
			  success();
			})
			.catch(function(error) {
			  // Handle errors
			  console.error("EmailJS error:", error);
			  loader.style.display = "none"; // Hide the loader
			  showError();
			});
		  }
		}
	  
		// Function to handle empty form fields
		function emptyError() {
		  Swal.fire({
			icon: "error",
			title: "Oops...",
			text: "Fields cannot be empty!",
		  });
		}
	  
		// Function to show a success message
		function success() {
		  Swal.fire({
			icon: "success",
			title: "Success...",
			text: "Successfully sent message",
		  });
		}
	  
		// Function to show an error message
		function showError() {
		  Swal.fire({
			icon: "error",
			title: "Oops...",
			text: "Something went wrong while sending the message!",
		  });
		}
	  
		// Add an event listener to the form submission
		document.getElementById("contact").addEventListener("submit", function (e) {
		  e.preventDefault(); // Prevent the default form submission
		  sendEmail(); // Call the function to send the email
		});