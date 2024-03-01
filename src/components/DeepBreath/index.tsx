// in ActionProvider.jsx
import React, { useState } from 'react';

interface Props {
  triggerNextStep: any
}

const DeepBreath = (props: any) => {

  const [done, setDone] = useState(false)

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div style={{
      display: done ? "none" : "block"
    }} onClick={() => {
      props.triggerNextStep({ "trigger": "6" })
      setDone(true)
    }} className="absolute top-0 left-0 w-full h-full z-[999999999] bg-[#00000090]">
      <div className="absolute top-1/2 left-1/2 ]transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
        <div className="h-24 w-24 rounded-full bg-green-500 animate-breathe" />
        <p className="text-white">Breathe in</p>
        <p className="text-white">and breathe out...</p>
      </div>
    </div>
  );
};

export default DeepBreath;