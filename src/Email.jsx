import React, { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const [msg, setMsg] = useState()
    
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_qcgr5sm', 'template_mine', form.current, 'IgkoypBzwCg-4xSog')
      .then((result) => {
         setMsg(<h1>Message sent succesfully</h1>);
      }, (error) => {
         console(error.text);
      });


  };

  return (
    <form ref={form} onSubmit={sendEmail} className='inner' required>
      <input type="text" name="user_name"  className='box name' required placeholder='name..'/>
      <input type="email" name="user_email" className='box email'required placeholder='email..' />
      <label>Message</label>
      <textarea name="message" className='textarea'  required/>
      <input type="submit" value="Send"  className='btn'/>
      <button onClick={()=>window.location.reload(true)}>Reload </button>
    </form>
  );
};