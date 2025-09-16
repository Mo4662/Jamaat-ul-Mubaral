export default function FAQ() {
  const qa = [
    { q:'How do I become a member?', a:'Use the Join page. With no backend, submit locally and email us your details.' },
    { q:'Are donations tax-deductible?', a:'Typically yes for eligible nonprofits. Confirm with your local rules.' },
    { q:'Can I volunteer without joining?', a:'Yes. Check Events and volunteer listings.' },
  ]
  return (
    <main className="section">
      <div className="container" style={{maxWidth:760}}>
        <h1>Frequently Asked Questions</h1>
        {qa.map((it,i)=>(
          <div key={i} className="card" style={{borderTopColor:'var(--teal-700)'}}>
            <h3>{it.q}</h3>
            <p>{it.a}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
