const { cdk } = require('projen');
const project = new cdk.JsiiProject({
  author: 'Eric Ellingson',
  authorAddress: 'god@eric.wtf',
  defaultReleaseBranch: 'main',
  name: 'bunpro-types',
  repositoryUrl: 'https://github.com/god/bunpro-types.git',
  npmRegistryUrl: 'https://npm.pkg.github.com',
  workflowBootstrapSteps: [
    {
      name: 'Authenticate to private GitHub npm registry',
      run: `cat > .npmrc <<EOF
//npm.pkg.github.com/:_authToken=\${{ secrets.PRIVATE_NPM_REGISTRY_TOKEN }}
@e-e:registry=https://npm.pkg.github.com/
EOF
`,
    },
  ],

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

project.addGitIgnore('.npmrc');


project.synth();