import React, {useEffect, useState} from 'react';

const Randomizer = () => {
   const [num, setNum] = useState(0);

   useEffect(() => {
       const timer = setInterval(() => {
           setNum(Math.floor(Math.random() * 100) + 1)
       }, 1000)

       return () => {
           clearInterval(timer)
       }
   })

    return (
        <div>
            {num}
        </div>
    );
};

export default Randomizer;