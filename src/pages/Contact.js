import React from 'react';

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
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
          Subject:
          <input type="text" name="subject" />
        </label>
        <label>
          Message:
          <textarea name="message" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Contact;
