import React from 'react'

import { pronunciations } from '../data/kMandarin'
import { traditionalVariants } from '../data/kTraditionalVariant'
import { codesAndDefinitions } from '../data/code-point+def'
import { strokeCounts } from '../data/kTotalStrokes'
import { frequencies } from '../data/kFrequency'

function Record(props) {
  const pFristOfTypeStyles = {
    display: 'inline-block',
    width: 'auto',
    textAlign: 'left',
    margin: '5px 0 5px 5px',
    fontWeight: 'bold',
    fontSize: '1.1em'
  }

  const pStyles = {
    display: 'inline-block',
    width: 'auto',
    textAlign: 'left',
    margin: '5px 0 5px 5px',
  }

  return (
    <div>
      <p style={pFristOfTypeStyles}>{props.fieldName}</p>
      <p style={pStyles}>{props.fieldContent}</p>
    </div>
  )
}

export default function SearchResults(props) {
  let char = props.character

  // for definitions and Unicode code points
  const searchInArray = (char, array, property) => {
    for (let i=0; i < array.length; i++) {
      if (array[i]['char'] === char) {
        return array[i][property]
      }
    }
  }

  return (
    <>
      <Record 
        fieldName='Pronunciation :' 
        fieldContent={ pronunciations[char] } />
      <Record 
        fieldName='Traditional Variation/s :' 
        fieldContent={ traditionalVariants[char] } />
      <Record 
        fieldName='Definition :' 
        fieldContent={ searchInArray(char, codesAndDefinitions, 'kDefinition') } />
      <Record 
        fieldName='Stroke Count :' 
        fieldContent={ strokeCounts[char] } />
      <Record 
        fieldName='Frequency Rank :' 
        fieldContent={ frequencies[char] } />
      <Record 
        fieldName='Unicode Code Point :' 
        fieldContent={ searchInArray(char, codesAndDefinitions, 'ucn') } />
    </>
  )
}
