function DecisionCard({ decision }){
    return(
    <div className="decision-card">
        <h3>{decision.title}</h3>
        <div className="confidence-section">
            <p><span className="small-title">Confidence level:</span>    {decision.confidence}</p>
        </div>
        <div className="reason-section">
            <p><span className="small-title">Reason:</span>    {decision.reason}</p>
        </div>

    </div>
    )
}

export default DecisionCard;