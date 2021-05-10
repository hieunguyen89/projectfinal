import Link from 'next/link'
const Navbar = () => {
    return (
        <nav>
        <div className="nav-wrapper">
         <Link href="/" ><a className="brand-logo left">HomePage</a></Link> 
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link href="/login"><a >Login</a></Link></li>
            <li><Link href="/signup"><a >SignUp</a></Link></li>
            <li><Link href="/create"><a >Create</a></Link></li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar