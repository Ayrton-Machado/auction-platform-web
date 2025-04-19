import '../styles/header.css'

function Header() {
    return (
        <>
            <header>
                <div className="head">
                    <div className="head-img-container">
                        <img src="https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-3390-61f7-b65a-84f782bc9c1d/raw?se=2025-04-19T16%3A49%3A28Z&sp=r&sv=2024-08-04&sr=b&scid=e54d7318-d74e-53f5-92be-4719b94a17c1&skoid=cbbaa726-4a2e-4147-932c-56e6e553f073&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-18T19%3A48%3A36Z&ske=2025-04-19T19%3A48%3A36Z&sks=b&skv=2024-08-04&sig=jfo9xhrsLV%2BaqVS2MrPNOLMTXC5jkFd/U9fBGAbb3HY%3D" alt="" />
                    </div>
                    <div className="head-content-container">
                        <h1>e-Auction</h1>
                    </div>
                </div>
                <div className="sub-head">
                    <div className='sub-head-intro'>
                        <h3>Bem, Vindo! Sr(a). </h3>
                        <h3 className='sub-head-user'>Usuário</h3>
                    </div>
                    <div className="menu">
                        <div className="menu-itens">
                            <a href="#">Listings</a>
                            <a href="#">Categories</a>
                            <a href="#">WatchList</a>
                            <a href="#">Create Listing</a>
                            <a href="#">Log Out</a>
                        </div>
                    </div>
                </div>

            </header>
        </>
    )
}

export default Header