'use strict';

const AWS = require('aws-sdk');

const cognito = new AWS.CognitoIdentityServiceProvider();

module.exports.handler = async (event) => {
    console.log(event);
    
    const params = {
        AuthFlow: 'USER_PASSWORD_AUTH',
        ClientId: '7g4pnon4v0drq1jbvfb6t6smc',
        AuthParameters: {
            USERNAME: event.username,
            PASSWORD: event.password
        }
    };
    
    try {
        const result = await cognito.initiateAuth(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify(result),
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: err.message }),
        };
    }
};
