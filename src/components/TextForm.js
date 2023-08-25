import React, { useState } from 'react'

//states and hooks + logics

export default function TextForm(props) {
    const HandleUpClick = () => {
        if (text != "") {
            let nextText = text.toUpperCase();
            // console.log('Uppercase was ticked');
            setText(nextText);
            props.showAlert("Convert to Uppercase", "success");
        }
        else {
            props.showAlert("Enter something", "danger");
        }
    }
    const HandleLowClick = () => {
        if (text != "") {
            let nextText = text.toLowerCase();
            // console.log('Uppercase was ticked');
            setText(nextText);
            props.showAlert("Convert to Lowercase", "success");
        }
        else {
            props.showAlert("Enter something", "danger");
        }
    }
    const HandleRemoveClick = () => {
        if (text != "") {
            setText("");
            props.showAlert("Text Cleared", "success");
        }
        else {
            props.showAlert("Enter something", "danger");
        }
    }
    const HandleOnChange = (event) => {
        // console.log('On change');
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // setText("Ahmed");
    return (
        <div>
            <div className="container mb-3 my-3" style={{ border: props.mode === 'dark' ? '2px solid white' : '2px solid black', borderRadius: '8px' }}>
                <label htmlFor="exampleFormControlInput1" className="form-label"><h2>{props.name}</h2> </label>
                <textarea type="text" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} className="form-control my-2" onChange={HandleOnChange} id="exampleFormControlInput1" value={text} placeholder="Enter text here" />

                <div class="container my-2">
                    <button class="btn btn-primary mx-2 my-2">Convert to UpperCase</button>
                    <button class="btn btn-primary mx-2 my-2">Convert to LowerCase</button>
                    <button class="btn btn-primary mx-2 my-2">Clear Text</button></div>
            </div>

            <div className="container my-3" style={{ border: props.mode === 'dark' ? '2px solid white' : '2px solid black', borderRadius: '8px' }}>
                <h1>Your text summary</h1>
                <p> <b>Count:</b> {text.split(" ").length - 1} Words and {text.length} Characters</p>
                <p> <b>Time:</b> {0.008 * text.split(" ").length - 0.008} Minutes to Read</p>
                <h2>Preview</h2>
                <div className="container my-3" style={{ border: props.mode === 'dark' ? '2px solid white' : '2px solid black', borderRadius: '8px' }}>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}
