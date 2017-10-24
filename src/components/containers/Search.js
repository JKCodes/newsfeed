import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'

class Search extends Component {
  
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
      <section id="search" className="alt">
        <form onSubmit={this.addFeed.bind(this)} method="post" action="#">
          <input onChange={this.updateFeed.bind(this, 'name')} value={this.state.feed.name} type="text" name="query" id="query" placeholder="Feed Name" /><br />
          <input onChange={this.updateFeed.bind(this, 'url')} value={this.state.feed.url} type="text" name="query" id="query" placeholder="Feed URL" /><br />
          <button>Add Feed</button>
        </form>
      </section>
    )
  }
}

const stateToProps = (state) => {
  return {

  }
}

const dispatchToProps = (dispatch) => {
  return {
    createFeed: (params) => dispatch(actions.createFeed(params))
  }
}

export default connect(stateToProps, dispatchToProps)(Search)