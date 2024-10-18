document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const userId = document.getElementById('userId').value;
  const password = document.getElementById('password').value;
  
  // Here you would typically send this data to a server
  // For this example, we'll just log it and show a success message
  console.log('User ID:', userId);
  console.log('Password:', password);
  
  document.getElementById('message').textContent = 'Registration successful!';
  
  // Clear the form
  this.reset();
});