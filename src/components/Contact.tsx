import { useState, ChangeEvent, FormEvent, ReactNode } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCopy, FaCheck } from 'react-icons/fa'
import './Contact.css'

interface FormData {
  name: string
  email: string
  message: string
}

interface ContactInfo {
  icon: ReactNode
  label: string
  value: string
  link: string | null
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [showSuccess, setShowSuccess] = useState<boolean>(false)
  const [emailCopied, setEmailCopied] = useState<boolean>(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Create mailto link with pre-filled content
    const subject = encodeURIComponent(`Message from ${formData.name}`)
    const body = encodeURIComponent(
      `Hi Ben,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
    )
    const mailtoLink = `mailto:benherrman17@gmail.com?subject=${subject}&body=${body}`
    
    // Small delay for better UX
    setTimeout(() => {
      window.location.href = mailtoLink
      setIsSubmitting(false)
      setShowSuccess(true)
      setFormData({ name: '', email: '', message: '' })
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false)
      }, 5000)
    }, 300)
  }

  const copyEmailToClipboard = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText('benherrman17@gmail.com')
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  const contactInfo: ContactInfo[] = [
    { icon: <FaEnvelope />, label: 'Email', value: 'benherrman17@gmail.com', link: 'mailto:benherrman17@gmail.com' },
    { icon: <FaMapMarkerAlt />, label: 'Location', value: 'New Jersey, USA', link: null },
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-number">04.</span>
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-line"></div>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-intro">
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your visions. Feel free to reach out!
            </p>
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link || '#'}
                  className={`contact-item ${!info.link ? 'no-link' : ''}`}
                  onClick={!info.link ? (e) => e.preventDefault() : undefined}
                >
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-text">
                    <span className="contact-label">{info.label}</span>
                    <span className="contact-value">{info.value}</span>
                  </div>
                </a>
              ))}
              <button 
                className="contact-item copy-email-btn"
                onClick={copyEmailToClipboard}
              >
                <div className="contact-icon">
                  {emailCopied ? <FaCheck /> : <FaCopy />}
                </div>
                <div className="contact-text">
                  <span className="contact-label">Quick Copy</span>
                  <span className="contact-value">
                    {emailCopied ? 'Email Copied!' : 'Click to copy email'}
                  </span>
                </div>
              </button>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            {showSuccess && (
              <div className="success-message">
                <div className="success-icon">✉️</div>
                <div className="success-text">
                  <h4>Opening your email client...</h4>
                  <p>Your message has been prepared! Just hit send in your email app.</p>
                </div>
              </div>
            )}
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              ></textarea>
            </div>
            <button 
              type="submit" 
              className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              <span>{isSubmitting ? 'Opening Email...' : 'Send Message'}</span>
              <FaPaperPlane />
            </button>
            <p className="form-note">
              💡 This will open your email client with your message pre-filled
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
