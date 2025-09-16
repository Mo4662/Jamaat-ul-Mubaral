import { useEffect, useState } from 'react'
import FormField from '../components/FormField.jsx'

const initial = { firstName:'', lastName:'', email:'', phone:'', city:'', interests:'', statement:'', agree:false }

export default function Register() {
  const [form, setForm] = useState(initial)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    // try prefill from localStorage
    const cached = localStorage.getItem('np.register')
    if (cached) {
      try { setForm({ ...form, ...JSON.parse(cached) }) } catch {}
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function update(e) {
    const { name, value, type, checked } = e.target
    const next = { ...form, [name]: type === 'checkbox' ? checked : value }
    setForm(next)
    localStorage.setItem('np.register', JSON.stringify(next))
  }

  function submit(e) {
    e.preventDefault()
    setError(''); setSuccess('')
    if (!form.firstName || !form.lastName || !form.email || !form.agree) {
      setError('Please complete required fields and accept the membership terms.')
      return
    }
    // Save to localStorage as a "submission log"
    const submissions = JSON.parse(localStorage.getItem('np.members') || '[]')
    submissions.push({ ...form, submittedAt: new Date().toISOString() })
    localStorage.setItem('np.members', JSON.stringify(submissions))
    setSuccess('Thanks. Your registration has been saved locally. Since there’s no backend, please also send us an email.')
  }

  const mailto = `mailto:jamaatulmubarak@gmail.com?subject=Membership Registration: ${encodeURIComponent(form.firstName + ' ' + form.lastName)}&body=${encodeURIComponent(JSON.stringify(form, null, 2))}`

  return (
    <main className="section">
      <div className="container" style={{maxWidth:760}}>
        <h1>Membership Registration</h1>
        <p className="help">This demo stores your info in your browser only. To complete registration, click “Email us your details” after submitting.</p>

        <form onSubmit={submit}>
          <div className="form-row">
            <FormField id="firstName" label="First name" required value={form.firstName} onChange={update} />
            <FormField id="lastName" label="Last name" required value={form.lastName} onChange={update} />
          </div>
          <div className="form-row">
            <FormField id="email" label="Email" type="email" required value={form.email} onChange={update} />
            <FormField id="phone" label="Phone" type="tel" value={form.phone} onChange={update} />
          </div>
          <div className="form-row">
            <FormField id="city" label="City" value={form.city} onChange={update} />
            <FormField id="interests" label="Interests" value={form.interests} onChange={update} help="How would you like to help?" />
          </div>
          <FormField id="statement" label="Short statement" type="textarea" rows={5} value={form.statement} onChange={update} />
          <div style={{display:'flex', alignItems:'center', gap:10, margin:'12px 0'}}>
            <input id="agree" name="agree" type="checkbox" checked={form.agree} onChange={update} />
            <label htmlFor="agree" style={{margin:0}}>I agree to the membership terms and code of conduct *</label>
          </div>
          {error && <small className="error">{error}</small>}
          {success && <div className="help" style={{color:'var(--teal-100)'}}>{success}</div>}
          <div style={{display:'flex', gap:12, marginTop:10}}>
            <button type="submit">Submit (local)</button>
            <a className="button ghost" href={mailto}>Email us your details</a>
          </div>
        </form>
      </div>
    </main>
  )
}
