import React, { Component } from 'react'

class Sidebar extends Component {

  render() {
    return (
      <div id="sidebar">
        <div className="inner">
          <section id="search" className="alt">
            <form method="post" action="#">
              <input type="text" name="query" id="query" placeholder="Search" />
            </form>
          </section>
          
          <nav id="menu">
            <header className="major">
                <h2>News Feeds</h2>
            </header>
            <ul>
              <li><a href="index.html">Homepage</a></li>
              <li><a href="generic.html">Generic</a></li>
              <li><a href="elements.html">Elements</a></li>
              <li><a href="#">Etiam Dolore</a></li>
              <li><a href="#">Adipiscing</a></li>
              <li><a href="#">Maximus Erat</a></li>
              <li><a href="#">Sapien Mauris</a></li>
              <li><a href="#">Amet Lacinia</a></li>
            </ul>
          </nav>  
        </div>
      </div>
    )
  }
}

export default Sidebar