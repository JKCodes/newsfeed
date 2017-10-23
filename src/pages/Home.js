import React, { Component } from 'react'
import Header from '../theme/Header'
import Footer from '../theme/Footer'
import Sidebar from '../theme/Sidebar'
import Feature from '../theme/Feature'
import Post from '../theme/Post'

class Home extends Component {

  render() {
    return (
      <div id="wrapper">
            <div id="main">
                <div className="inner">
                  <Header />

                  <section id="banner">
                    <div className="content">
                      <header>
                        <h1>Hi, I’m Editorial<br />
                        by HTML5 UP</h1>
                        <p>A free and fully responsive site template</p>
                      </header>
                      <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>
                      <ul className="actions">
                        <li><a href="#" className="button big">Learn More</a></li>
                      </ul>
                    </div>
                    <span className="image object">
                      <img src="https://placehold.it/736x512" alt="" />
                    </span>
                  </section>

                  <section>
                    <header className="major">
                      <h2>Erat lacinia</h2>
                    </header>
                    <div className="features">
                      <Feature icon="icon fa-diamond" />
                      <Feature icon="icon fa-paper-plane" />
                      <Feature icon="icon fa-rocket" />
                      <Feature icon="icon fa-signal" />
                    </div>
                  </section>

                  <section>
                    <header className="major">
                      <h2>Ipsum sed dolor</h2>
                    </header>
                    <div className="posts">
                      <Post />
                      <Post />
                      <Post />
                      <Post />
                    </div>
                  </section>

                </div>
            </div>

        <Sidebar />
      </div>
    )
  }
}

export default Home