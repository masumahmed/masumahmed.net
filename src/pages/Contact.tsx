import '../styles/Contact.scss';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const handleSend = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6cb85cy', 'template_i422dls', form.current, {
        publicKey: 'R26cz0LSMfwmVY0Nk',
      })
      .then(
        () => {
          setSent(true);
          console.log('SUCCESS!');
        },
        (error: any) => {
          console.log('FAILED...', error.text);
        },
      );
  }

  return <>
    <Navbar />
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }} // slide down on exit
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >

      <Header
        title="Contact 📧"
        subtitle="Get in touch ..."
        desc="Please feel free to reach out to me with any questions or comments. I do my best to respond timely."
      />
      <div className="contact">
        {!sent && <>
          <form className="contactForm" ref={form} onSubmit={handleSend}>
            <input type="text" name="user_name" placeholder="name" required />
            <br />
            <input type="email" name="user_email" placeholder="email" required />
            <br />
            <textarea name="message" placeholder="your message here ..." required />
            <br />
            <button type="submit" value="send">send</button>
          </form>
          <br />
          <p>powered by <a href="https://www.emailjs.com/" target="__blank">EmailJS</a></p>
        </>}
        {sent && <>
          <h1 style={{ textAlign: 'center', fontSize: '100px' }}>💙</h1>
          <h4 style={{ textAlign: 'center' }}>Message Sent</h4>
          <h4 style={{ textAlign: 'center' }}>Thank you for reaching out to me. I will get back to you as soon as possible.</h4>
        </>}
      </div>
      <Footer />
    </motion.div>
  </>
}

export default Contact