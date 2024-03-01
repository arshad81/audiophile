function Product(props) {
  const { image, imageTab, imageDesktop, title, description } = props;
  return (
    <div className="text-center lg:text-start mb-28 flex gap-x-32 justify-between items-center">
      <img className="md:hidden" src={image} alt="Product Image" />
      <img
        className="hidden md:block lg:hidden"
        src={imageTab}
        alt="Product Image"
      />
      <img className="hidden lg:block w-1/2" src={imageDesktop} alt="Product Image" />
      <div className="w-1/2">
        <p className="uppercase text-primary tracking-[10px] text-sm my-8 ">
          New product
        </p>
        <p className="my-8 text-3xl font-bold">{title}</p>
        <p className="text-cloud-grey ">{description}</p>
        <button className="bg-primary text-white px-8 py-4 text-sm font-bold tracking-wider relative z-10 my-6 md:my-6 uppercase">
          see product
        </button>
      </div>
    </div>
  );
}
export default Product;
