import React, { useState } from 'react'
import SearchResults from './SearchResults'

export default function Home() {
  const [char, setChar] = useState('')

  const centerText = {
    textAlign: 'center'
  }

  const searchInput = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '70%',
  }

  return (
    <>
      <div className='content-box' style={centerText}>
        <p>
          Chinese Characters (<span lang='zh-Hans'>汉字</span> or hàn-zì) are logograms developed for the writing of Chinese language.
        </p>
        <p>
          While there's no 'alphabet' in Chinese language, each character corresponds to a single syllable, and most modern Chinese words are made up of two or more of them.
          <br />
          Since each Chinese character is also a morpheme (the smallest meaningful unit in a language,) it is essential knowledge for a Chinese language learner to know what each character stands for.
        </p>
      </div>

      <div className='content-box search'>
        <div style={searchInput}>
          <p>Type a character:</p>

          <form>
            <input
              type='text'
              placeholder='eg: 的'
              maxLength='1'
              minLength='1'
              onChange={e => setChar(e.target.value)}
            />
          </form>
        </div>

        <div className='content-box'>
          <SearchResults character={char} />
        </div>
      </div>
    </>
  )
}
