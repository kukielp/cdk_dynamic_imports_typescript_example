export const config = {
    lambdaRam: 512,
    logRetentionInDays: 30,
    taskDefinitionCpu: 1024,
    taskDefinitionMemory: 4096,
    deploymentEnv: 'Production',
    envVars: { 
        task: {
            'JWT_ISSUER-URI': 'https://adv-prod.au.website.com/',
            LOG_LEVEL: 'info'
        },
        dataDog: true
    }
}