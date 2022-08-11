import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder='Enter Contact Name'
        />
      </label>
      <br />
      <label>
        <input
          type='tel'
          name='phone'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          // regex for ten digit
          pattern='(\([2-9]\d\d\)|[2-9]\d\d) ?[-.,]? ?[2-9]\d\d ?[-.,]? ?\d{4}'
          placeholder='Enter Area Code + Phone'
        />
      </label>
      <br />
      <label>
        <input
          type='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          // regex for email- too complex here
          //pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
          placeholder='Enter Email'
        />
      </label>
      <br />
      <input type='submit' value='Add Contact' />
    </form>
  );
};
