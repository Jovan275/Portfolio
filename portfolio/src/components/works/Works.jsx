import React, {useState} from 'react';
import "./Works.scss";

function Works() {

    const[currentSlide, setCurrentSlide] = useState(0);

    const data = [

        {
            id: "1",
            icon: "./assets/mobile.png",
            title: "Web Design",
            desc:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            img:
              "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
          },
          {
            id: "2",
            icon: "./assets/globe.png",
            title: "Mobile Application",
            desc:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:
              "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
          },
          {
            id: "3",
            icon: "./assets/writing.png",
            title: "Branding",
            desc:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:
              "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
          },

    ];

    // ovaj parametar way je da znamo u kom pravcu cemo pomerati slajdove
    const handleClick = (way) => {

        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) : 
        setCurrentSlide(currentSlide<data.length - 1 ? currentSlide + 1 : 0)
        // ova linija iznad nam sluzi za to da ako je slajd prvi po redu sto ce uvek biti kada ucitamo sajt
        // da ne moze da se pomera onda vise u levo jer je prvi po redu, vec moze jedino onda u desno
        //pa onda ako nije lefo onda proveravamo za desno, ovo data.length-1 ce uvek biti 2
        // tako da kada dodjemo da je trenutni slajd 2 sto nije manje od 2 onda ga vratimo na pocetni 0 tj
        // vraca me na prvi slajd
        // a ako kliknem u levo i ako je u pitanju prvi slajd onda ce me poslati na poslednji slajd

    }

    return (
        <div className="works" id="works">

            <div className="slider" style={{transform: `translateX(-${currentSlide *100}vw)`}}>
                { data.map(d=>(

                
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt=""></img>
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <span>Projekti</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930" alt=""></img>
                        </div>
                    </div>
                   
                </div>))}
            </div>

            <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}></img>
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick()}></img>
            
        </div>
    )
}

export default Works
