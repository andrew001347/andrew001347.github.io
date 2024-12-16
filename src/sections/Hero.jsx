import {React, Suspense} from 'react';
import {Canvas} from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import HackerRoom from '../components/HackerRoom';
import CanvasLoader from '../components/CanvasLoader';
//import { Leva, useControls } from 'leva' //Helps with object placements.
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants/index.js';
//import Target from '../constants/Target.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Photoshop from '../components/Photoshop.jsx';
import Rings from '../components/Rings.jsx';
import HtmlLogo from '../components/HtmlLogo.jsx';
import HeroCamera from '../components/HeroCamera.jsx';

import Button from '../components/Button.jsx';


 const Hero = () => {
//     //Leva useControls
//     const x = useControls('HackerRoom', {
        
//         positionX:{value:2.5, min: -10, max:10},
//         positionY:{value:2.5, min: -10, max:10},
//         positionZ:{value:2.5, min: -10, max:10},

//         rotationX:{value:2.5, min: -10, max:10},
//         rotationY:{value:2.5, min: -10, max:10},
//         rotationZ:{value:2.5, min: -10, max:10},


//         scale:{value:2.5, min: -10, max:10},
    
    
    
    
    
//     })
    const isSmall = useMediaQuery({maxWidth: 440});
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});
    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    
  return (
    <section className='min-h-screen border-2 border-blue-500  w-full flex flex-col relative' >


        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
            <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>Hi, I am Andrew Kim <span className='waving-hand'>👋</span></p>
            <p className='hero_tag text-lightblue_gradient text-center'>UX/UI Designer & Programmer </p>
        </div>
        <div className='w-full h-full absolute inset-0'>
            {/* <Leva/> */}
            <Canvas className ='w-full h-full'>
                
                <Suspense fallback={<CanvasLoader/>}>

               
                
                <PerspectiveCamera makeDefault position={[0,0,30]}/>
                
                <HeroCamera isMobile={isMobile}>
                <HackerRoom 
                
               // scale={0.05} 
                position={sizes.deskPosition} 
                rotation={[0.2, -Math.PI, 0.0]}
                scale={sizes.deskScale}
                
                /> 
                </HeroCamera>


                <group>
                    <HtmlLogo position={sizes.targetPosition}/>
                    <ReactLogo position={sizes.reactLogoPosition} />
                    <Photoshop 
                position={sizes.cubePosition || [0, 2, 0]} 
                scale={sizes.cubeScale || 0.5} 
              />

              <Rings position={sizes.ringPosition}/>

                </group>
                
                <ambientLight intensity={1}/>
                <directionalLight position={[10,10,10]} intensity={0.5}/>
                
                


                </Suspense>
            </Canvas>


        </div>

        <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#contact" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>

    </section>
  );
};
export default Hero