import React from "react"


const withClassHOC = (WrappedCompnent, className) => {


    return props => (

        <div className={className}><WrappedCompnent  {...props}></WrappedCompnent></div>
    )
}

export default withClassHOC