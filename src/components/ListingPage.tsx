import "../styles/ListingPage/listingPage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [
  "https://i.pinimg.com/736x/07/11/1c/07111c2aa37af4d4bb7a3a9e419144a0.jpg",
  "https://100grana.wordpress.com/files/2009/04/foxnewphototf2.jpg?w=640",
  "https://br.web.img2.acsta.net/pictures/18/07/25/21/25/3958186.jpg",
  "https://rollingstone.com.br/media/uploads/sydney_sweeney_foto_presley_anngetty_images_for_lacma.jpg",
  "https://images.immediate.co.uk/production/volatile/sites/3/2019/01/Margot-RObbie-ab0d7fd.jpg?quality=90&resize=620,414",
  "https://i0.wp.com/assets.b9.com.br/wp-content/uploads/2021/07/Billie-Eilish-Happier-Than-Ever-cover.jpg?fit=1296%2C729&ssl=1",
  "https://br.web.img2.acsta.net/pictures/15/12/24/11/47/487503.jpg",
  "https://preview.redd.it/gisele-bundchen-v0-n1f9lt5m07rb1.jpg?width=640&crop=smart&auto=webp&s=265a341e25319a0bd98916964f1d7bf08afe907f",
  "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/09/quadrinho-de-batman.jpg?w=1200&h=900&crop=1",
  "https://www.hybrid-racing.com/cdn/shop/articles/IMG_3905.jpg?v=1635186091&width=5760",
  "https://i.ytimg.com/vi/UFdqEf_uCzs/maxresdefault.jpg",
  "https://i0.wp.com/functiontheory.com/wp-content/uploads/2017/04/DSC00664.jpg?resize=1200%2C800&ssl=1",
];

// Custom arrow components
const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <div className="custom-arrow prev" onClick={onClick}>
    <FaArrowLeft size={24} />
  </div>
);

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <div className="custom-arrow next" onClick={onClick}>
    <FaArrowRight size={24} />
  </div>
);

const ListingPage: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Exibe 1 grupo de imagens por vez
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  function chunkArray(array: string[], size: number): string[][] {
    const result: string[][] = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }

  const imageGroups = chunkArray(images, 3);

  return (
    <div className="listing_body">
      <Slider {...settings}>
        {imageGroups.map((group, groupIndex) => (
          <div className="images-group" key={groupIndex}>
            <div className="carousel-images">
              {group.map((src, index) => (
                <div className="imgPrincipal" key={index}>
                  <img src={src} alt={`Image ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>

        <div className="content">
            <div className="infoItem">
                <h1></h1>
                <p className="category"></p>
                <h3 className="price">R$ </h3>

                <div className="buttonBid">
                    <form id="close-auction-form">
                        <button type="submit" name="close">Close Auction</button>
                    </form>

                    <p className="auction-status"><strong></strong></p>
                    <form id="place-bid-form">
                        <input type="text" id="bid" name="placebid" placeholder="Your bid" />
                        <input type="submit" value="Place Bid" />
                    </form>

                    <select id="bid-list" disabled>
                        <option>0 Bids</option>
                        <option disabled>Username : R$ Value</option>
                    </select>
                </div>
            </div>

            <div className="details">
                <h2>Details</h2>
                <form id="watchlist-form">
                    <button type="submit" name="addWatchlist">Add to WatchList</button>
                </form>

                <p className="description"></p>
                <ul>
                    <li><p>Category: <span className="detail-category"></span></p></li>
                    <li><p>Created By: <span className="created-by"></span></p></li>
                </ul>

                <form id="comment-form">
                    <input type="text" name="comment" placeholder="add a comment" />
                </form>

                <div id="comment-list">
                    <h5>Username</h5><p>Comment</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ListingPage;