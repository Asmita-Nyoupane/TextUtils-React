
import React ,{useState}from 'react'


export default function Textform(props) {
   const handelUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Changed into Uppercase","success");

    }
    const handelClearText=()=>{
      let newText=""
      setText(newText);
      props.showAlert("Clear text","success");
      }
      const handelCopyText=()=>{
        let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copy text","success");
        }
    const handelLowClick=()=>{
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Changed into Lowercase","success");
  
      }
      const handelWhiteSpace=()=>{
        let newText=text.replace(/\s+/g, ' ').trim();
        setText(newText);
        props.showAlert("Extra whitespace removed","success");
      }
      const handelCapitalized=()=>{
        let arr = text.split(" ")
        console.log(arr)
        let c = arr.length
        console.log(c)
        let temp = ""
        while(c!==0){
            temp = arr[c-1].charAt(0).toUpperCase()+arr[c-1].substring(1).toLowerCase()+" "+temp
            c--;
        }
        props.showAlert("Capitalized first Character","success");
        setText(temp)
    }
        
    const  handelOnChange=(event)=>{
      
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
<div className='container my-2' >
    <h2>{props.heading}</h2>
<div className="mb-3">
<textarea className="form-control"  value={text} style={{backgroundColor:props.mode==='dark'?'#381b81':'white',color:props.mode==='dark'?'white':'black'}} onChange={handelOnChange} id="myBox"rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handelUpClick}>Convert to Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handelLowClick}>Convert to Lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handelCapitalized}>Capitalized character</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handelWhiteSpace}>Remove whitespace</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handelClearText}>Clear Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handelCopyText}>Copy Text</button>

</div>
<div className="container"> 
  <h2>Your text summary </h2>
  {/* this will remove whitespace , tabs , newline and return the length of words and character */}
  <p>{text.replace(/\n/g, " ").split(' ').filter(value => value !=="").length} words and {text.trim().length}characters </p>

<p> {0.008*text.replace(/\n/g, " ").split(' ').filter(value => value !=="").length} minutes to read</p>
  
  <h3> Preview</h3>
  <p>{text.length>0?text:"Nothing to preview"}</p>
  </div>
</>
   
  )
}
