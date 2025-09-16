export default function Team() {
  const people = [
    { name:'Mr Ahmed D Kargbo', role:'President' },
    { name:'Mr Frank Bangura', role:'Deputy President' },
    { name:'Alhaji Muctarr Jalloh.', role:'Treasurer' },
    { name:'Alhaji Mohamed M Turay', role:'Secretary  General' },
    { name:'Mr Idriss Cont Kamara', role:'Public Relation Officer' },
    { name:'Mr Mohamed L Turay', role:'Organizer' },
    { name:'Mr Mohamed Kanja Jalloh',role: 'Organizer' },
    { name:'Mr Ibrahim Kamara', role:'Member' },
    { name:'Mrs Alice Kuyateh', role:'Member' },
    { name:'Mrs Makalay Turay', role:'Member' },
    { name:'Mrs Abie Kamara', role:'Member' },
  ]
  return (
    <main className="section">
      <div className="container grid">
        <h1 style={{gridColumn:'span 12'}}>Team & Board</h1>
        {people.map((p,i)=> (
          <div className="card" key={i}>
            <h3>{p.name}</h3>
            <p className="help">{p.role}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
