import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import '../assets/sass/style.scss'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import promise from 'redux-promise'

import reducers from './reducers'
import PostIndex from './components/post_index'
import PostsNew from './components/post_new'
const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={PostIndex} exact />
        <Route path="/posts/new" component={PostsNew} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'))
