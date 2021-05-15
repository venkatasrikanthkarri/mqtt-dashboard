import {Link} from 'react-router-dom'

const Navbar = () => (
  <ul>
    <Link to="/">
      <li>Home</li>
    </Link>
    <Link to="/listener">
      <li>Listener</li>
    </Link>
    <Link to="/publisher">
      <li>publisher</li>
    </Link>
  </ul>
)

export default Navbar
