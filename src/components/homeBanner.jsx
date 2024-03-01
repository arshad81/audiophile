import bannerImage from "../assets/home/mobile/image-header.jpg";
import bannerImageTablet from "../assets/home/tablet/image-header.jpg";
import bannerImageDesktop from "../assets/home/desktop/image-hero.jpg";
const HomeBanner = () => {
  return (
    <div className="text-center lg:text-start uppercase relative flex justify-center lg:justify-between items-center ">
      <div className="max-w-sm absolute">
        <p className="relative z-10 my-4 md:my-6 text-cloud-grey tracking-[12px] uppercase">
          NEW PRODUCT
        </p>
        <p className="relative z-10 my-4 md:my-6 text-4xl font-bold uppercase">
          XX99 Mark II HeadphoneS
        </p>
        <p className="relative z-10 my-6 md:my-6 text-secondary-grey">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button className="bg-primary px-8 py-4 font-bold tracking-wider relative z-10 my-4 md:my-6 uppercase">
          See Product
        </button>
      </div>
      <img className=" md:hidden" src={bannerImage} alt={bannerImage} />
      <img className=" hidden md:block lg:hidden max-h-[750] w-full object-cover" src={bannerImageTablet} alt={bannerImage} />
      <img
        className=" hidden lg:block"
        src={bannerImageDesktop}
        alt={bannerImage}
      />
    </div>
  );
};
export default HomeBanner;
