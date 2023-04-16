import { forwardRef, useRef, useImperativeHandle } from 'react'

const Contact = forwardRef(function Contact(props, ref) {
  const sectionRef = useRef(null)

  useImperativeHandle(ref, () => {
    return {
      scrollIntoView() {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' })
      },
    }
  })

  return (
    <section id="contact" ref={sectionRef}>
      <h3>Contact Me</h3>
      <p>
        I am curious to hear about your current, or next Web Project and
        hopefully help out with the engineering side of things.
      </p>
      <p>
        Send an e-mail to{' '}
        <a href="mailto:szabikr.dev@gmail.com">szabikr.dev@gmail.com</a> and
        let's talk about the details.
      </p>
    </section>
  )
})

export default Contact
