export default function Events() {
  const rows = [
    { date: '2025-10-12', title: 'Community Clean-up', location: 'Central Park', rsvp: '#' },
    { date: '2025-11-05', title: 'Food Drive', location: 'Community Center', rsvp: '#' },
    { date: '2025-12-02', title: 'Mentorship Night', location: 'Library Hall', rsvp: '#' },
  ]
  return (
    <main className="section">
      <div className="container">
        <h1>Events</h1>
        <table className="table">
          <thead><tr><th>Date</th><th>Event</th><th>Location</th><th></th></tr></thead>
          <tbody>
            {rows.map((r,i)=> (
              <tr key={i}>
                <td>{new Date(r.date).toLocaleDateString()}</td>
                <td>{r.title}</td>
                <td>{r.location}</td>
                <td><a className="button ghost" href={r.rsvp}>RSVP</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
