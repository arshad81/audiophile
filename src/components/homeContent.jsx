import zx9Speaker from "../assets/home/mobile/image-speaker-zx9.png";
import zx7Speaker from "../assets/home/mobile/image-speaker-zx7.jpg";
import yx1Earphone from "../assets/home/mobile/image-earphones-yx1.jpg";
import zx9SpeakerDesktop from "../assets/home/desktop/image-speaker-zx9.png";
import zx7SpeakerDesktop from "../assets/home/desktop/image-speaker-zx7.jpg";
import yx1EarphoneDesktop from "../assets/home/desktop/image-earphones-yx1.jpg";
import zx9SpeakerTablet from "../assets/home/tablet/image-speaker-zx9.png";
import zx7SpeakerTablet from "../assets/home/tablet/image-speaker-zx7.jpg";
import yx1EarphoneTablet from "../assets/home/tablet/image-earphones-yx1.jpg";

const HomeContent = () => {
    return(
  <div>
    <div className="bg-primary rounded-md text-white px-6 py-16 lg:pb-0 lg:pt-24 text-center lg:flex justify-between overflow-hidden">
      <img
        className="w-44 h-auto mx-auto block md:hidden "
        src={zx9Speaker}
        alt="Speaker"
      />
      <img
        className="w-[410px] mx-auto hidden md:block lg:hidden -mb-2"
        src={zx9SpeakerDesktop}
        alt="Speaker"
      />
      <img
        className="w-[410px] mx-auto hidden lg:block -mb-2"
        src={zx9SpeakerDesktop}
        alt="Speaker"
      />
      <div className="max-w-96 mx-auto lg:text-start">
        <p className="my-10 text-4xl lg:text-5xl uppercase font-bold">
          ZX9 speaker
        </p>
        <p className="my-6">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <button className="bg-black px-8 py-4 mt-6 uppercase tracking-wider">
          SEE Product
        </button>
      </div>
    </div>
    <div className="bg-primary-grey overflow-hidden rounded-md my-6 relative">
      <img className="md:hidden" src={zx7Speaker} alt="Speaker" />
      <img
        className="hidden md:block lg:hidden"
        src={zx7SpeakerTablet}
        alt="zx7SpeakerTablet"
      />
      <img
        className="hidden lg:block"
        src={zx7SpeakerDesktop}
        alt="zx7SpeakerDesktop"
      />
      <div className="absolute left-6 md:left-14 top-1/2 -translate-y-1/2">
        <p className="text-2xl uppercase font-medium">ZX7 speaker</p>
        <button className="bg-transparent border-2 font-medium border-black px-8 py-4 mt-8 uppercase tracking-wider">
          SEE Product
        </button>
      </div>
    </div>
    <div className="md:flex justify-between items-stretch md:gap-8 my-6">
      <img
        className="rounded-md md:w-1/2 lg:my-0 md:hidden"
        src={yx1Earphone}
        alt="Earphone"
      />
      <img
        className="rounded-md md:w-1/2 lg:my-0 hidden md:block lg:hidden"
        src={yx1EarphoneTablet}
        alt="Earphone"
      />
      <img
        className="rounded-md md:w-1/2 lg:my-0 hidden lg:block"
        src={yx1EarphoneDesktop}
        alt="Earphone"
      />
      <div className="bg-primary-grey px-6 py-10 rounded-md md:w-1/2 md:px-10 md:flex md:items-start md:justify-center md:flex-col mt-6 md:mt-0">
        <p className="text-2xl uppercase font-medium">YX1 earphones</p>
        <button className="bg-transparent border-2 font-medium border-black px-8 py-4 mt-8 uppercase tracking-wider">
          SEE Product
        </button>
      </div>
    </div>
  </div>);
}

export default HomeContent;
