import React from 'react'

function layout({children}) {
  return (
    <div className='flex w-full mx-auto h-[90vh]'>{children}</div>
  )
}

export default layout