import React from 'react'

function Banner() {
  return (
    <div className='flex items-end h-[20vh] md:h-[60vh] bg-cover bg-center bg-no-repeat'
      style={{
        backgroundImage:
          "url(https://assets-in.bmscdn.com/discovery-catalog/events/et00311714-ewdhvajezf-landscape.jpg)",
      }}
    >
      <div className='w-full text-center bg-gray-900/50 text-3xl font-bold text-white'>John Wick</div>
    </div>
  );
}

export default Banner