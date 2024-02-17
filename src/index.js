import Post from './post.js'
import json from './assets/data.json'
import './css/style.css'
import logo from './assets/icon-square-big.png'

console.log(logo);

const post = new Post('Webpack Post Title', logo)

console.log('Post to string:', post.toString())

console.log('JSON:', json);