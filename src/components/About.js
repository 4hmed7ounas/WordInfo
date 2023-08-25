import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    // const [btnText, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle = () => {
    //     if (myStyle.color == 'black') {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid black'
    //         })
    //         setBtnText("Disable Dark Mode");
    //     }
    //     else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable Dark Mode");
    //     }
    // }

    return (
        <>
        <h2>About Us</h2>
            <div className="container my-3" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'rgb(126, 126, 213)' : 'black' }}>
                Welcome to the Word Manipulation Hub, your one-stop destination for transforming text effortlessly. Whether you're a writer, student, or just curious about the content you encounter, our website offers a suite of powerful tools to enhance your text experience. Here's what you can do:
                <div className="accordion my-3" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                                1. Convert Case
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'rgb(126, 126, 213)' : 'black' }}>
                                Our intuitive case converter allows you to easily switch between uppercase and lowercase letters. Whether you need to make your text shout or whisper, it's as simple as a click. Say goodbye to manual re-typing!
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                                2. Word and Character Count
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'rgb(126, 126, 213)' : 'black' }}>
                                Keep your content concise and on point with our real-time word counter. Paste or type your text, and instantly see the total word count. No more tedious manual counting!
                                <br />
                                Precision matters. Use our character counter to tally up the letters, numbers, and symbols in your text. It's a quick way to ensure your content meets those character limits.                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                                3. Time to Read
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'rgb(126, 126, 213)' : 'black' }}>
                                Ever wondered how long it would take to read a passage or article? Wonder no more. Our live time-to-read feature calculates the estimated time needed to peruse your text, so you can plan your reading accordingly.                        </div>
                        </div>
                    </div>
                </div>
                Experience the convenience and efficiency of our Word Manipulation Hub. Whether you're crafting content, analyzing data, or just exploring the written word, our tools are designed to simplify your text-related tasks. Get started now and take control of your text!
                {/* <div>
                <button type="button" className="btn btn-primary my-3" onClick={toggleStyle}>{btnText}</button>
            </div> */}
            </div>
        </>
    )
}
