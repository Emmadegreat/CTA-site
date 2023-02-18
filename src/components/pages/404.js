import React from 'react'

const Error404 = () => {

    const style = {
        padding: '4rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center'

    }
  return (
      <div style={style}>
          <h1>
              Page does not exit !
          </h1>

    </div>
  )
}

export default Error404
