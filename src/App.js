import React, { useEffect } from "react"
import $ from "jquery"
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom"
import { Home, About, Contact} from "./pages"

export default function App() {
  useEffect(() => {
    $(function () {
      $(".menu-button").on("click", e => {
        e.preventDefault()
        $("#menu-wrapper").slideToggle(200)
        $(".line-1").toggleClass("open")
        $(".line-2").toggleClass("open")
        $(".line-3").toggleClass("open")
      })
  
      $("#menu-wrapper a").on("click", () => {
        $("#menu-wrapper").slideToggle(200)
        $(".line-1").toggleClass("open")
        $(".line-2").toggleClass("open")
        $(".line-3").toggleClass("open")
      })
    })
  })

  return (
    <Router basename="/hanzi-guide">
      <div className="menu-button">
        <div className="lines">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>
      </div>

      <div id="menu-wrapper">
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/about">About the App</Link>
          <Link to="/contact">Contact Me</Link>
        </div>
      </div>

      <div className="root">
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/about" render={() => <About />} />
          <Route
            path="/contact"
            render={() => <Contact />}
          />
        </Switch>
      </div>
    </Router>
  )
}
