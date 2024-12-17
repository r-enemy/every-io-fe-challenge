## Candidate Notes

Hi, welcome to my implementation of every.io challenge!

It took me ~4h of work to get to this state.

What I think is worth mentioning:

* Aside a helper function (`id()`), all implemented code will be inside the `feat` folder.
* I followed the Container pattern for componentization. `TodoContainer` guards all the state management while 
  all other components are pure visual.
* State management: I created a `useTodos` hook with a simple and stable interface to manage all the state. 
  Since it's a simple state, I just used the default `useState` to manage it. If the app grows, we could easily replace 
  it with a more robust tool (e.g. react query, redux, zustand, etc.)
* Test: I added a few tests that I think make more sense in this particular case: the state management hook and the 
  container, so: 1. replacing the state management tool is safer and 2. the feature works as expected.


To get it running, just run `yarn` to install node dependencies and then `yarn start`.

Thank you!

---

## Video Intro
https://www.loom.com/share/3df7fcb5424644638b00724cb178e2ff

* [Getting Started with the Every.io engineering challenge.](#getting-started-with-the-everyio-engineering-challenge)
  * [The biggest factor will be your code:](#the-biggest-factor-will-be-your-code)
  * [Requirements](#requirements)
  * [Quick Start](#quick-start)
* [Original CRA README below](#original-cra-readme-below)
  * [Getting Started with Create React App](#getting-started-with-create-react-app)
  * [Available Scripts](#available-scripts)
    * [`yarn start`](#yarn-start)
    * [`yarn test`](#yarn-test)
    * [`yarn build`](#yarn-build)
    * [`yarn eject`](#yarn-eject)
  * [Learn More](#learn-more)


# Getting Started with the Every.io engineering challenge.
Thanks for taking the time to complete the Every.io code challenge. Don't worry, it's not too hard, and please do not spend more than an hour or two. We know you have lots of these to do, and it can be very time consuming. If you feel like adding fancy animations, or getting all hip and fresh with the design, go ahead, but it won't earn you any extra points.
## The biggest factor will be your code:
1. How readable, is your code.
2. How did you organize your components.
3. Are there any bugs.

## Requirements

[See the prototype for an example.](https://www.figma.com/proto/kd49ArXbBt0vi1kBSLkmC1/Code-Challenge?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1)

You will be creating a basic todo list, with the following functionality.
1. The list has 3 states. Each represented by a column. Similar to Trello.
   1. `Todo`
   2. `In Progress`
   3. `Done`
2. Each list item has a right and left arrow button.
   1. The right arrow moves the list item from:
      1. `Todo` to `In Progress`
      2. `In Progress` to `Done`
   2. The Left arrow moves the list item from
      1. `Done` to `In Progress`
      2. `In Progress` to `Todo`
3. If the list in the in the `Todo` column, the left button should be disabled
4. If the list is in the `Done` column, the right button should be disabled.
5. There should be form with a text input below the buttons. When the user submits the form, the text from the text input should be added to a new todo item in the `Todo` column.

## Quick Start
1. npm install
2. npm run start
3. open your browser to http://localhost:3000
4. Delete the `h2` from the component in `src/ChallengeComponent.tsx`
5. Add your code to that component.


-----------------------
# Original CRA README below
## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
