import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommonDetail';
import ApprovalCard from './ApprovalCard';

const App = () =>{

    return (
    
        <div className="ui container">
            <ApprovalCard>
                <h2>WARNING!</h2>
                <div>Are yo usure you want to do this?</div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 6 AM" comment="Nice blog!!" userAvatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Today at 4 AM" comment="Nice blog!!" userAvatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Pam" timeAgo="Today at 5 PM" comment="Nice blog!!" userAvatar={faker.image.avatar()}/>
            </ApprovalCard>
        </div>
    
    );

}


ReactDOM.render(<App />, document.querySelector('#root'));

//props system is used to pass data fro mmtahe paratne to the cheild component.goal: customize the child to show desired behaviour

//configuration to the compoenent is tnothing but giving the props to the compoenent to display the corrrect info

//passing from paarent to child and using the passed props in the compoenent

//author in the child component is used in the place where we want to display the author name by using the props variable which is 
//given as the argument for the components function

//inside approal card are the children of the approval card that is why props .cjhildren is used

//A component is a funcation or a class which is use dto display html contaent and handles feedback from the user

//functional compoenets are used to show simple content without much logic jsx and props





