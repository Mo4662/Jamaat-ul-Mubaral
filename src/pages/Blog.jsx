// export default function Blog() {
//   const items = [
//     { title: 'Quarterly Impact Report', excerpt:'Programs, numbers, what worked and what didn’t.', href:'#' },
//     { title: 'Volunteer Spotlight: Amina', excerpt:'How one member organized a neighborhood tutoring circle.', href:'#' },
//     { title: 'Grant update', excerpt:'Funding outlook for 2026 and how we prioritize projects.', href:'#' },
//   ]
//   return (
//     <main className="section">
//       <div className="container grid">
//         <h1 style={{gridColumn:'span 12'}}>News & Stories</h1>
//         {items.map((it,i)=>(
//           <article key={i} className="card">
//             <h3>{it.title}</h3>
//             <p>{it.excerpt}</p>
//             <a className="button ghost" href={it.href}>Read</a>
//           </article>
//         ))}
//       </div>
//     </main>
//   )
// }
import { NavLink } from 'react-router-dom'

export default function Blog() {
  const items = [
    { title: 'Quarterly Impact Report', excerpt:'Programs, numbers, what worked and what didn’t.' },
    { title: 'Volunteer Spotlight: Amina', excerpt:'How one member organized a neighborhood tutoring circle.' },
    { title: 'Grant update', excerpt:'Funding outlook for 2026 and how we prioritize projects.' },
  ]
  return (
    <main className="section">
      <div className="container grid">
        <h1 style={{gridColumn:'span 12'}}>News & Stories</h1>
        {items.map((it,i)=>(
          <article key={i} className="card">
            <h3>{it.title}</h3>
            <p>{it.excerpt}</p>
            <NavLink className="button ghost" to="/blog">Read</NavLink>
          </article>
        ))}
      </div>
    </main>
  )
}

