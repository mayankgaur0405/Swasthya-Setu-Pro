import React from "react";
import Image from 'next/image';


type doctorAgent = {
  id: number;
  specialist: string;
  description: string;
  image: string;
  agentPrompt: string;
};

type props = {
  doctorAgent: doctorAgent;
};

function DoctorAgentCard({ doctorAgent }: props) {
  return (
    <div>
      <Image
        src={doctorAgent.image}
        alt={doctorAgent.specialist}
        width={200}
        height={300}
        className="w-full h-{250px} object-cover rounded-xl"
      />
    </div>
  );
}

export default DoctorAgentCard;
