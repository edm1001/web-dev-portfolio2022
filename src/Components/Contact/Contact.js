import React, {useState} from 'react';
import { validateEmail } from '../../utils/helpers';
import { FaLinkedin, FaGithub } from 'react-icons/fa';


function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };
  return (

    
    <section className='contact' id='contact'>
    <h1>Contact</h1>
    <h2> Message Me!</h2>
    <form onSubmit={handleSubmit} className='message'>
    <label htmlFor="message"> Subject:</label>  
    <textarea name='message' rows="5" defaultValue={message} onBlur={handleChange} id='msg-info' placeholder='Write Your Message Here...'></textarea>
    <div className='sender'>
    <label htmlFor='name'>Full Name:</label>
    <input name='name' type='name' placeholder='name' id='sender-name' defaultValue={name} onBlur={handleChange}></input>
    <label htmlFor='email'>Email:</label>
    <input type='email' name='email' id='sender-email' placeholder='email' defaultValue={email} onBlur={handleChange}></input>
    </div>
    {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
    <button type="submit" value="submit"  id='submit-btn'> Submit!</button>
    </form>



    <div className='medias'>
    <div className='icons'>
                <a href='https://www.linkedin.com/in/edmer-valencia-080414227/'>
                <FaLinkedin
  color='darkblue' size={50}
                /> 
                <a href='https://github.com/edm1001'>
                <FaGithub
  color='white' size={50}
                /></a>
                </a>
                </div>
    </div>
    </section>
  )
}

export default Contact