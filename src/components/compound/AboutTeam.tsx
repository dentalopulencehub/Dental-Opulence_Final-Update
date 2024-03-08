import React from "react";
import { AboutTeamCard } from '../molecule'
import { team } from '../../../constants'

const AboutTeam = () => {
  return (
    <div className=" w-full">
      <div className="bg-white w-full lg:px-[100px] sm:px-[40px] px-[20px] py-[80px] xl:gap-0">
        <h2 className="text-[34px] text-[#161616] font-Pangram-Regular" >Meet Our Team</h2>
        <div className="flex flex-wrap gap-10 mt-12">
            {team.map((team, index) => (
                <AboutTeamCard key={index} {...team} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
