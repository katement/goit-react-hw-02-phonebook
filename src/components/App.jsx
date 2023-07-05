import { useState } from 'react';
import ReactDOM from 'react-dom';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    const [contacts, setContacts] = useState([]);
    const [name, setName] = useState('');

    const handleNameChange = event => {
      setName(event.target.value);
    };

    const handleSubmit = event => {
      event.preventDefault();
      if (name.trim() === '') {
        return;
      }
      const newContact = {
        id: nanoid(),
        name: name.trim(),
      };
      setContacts([...contacts, newContact]);
      setName('');
    };

    return (
      <div>
        <h1>Contact Book</h1>
        <ContactForm
          name={name}
          onNameChange={handleNameChange}
          onSubmit={handleSubmit}
        />
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
