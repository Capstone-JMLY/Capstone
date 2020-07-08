import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Home extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      // <section className="section is-centered">
      //   <div>
      //   <img src="https://www.uncommongoods.com/images/items/49100/49181_1_640px.jpg" />
      //   <div className="columns is-centered">
      //   <button className="container button is-link"  >
      //       CREATE A NEW EVENT
      //   </button>
      //   </div>

      //   </div>
      // </section>

      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Title</h1>
          <h2 className="subtitle">Subtitle</h2>
          <Link to="/userdashboard">
            <button className="button is-info">Get Started</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Home