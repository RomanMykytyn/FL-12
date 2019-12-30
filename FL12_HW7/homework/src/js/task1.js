const USER_LOGIN = 'user@gmail.com';
const USER_PASSWORD = 'UserPass';
const ADMIN_LOGIN = 'admin@gmail.com';
const ADMIN_PASSWORD = 'AdminPass';
const MIN_LENGTH_LOGIN = 5;
const MIN_LENGTH_NEWPASS = 6;

let userResponse = prompt('Enter your email.');
if (!userResponse) {
  alert('Canceled.');
} else if (userResponse.length < MIN_LENGTH_LOGIN) {
  alert('I don’t know any emails having name length less than 5 symbols.');
} else if (userResponse === USER_LOGIN || userResponse === ADMIN_LOGIN) {
  let currentUserLogin = userResponse;
  userResponse = prompt('Enter your password.');
  if (!userResponse) {
    alert('Canceled.');
    } else if (currentUserLogin === USER_LOGIN && userResponse === USER_PASSWORD ||
               currentUserLogin === ADMIN_LOGIN && userResponse === ADMIN_PASSWORD) {
      if (confirm('Do you want to change your password?')) {
        userResponse = prompt('Enter your old password.');
        if (!userResponse) {
          alert('Canceled.');
        } else if (currentUserLogin === USER_LOGIN && userResponse === USER_PASSWORD ||
                   currentUserLogin === ADMIN_LOGIN && userResponse === ADMIN_PASSWORD) {
          userResponse = prompt('Enter your new password.');
          if (!userResponse) {
            alert('Canceled.');
          } else if (userResponse.length < MIN_LENGTH_NEWPASS) {
            alert('It’s too short password. Sorry.');
          } else if (userResponse === prompt('Repeat your new password.')) {
            alert('You have successfully changed your password.')
          } else {
            alert('You wrote the wrong password.')
          }
        } else {
          alert('Wrong password.')
        }
      } else {
        alert('You have failed the change.');
      }
    } else {
      alert('Wrong password.')
    }
} else {
  alert('I don’t know you.');
}
