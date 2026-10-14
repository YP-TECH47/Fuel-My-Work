import "./globals.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className=" text-white flex flex-col h-screen w-full items-center justify-center">
        <div className="text-white flex flex-row items-center justify-center      w-full">
          <span className="text-7xl font-bold text-gray-400">
            Get me a Chai!
          </span>

          <img
            width="100"
            height="100"
            className="mb-5"
            src="/tea_2.gif"
            alt="chai image"
          />
        </div>

        <div className=" w-full text-center text-xl font-medium text-gray-100">
          A Crowdfunding platform for creaters. Get funded by your fans and
          followers. Start Now!
        </div>
        <Link href="/about">
          <button
            type="button"
            className="mt-5 h-12 text-white bg-linear-to-r rounded-xl from-purple-500 to-pink-500 hover:bg-linear-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5"
          >
            Read More
          </button>
        </Link>
      </div>
      <div className="division w-full  h-px bg-gray-600"></div>
      <div className="text-white flex flex-col h-100 w-full items-top  ">
        <div className="text-3xl font-bold text-gray-400 text-center   mb-10 mt-5">
          <span className="text-white">You fans can buy you a chai</span>
        </div>
        <div className="   flex flex-row items-start justify-around h-full w-full">
          <div className="flex flex-col justify-center items-center">
            <div className=" bg-white rounded-full object-cover flex flex-row items-center justify-center  ">
              <img
                className="bg-slate-400 rounded-full p-2 text-black"
                width={200}
                height={250}
                src="/man.gif"
                alt=""
              />
            </div>
            <span className="text-white font-bold text-2xl ">
              Fund Yourself
            </span>
            <div className="text-center mt-3 mb-3">
              <span className="text-white font-light text-xl  ">
                Your fans are available to help you
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center ">
            <div className=" bg-white rounded-full object-cover flex flex-row items-center justify-center  ">
              <img
                className="bg-slate-400 rounded-full p-2 text-black"
                width={200}
                height={250}
                src="/coin.gif"
                alt=""
              />
            </div>
            <span className="text-white font-bold text-2xl">Fund Yourself</span>
            <div className="text-center mt-3 mb-3">
              <span className="text-white font-light text-xl   ">
                Your fans are available to help you
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center h-auto">
            <div className=" bg-white rounded-full object-cover flex flex-row items-center justify-center  ">
              <img
                className="bg-slate-400  rounded-full p-2 text-black"
                width={200}
                height={250}
                src="/group.gif"
                alt=""
              />
            </div>
            <span className="text-white font-bold text-2xl">
              Fans wants to help
            </span>
            <div className="text-center mt-3 mb-3">
              <span className="text-white font-light text-xl">
                Your fans are available to help you
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="division w-full  h-px bg-gray-600"></div>

      <div className="text-3xl font-bold text-gray-400 text-center mt-5">
        <span className="text-white"> Learn more about us</span>
      </div>
      <div className=" flex flex-col items-center justify-around  h-100  w-full ">
        <div className="text-[18px] font-bold text-white text-center mr-18 ml-18 ">
          <span>
            At Get Me A Chai, we are dedicated to supporting developers,
            creators, and influencers by connecting them with their supporters.
            Our platform enables individuals to fund their projects and ideas,
            providing a space where creativity and innovation can thrive.
          </span>
        </div>
        <div className="text-[18px] font-bold text-white text-center   mr-18 ml-18  ">
          <span>
            Our mission is to empower talented individuals by facilitating
            financial support, allowing them to focus on what they do best –
            creating. Whether you're a developer coding the next big app, a
            content creator making engaging videos, or an influencer sharing
            your passion, Get Me A Chai is here to help you achieve your goals.
          </span>
        </div>
        <div className="text-[18px] font-bold text-white text-center mr-18 ml-18 ">
          <span>
            We believe in the power of community and the impact of collective
            support. By providing a platform for patrons to contribute, we aim
            to transform dreams into reality and foster a culture of creativity
            and innovation.
          </span>
        </div>
      </div>
    </>
  );
}
