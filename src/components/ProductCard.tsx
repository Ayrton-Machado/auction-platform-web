import "../styles/layout/productCard.css"

export interface Auctions {
    "id": number,
    "title": string,
    "description": string,
    "bidstart": number,
    "urlImage": string,
    "createdBy_id": number,
    "category_id": number,
    "closed": boolean
}

interface ProductCardProps {
    auction: Auctions;
}

function ProductCard({ auction }: ProductCardProps) {
    return (
        <>
            <div className="productCard">
                <a id="click" style={{ textDecoration: "none", color: "black" }} href="#">
                    <div className="productCard-img">
                        <img src={auction.urlImage || 'url_da_imagem_default.jpg'} alt={auction.title} />
                    </div>
                    <div className="productCard-content">
                        <h3> {auction.title} </h3>
                        <p> {auction.description}</p>
                        <h4> {auction.bidstart}</h4>
                        <p style={{ fontSize: "12px" }}>Category ID: {auction.category_id}</p>
                        <p style={{ fontSize: '12px' }}>Created by:{auction.createdBy_id}</p>
                        {auction.closed ? (
                            <p style={{ fontWeight: "bold", fontSize: "14px", color: "rgb(129, 7, 7)" }}>
                                <strong>CLOSED</strong>
                            </p>
                        ) : (
                            <p style={{ fontWeight: "bold", fontSize: "14px", color: "rgb(7, 129, 24)" }}>
                                <strong>OPEN</strong>
                            </p>
                        )}
                    </div>
                </a>
            </div>   
        </>
    )
}

export default ProductCard