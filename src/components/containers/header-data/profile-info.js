import React, { useState } from 'react';


const ProfileInfo = ({ user, signOut }) => {

    const [show, useShow] = useState(false);
    const status = show ? 'show' : '';

    return (
        <div className="dropdown show">
            <img src={user.logo} onClick={() => useShow(!show) } className="rounded-circle dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded={show} style={{ width: "40px", height: "40px", cursor: "pointer" }} />
            <div className={"dropdown-menu " + status} x-placement="bottom-start" style= {{position: "absolute", willChange: "transform", top: "100%", left: "-280%", transform: "translate3d(0px, 40px, 0px);"}}>
                <a className="dropdown-item" href={ "/user-trips/"+user.id }>My trips</a>
                <div className="dropdown-item" style={{cursor:"pointer"}} onClick={() =>  signOut() }><strong>Sign out</strong></div>
            </div>
        </div>
       // 
    )
}

export default ProfileInfo;