import React from 'react'

const Container = props => {
  return (
    <div className='px-4 max-w-7xl mx-auto'>{props.children}</div>
  )
}

export default Container