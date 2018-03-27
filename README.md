# sj-playground

https://sj-playground-pond.herokuapp.com/

## develop
```
npm start
```

## deployment
to deploy you first need to add heroku as a git remote then push to master on heroku
heroku will then deploy your app to the url above
do this command once
```
git remote add heroku https://git.heroku.com/sj-playground-pond.git
git fetch heroku
```
if the fetch works you can then use
```
npm run deploy
```
to deploy

you will need to install  heroku CLI and have access to ponds heroku account
login to heroku with ponddigitallicenser@pondsthlm.com
this script was used for deployment on heroku
https://github.com/mars/create-react-app-buildpack
