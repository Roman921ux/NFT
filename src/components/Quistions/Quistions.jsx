import React, { useState } from 'react'

function Quistions() {
   const [isRaedMore, setIsReadMore] = useState(true);

   const toggleReadMore = () => {
      setIsReadMore(!isRaedMore);
      console.log(isRaedMore)
   }
   return (
      <div className="quistions__item">
         <div className="q__block">
            <span>How choose my nomber?</span>
            <p onClick={toggleReadMore}>+</p>
         </div>
         <div className={isRaedMore ? 'q__answer_close' : 'q__answer_open'}>
            <span>
            Your nomber change with 
            Lorem ipsum dolor sit amet, consectetur 
            adipisicing elit. Mollitia, illum?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, ipsum?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis 
            veniam culpa voluptatem itaque nam neque quae, 
            soluta voluptates assumenda sapiente!
            </span>
         </div>

      </div>
   )
}

export default Quistions