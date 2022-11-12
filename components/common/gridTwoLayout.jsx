import React from 'react'

const GridTwoLayout = ({firstLayout, SecondLayout,css}) => {
  return (
    <div className={`grid grid-cols-1 gap-3 md:grid-cols-2 container ${css}`}>
        <div>
            {firstLayout}
        </div>
        <div>
            {SecondLayout}
        </div>
    </div>
  )
}

export default GridTwoLayout