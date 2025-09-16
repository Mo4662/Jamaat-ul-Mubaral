// import { NavLink } from 'react-router-dom'
// import logo from '../assets/jamat.png'

// const linkStyle = ({ isActive }) => ({
//   color: isActive ? 'white' : 'var(--color-text-muted)',
//   fontWeight: isActive ? 800 : 600
// })

// export default function Nav() {
//   return (
//     <nav className="nav">
//       <div className="container nav-inner">
//         <a className="brand" href="/">
//           <img src={logo} alt="Logo" />
//           <span>Jamaat-ul-Mubarak</span>
//         </a>
//         <div className="nav-links">
//           <NavLink to="/" style={linkStyle}>Home</NavLink>
//           <NavLink to="/about" style={linkStyle}>About</NavLink>
//           <NavLink to="/events" style={linkStyle}>Events</NavLink>
//           <NavLink to="/team" style={linkStyle}>Team</NavLink>
//           <NavLink to="/blog" style={linkStyle}>Blog</NavLink>
//           <NavLink to="/faq" style={linkStyle}>FAQ</NavLink>
//           <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
//           <NavLink to="/register" style={linkStyle} className="button">Join</NavLink>
//         </div>
//       </div>
//     </nav>
//   )
// }

// src/components/Nav.jsx
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'

const linkStyle = ({ isActive }) => ({
  color: isActive ? 'white' : 'var(--color-text-muted)',
  fontWeight: isActive ? 800 : 600
})

export default function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        {/* Brand link MUST use NavLink so GH Pages base path works */}
        <NavLink className="brand" to="/" aria-label="Home">
          <img src={logo} alt="Logo" />
          <span>Nonprofit Name</span>
        </NavLink>

        <div className="nav-links">
          <NavLink to="/" style={linkStyle}>Home</NavLink>
          <NavLink to="/about" style={linkStyle}>About</NavLink>
          <NavLink to="/events" style={linkStyle}>Events</NavLink>
          <NavLink to="/team" style={linkStyle}>Team</NavLink>
          <NavLink to="/blog" style={linkStyle}>Blog</NavLink>
          <NavLink to="/faq" style={linkStyle}>FAQ</NavLink>
          <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
          <NavLink to="/register" style={linkStyle} className="button">Join</NavLink>
        </div>
      </div>
    </nav>
  )
}

