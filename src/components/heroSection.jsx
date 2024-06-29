import React from "react";
import "../styles/heroSection.css";
import Image from "next/image";
import Text from "./ui/text";
import Narada from "./ui/bot.png";
import Link from "next/link";

function HeroSection() {
  return (
    <div className="  hero-class" id="heroSection">
      <div className="md:p-12 lg:pt-48 lg:p-36 p-6  pt-36 md:pt-36 h-full">
        <div className="flex flex-col lg:flex-row items-center   md:gap-24 gap-12 lg:gap-12 h-full">
          <div className="flex  flex-col gap-5 md:gap-5  lg:gap-7">
            <div className=" lg:text-5xl font-semibold md:text-4xl text-3xl md:leading-[40px] lg:leading-[76px] text-white font-primary ">
            Integrated Calendar Agent, <br></br> <Text bold>Sync, Schedule, Simplify</Text>
            </div>
            <div className=" lg:text-lg md:text-xl text-sm lg:leading-8 md:leading-7 text-white font-primary">
            Introducing a clever little bot that lets you dance between Google Calendar and Discord like a skilled choreographer, ensuring that your events are always in sync, no matter where in the world you might be. Let our bot weave together the fabric of your days, making timekeeping a seamless, breezy experience.
            </div>
            <div className=" flex items-center gap-2">
              <div className=" ">
                <div className=" flex items-center  ">
                  <div className="group  cursor-pointer flex items-center justify-center">
                    <div
                      className={` group flex items-center justify-center bg-gradient-to-tr from-[#fc907e] to-[#9f6eed] w-[200px] md:w-[230px] lg:w-[230px] h-[50px] lg:h-[54px] p-[3px] rounded-[48px]`}
                    >
                      <div
                        className={` px-5 py-3  bg-[#151218] rounded-[48px] transition-all ease-in-out duration-200 group-hover:-scale-0 w-[200px]  md:w-[230px] lg:w-[230px] h-[46px] lg:h-[50px]`}
                      ></div>
                    </div>
                    <div
                      className={` absolute left-[40px] md:left-[65px] lg:left-[157px]`}
                    >
                      <Link target="_blank" href={"https://discord.com/oauth2/authorize?client_id=1256480590539132972"}>
                      <div className="text-[#fc907e] bg-gradient-to-br font-bold from-[#fc907e] to-[#9f6eed] bg-clip-text text-transparent transition-all  group-hover:text-white duration-300 ease-linear text-xs md:text-sm lg:text-sm ">
                      Your turn to chat with Narada
                      </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className=" overflow-clip lg:overflow-visible ">
            <div className=" relative w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] lg:w-[600px] lg:h-[600px] ">
              <Image fill src={Narada} alt="Narada_img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
