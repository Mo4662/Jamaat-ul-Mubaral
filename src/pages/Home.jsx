// import React from 'react'
// export default function Home() {
//   return (
//     <main>
//       <section className="hero">
//         <div className="container">
//           <span className="badge">Community-led • Transparent • Impact</span>
//           <h1>Make impact with <span style={{color:'var(--teal-200)'}}>Jamaat-ul-Mubarak</span></h1>
//           <p>We bring people together to serve our community through programs, events, and support. Become a member, volunteer, or partner with us.</p>
//           <div style={{display:'flex', gap:12, marginTop:12}}>
//             <a className="button" href="/register">Become a member</a>
//             <a className="button ghost" href="/donate">Donate</a>
//           </div>
//         </div>
//       </section>

//       <section className="section">
//         <div className="container grid">
//           <div className="card">
//             <h3>Programs</h3>
//             <p>Education, mentorship, food drives and more. We publish metrics, not buzzwords.</p>
//           </div>
//           <div className="card">
//             <h3>Events</h3>
//             <p>Monthly meetups and quarterly community service days. RSVP and bring a friend.</p>
//           </div>
//           <div className="card">
//             <h3>Volunteer</h3>
//             <p>Lend your skills. We match volunteers to projects that actually need them.</p>
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }

import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <span className="badge">Community-led • Transparent • Impact</span>
          <h1>Make impact with <span style={{color:'var(--teal-200)'}}>Nonprofit Name</span></h1>
          <p>We bring people together to serve our community through programs, events, and support. Become a member, volunteer, or partner with us.</p>
          <div style={{display:'flex', gap:12, marginTop:12}}>
            <NavLink className="button" to="/register">Become a member</NavLink>
            <NavLink className="button ghost" to="/donate">Donate</NavLink>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid">
          <div className="card">
            <h3>Programs</h3>
            <p>Education, mentorship, food drives and more. We publish metrics, not buzzwords.</p>
          </div>
          <div className="card">
            <h3>Events</h3>
            <p>Monthly meetups and quarterly community service days. RSVP and bring a friend.</p>
          </div>
          <div className="card">
            <h3>Volunteer</h3>
            <p>Lend your skills. We match volunteers to projects that actually need them.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

