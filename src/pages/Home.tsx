import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'
import ProductCard from '../components/ProductCard.tsx'
import '../styles/home/homeStyle.css'

export default function Home() {
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