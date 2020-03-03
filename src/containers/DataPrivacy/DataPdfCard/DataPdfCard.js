import React from "react";
import pdf from "../../../assets/images/pdf.svg";
import sprite from "../../../assets/images/sprite.svg";
import PropTypes from "prop-types";


function DataPdf (props){

    return(
        <div className="data-pdf">
            <a href={props.file} className="data-pdf__link" download target="_blank" rel="noopener noreferrer">
                <img src={pdf} alt={props.desc} className="data-pdf__img"/>
                <p className="data-pdf__text">
                    {props.desc}
                    <span className="data-pdf__text-span">
                        <svg className="download-button-icon">
                            <use xlinkHref={sprite + "#icon-download"}></use>
                        </svg>
                    </span>
                </p>
            </a>
        </div>

    );
}


DataPdf.propTypes = {
    file: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
}

export default DataPdf;