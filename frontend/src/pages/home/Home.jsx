
import Banner from './Banner'
import Categories from './Categories'
import DealsSection from './DealsSection'
import HeroSection from './HeroSection'
import TrendingProducts from '../shop/TrendingProducts'
import Blogs from '../blogs/Blogs'

const Home = () => {
  return (
    <>
    <Banner/>
    <Categories/>
    <HeroSection/>
    <TrendingProducts/>
    <DealsSection/>
    <Blogs/>
    </>
  )
}

export default Home