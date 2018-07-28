import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { singlePost } from '../actions'

class PostShow extends Component {
  static propTypes = {
    match: PropTypes.object,
    params: PropTypes.object,
    posts: PropTypes.object,
    singlePost: PropTypes.func
  }

  componentDidMount () {
    const { id } = this.props.match.params
    this.props.singlePost(id)
  }

  render () {
    const { id } = this.props.match.params

    if (!this.props.posts[id]) {
      return <p>loading....</p>
    }

    return (
      <div>
        <h1>PostShow</h1>
        {this.props.posts[id].content}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {posts: state.posts}
}

export default connect(mapStateToProps, { singlePost })(PostShow)
