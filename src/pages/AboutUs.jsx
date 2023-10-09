import React from "react";
import AboutHeroImg from "../assets/about-page-hero-img.png";
import ownerImg from "../assets/owner-img.png";
import assistantManagerImg from "../assets/assistant-manager-img.png";
import productManagerImg from "../assets/product-manager-img.png";
import productDesignerImg from "../assets/product-designer-img.png";
import transporterImg from "../assets/transporter-img.png";
import weAreHereToHelpImg from "../assets/we-are-here-to-help.png";
export default function AboutUs() {
  const ourTeamArray = [
    {
      name: "Muhammad",
      role: "Business Owner",
      img: ownerImg,
    },
    {
      name: "Ibrahim",
      role: "Assistant Manager",
      img: assistantManagerImg,
    },
    {
      name: "Isa",
      role: "Product Manager",
      img: productManagerImg,
    },
    {
      name: "Musa",
      role: "Product Designer",
      img: productDesignerImg,
    },
    {
      name: "Ismail",
      role: "transporter & deliverer",
      img: transporterImg,
    },
  ];

  const ourTeamElements = ourTeamArray.map((ourTeamElement) => (
    <div
      className={` min-w-[250px] min-h-[350px] lg:min-w-[350px] lg:min-h-[450px] mx-6 flex items-end pb-6`}
      style={{
        background: `url(${ourTeamElement.img})`,
        backgroundSize: "cover",
      }}
    >
      <div className="pl-6">
        <h4 className=" text-white font-Lexend uppercase text-2xl leading-6">
          {ourTeamElement.name}
        </h4>
        <p
          className=" font-Lexend text-sm text-white capitalize "
          style={{ fontWeight: "lighter" }}
        >
          {ourTeamElement.role}
        </p>
      </div>
    </div>
  ));

  return (
    <>
      <style></style>
      <div className="md:flex md:flex-row-reverse">
        <div className=" md:w-[60vw]">
          <img
            src={AboutHeroImg}
            className=" md:w-full object-cover bg-center md:h-[100vh] object-bottom"
            alt=""
          />
        </div>
        <div className="py-8 md:py-0 md:w-[40vw] md:flex md:items-end md:px-10 md:pb-10">
          <h2 className="text-center md:text-start font-Poppins font-bold text-3xl uppercase md:text-4xl">
            we are <br className="hidden md:block" /> Sofa Shine
          </h2>
        </div>
      </div>
      <div className=" px-8 font-Poppins text-sm  md:pt-10 md:pb-14 md:flex md:justify-end md:pr-14 md:text-lg lg:text-xl">
        <p className="max-w-[620px] lg:max-w-[720px]">
          At SofaShine, we're more than just a furniture store; we're your
          partners in creating the perfect living environment. With a passion
          for design, quality, and customer satisfaction, we've curated a
          stunning collection of sofas, tables, and furniture pieces that embody
          style, comfort, and affordability. Our dedication to craftsmanship and
          attention to detail are at the heart of every piece we offer. But
          we're not just about furniture; we're committed to sustainable
          practices, ensuring our products not only enhance your home but also
          contribute to a greener future. Our mission is to help you elevate
          your living spaces and make your home a true reflection of your
          lifestyle and personality. Welcome to SofaShine, where we're dedicated
          to making your space shine with comfort and elegance.
        </p>
      </div>
      <div className="mt-6">
        <h3 className=" font-Poppins font-bold text-gray-900 text-center uppercase py-4 text-xl md:text-2xl lg:text-3xl">
          meet our team
        </h3>
        <div className="removeSideScrollBar flex py-3 px-6 overflow-x-scroll w-full">
          {ourTeamElements}
        </div>
      </div>
      <div>
        <div className=" mt-10 md:flex mb-8 md:justify-center">
          <div className=" md:flex md:flex-col md:w-[50%]">
            <h3 className="text-center md:text-start font-Poppins font-bold text-3xl md:text-xl  uppercase lg:text-4xl md:pl-8 md:pb-5">
              we are <br className=" hidden md:block" />
              here to help
            </h3>
            <img
              src={weAreHereToHelpImg}
              className=" mx-auto w-[80vw] py-7 md:hidden"
              alt=""
            />
            <p className="px-8 md:text-start text-center font-Poppins text-sm lg:text-xl md:max-w-[512px]">
              At SofaShine, our experts simplify sofa selection. We help you
              find the perfect sofa to match your style and space. Let us guide
              you to enhance your home's comfort and style.
            </p>
          </div>
          <div className=" px-6">
          <img
              src={weAreHereToHelpImg}
              className=" mx-auto  pb-7 hidden md:block w-[80%]"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
