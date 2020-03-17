import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Error from "../../../Ui/Error/ErrorMini/ErrorMini";
import GraphImg from "graphcms-image";
import Backdrop from "../../../Ui/Backdrop/Backdrop";



function ImageView() {
    const params = useParams();
    const [show, setShow] = useState(true);
    const history = useHistory();
    const handle = params.handle;
    console.log(handle)
  
    if (!handle) return <Error />;
  
    return (
        <div style={{ width: "100%", height: "100%"}}>
            <Backdrop show={true} clicked={() => { setShow(!show); history.goBack(); }} />
            <img src={`https://media.graphcms.com/resize=w:800,fit:max/output=format:jpg/${handle}`} alt={handle} style={{ width: "50%", margin: "0 auto", display: "block"}}/>
        </div>
    );
  }

export default ImageView;