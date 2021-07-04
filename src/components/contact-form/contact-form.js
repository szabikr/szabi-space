import styles from './contact-form.module.css';

export default function ContactForm() {
  return (
    <div>
      <form className={styles.form}>
        <p style={{ backgroundColor: 'coral' }}>
          Send a message about anything conding related
        </p>
        <div style={{ backgroundColor: 'darkRed' }}>
          <textarea placeholder="Email content..." />
        </div>

        <div style={{ backgroundColor: 'cornflowerBlue' }}>
          <label htmlFor="email-address">Email Address:</label>
          <input id="email-address" type="text" placeholder="me@foo.bar"></input>
        </div>
        
        <div>
          <button input="submit">Send</button>
        </div>
      </form>      
    </div>
  );
}
