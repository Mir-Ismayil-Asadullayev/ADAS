import "../assets/css/pages/MainBlogItem.css";
import thumbnail1 from "../assets/images/thumbnail1.png";
import thumbnail2 from "../assets/images/thumbnail2.png";
import thumbnail3 from "../assets/images/thumbnail3.png";
import lineDate from '../assets/images/Line2.png';
import BlogLIne from '../assets/images/BlogLine.png';
import facebookBlog from '../assets/images/facebook.svg';
import twitterBlog from '../assets/images/twitter.svg';
import pinterestBlog from '../assets/images/pinterest-circular-logo-symbol.png';
import beBlog from '../assets/images/social.png';
import { useParams } from 'react-router-dom';
import { data } from '../db/db.js';
import { useEffect } from "react";

const MainBlogItem = () => {

    const { id } = useParams();
    const item = data.find(item => +id === item.id);

    useEffect(() => { window.scrollTo(0, 500); });


    return (
        <>
            <section className='imageSectionMainItem'>
                <div className="imageSectionMainItemWrapper">
                    <div className="adventureMainItem">FASHION</div>
                    <div className="overlayMainItem">Richird Norton photorealistic rendering as real photos</div>
                    <div className="dateMainItem">
                        Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.
                    </div>
                    <div className="dateAuthorMainItem">By Jennifer Lawrence</div>
                </div>
            </section>
            <section className="MainSectionBlogItem">
                <div className="MainItemDate">{item.date} <img src={lineDate} alt="line" />{item.id} minutes</div>
                <div className="BlogWrapper">
                    <div className="BlogTitle">
                        “ {item.desc_title} ”<br /><br />
                    </div>
                    <div className="BlogContent">
                        {item.description?.slice(0, 933)}
                        <br /><br />
                        {item.description?.slice(933, 1660)}
                        <br /><br />
                        {item.description?.slice(1660, -1)}
                    </div>
                    <div className="BlogContacts">
                        <div className="BlogCategories">
                            <div className="BlogCategoryNames">{item.category}</div>
                        </div>
                        <img src={BlogLIne} alt="BlogLIne" className="BlogLine" />
                        <div className="BlogAuthor">
                            <div className="Credentials">
                                <img
                                    src={item.avatar}
                                    alt="authorimage"
                                    style={{ borderRadius: '50%', width: '60px' }} />
                                <div className="credName">
                                    <div className="credFullname">{item.name}</div>
                                    <div className="credProffession">{item.profession}</div>
                                </div>
                            </div>
                            <div className="socialContacts">
                                <img src={facebookBlog} alt="facebookBlog" />
                                <img src={twitterBlog} alt="twitterBlog" />
                                <img src={pinterestBlog} alt="pinterestBlog" />
                                <img src={beBlog} alt="beBlog" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="editors">
                <h2 className="thumbnailTitle">Related Posts</h2>
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
export default MainBlogItem
