export default function About() {
  return (
    <main className="section">
      <div className="container" style={{display:'grid', gap:10}}>
        <h1>About Us</h1>
        <p>Our mission is to strengthen our community through service, education, and mutual support. We operate as a nonprofit with transparent governance and member-driven initiatives.</p>
        <div className="grid">
          <div className="card" style={{gridColumn:'span 6'}}>
            <h3>Mission</h3>
            <p>Advance community wellbeing with practical programs and measurable outcomes.</p>
          </div>
          <div className="card" style={{gridColumn:'span 6'}}>
            <h3>Values</h3>
            <ul>
              <li>Integrity and transparency</li>
              <li>Inclusivity and accessibility</li>
              <li>Accountability and impact</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
