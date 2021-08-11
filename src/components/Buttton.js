import React from 'react'

function Buttton({anz,data}) {
  function update(){
  
   
    anz(true)
    data();
  }
    return (
        <div className="mybutton">
          <input type="button" value="Analyze" className="btn btn-block" onClick={update}/>
        </div>
    )
}

export default Buttton
