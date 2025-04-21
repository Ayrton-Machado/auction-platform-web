import Header from "../components/Header"
import ProductCard from "../components/ProductCard"
import Footer from "../components/Footer"

export default function WatchList() {
    return (
        <>
            <Header />
            <div className='index-listing-products'>
                <ProductCard />
            </div>
            <Footer />
        </>
    )
}