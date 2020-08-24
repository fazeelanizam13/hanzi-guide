import React, { Component } from 'react'
import {Para} from './stuff';

import {frqdata} from './data/kFrequency'
import {prondata} from './data/kMandarin'
import {defdata} from './data/kDefinition'
import {ucndata} from './data/code-point+def'
import {strokesdata} from './data/kTotalStrokes'
import {traddata} from './data/kTraditionalVariant'

class SearchResults extends Component{
render(){
    var char = this.props.charPassed
    
    const arraySearch = (char, array) => {
        return array[char]
    }

    const ucnSearch = (char, array) => {
        var result = '';

        for (var i=0 ; i < array.length ; i++){
            if (array[i]["char"] === char) {
                return result = array[i]["ucn"];
            }
        }
    }

    const stuffSearchResults = {
        field1: arraySearch(char, prondata),
        field2: arraySearch(char, traddata),
        field3: arraySearch(char, defdata),
        field5: arraySearch(char, strokesdata),
        field6: arraySearch(char, frqdata),
        field7: ucnSearch(char, ucndata)
    }

    function CharInfo(props){
        return(
            <div className="right">
                <div className="record">
                    <Para txt='Pronunciation :' />
                    <Para txt={props.field1} />
                </div>
                <div className="record">
                    <Para txt='Traditional Variation:' />
                    <Para className="trad" txt={props.field2} />
                </div>
                <div className="record">
                    <Para txt='Definition :' />
                    <Para txt={props.field3} />
                </div>
                <div className="record">
                    <Para txt='Stroke Count :' />
                    <Para txt={props.field5} />
                </div>
                <div className="record">
                    <Para txt='Frequency Rank :' />
                    <Para txt={props.field6} />
                </div>
                <div className="record">
                    <Para txt='Unicode Code Point :' />
                    <Para txt={props.field7} />
                </div>
            </div>
        );
    }
    
    return[
        <CharInfo {...stuffSearchResults} />
    ];
}
}
                
export default SearchResults