import React from 'react'

function Textbox({updatetext}) {
    function update(){
        var data = document.getElementById("txt").value

        // console.log(data)
        updatetext(data)
    }
    return (
        <div className="mytext">
              <textarea name="mytext" id="txt" cols="10" rows="13" placeholder="Pase Your Text Or Type Something Here" onChange={update}/>
        </div>
    )
}
 
export default Textbox
