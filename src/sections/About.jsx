import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
      navigator.clipboard.writeText('andrewkimsvhs@gmail.com');
      setHasCopied(true);
  
      setTimeout(() => {
        setHasCopied(false);
      }, 2000);
    };

  return (
    <section className="c-space my-20" id="about">


        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/pfp.jpg" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">About Me</p>
              <p className="grid-subtext">
              I am a Computer Science graduate passionate about web and mobile development. I aim to leverage my skills 
              to craft engaging digital experiences that enhance user satisfaction and engagement.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications sush as: HTML, CSS, JavaScript, React, Kotlin, Unity, Python, Figma, Adobe Creative Suite,
                Adobe Photoshop, Adobe Premiere
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              
              
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                //labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in California, USA and open to remote work worldwide.</p>
              <a href="https://www.linkedin.com/in/andrew-kim-872021209/" target="_blank" rel="noopener noreferrer" className="w-full mt-10 inline-block">
              <Button name="Let's Connect" isBeam container Class="w-full mt-10"/>
              </a>

              
            </div>
          </div>
        </div>


        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
              My mission is to craft meaningful digital experiences that empower users. From designing user-centric interfaces 
              to writing clean, scalable code, I love turning ideas into reality. I value collaboration and open communication,
               ensuring every project I work on meets and exceeds expectations.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium .text-lightblue_gradient text-white">andrewkimsvhs@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

</div>
    </section>
  )
}

export default About