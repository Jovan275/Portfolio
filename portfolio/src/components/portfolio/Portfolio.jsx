import React, {useState, useEffect} from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import "./Portfolio.scss";
import {featuredPortfolio, 
        webPortfolio, 
        mobilePortfolio, 
        designPortfolio, 
        contentPortfolio} from "../../data";


function Portfolio() {

    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);


    const list = [
        {
            id: "featured",
            title: "Featured",
            //key: "istaknut"
        },
        {
            id: "web",
            title: "Web App",
            //key: "veb"
        },
        {
            id: "mobile",
            title: "Mobile App",
            //key: "mobilni"
        },
        {
            id: "design",
            title: "Design",
            //key: "dizajn"
        },
        {
            id: "content",
            title: "Content",
            // key: "sadrzaj"
        }
    ]

    useEffect(()=> {

        switch(selected){
            case "featured": 
            setData(featuredPortfolio);
            break;

            case "web": 
            setData(webPortfolio);
            break;

            case "mobile": 
            setData(mobilePortfolio);
            break;

            case "design": 
            setData(designPortfolio);
            break;

            case "content": 
            setData(contentPortfolio);
            break;

            default:
            setData(featuredPortfolio);

        }

    },[selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item=>(
                    <PortfolioList title={item.title} active={selected===item.id} setSelected={setSelected} id={item.id} />
                ))}
            </ul>

            <div className="container">
                {data.map((d) => (

                
                <div className="item">
                    <img src={d.img} alt=""></img>
                    <h3>{d.title}</h3>
                </div>
                ))}
            </div>  
        </div>
    )
}

export default Portfolio
