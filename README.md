# React Assessment

## The project root contains such as NPM, Node, React, Yarn, Git.

## How To Start

### One Click Download on Github Repository
`git clone https://github.com/ashishpathak29/react-assessment.git `

### Setup

Running the app in dev mode is fully featured including _hot module reloading_:

`npm install`

`npm start`

To run in production mode:

`npm run build:prod && npm run start:prod`

## How To Test

### Jest

`npm test`

### Note: Here I do one thing API URL. Fetch URL received and subscribe to the data. But it's third party library sot it gives error when I deployed on Heroku Server. The error was Cross-Browser Heroku block the API not called. So I did another way to get JSON and store in the file and read that file. So now this code is easily deployed on the Heroku server. I also attached error screen shot in this repository. 
 I gave two solution. 
 1) we fetch data from third party API with help of axios.(code commented on feed.js)
 2) Create data.Json and read that file with help of axios.

## const API_BASE = 'http://hn.algolia.com/api/v1/';
## const API_BASE = './data.JSON';
 */

 ### Live Link: https://react-assessment-hackernews.herokuapp.com/ 


 