import React from 'react';


const ApprovalCard = (props) => {

return (

        <div className="card">

            <div className="content">{props.children}</div>
            <div className="extra content">

                <div className="ui buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Reject</div>
                </div>
            </div>
        </div>

);

};

export default ApprovalCard;