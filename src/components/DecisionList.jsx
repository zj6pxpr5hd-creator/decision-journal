function  DecisionList({ decisions }){

    return(
        <section className="decision-list">
            <h2>Your Past Decisions</h2>
            <ul>
                {decisions.slice().reverse().map(
                    (decision, index) =>{
                        const decisionNumber =  decisions.length - index;
                        
                        return(
                            <>
                            <h6>{decisionNumber}  Title: {decision.title}</h6>
                            <li key={index}>
                                Reason: {decision.reason}
                            </li>
                            </>
                        )
                    }
                )}
            </ul>
        </section>
    )

}


export default DecisionList;