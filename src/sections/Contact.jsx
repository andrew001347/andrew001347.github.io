import {useRef, useState} from 'react'
import emailjs from "@emailjs/browser";

const Contact = () => {
    const formRef = useRef();

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = ({ target: { name, value } }) => {setForm({ ...form, [name]: value });};


    const handleSubmit = async (e) => {
      
      e.preventDefault();
      setLoading(true);
      try{

        await emailjs.send(
          'service_04uvwuq',      // Service ID
          'template_ucugjgb',     // Template ID
          {
            from_name: form.name,       // Should match `{{from_name}}` in template
            from_email: form.email,     // Should match `{{from_email}}` in template
            to_name: "Andrew Kim",      // Should match `{{to_name}}` in template
            to_email: 'andrewkimsvhs@gmail.com',
            message: form.message,      // Should match `{{message}}` in template
          },
          "K7qVmIIo5UQ7Ky79j"      // Public Key
        );
        
          setLoading(false);
          alert('Your message was sent');

          setForm({
            name: '',
            email: '',
            message: '',
          });

      } 
      catch(error)
      {
        setLoading(false);
        console.log(error);
        alert('Something went wrong');
      }
      


    }
        
    

  return (
    <section className="c-space my-20" id="contact">

    <div className="relative min-h-screen flex items-center justify-center flex-col">
    <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />
    
      <div className="contact-container">
      <h3 className="head-text">Contact Me</h3>
      {/* <p></p> */}
      <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
              <label className="space-y-3">
                <span className="field-label">Full Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder="ex., John Doe"
                />
              </label>

              <label className="space-y-3">
                <span className="field-label">Email address</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder="ex., johndoe@gmail.com"
                />
              </label>

              <label className="space-y-3">
                <span className="field-label">Your message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="field-input"
                  placeholder="Write your message here"
                />
              </label>

              <button className="field-btn" type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}

                <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
              </button>
            </form>
      </div>
    </div>


    </section>
  )
}


export default Contact;