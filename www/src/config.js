// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "qr1ic9kpa0t3pelunj9t27vns",     // CognitoClientID
  "api_base_url": "https://d48st4dep4.execute-api.ap-south-1.amazonaws.com/",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-ashishaw-todo-app.auth.ap-south-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1kfhu9earyeja.amplifyapp.com"                                      // AmplifyURL
};

export default config;
