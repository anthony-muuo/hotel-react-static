import hotelDetails from "../../data";
function Food({ title, description, image, discount, ratings, price }) {
  return (
    <div className="hero-container">
      <div className="food-image">
        <img src={image} alt="single-room" />
        <span className="discount-badge">{discount}%</span>
        <span className="star-rating">⭐ {ratings}</span>
      </div>
      <div className="food-details">
        <div className="food-explanation">
          <p className="food-title">{title}</p>
          <p className="food-desc">{description}</p>
        </div>
        <div className="food-price">
          <strong>${price}</strong>
        </div>
      </div>
    </div>
  );
}

const Hero = () => {
  return (
    <div className="food-item-container">
      {hotelDetails.map((item, index) => (
        <Food
          key={index}
          title={item.title}
          description={item.description}
          discount={item.discount}
          ratings={item.ratings}
          image={item.image}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default Hero;
