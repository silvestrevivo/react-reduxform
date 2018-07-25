import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {
  renderTitleField = (field) => {
    return (
      <div>
        <label>Title</label>
        <input type="text" {...field.input} />
      </div>
    )
  }

  renderTagsField = (field) => {
    return (
      <div>
        <label>Tags</label>
        <input type="text" {...field.input} />
      </div>
    )
  }

  render () {
    return (
      <form>
        <Field
          name="title"
          component={this.renderTitleField}
        />
        <Field
          name="tags"
          component={this.renderTagsField}
        />
      </form>
    )
  }
}

export default reduxForm({
  form: 'PostNewForm'
  // this has to be unique
})(PostsNew)
