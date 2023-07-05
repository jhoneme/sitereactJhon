import React from 'react';

function Account() {
  return (
    <div>
      <h1>Account</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <label>
          Confirm Password:
          <input type="password" name="confirmPassword" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Account;
