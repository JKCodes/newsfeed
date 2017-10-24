import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'

class Feeds extends Component {
  
  componentDidMount() {
    this.props.fetchFeeds(null)
    .then(data => {
    
    })
    .catch(err => {
      console.log("Error: " + err.message)
    })    
  }

  selectFeed(feed, event) {
    event.preventDefault()
    this.props.selectFeed(feed)

    const items = this.props.rss[feed.url]  // no need to fetch again
    if (items != null) {
      return
    }

    const endpoint = 'https://api.rss2json.com/v1/api.json'
    const params = {
      rss_url: feed.url
    }

    this.props.fetchRssFeed(endpoint, params)
    .then(data => {

    })
    .catch(err => {
      alert('Error: ' + err.message)
    })
  }

  render() {
    const feeds = this.props.feeds.all || []

    return (
      <ul>
        { feeds.map((feed, i) => {
            const color = (feed == this.props.feeds.selected) ? 'red' : '#333'
            return (
              <li key={feed.id}>
                <a style={{color:color}}
                  href="#" 
                  onClick={this.selectFeed.bind(this, feed)}
                >{feed.name}</a>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

const stateToProps = (state) => {
  return {
    feeds: state.feed,
    rss: state.rss
  }
}

const dispatchToProps = (dispatch) => {
  return {
    fetchFeeds: (params) => dispatch(actions.fetchFeeds(params)),
    selectFeed: (feed) => dispatch(actions.selectFeed(feed)),
    fetchRssFeed: (url, params) => dispatch(actions.fetchRssFeed(url, params))
  }
}

export default connect(stateToProps, dispatchToProps)(Feeds)