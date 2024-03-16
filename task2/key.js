document.getElementById('submit').addEventListener('click', function(e) {

  e.preventDefault();
  console.log(e);

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const phoneNumber = document.getElementById('phoneNumber').value;

  const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber
  };

  console.log(userData);

});