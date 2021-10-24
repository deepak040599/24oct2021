import React from 'react'

const ImageCard = ({image}) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
     <img src={image.webformatURL} alt="" className="w-full"></img>
     <div className="px-6 py-4">
       <div className="font-bold text-purple-500 text-xl mb-2">
          photo by {image.user}
       </div>
       <ul>
          <li>
            <strong>View:</strong>
            4000
          </li>
          <li>
            <strong>Downloads:</strong>
            400 
          </li>
          <li>
            <strong>Like:</strong>
            40
          </li>
       </ul>
     </div>
     <div className="px-6 py-4">
       <span className="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-grey-700 mr-2">
         TEXT 01
       </span>
  
       <span className="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-grey-700 mr-2">
         TEXT 01
       </span>
  
       <span className="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-grey-700 mr-2">
         TEXT 01
       </span>
     </div>
  
   </div>
    )
}

export default ImageCard;
