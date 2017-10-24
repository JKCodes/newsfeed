import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'

class Feed extends Component {
  
  render() {

    const selectedFeed = this.props.feeds.selected
    const name = (selectedFeed) ? selectedFeed.name : 'Welcome to NewsFeed'

    return (
      <div className="content">
        <header>
          <h1>{name}</h1>
          <hr />
          <p>A free and fully responsive site template</p>
        </header>
        <p>
          Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.
        </p>
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
    
  }
}

export default connect(stateToProps, dispatchToProps)(Feed)