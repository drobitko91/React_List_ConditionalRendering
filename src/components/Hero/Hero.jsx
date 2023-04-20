import "./Hero.scss";

function Hero() {
  return (
    <div className="hero-section">
      <img
        alt="foto"
        className="hero-img"
        width="50%"
        height="400px"
        src={require("../../images/mit.jpg")}
      />
      <div className="hero-info">
        <p className="title">Lorem ipsum dolor</p>
        <p className="article">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut beatae
          consequuntur cupiditate dolor eos exercitationem molestias nulla omnis placeat
          praesentium quibusdam quidem quis quos, recusandae, sed sunt vel voluptate?
        </p>
      </div>
    </div>
  );
}

export default Hero;
