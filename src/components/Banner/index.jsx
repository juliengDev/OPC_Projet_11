import "../../styles/style.css";

const Banner = ({ backgroundImage, title }) => {
  return (
    <>
      <img src={`${backgroundImage}`} alt="Banniere" />
      <div className="banner__overlay"></div>
      {title && <p className="banner__title">{title}</p>}
    </>
  );
};

export default Banner;
