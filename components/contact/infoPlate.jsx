import React from 'react'

const InfoPlate = ({icons,text}) => {
  return (
    <div className='flex items-center '>
        <div>
             {icons}
        </div>
        <div>
            <h4 className='text-base text-text'>{text}</h4>
        </div>
    </div>
  )
}

export default InfoPlate