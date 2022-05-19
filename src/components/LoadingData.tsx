import React from 'react'

function LoadingData() {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>

    )
}

export default LoadingData