(function () {
      const userID = "QRLLU-ydzoPjEEWcD"; //User ID from EmailJS account
		  emailjs.init(userID);
		})();

		// Function to validate and send the email
		function sendEmail() {
      const serviceID = "service_2zuh4ad"; //Service ID from EmailJS account
      const templateID = "template_nhq5xej"; //Template ID from EmailJS account


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
			  phone: phone,
			  message: msg,
			})
			.then(function() {
			  // Email sent successfully
			  loader.style.display = "none"; // Hide the loader
			  console.log(emailjs);
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
			title: "Уупс...",
			text: "Полетата не могат да са празни!",
		  });
		}
	  
		// Function to show a success message
		function success() {
		  Swal.fire({
			icon: "success",
			title: "Успешно...",
			text: "Съобщението е изпратено успешно!",
		  });
		}
	  
		// Function to show an error message
		function showError() {
		  Swal.fire({
			icon: "error",
			title: "Уупс...",
			text: "Нещо се обърка при изпращане на съобщението!",
		  });
		}
	  
		// Add an event listener to the form submission
		document.getElementById("contact").addEventListener("submit", function (e) {
		  e.preventDefault(); // Prevent the default form submission
		  sendEmail(); // Call the function to send the email
		});