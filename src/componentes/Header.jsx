import { useState } from "react";

const headerNav = [
  {
    title:"intro",
    url:"#intro"
  },
  {
    title:"rule",
    url:"#rule"
  },
  {
    title:"campaign",
    url:"#campaign"
  },
  {
    title:"product",
    url:"#product"
  }
]

function Header () {

  const [show, setShow] = useState(false);
  
  const toggleMenu = () => {
    setShow((prevShow) => !prevShow);
  };


  return (
    <header id="header" role="banner">
      <div className="header-area">
        <div className="logo">
          <a href="/">상하목장</a>
        </div>
        <nav className={`header-nav ${show ? "show" : ""}`} role="navigation" aria-label="메인 메뉴">
          <ul>
            {headerNav.map((nav,key)=>(
              <li key={key}>
                <a href={nav.url}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div 
          className="header-nav-m"
          id="headerToggle"
          aria-controls="primary-menu"
          aria-expanded={show ? "true" : "false"}
          role="button" 
          tabIndex="0"
          onClick={toggleMenu}
        >
          <span></span>
        </div>
      </div>
    </header>
  )
}

export default Header;