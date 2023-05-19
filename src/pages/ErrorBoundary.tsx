import React from 'react';
import Bugsnag from '@bugsnag/js';
import BugsnagPluginReact, {
     BugsnagPluginResult, 
    } from '@bugsnag/plugin-react';


const apiKey = '451e1df4122c750f5e0725ecbc4c7514';

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

