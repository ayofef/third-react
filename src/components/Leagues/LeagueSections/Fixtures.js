import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import Loader from "../../Ui/Loader/Loader";
import Error from "../../Ui/Error/Error";


const getFixtures = gql`
    query{
        cuflPremierDivisions{
            id,
            group,
            date
            venue,
            teamRightName,
            teamRightLogo{
                id,
                url
            }
            teamRightScore,
            teamLeftName,
            teamLeftLogo{
                id,
                url
            }
            teamLeftScore
        }
    }

`;

function LatestImage () {
    // const { loading, error, data } = useQuery(getFixtures);

    // if (loading) return <Loader /> ;
    // if (error) return <Error />;    

    return(

        <section className="fixtures">
            <div className="fixtures__division">
                <h1 className="fixtures__header">North Premier Division</h1>
                <div className="fixtures-card">
                    <div className="fixtures-card__dates">
                        <p>2PM</p>
                        <p className="fixtures-card__dates--day">07 Sept</p>
                        <p>Stadium X</p>
                </div>
                <div className="fixtures-card__details">
                    <div className="fixtures-card__details--box fixtures-card__details--box-first">
                        <p className="fixtures-card__details--text">Lorem, ipsum. </p>
                        <img src="../img/indesign.png" alt="Team 1" className="fixtures-card__details--img" />
                        <p className="fixtures-card__details--score">0</p>
                    </div>
                    <p className="fixtures-card__vs">-</p>
                    <div className="fixtures-card__details--box fixtures-card__details--box-second">
                        <p className="fixtures-card__details--score">0</p>
                        <img src="../img/indesign.png" alt="Team 1" className="fixtures-card__details--img" />
                        <p className="fixtures-card__details--text"> Lorem, ipsum dolor.</p>
                    </div>
                </div>
                </div>
            </div>
        </section>


    );
}


export default LatestImage;