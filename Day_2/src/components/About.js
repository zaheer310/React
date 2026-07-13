import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-content">
          <p className="section-badge">About Foodie Express</p>
          <h1>Delicious food from your favorite local spots.</h1>
          <p>
            We bring together the best restaurants, quick delivery, and a smooth
            ordering experience so every meal feels special.
          </p>
          <div className="about-actions">
            <Link className="primary-btn" to="/">
              Explore restaurants
            </Link>
            <Link className="secondary-btn" to="/about">
              <button>Learn more</button>
            </Link>
          </div>
        </div>

        <div className="about-card">
          <h3>Why people love us</h3>
          <ul>
            <li>Fresh dishes from trusted restaurants</li>
            <li>Fast delivery with live tracking</li>
            <li>Easy payments and daily deals</li>
          </ul>
        </div>
      </section>

      <section className="about-features">
        <div className="feature-card">
          <h3>Fast & Friendly</h3>
          <p>From order to doorstep, every step is designed to be simple.</p>
        </div>
        <div className="feature-card">
          <h3>Wide Variety</h3>
          <p>Browse burgers, biryani, pizza, desserts, and more in one place.</p>
        </div>
        <div className="feature-card">
          <h3>Built for You</h3>
          <p>Personalized picks and easy reordering make every meal feel easy.</p>
        </div>
      </section>

    </div>

      
    
  );
};

export default About;
