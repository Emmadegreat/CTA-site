import React from 'react'

const Error404 = () => {

    const style = {
        padding: '10rem 4rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center'

    }
  return (
        <div style={style}>
            <h1>
                Woops! Page does not exist!
            </h1>

        </div>
  )
}

export default Error404
