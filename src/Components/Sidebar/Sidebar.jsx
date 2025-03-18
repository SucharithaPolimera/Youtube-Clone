import React from 'react';
import "./Sidebar.css";
import home from "../../assets/home.png";
import gameIcon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";

const Sidebar = ({sidebar, category, setCategory}) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
        <div className='shortcut-links'>
            <div className={`side-link ${category == 0 ? "active" : ""}`} onClick={()=>setCategory(0)}>
                <img src={home} alt = "Home icon"/>
                <p>Home</p>
            </div>
            <div className={`side-link ${category == 20 ? "active" : ""}`} onClick={()=>setCategory(20)}>
                <img src={gameIcon} alt = "Game icon"/>
                <p>Gaming</p>
            </div>
            <div className={`side-link ${category == 2 ? "active" : ""}`} onClick={()=>setCategory(2)}>
                <img src={automobiles} alt = "Automobile icon"/>
                <p>Automobiles</p>
            </div>
            <div className={`side-link ${category == 17 ? "active" : ""}`} onClick={()=>setCategory(17)}>
                <img src={sports} alt = "Sports icon"/>
                <p>Sports</p>
            </div>
            <div className={`side-link ${category == 24 ? "active" : ""}`} onClick={()=>setCategory(24)}>
                <img src={entertainment} alt = "Entertainment icon"/>
                <p>Entertainment</p>
            </div>
            <div className={`side-link ${category == 28 ? "active" : ""}`} onClick={()=>setCategory(28)}>
                <img src={tech} alt = "Tech icon"/>
                <p>Technology</p>
            </div>
            <div className={`side-link ${category == 10 ? "active" : ""}`} onClick={()=>setCategory(10)}>
                <img src={music} alt = "Music icon"/>
                <p>Music</p>
            </div>
            <div className={`side-link ${category == 22 ? "active" : ""}`} onClick={()=>setCategory(22)}>
                <img src={blogs} alt = "Blogs icon"/>
                <p>Blogs</p>
            </div>
            <div className={`side-link ${category == 25 ? "active" : ""}`} onClick={()=>setCategory(25)}>
                <img src={news} alt = "News icon"/>
                <p>News</p>
            </div>
            <hr/>
        </div>
        <div className='subscribed-list'>
            <h3>Subscribed</h3>
            <div className='side-link'>
                <img src={jack} alt="Image of person" />
                <p>Addie&Brady</p>
            </div>
            <div className='side-link'>
                <img src={simon} alt="Image of person" />
                <p>Mr.Beast</p>
            </div>
            <div className='side-link'>
                <img src={tom} alt="Image of person" />
                <p>Bangtan</p>
            </div>
            <div className='side-link'>
                <img src={megan} alt="Image of person" />
                <p>Taylor Swift</p>
            </div>
            <div className='side-link'>
                <img src={cameron} alt="Image of person" />
                <p>5 minutes craft</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar