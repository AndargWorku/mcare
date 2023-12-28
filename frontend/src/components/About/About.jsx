
import aboutImg from "../../assets/images/about.png"
import aboutCardImg from "../../assets/images/about-card.png"
import {Link} from "react-router-dom"
const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
            <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                <img src={aboutImg} alt=""/>
                <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
                    <img src={aboutCardImg} alt=""/>

                </div>

            </div>

      
      
       {/* ============about content======= */}
      
      <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
        <h2 className="heading">proud to be one of the nation best</h2>
        <p className="text__para">
          For 30 years in row U.S news and world report recognized us
          as one of the best public hospital as a nations and #1 in texas Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime libero vel dolorum voluptatem ullam veniam consequuntur voluptate atque beatae architecto perferendis unde magni dicta, tenetur aut! Voluptas reprehenderit temporibus laborum.
        </p>
        <p className="text__para mt-[30px]">
          our best is something we strive for each day,caring for our patients not looking back at what we accomplished but  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, velit praesentium laudantium maxime omnis ratione libero? Illum eius distinctio voluptatibus provident, perspiciatis beatae nihil, aliquid, quidem cupiditate odio tenetur voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam officiis esse, enim iure ipsam aliquid error dolor eaque, possimus laborum aperiam et provident modi laudantium reprehenderit odit doloremque magni veritatis.

        </p>
        <Link to="/">
          <button className="btn">learn More</button>
        </Link>

      </div>
        </div>

      </div>
    </section>
  )
}

export default About
