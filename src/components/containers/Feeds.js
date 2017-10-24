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
    alert('hi')
  }

  render() {
    const feeds = this.props.feeds.all || []

    return (
      <ul>
        { feeds.map((feed, i) => {
            return (
              <li key={feed.id}>
                <a href="#" onClick={this.selectFeed.bind(this, feed)}>{feed.name}</a>
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
    feeds: state.feed
  }
}

const dispatchToProps = (dispatch) => {
  return {
    fetchFeeds: (params) => dispatch(actions.fetchFeeds(params))
  }
}

export default connect(stateToProps, dispatchToProps)(Feeds)