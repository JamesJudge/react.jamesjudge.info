import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(
    document.getElementById('root')
);

function AboutPage() {
    return (
        <>
            <h1>About</h1>
            <img className="avatar" />
            <p>Hello there.<br />How do you do?</p>
        </>
    );
}

root.render(<AboutPage/>);
