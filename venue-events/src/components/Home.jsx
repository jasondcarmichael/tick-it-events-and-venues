import React from 'react';
import Carousel3d from "../example/Carousel3d";
import CarouselCard from "../example/CarouselCard";

import Carousel1 from "../example/images/Carousel1.png";
import Carousel2 from "../example/images/Carousel2.png";
import Carousel3 from "../example/images/Carousel3.png";
import Carousel4 from "../example/images/Carousel4.png";
import Venues from './Venues';

export default function Home () {


    
      
  return (
    <div className="home-container">
      <div className='home'
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            background:
              "radial-gradient(47.45% 302.83% at 97.45% 85.92%, rgba(89, 76, 244, 0.48) 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(41.07% 57.4% at 8.28% 4.34%, rgba(76, 103, 244, 0.61) 0%, rgba(76, 103, 244, 0.02) 100%), rgb(21, 15, 44)",
          }}
          >
              {/* <h1> Welcome To Venue List </h1> */}
        <div style={{ width: 1100, height: "65vh" }}>
          <Carousel3d
            cards={[
              {
                key: 1,
                content: <CarouselCard title="War Paradise" image={Carousel1} />,
              },
              {
                key: 2,
                content: <CarouselCard title="Town Star" image={Carousel2} />,
              },
              {
                key: 3,
                content: (
                  <CarouselCard title="Defense Heroes" image={Carousel3} />
                ),
              },
              {
                key: 4,
                content: (
                    <CarouselCard title="Defense Heroes" image={Carousel3} />
                  ),
                }
            ]}
            offset={2}
          />
        </div>     
      </div>
        <div>
            {/* <Venues /> */}
            <h1>Venues</h1>
        </div>
    </div>
    
  )
}