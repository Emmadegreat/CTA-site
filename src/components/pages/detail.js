import React, { useParams } from 'react'

const Detail = () => {

    const params = useParams();
    return (
        <div>
            <p>{ params.account}</p>

        </div>
    )
}

export default Detail
