import DecisionCard from "./DecisionCard";

function  DecisionList({ decisions }){

    return(
        <section className="decision-list">
            <h2>Your Past Decisions</h2>
            
                {decisions.slice().reverse().map(
                    (decision, index) =>{
                       return(
                        <DecisionCard decision={decision} index={index}/>
                       );
                    }
                )}
            
        </section>
    )

}


export default DecisionList;