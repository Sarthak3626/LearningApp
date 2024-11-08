
import "./css/allFeedback.css"
function FeedbackDetails({FeedbackArray}) {
    return (
        <>
        <div className="feedback-container">
            {FeedbackArray.map((item) => (
                <div className="feedback-card" key={item._id}>
                    <div className="feedback-header">
                        <h3>{item.userName}</h3>
                        <span className="feedback-rating"> {item.userRating} </span>
                    </div>
                    <div className="feedback-body">
                        <p className="feedback-email">{item.userEmail}</p>
                        <p className="feedback-remark">{item.userRemark}</p>
                    </div>
                </div>
            ))}
        </div>
        </>
        
    )
}

export default FeedbackDetails
