import React from 'react';
import { Button, Item, List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'components/redux/selectors';
import { removeContact } from 'components/redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const handelDeleteContact = contactId => {
    dispatch(removeContact(contactId));
  };
  const visibleContacts = getVisibleContacts();
  return (
    <List>
      {visibleContacts.map(contact => (
        <Item key={contact.nameInputId}>
          {contact.name + ' : ' + contact.number}

          <Button
            type="button"
            name="delete"
            onClick={() => handelDeleteContact(contact.nameInputId)}
          >
            delete
          </Button>
        </Item>
      ))}
    </List>
  );
};
