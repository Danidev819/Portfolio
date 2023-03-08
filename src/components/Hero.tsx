import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero: FC = () => {
  return (
    <motion.div
      className="py-12 px-8 md:px-24 flex flex-col items-center"
      layout
    >
      <div className="rounded-full overflow-hidden">
        <Image
          src="/profile.png"
          alt="Profile"
          width={150}
          height={150}
          priority={true}
        />
      </div>
      <h1 className="text-white text-2xl font-openSans font-bold mt-6">
        Hey, I'm Dani.
      </h1>
      <motion.p
        className="md:w-1/2 mx-auto text-center mt-6 text-white-secondary"
        animate={{
          opacity: 1,
        }}
        initial={{ opacity: 0 }}
      >
        I am a <span className="font-medium">Java developer</span> with expertise in <span className="font-medium">Minecraft coding</span>, I specialize in utilizing languages such as <span className="font-medium">Java and Kotlin</span>, as well as platforms such as <span className="font-medium">Spigot, Bukkit, Bungeecord, Waterfall, and Velocity</span> to create <span className="font-medium">top-of-the-line</span> Minecraft mods and servers.
        Additionally, I have experience with web development languages including <span className="font-medium">HTML, CSS, JavaScript, ReactJS, NextJS, TailwindCSS, and Bootstrap</span>, which allows me to create custom web-based solutions for Minecraft servers and related projects.
        Overall, my skillset is focused on creating <span className="font-medium">immersive Minecraft experiences</span> through a combination of technical expertise and creative problem-solving.
      </motion.p>
    </motion.div>
  );
};

export default Hero;
