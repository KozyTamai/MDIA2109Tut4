import React from 'react';
import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header';
import Input from '../comps/Input';
import Chat from '../comps/Chat';
import ChatPage from '../pages/ChatPage';

export default {
    title: "My comps",
    component: CustomButton
}

export const MyCustomButton = () => <CustomButton />;


function CancelClick() {
    alert("Cencel");
}

export const MyCustomButtonWithOptions = () => <CustomButton 
CustomButton text="Cancel" color="gray" onClick={CancelClick}/>;

export const MyHeader = () => <Header />;
export const MyInput = () => <Input />;
export const MyInputWithPlaceholder = () => <Input 
placeholder = "Custome Placeholder"/>;
export const MyChat = () => <Chat />;
export const MyChatPage = () => <ChatPage />;



/*export const MyCustomButton = () => <CustomButton />;

export const PageWithCustomButtons = () => <div>
    <Header fontSize={24} color="rgb(224, 103, 235)" />
    <Header fontSize={20} color="rgb(230, 125, 240)" />
    <CustomButton text="Cancel" color="gray" onClick={CancelClick}/>
    <CustomButton text="OK" color="rgb(145, 233, 104)" onClick={OkClick}/>
    <CustomButton text="Submit" color="rgb(255, 132, 200)" onClick={OkClick}/>
    <CustomButton text="Menu" color="rgb(132, 237, 255)" onClick={OkClick}/>
</div>

function CancelClick() {
    alert("Cencel");
}

function OkClick() {
    alert("OK!");
}
*/
