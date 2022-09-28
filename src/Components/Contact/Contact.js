import React, {useState , useRef} from 'react';
import { validateEmail } from '../../utils/helpers';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';


function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message, subject } = formState;

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
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('personal_contact','contact_service', form.current, 'wLYbtp8s7HHiOK8mX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

  };
  
  return (

    
    <section className='contact' id='contact'>
    <h1>Contact</h1>
    <h2> Contact Me!</h2>
    <form ref={form} onSubmit={handleSubmit && sendEmail} className='message'>
    <label htmlFor="message"> Message:</label>  
    <textarea name='message' rows="5" defaultValue={message} onBlur={handleChange} id='msg-info' placeholder='Write Your Message Here...'></textarea>
    <div className='sender'>
    <input type='subject' name='subject' id='sender-email' placeholder='Subject' defaultValue={subject} onBlur={handleChange}></input>
    <input name='user_name' type='name' placeholder='name' id='sender-name' defaultValue={name} onBlur={handleChange}></input>
    <input type='email' name='user_email' id='sender-email' placeholder='email' defaultValue={email} onBlur={handleChange}></input>
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