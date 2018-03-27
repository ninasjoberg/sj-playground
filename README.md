# sj-playground

https://sj-playground-pond.herokuapp.com/

## develop
```
npm start
```

## Deployment

### Pre requirements
You will need to install [heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) and have access to Pond's Heroku account.
Login to Heroku with ponddigitallicenser@pondsthlm.com.

### First time
To deploy, you first need to add Heroku as a git remote and then push to master on Heroku.
Heroku will then deploy your app to the url above.
Run this command once.
```
git remote add heroku https://git.heroku.com/sj-playground-pond.git
git fetch heroku
```
If the fetch works you are ready to deploy.

### Deploy
```
npm run deploy
```

This script was used for deployment on Heroku
https://github.com/mars/create-react-app-buildpack
