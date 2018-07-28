import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { singlePost, deletePost } from '../actions'

class PostShow extends Component {
  static propTypes = {
    match: PropTypes.object,
    params: PropTypes.object,
    posts: PropTypes.object,
    singlePost: PropTypes.func,
    deletePost: PropTypes.func,
    history: PropTypes.object
  }

  componentDidMount () {
    const { id } = this.props.match.params
    this.props.singlePost(id)
  }

  deletePost = () => {
    const { id } = this.props.match.params
    this.props.deletePost(id, () => {
      this.props.history.push('/')
    })
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
        <button
          className="btn btn-danger"
          onClick={this.deletePost}>Delete Post</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {posts: state.posts}
}

export default connect(mapStateToProps, { singlePost, deletePost })(PostShow)
