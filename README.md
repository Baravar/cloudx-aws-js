# Shop Angular Cloudfront

Angular version: ~12.

Repo maintainers:

- Maintained by [Artsiom Baravik](https://github.com/Baravar)
- All credits for the original Fork source to [Sergey Gultyayev](https://github.com/gultyayev)

Deployed to AWS using Serverless:
- S3-website URL: http://ng-store-app.s3-website-us-east-1.amazonaws.com/ (expected to see 403 Access Denied)
- CloudFront URL: https://d3lc6lhdpvhm1c.cloudfront.net/ (accessible Globally)

## The purpose

The repository was created to have an Angular version of e-shop for EPAM NodeJS AWS course. At the same time we strive to make this repository follows best practices so it may be used as a starter for new projects with all the necessary toolings already set up.

## NodeJS AWS course integration

All the necessary API endpoints are in the environments files `environment.ts` (for dev builds). Also it contains feature flags to enable/disable endpoints invocations from within the app so to ensure that you don't get errors for not implemented API endpoints.

## Contribution

Create an issue with the detailed description of the improvement/issue.

If you would like to help implementing some feature, you should ask the maintainers for approval so to ensure that the feature is desired in the repository and no efforts go wasted.

## Get up and running

Prerequisites: NodeJS v16.x and higher

Follow the steps:

- git clone
- npm i
- ng serve
