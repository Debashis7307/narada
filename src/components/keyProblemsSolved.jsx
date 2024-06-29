import Image from "next/image";
import React from "react";
import Icon1 from "../../public/assets/icon1.svg";
import Icon2 from "../../public/assets/icon2.svg";
import Icon3 from "../../public/assets/icon3.svg";
import Icon4 from "../../public/assets/icon4.svg";
function KeyProblemsSolved() {
  return (
    <div className="md:px-12  lg:px-36 px-6  md:my-24 lg:my-36 " id="features">
      <div className="  flex flex-col gap-16 md:gap-24  lg:gap-24 justify-center items-center my-16 ">
        <div className=" font-primary text-center text-2xl md:text-4xl lg:text-4xl font-[700]">
          Four key Features provided by Narada Bot
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-auto gap-4 ">
          <div className="bg-lavender w-full h-full  rounded-2xl break-words p-5 md:p-5 lg:p-7">
            <div className=" flex flex-col gap-5">
              <div className=" relative w-12 md:w-16 lg:w-16 h-12 md:h-16 lg:h-16">
                <Image fill src={Icon1} alt="icon1" />
              </div>
              <div className=" flex flex-col gap-5">
                <div className=" font-primary text-2xl font-semibold">
                  Event-Sync-Snap
                </div>
                <div className=" font-primary text-lg leading-7 font-light">
                  This feature streamlines Discord and Google Calendar
                  integration by harnessing the power of Composio&apos;s robust
                  APIs, facilitating rapid and secure event synchronization
                  across platforms for an effortless scheduling experience.
                </div>
              </div>
            </div>
          </div>
          <div className="bg-lavender w-full h-full  rounded-2xl break-words p-5 md:p-5 lg:p-7">
            <div className=" flex flex-col gap-5">
              <div className=" relative w-12 md:w-16 lg:w-16 h-12 md:h-16 lg:h-16">
                <Image fill src={Icon2} alt="icon1" />
              </div>
              <div className=" flex flex-col gap-5">
                <div className=" font-primary text-2xl font-semibold">
                  Timezone-Adapt-Control
                </div>
                <div className=" font-primary text-lg leading-7 font-light">
                  This feature automatically adjusts event times based on each
                  user&apos;s location, providing more accurate and consistent
                  scheduling while ensuring seamless collaboration across time
                  zones.
                </div>
              </div>
            </div>
          </div>
          <div className="bg-lavender w-full h-full  rounded-2xl break-words p-5 md:p-5 lg:p-7">
            <div className=" flex flex-col gap-5">
              <div className=" relative w-12 md:w-16 lg:w-16 h-12 md:h-16 lg:h-16">
                <Image fill src={Icon3} alt="icon1" />
              </div>
              <div className=" flex flex-col gap-5">
                <div className=" font-primary text-2xl font-semibold">
                  Calendar-Swift-Updates
                </div>
                <div className=" font-primary text-lg leading-7 font-light">
                  This feature empowers users with efficient event editing and
                  modification capabilities within Discord, ensuring
                  instantaneous propagation of changes to their Google Calendar.
                </div>
              </div>
            </div>
          </div>
          <div className="bg-lavender w-full h-full  rounded-2xl break-words p-5 md:p-5 lg:p-7">
            <div className=" flex flex-col gap-5">
              <div className=" relative w-12 md:w-16 lg:w-16 h-12 md:h-16 lg:h-16">
                <Image fill src={Icon4} alt="icon1" />
              </div>
              <div className=" flex flex-col gap-5">
                <div className=" font-primary text-2xl font-semibold">
                  Cal-Cord Clean Sweep
                </div>
                <div className=" font-primary text-lg leading-7 font-light">
                  It expedites calendar decluttering by granting users the
                  ability to effortlessly remove unwanted events from their
                  Google Calendar through straightforward Discord commands,
                  saving time and hassle.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeyProblemsSolved;
