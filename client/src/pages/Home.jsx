import SearchBar from "../components/SearchBar";
import "../stylesheet/Home.css";

const Home = () => {
  return (
    <div className="homePage">
      <div className="text-container">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            dolorum eligendi id, fuga ipsa placeat aut animi nemo tempore harum,
            libero quod quasi expedita alias beatae sed quis sunt porro!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="image-container">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
