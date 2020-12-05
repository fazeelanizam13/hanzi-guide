import React, { Component } from "react";
import $ from "jquery";
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "./contact";

const stuffHome = {
  txt1:
    "Chinese Characters (<span lang='zh-Hans'>汉字</span> or hàn-zì) are logograms developed for the writing of Chinese language.",
  txt2:
    "While there's no 'alphabet' in Chinese language, each character corresponds to a single syllable, and most modern Chinese words are made up of two or more of them.<br />Since each Chinese character is also a morpheme (the smallest meaningful unit in a language,) it is essential knowledge for a Chinese language learner to know what each character stands for.",
  txt3: "Type a character:",
};

const stuffAbout = {
  title: "About this Application",
  para1:
    "This is my first 'real' projet that I used <a href='https://reactjs.org/' target='_blank'>React</a> to build.<br />And then, I really enjoy looking into foreign languages whenever I can, and as a result, came up this idea of an app which would display basic information about a given Chinese character.",
  sub1: "Where Does the Data Come from?",
  para2:
    "At the root of the search module of this app lies the <strong>Unihan</strong> database, so I'll first explain what it is.<br />Unihan database is the repository for all the knowledge regarding the <strong>CJK Unified Ideographs</strong> in the Unicode Standard. That is, the common set of characters in the Chinese, Japanese and Korean (CJK) scripts, all three of which shares a common background.<br />It includes structural analyses and definitions for these ideographs, or characters, and the working copy of the Unihan database is maintained privately by the Unicode Consortium.<br />Two public forms are also available, out of which, one: happens to be in the form of a bunch of <a href='https://www.unicode.org/Public/13.0.0/ucd/Unihan-13.0.0d4.zip' target='_blank'>text files</a> distributed as part of the Unicode Standard, and two: is baiscally via the <a href='https://unicode.org/charts/unihan.html' target='_blank'>Unicode Web site.</a>",
  para3:
    "But I have not made direct use of any of these sources, meaning I could save a lot of time and effort that would have spent studying the fields of the database and extracting information.<br /> And, it was because of the amazing projects below, that you can also check out if you are interested:",
  point1:
    "Project <a href='https://github.com/dahlia/unihan-json' target='_blank'>Unihan JSON</a> by <a href='https://github.com/dahlia' target='_blank'>Hong Minhee</a>",
  point2:
    "Project <a href='https://github.com/cihai/unihan-etl' target='_blank'>unihan-etl</a> by <a href='https://github.com/tony' target='_blank'>Tony Narlock</a>",
  sub2: "Disclaimers",
  para4:
    "Inspiration for my background graphic comes from the picture below that I found on the internet:<br />The tool I used is <a href='https://inkscape.org/' target='_blank'>Inkscape</a>, a cool, free and open-source software you can use to create graphics for all sorts of purposes.",
};

const stuffContact = {
  title: "Contact Me",
  para1:
    "<a href='https://www.facebook.com/fazeelanizam13' target='_blank'>Facebook</a>",
  para2:
    "<a href='https://www.linkedin.com/in/fazeelanizam' target='_blank'>LinkedIn</a>",
  para3: "<a href='http://fazeelanizam.com' target='_blank'>Homepage</a>",
  para4:
    "<a href='https://github.com/fazeelanizam13' target='_blank'>GitHub</a>",
};

class Main extends Component {
  render() {
    return [
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
            <Route exact path="/" render={() => <Home {...stuffHome} />} />
            <Route path="/about" render={() => <About {...stuffAbout} />} />
            <Route
              path="/contact"
              render={() => <Contact {...stuffContact} />}
            />
          </Switch>
        </div>
      </Router>,
    ];
  }

  componentDidMount() {
    $(document).ready(function () {
      $(".menu-button").click(function (e) {
        e.preventDefault();
        $("#menu-wrapper").slideToggle(200);
        $(".line-1").toggleClass("open");
        $(".line-2").toggleClass("open");
        $(".line-3").toggleClass("open");
      });

      $("#menu-wrapper a").click(function () {
        $("#menu-wrapper").slideToggle(200);
        $(".line-1").toggleClass("open");
        $(".line-2").toggleClass("open");
        $(".line-3").toggleClass("open");
      });
    });
  }
}

export default Main;
