import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { createPost } from '../actions'
import { connect } from 'react-redux'

class PostsNew extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    createPost: PropTypes.func,
    history: PropTypes.object
  }

  renderField = (field) => {
    const { meta: { touched, error } } = field
    const className = `form-group ${touched && error ? 'has-danger' : ''}`
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text" {...field.input} />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  onSubmit = (values) => {
    console.log('submitted it', values)
    this.props.createPost(values, () => {
      this.props.history.push('/')
    })
  }

  render () {
    const { handleSubmit } = this.props
    return (
      <div className="container">
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            label="Title for post"
            name="title"
            component={this.renderField}
          />
          <Field
            label="Categories"
            name="categories"
            component={this.renderField}
          />
          <Field
            label="Post content"
            name="content"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
      </div>
    )
  }
}

function validate (values) {
  // We declare an object to collect all errors
  // console.log(values) => {title:'asas', categories:'asasa', content: 'asasa'}
  const errors = {}

  // Validate the imputs from 'values'
  // if (values.title.length < 3) {
  //   errors.title = 'Title must be at least 3 characters'
  // } this could be as well a way to validate
  if (!values.title) {
    errors.title = 'Enter a title!'
  }
  if (!values.categories) {
    errors.categories = 'Enter some categories!'
  }
  if (!values.content) {
    errors.content = 'Enter some content please!'
  }

  return errors
}

export default reduxForm({
  validate,
  form: 'PostNewForm'
  // this has to be unique
})(
  connect(null, { createPost })(PostsNew)
)
