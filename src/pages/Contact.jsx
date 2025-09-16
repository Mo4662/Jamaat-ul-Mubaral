import React from 'react'
import { useState } from 'react'
import FormField from '../components/FormField.jsx'

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' })
  const [sent, setSent] = useState(false)

  function update(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function submit(e) {
    e.preventDefault()
    setSent(true)
  }

  const mailto = `mailto:jamaatulmubarak@gmail.com?subject=${encodeURIComponent(form.subject || 'Contact')}&body=${encodeURIComponent(`${form.name} <${form.email}>

${form.message}`)}`

  return (
    <main className="section">
      <div className="container" style={{maxWidth:720}}>
        <h1>Contact Us</h1>
        <p className="help">No backend enabled. Use the mail button to send your message via your email client.</p>
        <form onSubmit={submit}>
          <div className="form-row">
            <FormField id="name" label="Your name" required value={form.name} onChange={update} />
            <FormField id="email" label="Email" type="email" required value={form.email} onChange={update} />
          </div>
          <FormField id="subject" label="Subject" value={form.subject} onChange={update} />
          <FormField id="message" label="Message" type="textarea" rows={6} value={form.message} onChange={update} />
          <div style={{display:'flex', gap:12}}>
            <button type="submit">Mark as composed</button>
            <a href={mailto} className="button">Open email app</a>
          </div>
          {sent && <p className="help" style={{marginTop:12}}>Composed. Now click “Open email app” to actually send.</p>}
        </form>
      </div>
    </main>
  )
}
