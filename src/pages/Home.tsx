import '../styles/home/homeStyle.css' 
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'
import ProductCard, { Auctions } from '../components/ProductCard.tsx'
import { fetchAllListings } from '../api/listing.ts'
import { useEffect, useState } from 'react'

export default function Home() {
    const [listings, setListings] = useState<Auctions[]>([]);

    useEffect(() => {
        async function loadListings() {
            try {
                const data = await fetchAllListings();
                console.log('Data recebida:', data);  // Verifique o valor de `data`
                setListings(data.auctions);
            } catch (err) {
                console.error("Erro ao buscar leilões:", err);
            }
        }
    
        loadListings();
    }, []);
    return (
        <>
            <Header />
            <div className='index-listing-products'>
                {listings.map(auction => (
                    <ProductCard key={auction.id} auction={auction}  />
                ))}
            </div>
            <Footer />
        </>
    )
}