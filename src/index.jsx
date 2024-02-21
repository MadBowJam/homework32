import Post from './post.js'
import json from './assets/data.json'
import logo from './assets/icon-square-big.png'
import './model/lodash.js'
import './css/style.css'
import './less/style.less'
import './sass/style.scss'
import './sass/style.sass'

import React from 'react'
import * as ReactDOM from 'react-dom/client'
// import { createRoot } from 'react-dom/cjs/react-dom.production.min.js'

const post = new Post('Webpack Post Title', logo)

// $('pre').html(post.toString())

console.log('Post to string:', post.toString())

console.log('JSON:', json);

async function start() {
  return await new Promise((r) => setTimeout(() => r('Async done.'), 2000))
  }
  
  start().then((res) => console.log(res))

class Util {
  static id = Date.now();
}
console.log('Util id:', Util.id);

const App = () => (
<div className="container">
  <h1>111Webpack training</h1>
  <div className="logo"></div>
  <pre/>
  <div className="less-demo">
    <h2>Less</h2>
  </div>
  <div className="scss-demo">
    <h2>Scss</h2>
  </div>
  <div className="sass-demo">
    <h2>Sass</h2>
  </div>
</div>

)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)