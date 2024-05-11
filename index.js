'use strict';

const AWS = require('aws-sdk');

const cognito = new AWS.CognitoIdentityServiceProvider();

module.exports.handler = async (event) => {
    const body = JSON.parse(event.body);
    const params = {
        AuthFlow: 'USER_PASSWORD_AUTH',
        ClientId: '2p31g69ds1obkus7eucka63c82',
        AuthParameters: {
            USERNAME: body.username,
            PASSWORD: body.password
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
