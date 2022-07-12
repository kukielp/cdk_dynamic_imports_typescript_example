export const config = {
    lambdaRam: 128,
    logRetentionInDays: 1,
    taskDefinitionCpu: 256,
    taskDefinitionMemory: 512,
    deploymentEnv: 'development',
    envVars: { 
        task: {
            'JWT_ISSUER-URI': 'https://adv-dev.au.website.com/',
            LOG_LEVEL: 'info'
        },
        dataDog: false
    }
}