# Requirements

- nodejs
- npm

## Steps to install project

- install `nodejs`
- go to root directory
- `npm install`
- `npm run start` - serves files
- `npm run test` - runs tests

## Testing

All reference images are inside `/refs`.
After run of test script, a new images gets generated from your code and compared with refs.
If everything is fine, tests are green.
If there is an error you can see difference in `/.tmp/diff` folder.
After correction you can run `npm run test` again to ensure the issue is fixed.

You can test separate tasks with the following commands:
- `npm test-layouting`
- `npm test-simple-web-site`
- `npm test-students-list`