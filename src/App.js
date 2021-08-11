
import React, { useState } from 'react'
import Textbox from './components/Textbox'
import Button from './components/Buttton'
import Header from './components/Header';
import Analyze from './components/Analyze';

function App() {
  const [text, settext] = useState("")
  const [analyze, setanalyze] = useState(false)
  const [lower, setlower] = useState(0)
    const [upper, setupper] = useState(0)
    const [total, settotal] = useState(0)
    const [vowel, setvowel] = useState(0)
    const [consonents, setconsonents] = useState(0)
const [sentance, setsentance] = useState(0)
    const [word, setword] = useState(0)


  function updatedata(){
    var number = text.match(/[a-z]/g)
    var small = number.length
    setlower(small);
    number = text.match(/[A-Z]/g)
    var big = number.length
    setupper(big);
    settotal(big + small)
    number = text.match(/[aeiou]/gi)
    var vowels = number.length;
    setvowel(vowels)
    number = text.match(/[bcdfghjklmnpqrstvwxyz]/gi)
    var consonants = number.length;
    setconsonents(consonants)
    number =  text.match(/\056/gi)
    var sentences = number.length
    setsentance(sentences)
    number = text.match(/[a-zA-Z]+/gi)
    var Words = number.length;
    setword(Words)
  }
  return (
    <div className="App">
      <Header />
      {!analyze ? <div className="container">

        <Textbox updatetext={settext} />
        <Button anz={setanalyze} data={updatedata}/>
      </div> : <Analyze small={lower} big={upper} total={total} vowel={vowel} conso={consonents} sent={sentance} word={word}/>}
    </div>
  );
}

export default App;
