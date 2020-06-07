import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import ToTop from "../../components/Ui/ToTopAlways/ToTopAlways";
import Loader from "../../components/Ui/Loader/Loader";
import Landing from "../Landing/Landing";
import CuflPage from "../Cufl/Cufl";
import CfaiPage from "../Cfai/Cfai";
import IufuPage from "../Iufu/Iufu";
import WscaiPage from "../Wscai/Wscai";
import Blogs from "../Blog/Blogs";
import BlogSearch from "../Blog/SearchBlog";
import BlogSingle from "../Blog/Blog-single";


const DataPolicies = React.lazy(() => import("../DataPrivacy/DataPrivacy"));
const Leagues = React.lazy(() => import("../../components/Leagues/Leagues"));
const Cups = React.lazy(() => import("../../components/Leagues/Cups"));

const CuflInternational = React.lazy(() => import("../Cufl/CuflInternational/CuflInternational"));
const CuflResources = React.lazy(() => import("../Cufl/Resources/CuflResources"));
const CfaiResources = React.lazy(() => import("../Cfai/Resources/CfaiResources"));
const IufuResources = React.lazy(() => import("../Iufu/Resources/IufuResources"));
const WscaiResources = React.lazy(() => import("../Wscai/Resources/WscaiResources"));




function Layout(){

    return(
        <React.Fragment>
            <ToTop />
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/index" exact component={Landing} />
                
                <Route path="/cufl" exact component={CuflPage} />
                <Route path="/cufl/international-team" exact component={() =><Suspense fallback={<Loader/>}><CuflInternational /></Suspense>} />
                <Route path="/cufl/resources" exact component={() =><Suspense fallback={<Loader/>}><CuflResources /></Suspense>} />

                <Route path="/cfai" exact component={CfaiPage} />
                <Route path="/cfai/resources" exact component={() =><Suspense fallback={<Loader/>}><CfaiResources /></Suspense>} />

                <Route path="/iufu" exact component={IufuPage} />
                <Route path="/iufu/resources" exact component={() =><Suspense fallback={<Loader/>}><IufuResources /></Suspense>} />

                <Route path="/wscai" exact component={WscaiPage} />
                <Route path="/wscai/resources" exact component={() =><Suspense fallback={<Loader/>}><WscaiResources /></Suspense>} />

                
                <Route path="/latest-news/:whose" exact component={Blogs} />
                <Route path="/latest-news/:whose/search" exact component={BlogSearch} />
                <Route path="/latest-news/:whose/:slug" exact component={BlogSingle} />
                

                
                <Route path="/cfai/cups/:slug" exact component={() => <Suspense fallback={<Loader/>}><Cups /></Suspense>} />
                <Route path="/iufu/cups/:slug" exact component={() => <Suspense fallback={<Loader/>}><Cups /></Suspense>} />
                <Route path="/wscai/cups/:slug" exact component={() => <Suspense fallback={<Loader/>}><Cups /></Suspense>} />
                


                <Route path="/cufl/leagues" exact component={() => <Suspense fallback={<Loader/>}><Leagues /></Suspense>} />
                <Route path="/cufl/leagues/:slug" exact component={() => <Suspense fallback={<Loader/>}><Leagues /></Suspense>} />
                <Route path="/cufl/leagues/:slug/fixtures-result" exact component={() => <Suspense fallback={<Loader/>}><Leagues /></Suspense>} />
                <Route path="/cufl/leagues/:slug/standings" exact component={() => <Suspense fallback={<Loader/>}><Leagues /></Suspense>} />

                <Route path="/data-policies" exact component={() =><Suspense fallback={<Loader/>}><DataPolicies /></Suspense>} />
                <Route component ={Landing} /> 
            </Switch>
        </React.Fragment>
    );

};

export default Layout;