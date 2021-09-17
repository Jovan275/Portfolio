import React, {useEffect, useRef} from 'react';
import "./Intro.scss";
import { init } from 'ityped';

function Intro() {

    const textRef = useRef(); /*ovo useRef se ponasa slicno kao oni selektori tj isto radi kao i oni*/ 


    useEffect(() => {

        init(textRef.current, { showCursor: true, backDelay:1500, backSpeed:60, strings: ['Developer', 'Dizajner', 'Kreator sadrzaja'] });
        
    }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt=""></img>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Zdravo, moje ime je</h2>
                    <h1>Jovan Conti</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt=""></img>
                </a>
            </div>
            
        </div>
    )
}

export default Intro
