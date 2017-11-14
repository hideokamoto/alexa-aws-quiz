# Alexa Skill Example

## setup

```
$ git clone git@github.com:hideokamoto/alexa-nodejs-helloworld.git
$ cd alexa-nodejs-helloworld
$ npm i
```

## deploy to aws

```
$ npm prune --production
$ serverless deploy --region us-east-1
$ npm install
```

## test

```
$ npm test
```

## lint

```
$ npm run lint

or

$ npm run lint -- --fix
```

## Setup the skills
Go to [https://developer.amazon.com](https://developer.amazon.com) and setup an Alexa Skills.
