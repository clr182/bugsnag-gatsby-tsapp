import React from 'react';
import Bugsnag from '@bugsnag/js';
import BugsnagPluginReact, {
     BugsnagPluginResult, 
    } from '@bugsnag/plugin-react';


const apiKey = 'd6f10d9e0331127fae23b181fc0e9355';

Bugsnag.start({
  apiKey,
  plugins: [new BugsnagPluginReact()],
  releaseStage: 'Debug',
});

const BugsnagPlugin = Bugsnag.getPlugin(
  'react',
) as BugsnagPluginReactResult;

const ErrorBoundary = BugsnagPlugin.createErrorBoundary(React);

export default ErrorBoundary;

