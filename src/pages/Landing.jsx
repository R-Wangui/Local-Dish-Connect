import ContactUs from '../components/landing/ContactUs'
import Cuisines from '../components/landing/Cuisines'
import DownloadApp from '../components/landing/DownloadApp'
import FavouriteMenu from '../components/landing/FavouriteMenu'
import TopVendors from '../components/landing/TopVendors'
import Hero from '../components/landing/Hero'
import RecommendedRestautants from '../components/landing/RecommendedRestaurants'
import RestaurantsNearby from '../components/landing/RestaurantsNearby'
import Testimonials from '../components/landing/Testimonials'
import Footer from '../components/layout/Footer'
import NavigationBar from '../components/layout/NavigationBar'

function Landing() {
  return (
    <>
        <NavigationBar />
        <Hero />
        <Cuisines />
        <RestaurantsNearby />
        <FavouriteMenu />
        <TopVendors />
        <RecommendedRestautants />
        <Testimonials />
        <DownloadApp />
        <ContactUs />
        <Footer />
    </>
  )
}

export default Landing