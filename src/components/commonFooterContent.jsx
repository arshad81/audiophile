import bestGear from "../assets/shared/mobile/image-best-gear.jpg";
import bestGearTab from "../assets/shared/tablet/image-best-gear.jpg";
import bestGearDesktop from "../assets/shared/desktop/image-best-gear.jpg";


function CommonFooterContent() {
  return (
    <div className=" lg:flex items-center justify-between text-center lg:text-start">
      <img className="rounded-md md:hidden" src={bestGear} alt={bestGear} />
      <img className="rounded-md hidden md:block lg:hidden" src={bestGearTab} alt={bestGear} />
      <img className="rounded-md hidden lg:block order-2" src={bestGearDesktop} alt={bestGear} />
      <div className="max-w-xl lg:max-w-md mx-auto">
        <p className="text-3xl uppercase my-10 font-bold">
          Bringing you the <span className="text-primary">best</span> audio gear
        </p>
        <p className="font-light text-cloud-grey">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}
export default CommonFooterContent;
