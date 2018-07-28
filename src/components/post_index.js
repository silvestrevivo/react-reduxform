import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { fetchPosts } from '../actions'
import _ from 'lodash'

class PostIndex extends Component {
  componentDidMount () {
    this.props.fetchPosts()
  }

  renderPosts = () => {
    return _.map(this.props.posts, post => {
      return (
        <li key={post.id}>
          <p>{post.title}</p>
          <p>{post.categories}</p>
          <p>{post.content}</p>
        </li>
      )
    })
  }

  render () {
    console.log(this.props.posts)
    return (
      <div className="container">
        <div>
          <Link to="/posts/new" className="btn btn-primary">
            Add a post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul>
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {posts: state.posts}
}

PostIndex.propTypes = {
  fetchPosts: PropTypes.func,
  posts: PropTypes.object
}

export default connect(mapStateToProps, { fetchPosts })(PostIndex)
