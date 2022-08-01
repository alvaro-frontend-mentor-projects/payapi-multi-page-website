import React from 'react'
import bgCircle from '../../assets/shared/desktop/bg-pattern-circle.svg'

const Footer = () => {
  return (
    <div className='flex flex-col h-[353px] bg-fmMirageBlue overflow-hidden relative mx-[-24px]'>

    <img
        className="absolute max-w-[1000px] w-[780px]  bottom-[-602px] left-[-202px]"
        src={bgCircle}
        alt=""
    />

    </div>
  )
}

export default Footer