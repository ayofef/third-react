import React, { Suspense} from "react";
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
import Leagues from "../../components/Leagues/Leagues";
import ImageView from "../../components/Sections/GalleryGrid/ImageView/ImageView";

const DataPolicies = React.lazy(() => import("../DataPrivacy/DataPrivacy"));
const CuflInternational = React.lazy(() => import("../Cufl/CuflInternational/CuflInternational"));

function Layout(){

    return(
        <React.Fragment>
            <ToTop />
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/index" exact component={Landing} />
                
                <Route path="/cufl" exact component={CuflPage} />
                <Route path="/cufl/cufl-international" exact render={() =><Suspense fallback={<Loader/>}><CuflInternational /></Suspense>} />
                <Route path="/cufl/cufl/cufl-international" exact render={() =><Suspense fallback={<Loader/>}><CuflInternational /></Suspense>} />
                <Route path="/cfai" exact component={CfaiPage} />
                <Route path="/iufu" exact component={IufuPage} />
                <Route path="/wscai" exact component={WscaiPage} />

                <Route path="/latest-news" exact component={Blogs} />
                <Route path="/latest-news/search" exact component={BlogSearch} />
                <Route path="/latest-news/:slug" exact component={BlogSingle} />

                <Route path="/cufl/leagues" exact component={Leagues} />
                <Route path="/cufl/leagues/:slug" exact component={Leagues} />
                <Route path="/cufl/leagues/:slug/fixtures-result" exact component={Leagues} />
                <Route path="/cufl/leagues/:slug/standings" exact component={Leagues} />

                <Route path="/data-policies" exact render={() =><Suspense fallback={<Loader/>}><DataPolicies /></Suspense>} />
                {/* <Route component ={Landing} />  */}
            </Switch>
        </React.Fragment>
    );

};

export default Layout;