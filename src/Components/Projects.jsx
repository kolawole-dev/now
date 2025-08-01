import React , { useState} from 'react';

React
const Projects = () => {

 const [color, setColor] = useState("olive"); 

 function RED(color) {
  
  setColor(color);
 }


  
  return (

      <div className="w-full min-h-screen duration-200 flex items-center justify-center">
        <div className="flex items-end justify-center h-[100vh] gap-5">
          <div className="w-[200px] text-center flex justify-between bg-white/80 rounded-lg p-4 shadow-lg" style={{backgroundColor: color}}>
              <button className="p-1 px-2 bg-red-600 rounded-lg" onClick={() => RED('red')}>Red</button>
              <button className="p-1 px-2 bg-blue-600 rounded-lg" onClick={() => RED('blue')}>Blue</button>
              <button className="p-1 px-2 bg-green-600 rounded-lg" onClick={() => RED('green')}>Green</button>
          </div>
         
        </div>
    </div>
  );
};

export default Projects;
