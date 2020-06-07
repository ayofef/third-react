import React, { useEffect, useState} from "react";
import PropTypes from "prop-types";
import FixturesCard from "./FixturesCard";
import EmptyData from "../../../Ui/EmptyArray/EmptyArray";
import Pagination from "../../../Ui/Pagination/Pagination";

import Loader from "../../../Ui/Loader/Loader";


function FixturesHtml (props) {

    const [fixturesData, setFixturesData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const fixturesPerPage = props.perPage;
    

    /* Logic for displaying current todos */
    const indexOfLastTodo = currentPage * fixturesPerPage;
    const indexOfFirstTodo = indexOfLastTodo - fixturesPerPage;
    
    /* Logic for displaying current todos */

    useEffect(() => {
        setFixturesData(props.data)
    },[props.data])


    const nextPage = (totalPages) =>{
        if(currentPage < totalPages){
            setCurrentPage(currentPage + 1)
        }
    }
    const prevPage = (totalPages) =>{
        if(currentPage > 1){
            setCurrentPage(currentPage - 1)
        }
    }


   if(fixturesData){
        const totalPages = Math.ceil(fixturesData.length / fixturesPerPage);
       
        const currentFixtures = fixturesData.slice(indexOfFirstTodo, indexOfLastTodo);

        
        return(
            <section className="fixtures">
                <div className="fixtures__division">
                    <h1 className="fixtures__header">{props.whose}</h1>
                    <div className="fixtures__content">
                    {
                    
                        fixturesData.length < 1 ? <EmptyData /> : currentFixtures.map((el) => (
                            
                            <FixturesCard 
                            key={el.id}
                            time={el.dateAndTime}
                            date={el.dateAndTime}
                            venue={el.venue}
                            homeName={el.homeTeamName}
                            homeLogo={el.homeTeamLogo.url}
                            homeScore={el.homeTeamScore}
                            awayScore={el.awayTeamScore}
                            awayLogo={el.awayTeamLogo.url}
                            awayName={el.awayTeamName}
                            
                        
                            />
                        ))
                    
                    }
                    </div>
                    {
                        fixturesData.length > fixturesPerPage ? <Pagination prev={() => prevPage(totalPages)} next={() => nextPage(totalPages)} currentPage={currentPage} totalPages={totalPages} /> : null
                    }
                </div>
                {/* {currentPage > 1 ? <p onClick={() => prevPage(totalPages)}>Prev</p> : null}
                {currentPage < totalPages ? <p onClick={() => nextPage(totalPages)}>Next</p> : null} */}
                
            </section>
        ); 
    }
    
   return <Loader />
    

}

FixturesHtml.propTypes = {
    data: PropTypes.array.isRequired,
    whose: PropTypes.string.isRequired
}


export default FixturesHtml;