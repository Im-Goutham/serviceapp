import Amplify, { Auth } from 'aws-amplify';

const configure = () => {
    Amplify.configure({
        Auth: {
          identityPoolId: 'us-east-1:ad218342-dd3c-44b4-9b2f-5ef6f32a9593', //REQUIRED - Amazon Cognito Identity Pool ID
          region: 'us-east-1', // REQUIRED - Amazon Cognito Region
          userPoolId: 'us-east-1_0w8HiAiOP', //OPTIONAL - Amazon Cognito User Pool ID
          userPoolWebClientId: '7bn0joa6stsrjdgmamvmvpudl4', //OPTIONAL - Amazon Cognito Web Client ID
      }
  });
};


export {
    configure
};