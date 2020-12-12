import React from 'react'
import { Button } from '../components'
import lantern from '../posters-chinese-lantern-hang-on-cherry-tree.jpg'

export default function About() {
  const imageContiainer ={
    display: 'flex',
    justifyContent: 'center'
  }

  return (
    <>
      <h1>About this App</h1>

      <div className='content-box'>
        <p>
          This is my first 'real' projet that I used <a href='https://reactjs.org/' rel='noopener noreferrer' target='_blank'>React</a> to build.<br />And then, I really enjoy looking into foreign languages whenever I can, and as a result, came up this idea of an app which would display basic information about a given Chinese character.
        </p>
      </div>

      <div className='content-box'>
        <h2>Where Does the Data Come from?</h2>
        <p>
          At the root of the search module of this app lies the <strong>Unihan</strong> database, so I'll first explain what it is.<br />Unihan database is the repository for all the knowledge regarding the <strong>CJK Unified Ideographs</strong> in the Unicode Standard. That is, the common set of characters in the Chinese, Japanese and Korean (CJK) scripts, all three of which shares a common background.<br />It includes structural analyses and definitions for these ideographs, or characters, and the working copy of the Unihan database is maintained privately by the Unicode Consortium.<br />Two public forms are also available, out of which, one: happens to be in the form of a bunch of <a href='https://www.unicode.org/Public/13.0.0/ucd/Unihan-13.0.0d4.zip' rel='noopener noreferrer' target='_blank'>text files</a> distributed as part of the Unicode Standard, and two: is baiscally via the <a href='https://unicode.org/charts/unihan.html' rel='noopener noreferrer' target='_blank'>Unicode Web site.</a>
        </p>
        <p>
          But I have not made direct use of any of these sources, meaning I could save a lot of time and effort that would have spent studying the fields of the database and extracting information.<br /> And, it was because of the amazing projects below, that you can also check out if you are interested:
        </p>

        <ol>
          <li>
            <p>
              Project <a href='https://github.com/dahlia/unihan-json' rel='noopener noreferrer' target='_blank'>Unihan JSON</a> by <a href='https://github.com/dahlia' rel='noopener noreferrer' target='_blank'>Hong Minhee</a>
            </p>
          </li>
          <li>
            <p>
              Project <a href='https://github.com/cihai/unihan-etl' rel='noopener noreferrer' target='_blank'>unihan-etl</a> by <a href='https://github.com/tony' rel='noopener noreferrer' target='_blank'>Tony Narlock</a>
            </p>
          </li>
        </ol>
      </div>

      <div className='content-box'>
        <h2>Disclaimers</h2>
        <p>
          Inspiration for my background graphic comes from the picture below that I found on the internet:<br />The tool I used is <a href='https://inkscape.org/' rel='noopener noreferrer' target='_blank'>Inkscape</a>, a cool, free and open-source software you can use to create graphics for all sorts of purposes.
        </p>
        <div style={imageContiainer}>
          <img src={lantern} alt='lantern' width='30%' />
        </div>
      </div>

      <Button destination='/' text='Back' />
    </>
  )
}
