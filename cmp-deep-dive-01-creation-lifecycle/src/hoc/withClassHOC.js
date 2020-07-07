import React from "react"


const withClassHOC = (WrappedCompnent, className) => {


    return props => (

        <div className={className}><WrappedCompnent></WrappedCompnent></div>
    )
}

export default withClassHOC