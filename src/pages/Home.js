import React, { Component } from 'react'
import { Sidebar } from '../components/presentation'
import { Feeds } from '../components/containers'

class Home extends Component {

  constructor() {
    super()
    this.state = {
      feed: {
        name: '',
        url: ''
      }
    }
  }

  updateFeed(field, event) {
    let feed = Object.assign({}, this.state.feed)
    feed[field] = event.target.value

    this.setState({
      feed: feed
    })
  }

  addFeed(event) {
    event.preventDefault()
    this.props.createFeed(this.state.feed)
    .then(data => {
      this.setState({
        feed: {
          name: '',
          url: ''
        }
      })
    })
    .catch(err => {
      alert('Error: ' + err.message)
    })
  }

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
                <ul className="actions">
                  <li><a href="#" className="button big">Learn More</a></li>
                </ul>
              </div>
            </section>
          </div>
        </div>

        <div id="sidebar">
          <div className="inner">
            <section id="search" className="alt">
              <form onSubmit={this.addFeed.bind(this)} method="post" action="#">
                <input onChange={this.updateFeed.bind(this, 'name')} value={this.state.feed.name} type="text" name="query" id="query" placeholder="Feed Name" /><br />
                <input onChange={this.updateFeed.bind(this, 'url')} value={this.state.feed.url} type="text" name="query" id="query" placeholder="Feed URL" /><br />
                <button>Add Feed</button>
              </form>
            </section>
            
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