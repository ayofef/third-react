import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ToTop from "../../components/Ui/ToTopAlways/ToTopAlways";




import Landing from "../Landing/Landing";
import CuflPage from "../Cufl/Cufl";
import CfaiPage from "../Cfai/Cfai";
import IufuPage from "../Iufu/Iufu";
import WscaiPage from "../Wscai/Wscai";
import Blogs from "../Blog/Blogs";
import BlogSingle from "../Blog/Blog-single";


class Layout extends Component {


    render () {


        return(
            <React.Fragment>
                <ToTop />
                <Switch>
                    <Route path="/" exact component ={Landing} />
                    <Route path="/index" exact component ={Landing} />
                    <Route path="/cufl" exact component ={CuflPage} />
                    <Route path="/cfai" exact component ={CfaiPage} />
                    <Route path="/iufu" exact component ={IufuPage} />
                    <Route path="/wscai" exact component ={WscaiPage} />
                    <Route path="/blog" exact component ={Blogs} />
                    <Route path="/blog/:slug" exact component ={BlogSingle} />
                    {/* <Route component ={Landing} />  */}
                </Switch>
            </React.Fragment>
        );
    }
};

export default Layout;