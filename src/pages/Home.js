import React, { Component } from 'react'
import { Sidebar } from '../components/presentation'
import { Feeds, Search } from '../components/containers'
 
class Home extends Component {

  render() {
    return (
      <div id="wrapper">
        <div id="main">
          <div className="inner">
            <section id="banner">
              <div className="content">
                <header>
                  <h1>Welcome to<br />NewsFeed</h1>
                  <hr />
                  <p>A free and fully responsive site template</p>
                </header>
                <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>
              </div>
            </section>
          </div>
        </div>

        <div id="sidebar">
          <div className="inner">
            <Search />

            <nav id="menu">
              <header className="major">
                  <h2>My Feeds</h2>
              </header>
              <Feeds />
            </nav>  
          </div>
        </div>
      </div>
    )
  }
}

export default Home