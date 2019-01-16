import React from 'react';

class GoogleAuth extends React.Component{
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '428413434019-i3frf70euv7loop502taandola3jma2a.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }

    render() {
        return <div>Google Auth</div>
    };
}

export default GoogleAuth;
