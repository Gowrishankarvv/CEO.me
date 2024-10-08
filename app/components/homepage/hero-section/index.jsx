// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare,FaInstagram } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";



function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            👋 it's me, <br />
            👨‍💻 {' '}
            <span className=" text-yellow-500">{personalData.name}</span>
            {` , Entrepreneur | Founder & CEO @ `}
            <span className=" text-[#e30955]">{personalData.designation}</span>
            .
          </h1>

          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.github}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href={personalData.facebook}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaMedium size={30} />
            </Link>
            <Link
              href={personalData.leetcode}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaInstagram size={30} />
            </Link>
            <Link
              href={personalData.twitter}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaTwitterSquare size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="https://wa.link/xqjaxx" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>

        </div>
        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">IGORAZA</span>
                <span className="mr-2 text-white">Entrepreneur</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">Gowrishankar V.V</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-rose-400">Soft Skills:</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">LeaderShip</span> 
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Problem Solving</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Strategic Thinking</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Decision Making</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-rose-400">Tech Skills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">Flutter</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Dart</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Git&Github</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Figma</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">JavaScript</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-red-500">Startups</span>
                <span className="text-orange-400">=</span>
                <span className="text-gray-400"> {'{'}</span>
                <span className="text-orange-400">{'('}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">IGORAZA:</span>
                <span className="text-orange-400">2020</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">VIZTAH:</span>
                <span className="text-orange-400">2021</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">KNOWLUMI:</span>
                <span className="text-orange-400">2024</span>
                <span className="text-gray-400">,</span>
                <span className="text-orange-400">{')'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-green-400">IGORAZA PRIVATE LIMITED:</span>
                <span className="text-orange-400">2023 JUNE </span>
                <span className="text-gray-400">{'() {'}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                <span className="text-gray-400">{`(`}</span>
              </div>
              <div>
             <span className="ml-12 lg:ml-24 text-cyan-400">www.</span>
            <a href="https://gowrishankarvv.in" className="mr-2 text-purple-400" target="_blank" rel="">gowrishankarvv.in</a>
           <span className="text-amber-300">&amp;&amp;</span>
           </div>
           <div>
             <span className="ml-12 lg:ml-24 text-cyan-400">www.</span>
            <a href="https://www.igoraza.com" className="mr-2 text-rose-600" target="_blank" rel="">igoraza.com</a>
           <span className="text-amber-300">&amp;&amp;</span>
           </div><div>
             <span className="ml-12 lg:ml-24 text-cyan-400">www.</span>
            <a href="https://www.viztah.com" className="mr-2 text-lime-400" target="_blank" rel="">viztah.com</a>
           <span className="text-amber-300">&amp;&amp;</span>
           </div> 

           <div>
             <span className="ml-12 lg:ml-24 text-cyan-400">www.</span>
            <a href="https://www.knowlumi.com" className="mr-2 text-green-400" target="_blank" rel="">knowlumi</a>
           <span className="text-amber-300">&amp;&amp;</span>
           </div>
           <div>
                <span className="ml-12 lg:ml-24 text-fuchsia-500">this.</span>
                <span className="mr-2 text-pink-100">are.website</span>
                <span className="mr-2 text-amber-300">&gt;=</span>
                <span className="text-teal-300">4</span>
              </div>
              <div><span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span></div>
              <div><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></div>
              <div><span className="ml-4 lg:ml-5 text-gray-400">{`};`}</span></div>
              <div><span className="text-gray-400">{`};`}</span></div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;