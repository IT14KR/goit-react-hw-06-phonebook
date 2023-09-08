import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Button, Form, Input, Label } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'components/redux/selectors';
import { addContact } from 'components/redux/contactsSlice';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const nameInputId = nanoid();

  const handleSubmit = event => {
    event.preventDefault();

    const isInContacts = contacts.find(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );

    if (isInContacts) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number, nameInputId }));

    setName('');
    setNumber('');
  };
  // const addContact = contact => {
  //   setContacts(prevContacts => [
  //     { id: nanoid(), ...contact },
  //     ...prevContacts,
  //   ]);
  // };

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  // const reset = () => {
  //   setName('');
  //   setNumber('');
  // };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}>Name</Label>
      <Input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <Label>Number</Label>
      <Input
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <Button type="submit">Add contact</Button>
    </Form>
  );
};
