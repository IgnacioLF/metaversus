"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "../components";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col `}
    >
      <TypingText title="| People on the world" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite to play together in the same
            world
          </>
        }
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h0[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-[35%] left-[20%] w-[20%] h-[30%] p-[6px] rounded-[24px] hidden md:block bg-[#5d6680] z-10">
          <img
            src="map1.png"
            alt="people"
            className="w-full h-full rounded-[24px]"
          />
          <div className="lg:block absolute bottom-11 ml-4 hidden">
            <div className="flex items-center">
              <img
                src="client1.png"
                alt="client"
                className="w-[24px] h-[24px] z-30"
              />
              <img
                src="client2.png"
                alt="client"
                className="absolute left-3 w-[24px] h-[24px] z-20"
              />
              <img
                src="client3.png"
                alt="client"
                className="absolute left-6 w-[24px] h-[24px] z-10"
              />
              <span className="text-white text-[12px] ml-7">
                + 264 has joined
              </span>
            </div>
          </div>
          <div className="text-white font-bold absolute bottom-0 mb-4 ml-4">
            The Upside Down
          </div>
        </div>
        <div className="absolute map-gradient top-[35%] left-[20%] w-[20%] h-[30%] p-[6px] hidden md:block rounded-[24px] z-90" />
        <div className="absolute top-[7%] left-[60%] w-[20%] h-[30%] p-[6px] hidden md:block rounded-[24px] bg-[#5d6680] z-10">
          <img
            src="map2.png"
            alt="people"
            className="w-full h-full rounded-[24px]"
          />
          <div className="lg:block absolute bottom-11 ml-4 hidden">
            <div className="flex items-center">
              <img
                src="client1.png"
                alt="client"
                className="w-[24px] h-[24px] z-30"
              />
              <img
                src="client2.png"
                alt="client"
                className="absolute left-3 w-[24px] h-[24px] z-20"
              />
              <img
                src="client3.png"
                alt="client"
                className="absolute left-6 w-[24px] h-[24px] z-10"
              />
              <span className="text-white text-[12px] ml-7">
                + 264 has joined
              </span>
            </div>
          </div>
          <div className="text-white font-bold absolute bottom-0 mb-4 ml-4">
            Hawkins Labs
          </div>
        </div>
        <div className="absolute map-gradient2 top-[10%] left-[60%] w-[20%] h-[30%] p-[6px] hidden md:block rounded-[24px] z-90" />
      </motion.div>
    </motion.div>
  </section>
);

export default World;
