import { Link } from "react-router-dom"
import BannerImg from "../../assets/header.png"
const Banner = () => {
  return (
    <div className='section__container header__container'>
<div className="header__content z-30">
    <h4 className="uppercase">UP TO 20% Discount on</h4>
    <h1>Westsiders Fashion</h1>
    <p>Experience unmatched comfort and style with Westsiders premium activewear, designed to keep you moving with confidence.</p>
    <button className="btn">
        <Link to='/shop'>EXPLORE NOW</Link>
    </button>
</div>
<div className="header__image">
    <img src={BannerImg} alt="banner image" />
</div>
    </div>
  )
}

export default Banner