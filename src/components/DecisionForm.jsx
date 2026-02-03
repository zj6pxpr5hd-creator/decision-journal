import { useState } from "react";

function DecisionForm({addDecision}){

    const [title, setTitle] = useState("");
    const [reason, setReason] = useState("");

    const saveDecision = () => {
        addDecision({
            title: title,
            reason: reason
        })
        setTitle("");
        setReason("");
    }



    return(
        <section className="form-container">
            <input value={title} type="text" placeholder="Title" onChange={(e)=>{setTitle(e.target.value)}}/>
            <input value={reason} type="text" placeholder="Reason" onChange={(e)=>{setReason(e.target.value)}}/>
            <input type="text" placeholder="Confidence Level"/>
            <button className="save-button" onClick={saveDecision}>Save</button>
        </section>
    )


}

export default DecisionForm;