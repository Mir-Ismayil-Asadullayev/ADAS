import { useEffect, useState } from "react";
import "../assets/css/pages/MainBlog.css";
import line from "../assets/images/Line 4.svg";
import thumbnail1 from "../assets/images/thumbnail1.png";
import thumbnail2 from "../assets/images/thumbnail2.png";
import thumbnail3 from "../assets/images/thumbnail3.png";
import { data } from '../db/db.js';
import { useRef } from "react";
import { Link } from "react-router-dom";

const MainBlog = () => {
    const all = useRef();
    const adventure = useRef();
    const design = useRef();
    const fashion = useRef();
    const photography = useRef();
    const branding = useRef();
    const [cards, setcards] = useState(data);
    const classes = useRef([]);

    useEffect(() => {
        classes.current = [all.current.classList, adventure.current.classList, design.current.classList, fashion.current.classList, photography.current.classList, branding.current.classList];
        window.scrollTo(0, 0);
    }, [])


    const handleSort = (e) => {
        classes.current.forEach(item => item.remove('active'));
        if (e.target.classList.contains('active')) e.target.classList.remove('active');
        else e.target.classList.add('active');
        setcards(data);
        setcards(prev => prev.filter(item => item.category === e.target.innerText.toLowerCase()));
        if (e.target.innerText === 'All') setcards(data);
    }

    return (
        <>
            <section className='imageSection'>
                <div className="adventure">ADVENTURE</div>
                <div className="overlay">Richird Norton photorealistic rendering as real photos</div>
                <div className="date">
                    <div>08.08.2021</div>
                    <img src={line} alt="line" />
                    <div className="dateLast">
                        Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.
                    </div>
                </div>
                <div className="ballsContainer">
                    <div className="balls ballsMain"></div>
                    <div className="balls"></div>
                    <div className="balls"></div>
                </div>
            </section>
            <section className="popularTopics">
                <h1 className="popularTitle">Popular topics</h1>
                <nav className="topicsNav">
                    <ul className="navList">
                        <li ref={all} className="navItem" onClick={handleSort}>All</li>
                        <li ref={adventure} className="navItem" onClick={handleSort}>Adventure</li>
                        <li ref={design} className="navItem" onClick={handleSort}>Design</li>
                        <li ref={fashion} className="navItem" onClick={handleSort}>Fashion</li>
                        <li ref={photography} className="navItem" onClick={handleSort}>Photography</li>
                        <li ref={branding} className="navItem" onClick={handleSort}>Branding</li>
                    </ul>
                    <div className="navItem">View All</div>
                </nav>
            </section>
            <section className="cardsMain">
                {
                    cards.length
                        ?
                        cards.map(item =>
                            <Link to={`main/${item.id}`} style={{ all: 'unset', cursor: 'pointer' }} key={Math.random()}>
                                <div className="cardMain" >
                                    <div className="cardImgMain">
                                        <img src={item.image} alt="img" />
                                        <div className="cardImgDescMain">{item.category}</div>
                                    </div>
                                    <div className="cardDate">{item.date}</div>
                                    <div className="cardTitle">{item.title}</div>
                                    <div className="cardDesc">{item.description.slice(0, 140)}</div>
                                </div>
                            </Link>)
                        :
                        "Sorry but such kind of posts are not exist yet"
                }
            </section>
            <section className="secondImgMain">
                <div className="secondWrapperMain">
                    <div className="fashionMain">FASHION</div>
                    <div className="overlay2Main">
                        Richird Norton photorealistic rendering as real photos
                    </div>
                    <div className="overlayDescMain">
                        Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.
                    </div>
                    <img src={line} alt="line" className="line2Main" />
                    <div className="overlay2DateMain">08.08.2021</div>
                </div>
            </section>
            <section className="editors">
                <h2 className="thumbnailTitle">Editor’s Pick</h2>
                <div className="thumbnailWrapper">
                    <div className="thumbnails">
                        <img src={thumbnail1} alt="thumbnail" />
                        <div className="thumbnailCategoryMain">FASHION</div>
                        <div className="thumbnailContentWrapper">
                            <div className="thumbDate">08.08.2021</div>
                            <div className="thumbTitle">Richird Norton photorealistic rendering as real photos</div>
                            <div className="thumbDesc">
                                Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.
                            </div>
                        </div>
                    </div>
                    <div className="thumbnails">
                        <img src={thumbnail2} alt="thumbnail" />
                        <div className="thumbnailCategoryMain">FASHION</div>
                        <div className="thumbnailContentWrapper">
                            <div className="thumbDate">08.08.2021</div>
                            <div className="thumbTitle">Richird Norton photorealistic rendering as real photos</div>
                            <div className="thumbDesc">
                                Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.
                            </div>
                        </div>
                    </div>
                    <div className="thumbnails">
                        <img src={thumbnail3} alt="thumbnail" />
                        <div className="thumbnailCategoryMain">FASHION</div>
                        <div className="thumbnailContentWrapper">
                            <div className="thumbDate">08.08.2021</div>
                            <div className="thumbTitle">Richird Norton photorealistic rendering as real photos</div>
                            <div className="thumbDesc">
                                Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default MainBlog
