import { useState } from "react";


function AvatrName() {
    const [avatar,setAvatar]=useState("JK")
        return (
        <>
            <div className="Avatar_info">
                <div className="circle"><span className="avatar">{avatar}</span></div>
                <p className="Avatar-name">Jhanna Khachatryan</p>
            </div>
        </>
    );
}

export default AvatrName