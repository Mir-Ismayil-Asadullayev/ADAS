import lineDate from '../assets/images/Line2.png';
import authorImg from '../assets/images/author.png';
import facebookBlog from '../assets/images/facebook.svg';
import twitterBlog from '../assets/images/twitter.svg';
import pinterestBlog from '../assets/images/pinterest-circular-logo-symbol.png';
import beBlog from '../assets/images/social.png';
import BlogLIne from '../assets/images/BlogLine.png';
import FirstImage from '../assets/images/SecondaryBlogImage1.png';
import SecondImage from '../assets/images/SecondaryBlogImage2.png';
import '../assets/css/pages/SecondaryBlogItem.css';
import img from "../assets/images/Blog Image.png";


const SecondaryBlogItem = () => {
    return (
        <>
            <section className='imageSectionMainItem2'>
                <div className="imageSectionMainItemWrapper2">
                    <div className="adventureMainItem2">FASHION</div>
                    <div className="overlayMainItem2">Richird Norton photorealistic rendering as real photos</div>
                    <div className="dateMainItem2">
                        Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.
                    </div>
                    <div className="dateAuthorMainItem2">By Jennifer Lawrence</div>
                </div>
            </section>
            <section className="SecondarySectionBlogItem">
                <div className="SecondaryItemDate">08.08.2021 <img src={lineDate} alt="line" />4 minutes</div>
                <div className="SecondaryBlogWrapper">
                    <div className="SecondaryBlogTitle">
                        “ Monotonectally seize superior mindshare rather than efficient technology. ”<br /><br />
                    </div>
                    <div className="SecondaryCategoryBlogImages">
                        <img src={FirstImage} alt="FirstImage" />
                        <img src={SecondImage} alt="SecondImage" />
                    </div>
                    <div className="SecondaryBlogContent">
                        Seamlessly syndicate cutting-edge architectures rather than collaborative collaboration and idea-sharing. Proactively incubate visionary interfaces whereas premium benefits. Seamlessly negotiate ubiquitous leadership skills rather than parallel ideas. Dramatically visualize superior interfaces for best-of-breed alignments. Synergistically formulate performance based users through customized relationships. Interactively deliver cross-platform ROI via granular systems. Intrinsicly enhance effective initiatives vis-a-vis orthogonal outsourcing. Rapidiously monetize market-driven opportunities with multifunctional users. Collaboratively enhance visionary opportunities through revolutionary schemas. Progressively network just in time customer service without real-time scenarios.
                        <br /><br />
                        Synergistically drive e-business leadership with unique synergy. Compellingly seize market positioning ROI and bricks-and-clicks e-markets. Proactively myocardinate timely platforms through distributed ideas. Professionally optimize enabled core competencies for leading-edge sources. Professionally enhance stand-alone leadership with innovative synergy. Rapidiously generate backend experiences vis-a-vis long-term high-impact relationships. Authoritatively supply market-driven mindshare and bricks-and-clicks opportunities. Holisticly create diverse innovation through adaptive communities. Efficiently empower seamless meta-services with impactful opportunities. Distinctively transition virtual outsourcing with focused e-tailers.
                        <br /><br />
                        Compellingly enhance seamless resources through competitive content. Continually actualize 24/365 alignments for resource-leveling platforms. Energistically enhance high standards in models and professional expertise. Intrinsicly iterate extensible metrics for prospective opportunities. Continually develop leading-edge experiences through quality e-services.
                    </div>
                    <div className="SecondaryBlogContacts">
                        <div className="SecondaryBlogCategories">
                            <div className="SecondaryBlogCategoryNames">ADVENTURE</div>
                            <div className="SecondaryBlogCategoryNames">PHOTO</div>
                            <div className="SecondaryBlogCategoryNames">DESIGN</div>
                        </div>
                        <img src={BlogLIne} alt="SecondaryBlogLIne" className="BlogLine" />
                        <div className="SecondaryBlogAuthor">
                            <div className="SecondaryCredentials">
                                <img src={authorImg} alt="authorimage" />
                                <div className="SecondarycredName">
                                    <div className="SecondarycredFullname">By Jennifer Lawrence</div>
                                    <div className="SecondarycredProffession">Thinker & Designer</div>
                                </div>
                            </div>
                            <div className="SecondarysocialContacts">
                                <img src={facebookBlog} alt="facebookBlog" />
                                <img src={twitterBlog} alt="twitterBlog" />
                                <img src={pinterestBlog} alt="pinterestBlog" />
                                <img src={beBlog} alt="beBlog" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="CardsWrapper">
                <h1 className='secondaryCardTitle'>Related Posts</h1>
                <div className='cardsMain2'>
                    <div className="cardMain2">
                        <div className="cardImg2">
                            <img src={img} alt="img2" />
                            <div className="cardImgDescMain2">ADVENTURE</div>
                        </div>
                        <div className="cardDate2">08.08.2021</div>
                        <div className="cardTitle2">
                            Dream destinations to visit this
                            year in Paris
                        </div>
                        <div className="cardDesc2">
                            Progressively incentivize cooperative systems through
                            technically sound functionalities. Credibly productivate
                            seamless data with flexible schemas.
                        </div>
                    </div>
                    <div className="cardMain2">
                        <div className="cardImg2">
                            <img src={img} alt="img2" />
                            <div className="cardImgDescMain2">ADVENTURE</div>
                        </div>
                        <div className="cardDate2">08.08.2021</div>
                        <div className="cardTitle2">
                            Dream destinations to visit this
                            year in Paris
                        </div>
                        <div className="cardDesc2">
                            Progressively incentivize cooperative systems through
                            technically sound functionalities. Credibly productivate
                            seamless data with flexible schemas.
                        </div>
                    </div>
                    <div className="cardMain2">
                        <div className="cardImg2">
                            <img src={img} alt="img2" />
                            <div className="cardImgDescMain2">ADVENTURE</div>
                        </div>
                        <div className="cardDate2">08.08.2021</div>
                        <div className="cardTitle2">
                            Dream destinations to visit this
                            year in Paris
                        </div>
                        <div className="cardDesc2">
                            Progressively incentivize cooperative systems through
                            technically sound functionalities. Credibly productivate
                            seamless data with flexible schemas.
                        </div>
                    </div>
                    <div className="cardMain2">
                        <div className="cardImg2">
                            <img src={img} alt="img2" />
                            <div className="cardImgDescMain2">ADVENTURE</div>
                        </div>
                        <div className="cardDate2">08.08.2021</div>
                        <div className="cardTitle2">
                            Dream destinations to visit this
                            year in Paris
                        </div>
                        <div className="cardDesc2">
                            Progressively incentivize cooperative systems through
                            technically sound functionalities. Credibly productivate
                            seamless data with flexible schemas.
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default SecondaryBlogItem
