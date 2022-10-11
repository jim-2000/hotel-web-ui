import React from 'react'

const TestimonalItem = () => {
  return (
    <div class="bg-transparent p-4 flex flex-col item-center justify-center w-full">
      <img class="rounded-full shadow-lg mb-6 mx-auto"
        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" 
        alt="avatar" style={{width: '150px'}}
      />
    <div class="flex flex-wrap justify-center item-center">
      <div class="grow-0 shrink-0  space-y-2 text-center w-full lg:w-8/12 px-3">
      <h5 className="text-xl font-extrabold text-text my-5 "><span className="text-text">Maria</span> Keti</h5>  
        <p class="text-text font-body mb-6">           
          ligula sed lorem tincidunt dignissim. Nam sed cursus lectus. Proin non rutrum
          magna. Proin gravida, justo et imperdiet tristique, turpis nisi viverra est, nec
          posuere ex arcu sit amet erat. Sed a dictum sem. Duis pretium condimentum nulla.
        </p>
        
      </div>
    </div>
  </div>
  )
}

export default TestimonalItem