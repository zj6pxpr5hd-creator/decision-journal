function DecisionCard({ decision }){
    return(
    <div className="decision-card">
        <h3>{decision.title}</h3>
        <h4 className="confidence-section">Confidence Level: {decision.confidence}</h4>
        <div className="reason-section">
            <h3>Reason: </h3> <p>{decision.reason}</p>
        </div>


    </div>
    )
}

export default DecisionCard;