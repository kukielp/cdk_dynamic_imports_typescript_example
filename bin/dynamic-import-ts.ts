#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { DynamicImportTsStack } from '../lib/dynamic-import-ts-stack';

async function runStack() {
  const stage = process.env.stage
  const configFile = `./configs/${stage}/config`
  const stackConfig = await import(configFile)

  const app = new cdk.App();
  new DynamicImportTsStack(app, 'DynamicImportTsStack', { 
    stack_env: stackConfig
    
  })
}

runStack();