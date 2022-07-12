import { Stack, StackProps, aws_lambda, aws_apigateway } from 'aws-cdk-lib';
import { Construct } from 'constructs';

interface wesProps extends StackProps {
  stack_env?: any
}

export class DynamicImportTsStack extends Stack {
  constructor(scope: Construct, id: string, props?: wesProps) {
    super(scope, id, props);
    const enviroment = props?.stack_env
    
    console.log(enviroment)
    console.log(enviroment.config.lambdaRam)

    const hello = new aws_lambda.Function(this, 'HelloHandler', {
      runtime: aws_lambda.Runtime.NODEJS_14_X,    // execution environment
      code: aws_lambda.Code.fromAsset('lambda'),  // code loaded from "lambda" directory
      handler: 'hello.handler',                // file is "hello", function is "handler"
      memorySize: enviroment.config.lambdaRam,
    });

    new aws_apigateway.LambdaRestApi(this, 'Endpoint', {
      handler: hello
    });

  }
}

