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

// This is the landing page for Customers. As soon as they login/signup, the will be routed to this page. 
// It shows the services provided by this webapp. They can navigate to other pages through the navbar

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