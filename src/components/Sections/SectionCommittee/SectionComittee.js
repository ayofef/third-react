import React from "react";
import PropTypes from "prop-types";



function SectionFutsal(props) {

    return(
        <section className={["committee", `${props.identifier + "-committee"}`].join(" ")} id={props.identifier + "-committee"}>
            <div className="container">
                <h2 className={["u-heading", `${props.identifier + "-heading"}`].join(" ")}>{props.header}</h2>
                <div className="committee__container">
                    {props.children}
                </div>
            </div>
        </section>
    
    );

}

SectionFutsal.propTypes = {
    identifier: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default SectionFutsal;










        