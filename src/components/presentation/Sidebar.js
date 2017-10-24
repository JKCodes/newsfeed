import React, { Component } from 'react'
import turbo from 'turbo360'

class Sidebar extends Component {

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
    
    var turboClient = turbo({site_id: '59ef2f3bfaf4920012e2aa3d'})
    turboClient.create('feed', this.state.feed)
    .then(data => {
      console.log("FEED CREATED: " + JSON.stringify(data))
    })
    .catch(err => {
      alert('Error: ' + err.message)
    })
  }

  render() {
    return (
      <div id="sidebar">
        <div className="inner">
          <section id="search" className="alt">
            <form onSubmit={this.addFeed.bind(this)} method="post" action="#">
              <input onChange={this.updateFeed.bind(this, 'name')} type="text" name="query" id="query" placeholder="Feed Name" /><br />
              <input onChange={this.updateFeed.bind(this, 'url')} type="text" name="query" id="query" placeholder="Feed URL" /><br />
              <button>Add Feed</button>
            </form>
          </section>
          
          <nav id="menu">
            <header className="major">
                <h2>My Feeds</h2>
            </header>
            <ul>
              <li><a href="index.html">Hacker News</a></li>
              <li><a href="generic.html">NY Daily News Sports</a></li>
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