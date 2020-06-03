import React from 'react';

import sprite from "../../../assets/images/sprite.svg";
import classes from "./Pagination.module.scss";


const Pagination = ({prev, next, currentPage, totalPages}) => {



    return (
        <div className={classes.Pagination}>
            {currentPage > 1 ? 
                <i className={[`${classes.Pagination__Btn}`, `${classes.Pagination__Btn_Back}`].join(" ")} onClick={prev}>
                    <svg className={[classes.Pagination__Icon, "arrow-left-button-icon"].join(" ")}>
                        <use xlinkHref={sprite + "#icon-chevron-left"} />
                    </svg>
                    Page {currentPage - 1}
                </i> : null
            }

            {currentPage < totalPages ? 
                <i className={[`${classes.Pagination__Btn}`, `${classes.Pagination__Btn_Forward}`].join(" ")}  onClick={next}>
                    Page {currentPage + 1}
                    <svg className={[classes.Pagination__Icon, "arrow-button-icon"].join(" ")}>
                        <use xlinkHref={sprite + "#icon-chevron-right"} />
                    </svg>
                </i> : null
            }
        </div>
    )
}

export default Pagination;