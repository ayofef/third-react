import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";


import EmptyMast from "../../components/Ui/Masthead/EmptyMast";
import Footer from "../../components/Ui/Footer/Footer";
import MoreStories from "../Blog/MoreStories";
import PrivacyCard from "./DataPdfCard/DataPdfCard";
import Error from "../../components/Ui/Error/Error";
import Loader from "../../components/Ui/Loader/Loader";

const getPolicies = gql`
    query{
        dataPolicies{
        dataProtection{
            id,
            fileName,
            url
        },
        privacyStatement{
            id,
            fileName,
            url
        },
        
        termOfUse{
            id,
            fileName,
            url
        },
        cookiesPolicy{
            id,
            fileName,
            url
        },
        accessRequest{
            id,
            fileName,
            url
        }
        }
    }

`;


function DataPrivacy (){

    const { loading, error, data } = useQuery(getPolicies);
    console.log(data);
    
    

    if (loading) return <Loader /> ;

    if (error) return <Error /> ;

    return(
        <React.Fragment>
            <EmptyMast />
            <div className="blog-single">
                <div className="container">
                    <div className="blog-single__container">
                        <div className="blog-single__card">
                            <h3 className="blog-single__card--text-heading cufl-heading">
                                FAI Data Policies  
                            </h3>
                            <div className="data__pdfs">
                                
                                <PrivacyCard file={data.dataPolicies[0].dataProtection.url} desc={data.dataPolicies[0].dataProtection.fileName}/>
                                <PrivacyCard file={data.dataPolicies[0].privacyStatement.url} desc={data.dataPolicies[0].privacyStatement.fileName}/>
                                <PrivacyCard file={data.dataPolicies[0].termOfUse.url} desc={data.dataPolicies[0].termOfUse.fileName}/>
                                <PrivacyCard file={data.dataPolicies[0].cookiesPolicy.url} desc={data.dataPolicies[0].cookiesPolicy.fileName} />
                                <PrivacyCard file={data.dataPolicies[0].accessRequest.url} desc={data.dataPolicies[0].accessRequest.fileName} />
                            </div>
                        </div>
                        <MoreStories />
                    </div>
                </div>
            </div>
            <Footer page="" activeCfai="" activeWscai="" activeIufu="" activeCufl=""/>
        </React.Fragment>

    );
}

export default React.memo(DataPrivacy);