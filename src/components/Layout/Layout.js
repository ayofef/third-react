import React, { Component } from "react";
import { Route,Switch } from "react-router-dom";

import Aux from "../../hoc/Auxilliary";



import Landing from "../Landing/Landing";
import CuflPage from "../Cufl/Cufl";
import CfaiPage from "../Cfai/Cfai";
import IufuPage from "../Iufu/Iufu";
import WscaiPage from "../Wscai/Wscai";



class Layout extends Component {


    render () {
        return(
            <Aux>
                {/* <main>
                    {this.props.children}
                    
                </main> */}
                {/* <Landing /> */}

                <Route path="/" exact component ={Landing} />
                <Switch>
                    <Route path="/index" exact component ={Landing} />
                    <Route path="/cufl" exact component ={CuflPage} />
                    <Route path="/cfai" exact component ={CfaiPage} />
                    <Route path="/iufu" exact component ={IufuPage} />
                    <Route path="/wscai" exact component ={WscaiPage} />
                    <Route component ={Landing} />
                </Switch>
            </Aux>
        );
    }
};

export default Layout;