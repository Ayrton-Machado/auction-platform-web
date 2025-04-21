import "../styles/home/productCard.css"

function ProductCard() {
    return (
        <>
            <div className="productCard">
                <a id="click" style={{ textDecoration: "none", color: "black" }} href="#">
                    <div className="productCard-img">
                        <img src="https://i.pinimg.com/736x/07/11/1c/07111c2aa37af4d4bb7a3a9e419144a0.jpg" alt="title" />
                    </div>
                    <div className="productCard-content">
                        <h3> title </h3>
                        <p> descriptionaaaaaaaaaaaaaaaa aaaaaaaaa aaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaa
                            aaaaaaaaaaaaaaaaaaaaaaaaa
                        </p>
                        <h4> R$ bidstart</h4>
                        <p style={{ fontSize: "12px" }}>Category:</p>
                        <p style={{ fontSize: '12px' }}>Created by:</p>
                        <p style={{ fontWeight: "bold",fontSize: "14px", color:"rgb(129, 7, 7)" }}><strong>CLOSED</strong></p>
                        <p style={{ fontWeight: "bold",fontSize: "14px", color:"rgb(7, 129, 24)" }}><strong>OPEN</strong></p>
                    </div>
                </a>
            </div>   
        </>
    )
}

export default ProductCard