# sj-playground

Nina Sjöberg & Camilla Tranberg

https://sj-playground-pond.herokuapp.com/


Project built during our internship at Pond / Ec Sthlm, a playground for designers and the tech team to be able to try new features in the future. We wrote our own code for this playground, it has not been taken from the existing code at the official website. The design is made by Pond /Ec Sthlm, (also at the official website).


## Techniques
- React (create react app)
- Redux


## Getting started:
`npm i && npm start`



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
