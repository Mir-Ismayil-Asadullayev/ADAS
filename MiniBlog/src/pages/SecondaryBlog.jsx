import line2 from "../assets/images/Line 4.svg";
import thumbnail1 from "../assets/images/editor1.png";
import thumbnail2 from "../assets/images/editor2.png";
import "../assets/css/pages/SecondaryBlog.css";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { data } from '../db/db.js';


const SecondaryBlog = () => {
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
            <section className="imageSec">
                <div className="adventure">ADVENTURE</div>
                <div className="overlay">Richird Norton photorealistic rendering as real photos</div>
                <div className="date">
                    <div>08.08.2021</div>
                    <img src={line2} alt="line" />
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
            <section className="popularTopics2">
                <h1 className="popularTitle">Popular topics</h1>
                <nav className="topicsNav">
                    <ul className="navList">
                        <li ref={all} onClick={handleSort} className="navItem">All</li>
                        <li ref={adventure} onClick={handleSort} className="navItem">Adventure</li>
                        <li ref={design} onClick={handleSort} className="navItem">Travel</li>
                        <li ref={fashion} onClick={handleSort} className="navItem">Fashion</li>
                        <li ref={photography} onClick={handleSort} className="navItem">Technology</li>
                        <li ref={branding} onClick={handleSort} className="navItem">Branding</li>
                    </ul>
                    <div className="navItem">View All</div>
                </nav>
            </section>
            <section className="cards">

                {cards.length
                    ?
                    cards.map(item =>
                        <div className="card" key={Math.random()}>
                            <div className="cardImg">
                                <img src={item.image} alt="img" />
                                <div className="cardImgDesc">{item.category}</div>
                            </div>
                            <div className="cardDate">{item.date}</div>
                            <div className="cardTitle">{item.title}</div>
                            <div className="cardDesc">{item.description.slice(0, 140)}</div>
                            <div className="hrLine" ></div>
                            <div className="author">
                                <div className="authorImg">
                                    <img width={50} style={{ borderRadius: '50%' }} src={item.avatar} alt="author" />
                                </div>
                                <div className="authorName">
                                    <div >{item.name}</div>
                                    <div>{item.profession}</div>
                                </div>
                            </div>
                        </div>
                    )
                    :
                    "Sorry but such kind of posts are not exist yet"
                }
            </section>
            <section className="secondImg">
                <div className="secondWrapper">
                    <div className="fashion">FASHION</div>
                    <div className="overlay2">
                        Richird Norton photorealistic rendering as real photos
                    </div>
                    <div className="overlayDesc">
                        Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.
                    </div>
                    <img src={line2} alt="line" className="line2" />
                    <div className="overlay2Date">08.08.2021</div>
                </div>
            </section>
            <section className="editors">
                <h2 className="thumbnailTitle">Editor’s Pick</h2>
                <div className="thumbnailWrapper">
                    <div className="thumbnails">
                        <img src={thumbnail1} alt="thumbnail" />
                        <div className="thumbnailCategory">ADVENTURE</div>
                        <div className="thumbnailCategory2">FASHION</div>
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
                        <div className="thumbnailCategory">ADVENTURE</div>
                        <div className="thumbnailCategory2">FASHION</div>
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
export default SecondaryBlog
