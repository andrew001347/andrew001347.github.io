import {useRef, useState} from 'react'

const Contact = () => {
    const formRef = useRef();

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = () => {}


      const handleSubmit = () => {}
        


  return (
    <section className="c-space my-20" id="contact">

    <div className="relative min-h-screen flex items-center justify-center flex-col">
    <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />
    </div>

    <h3 className="head-text">Contact Me</h3>
    <p></p>

    <form ref={formRef}>

    </form>

    </section>
  )
}

export default Contact