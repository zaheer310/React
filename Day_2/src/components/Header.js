import { Link } from "react-router-dom";

// import { Link } from "react-router";



const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="header-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgANqB6675mmRJ8tmv2qM93I77zW2zWnrybPG3wvKr1hDFsnOP_c6oaAA&s=10"
          alt="Food app logo"
        />
      </div>
      <div className="search-bar">
        <input placeholder="Search For Restaurants and Food" />
      </div>

      <div className="nav-items">
        <ul>
          <li>
           <Link to = "/">Home</Link>
          </li>
          <li>
            <Link to= "/About">About us</Link>
            </li>
          <li><Link to= "/Contact">Contact </Link>
          </li>
          <li>
            <Link to= "/Cart">Cart</Link>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;