export default function Donate() {
  return (
    <main className="section">
      <div className="container" style={{maxWidth:740}}>
        <h1>Donate</h1>
        <p>We’re a nonprofit. Donations support our programs and are used responsibly with public reporting.</p>
        <div className="card" style={{gridColumn:'span 12'}}>
          <h3>Ways to give</h3>
          <ul>
            <li>One-time contribution</li>
            <li>Monthly supporter program</li>
            <li>Employer matching</li>
          </ul>
          <p className="help">Payments are not configured in this demo. Connect a payment provider later.</p>
          <div style={{display:'flex', gap:12}}>
            <button>Give $25</button>
            <button>Give $50</button>
            <button>Give $100</button>
            <button className="button ghost">Custom</button>
          </div>
        </div>
      </div>
    </main>
  )
}
