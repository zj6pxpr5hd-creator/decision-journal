import { useState } from "react";

function DecisionForm({addDecision}){

    const [title, setTitle] = useState("");
    const [reason, setReason] = useState("");
    const [confidence, setConfidence]  = useState("")
    const saveDecision = () => {
        addDecision({
            title: title,
            reason: reason,
            confidence: confidence
        })
        setTitle("");
        setReason("");
        setConfidence("");
    }

    return(
        <section className="form-container">
            <input value={title} type="text" placeholder="Title" onChange={(e)=>{setTitle(e.target.value)}}/>
            <input value={reason} type="text" placeholder="Reason" onChange={(e)=>{setReason(e.target.value)}}/>
            <select required={true} name="Confidence Level" id="Confidence Level" onChange={(e)=>{setConfidence(e.target.value)}}>
                <option value="" selected disabled>Confidence Level</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button className="save-button" onClick={saveDecision} disabled={title===""}>Save</button>
        </section>
    )


}

export default DecisionForm;