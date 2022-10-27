import "./Home.css"
import React, { Component } from 'react'
import { Link } from "react-router-dom"



export default class Home extends Component {



  render() {
    const links = () => {
      var country = document.getElementById('searchbar').value
      const travelres = `https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/${country}-travel-advisory.html`
      window.open(travelres)

    }
    return (
      <div>
        {/* <h1>find all of your travel needs here</h1> */}
        <div>

          <div className="hero-image">
            <div className="hero-text">
              {/* <h1 style={{ fontSize: 50 }}>find all of your travel needs here</h1> */}
              {/* <p>Python Programmer</p> */}
            </div>
          </div>

          <main>

            <div id="main">
              <article className="main-articles-1">
                {/* <h1 style={{ fontSize: 50 }} className='main-hero-text'>find all of your travel needs here</h1> */}
                <strong><small>
                </small></strong><small>

                </small></article><small>
                <article className="main-articles">
                  <h1 id="travel-text">Travel API</h1>
                  <strong ><large>This application is designed to make it as easy as possible for you to plan and find out where you want to travel to. From here you will be able to find recommendations, flight and hotels.
                    <br></br>
                    if you are enjoying this website be sure to make an account so that you can save your plans and ideas on future travel.
                  </large></strong>
                  <figure>
                    {/* <img id="main-image" src="images/view.png" /> */}
                    <figcaption><em></em></figcaption>
                  </figure>
                  <figure className="second-image">
                    {/* <img id="computer" style={{ right: '40%' }} src="images/computer.png" /> */}
                    <figcaption><em><br></br></em></figcaption>
                  </figure>
                  <p />
                </article>
                <article className="main-img">
                  <ul>
                    <div id="home-img">
                    <img src="https://www.travelandleisure.com/thmb/kxBt6lcDDO3JwO-AqrHyluD0dRQ=/1800x1012/smart/filters:no_upscale()/key-west-beach-florida-BEACHWKNDS0620-e2faf227f60c48978cea6c62bccf5650.jpg" className="img-fluid" alt="Sample image" />

                    </div>

                  </ul>
                  <p>&nbsp;</p>
                </article>
              </small></div><small>
              <div id="side">
                <article className="side-articles" id="profile">
                  {/* <img id="profile-image" src="images/Duck.png" /> */}
                  <div id="profile-details">
                    <h5 className="fw-bold">Not sure where you want to go?</h5>
                    <p>Click below for recommendations based on places you have already been!</p>
                    <a><Link className="nav-link active" id="click-here-link" aria-current="page" to="/recommendations">Click Here</Link></a>

                  </div>
                </article>
                <article className="side-articles">
                  <h5 className="fw-bold">Travel Advisories</h5>
                  <p>Search country here for advisories on travel</p>
                  <div className="input-group">
                    <input type="search" className="form-control rounded" placeholder="Search Country" aria-label="Search" aria-describedby="search-addon" id="searchbar" />

                  </div>
                  <div>

                    <button type="button" className="btn btn-primary" onClick={links} >search</button>
                  </div>

                  {/* <strong>”We are what we repeatedly do. Excellence is not an act, but a habit.”
                    <br />
                    <br />
                    -Aristotle
                  </strong> */}
                  <p>&nbsp;</p>
                </article>
                <article className="side-articles">
                  <h1>Contact Me</h1>
                  <strong><large>Contact me with questions.</large></strong>
                  <br />
                  <form action="mailto:johnd@gmail.com" method="POST">
                    <label htmlFor="name"><strong>Name</strong></label>
                    <br />
                    <input type="text" id="name" placeholder="Your Name" />
                    <br />
                    <label htmlFor="body"><strong>Message</strong></label>
                    <br />
                    <textarea id="body" placeholder="Your Message" rows={5} defaultValue={""} />
                    <br />
                    <button type="submit">submit</button>
                    <br />
                  </form>
                </article>
              </div>
            </small></main><small>
            <footer>
              <hr />
              <div>
                © Logan Kostas 2022
              </div>
            </footer>
          </small></div>

      </div>
    )
  }
}
