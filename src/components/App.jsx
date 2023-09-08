import { Container, SubTitle, Title, Wrapper } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';
import { selectContacts } from './redux/selectors';

export const App = () => {
  const contacts = useSelector(selectContacts);

  return (
    <Container>
      <Title>Phonebook</Title>

      <ContactForm />

      <SubTitle>Contacts</SubTitle>
      {contacts.length > 0 ? (
        <Filter />
      ) : (
        <Wrapper>Your phonebook is empty. Add first contact!</Wrapper>
      )}
      {contacts.length > 0 && <ContactList />}
    </Container>
  );
};
