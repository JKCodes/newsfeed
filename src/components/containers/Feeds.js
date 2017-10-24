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

  render() {
    const feeds = this.props.feeds.all || []

    return (
      <ul>
        { feeds.map((feed, i) => {
            return <li key={feed.id}>< a href="#">{feed.name}</a></li>
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
    fetchFeeds: (params) => dispatch(actions.fetchFeeds(params)),
    createFeed: (params) => dispatch(actions.createFeed(params))
  }
}

export default connect(stateToProps, dispatchToProps)(Feeds)