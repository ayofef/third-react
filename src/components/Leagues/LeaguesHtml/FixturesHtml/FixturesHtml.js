import React from "react";
import PropTypes from "prop-types";




function fixturesHtml (props) {

    return(
        <section className="fixtures">
            <div className="fixtures__division">
                <h1 className="fixtures__header">{props.whose}</h1>
                {props.children}
            </div>
        </section>
    );

}

fixturesHtml.propTypes = {
    whose: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}


export default fixturesHtml;