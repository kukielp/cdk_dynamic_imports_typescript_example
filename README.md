This small example will enable you to Dynamicly swap the imports required when deploying between stages.

Configurations for enviroment stages live in ./configs/{stage} currently there is dev and prod

To run this example, clone the repo

```
git clone git@github.com:kukielp/cdk_dynamic_imports_typescript_example.git
```

install dependancies
```
cd cdk_dynamic_imports_typescript_example && npm i
```

Export a stage
```
export stage=dev 
or
export stage=prod
```

and deploy the stack
```
cdk deploy
```

You can chop and change between enviroment in the example, to confirm the changes look at the aws console or use the aws cli to determin that each deployment is taking into consideration the stage enviroment and altering the amoutn of ram assigned to the sample lambda function being deployed.

Clean up
```
cdk destroy
```


## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
