import React from 'react'
import BigCase from './BigCase'
import Consonant from './Consonant'
import Sentance from './Sentance'
import SmallCase from './SmallCase'
import Total from './Total'
import Vowel from './Vowel'
import Words from './Words'

function Analyze({small,big,total,vowel,conso,sent,word}) {
   
  

   
    return (
      <div>
          <h1>Analyze Results</h1>
            <div className="container-fluid">
            
            <SmallCase initial = {small}/>
            <BigCase initial={big}/>
            <Total initial={total}/>
            <Vowel initial={vowel}/>
            <Consonant initial={conso}/>
            <Words initial={word}/>
            <Sentance initial={sent}/>
        </div>
      </div>
    )
}

export default Analyze
