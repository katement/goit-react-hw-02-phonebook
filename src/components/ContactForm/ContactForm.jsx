import React from 'react';

const ContactForm = ({ name, onNameChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={onNameChange}
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
