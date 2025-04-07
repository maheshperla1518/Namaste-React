import React from "react";
import ReactDOM from "react-dom/client";

var Cartlogo = () => (
  <div className="cart-logo">
    <img
      className="logo-img"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwElluM6h2RF1i6ZsbuSriPscJYvEGQOHnbQ&s"
    ></img>
  </div>
);
var Header = () => {
  return (
    <div className="header">
      <div className="logo_container">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/panda-eating-noodles-cartoon-logo_1366-485.jpg"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </div>
      <Cartlogo />
    </div>
  );
};

var RestCard = (props) => {
  //console.log(props);
  var {restdata} = props;
  var {URL,Resturant_Name,Cuisines,star_rating,Cost_for_two,Restaurant_Type} = restdata
    return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={URL}></img>
      <h3>{Resturant_Name}</h3>
      <p>Cusines: <span>{Cuisines}</span></p>
      <h4>⭐{star_rating} stars</h4>
      <h5>Cost for two: {Cost_for_two}</h5>
      <h5>{Restaurant_Type}</h5>
    </div>
  );
};

var resobj = {
  Id: "7",
    Resturant_Name:"KFC",
    Cuisines:"Burger,chicken popcorn, coco-Kola, wings",
    star_rating:"4.89",
    URL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb89B6Icp3H_QGr5IMxo_bc4HT-X2O33kBkA&s",
    Cost_for_two: "₹400",
}

var RestCard_list = [
  {
    Id: "0",
    URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9e-rtaoF52xo4u7IPEBCeA9HXjrZkFVzbWA&s",
    Resturant_Name: "Plum By Bent Chair",
    Address: "The Walk, Worldmark 2, Aerocity, New Delhi",
    location: "Aerocity",
    City: "New Delhi",
    star_rating: "4.6",
    Cuisines: "Asian",
    Phone_Number: "011 61495178",
    offer: "",
    Cost_for_two: "₹1800",
    Restaurant_Type: "",
  },
  {
    Id: "1",
    URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhxKMm1C28pInn-yKHF3j6kWSOUxAM-dV9EQ&s",
    Resturant_Name: "AIR- An Ivory Region",
    Address:
      "1/83, Third Floor, Club Road, West Punjabi Bagh, Punjabi Bagh, New Delhi",
    location: "Punjabi Bagh",
    City: "New Delhi",
    star_rating: "4.0",
    Cuisines: "North Indian",
    Phone_Number: "011 66103930",
    offer: "",
    Cost_for_two: "₹1000",
    Restaurant_Type: "",
  },
  {
    Id: "2",
    URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi9DiVo-DH1TH9Ck9Ui8ZIU11E2PO3ZuaoZg&s",
    Resturant_Name: "Pa Pa Ya",
    Address:
      "Dome, Level 4, Select Citywalk, A-3, District Centre, Saket, New Delhi",
    location: "Saket",
    City: "New Delhi",
    star_rating: "4.5",
    Cuisines: "Asian",
    Phone_Number: "011 66103779",
    offer: "",
    Cost_for_two: "₹2000",
    Restaurant_Type: "",
  },
  {
    Id: "3",
    URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIxuDVSOHhkXWd-reUJpUbXg7fK1dN_MD7Zg&s",
    Resturant_Name: "Haldiram's",
    Address: "1A/24, H-Block, Sector 63, Noida",
    location: "Sector 63",
    City: "Noida",
    star_rating: "3.9",
    Cuisines: "North Indian",
    Phone_Number: "+91 8588000502",
    offer: "",
    Cost_for_two: "₹600",
    Restaurant_Type: "Vegetarian",
  },
  {
    Id: "4",
    URL: "https://www.thespruceeats.com/thmb/Rci484g2g12snQzgm8DfDAqbGXg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/lachcha-paratha-layered-indian-bread-1957343-hero-01-d9a77d131da94bc5ba7d6fe04d806c9b.jpg",
    Resturant_Name: "Om Sweets & Snacks",
    Address: "SCO 17, Main Market, Sector 31, Gurgaon",
    location: "Sector 31",
    City: "Gurgaon",
    star_rating: "4.1",
    Cuisines: "North Indian",
    Phone_Number: "0124 4271101| 0124 4271102",
    offer: "BOGO",
    Cost_for_two: "₹500",
    Restaurant_Type: "Vegetarian",
  },
  {
    Id: "5",
    URL: "https://media.istockphoto.com/id/889609260/photo/indian-feast-with-butter-chicken-chicken-tandoori-lamb-curry-vegetable-curry-samosas-pakoras.jpg?s=612x612&w=0&k=20&c=H5e015cZrjMeimrjcNEt-mSgF0CpA2hX4nqXYwZa20U=",
    Resturant_Name: "Cake",
    Address: "21, Golf Course Road, Gurgaon",
    location: "Golf Course Road",
    City: "Gurgaon",
    star_rating: "2.8",
    Cuisines: "Bakery",
    Phone_Number: "+91 8860838157",
    offer:
      "30% off on all dine-in and home-delivery orders. Offer on home-delivery only applicable when you order online on Zomato or the restaurant app.",
    Cost_for_two: "₹300",
    Restaurant_Type: "",
  },
  {
    Id: "6",
    Resturant_Name:"Kamat Resturant",
    Cuisines:"North indian, Andhra cusines",
    star_rating:"4.62",
    URL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC52b9Onr-ZXTzDWML7oLJjp1E_y5kuRPkfg&s",
    Cost_for_two: "₹300",
  },
  {
    Id: "7",
    Resturant_Name:"KFC",
    Cuisines:"Burger,chicken popcorn, coco-Kola, wings",
    star_rating:"4.89",
    URL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb89B6Icp3H_QGr5IMxo_bc4HT-X2O33kBkA&s",
    Cost_for_two: "₹400",
  },
];

var Body = () => {
  return (
    <div className="body">
      <div className="search-box">
        <input type="text" placeholder="Search your favraties"></input>
        <h3>Search</h3>
      </div>

      <div className="restcards-container">
        {/* <RestCard restdata={RestCard_list[0]}/> */}
       {
          RestCard_list.map((card)=>(
            <RestCard key={card.Id} restdata={card} />
          ))
       }
      </div>
    </div>
  );
};
var AppLayout = () => (
  <div className="app">
    <Header />

    <Body />

    {/* footer */}
  </div>
);

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
