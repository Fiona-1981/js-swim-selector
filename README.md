# Swim Selector

27/06/2023\
I originally started creating this in Java back in 2021 or 2022, but having\
become rusty in Java this year, thought I'd get it running in a PERN app, then\
perhaps try again in Java once my OU studies resume in October. And one can never\
have too much PERN practice!

The idea of this web app is that a swimmer can enter their PBs and the app will\
calculate the best distance for the swimmer to race. The calculation is based on\
current world records and if you excel in one distance more than another, this\
disproportion should become apparent when the calculation is carried out, and\
voila! Your strongest distance is revealed. 

The world record times are stored in the database, but the user input is not;\
it is used just for the calculation.

Now for the juicy bit... The calculation itself is simple, but in the design\
phase, in which I am currently, there are so many options.

Chew on this:\
The user interface where the user puts in their stroke, course (long or short),\
gender, and time. Should they put in, say, all three distances for their breastroke,\
then the calculator does its thing? Would we need to restrict what the user can put in?\
Say, the restriction could be one stroke only, all distances of that stroke,\
obviously only one course, gender and times. I feel a dropdown coming on... The \
joy of thinking aloud in a README!

Also, there are the data types to be considered. Text for stroke, smallint for\
distance, course and gender could be text, but could be boolean? Time is the most\
challenging, and indeed the most important data type. Trawling of the PostgreSQL\
documentation hasn't yielded anything yet. Time seems to mean "time of day" rather\
than "time it took". I'll figure it out. Interval is equally unhelpful. I\
need a quantity of time. Minutes, seconds and milliseconds. Three separate columns?\
This is important because the right bits of user input need to speak to the right\
bits of the database table.

How is such a simple calculation such a mind stretcher? 😂

I will be adding more and more races and distances over the coming weeks, but\
I am starting with the breastroke, becuase it's the best, obviously!

Update 28/06/2023: This is growing into a monster of possibilities.





You can see below the automated instructions for the front end.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)