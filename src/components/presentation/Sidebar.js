import React, { Component } from 'react'
import turbo from 'turbo360'
import { connect } from 'react-redux'
import actions from '../../actions'

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

  componentDidMount() {
    this.props.fetchFeeds(null)
    .then(data => {
      this.setState({
        feeds: data
      })
    })
    .catch(err => {
      console.log("Error: " + err.message)
    })    
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
      let feeds = Object.assign([], this.state.feeds)
      feeds.unshift(data)
      this.setState({
        feeds: feeds
      })
    })
    .catch(err => {
      alert('Error: ' + err.message)
    })
  }

  render() {

    const feeds = this.props.feeds.all || []

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
              { feeds.map((feed, i) => {
                  return <li key={feed.id}>< a href="#">{feed.name}</a></li>
                })
              }
            </ul>
          </nav>  
        </div>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    feeds: state.feed
  }
}

const dispatchToProps = (dispatch) => {
  return {
    fetchFeeds: (params) => dispatch(actions.fetchFeeds(params))
  }
}

export default connect(stateToProps, dispatchToProps)(Sidebar)