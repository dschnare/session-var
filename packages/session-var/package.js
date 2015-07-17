Package.describe({
  name: 'dschnare:session-var',
  version: '0.1.0',
  summary: 'A convenient ReactiveVar-like wrapper for session variables.',
  git: 'https://github.com/dschnare/session-var.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('session', 'client');
  api.addFiles('session-var.js', 'client');
  api.export('SessionVar', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('session', 'client');
  api.use('dschnare:session-var', 'client');
  api.addFiles('session-var-tests.js', 'client');
});
