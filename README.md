# Actio: Actor Career Management
An audition sourcing and tracking app for actors.

## Demo

To see this app in production, visit https://nf-actio-frontend.herokuapp.com/.

## Using the app

Login or create an account. Once you are logged in, links will appear in the top navigation.

Each user has Projects, Companies, Auditions, and Opportunities. Projects are associated with a company, and auditions are associated with a project.

### Auditions

Clicking "Auditions" in the navigation will bring you to a list of all of your auditions. Existing auditions can be filtered by company name, project name, and audition type.

From the same page, you can create a new audition - either associated with an existing project, or a new project but an existing company, or a new company and project all together. Auditions must have a category - these are pre-defined. There's also some required details to fill in: what the auditioner is to bring (often a headshot, resume, maybe a musical instrument, or possibly something esoteric like aerial silks), and what to prepare (a monologue, or prepared sides, a song...). Optionally, you can indicate what you plan to use or did use at the audition - which of the 3 monologues or songs in your book you decided to present.

Once an audition is created, you can add a 'Report' about that audition. Click under any of the categories to open the form for editing. Record details like what you did in the audition room, who was in the room watching the audition (the 'auditors'), and who you met in the waiting room. You can also indicate from here if you've heard back on this project yet - you might have been offered or accepted the role, or turned it down - or more likely, not cast.

### Your Book

Actors have prepared monologues, songs, and other elements that are repeatedly used at auditions for different companies or projects. It can be quite difficult to remember who has seen what piece, six months and 50+ auditions later. Actio can keep track of each of your standard audition pieces so you know who has seen which piece and when.

### Opportunities

Opportunities are auditions from external sources like Playbill based on states that you indicate an interest in via the 'Settings' tab. Every night, Actio searches those sources and whenever you go to the 'Opportunities' tab it will provide you with any previously displayed opportunities and any new ones since you last checked. Opportunities can be archived if they aren't interesting or applicable. The original posting can be viewed in an iFrame. And from each opportunity you can create an audition which will then appear in your auditions list.

### Companies & Projects

If you need to edit a company or project name, or want one quick and easy way to change a project status, the Companies and Projects tab is the place to head. It is fairly simple: you can edit a company name, a project name, or a project's result, all from one location.

### Dashboard

Arguably the heart of Actio. From the "Dashboard" tab, you can view auditions by project. It's another place to change the status of a project, as well. Reports can be edited from here for each audition, just as on the 'Auditions' tab. Finally, it will give you feedback on how you are doing in your audition season: how many projects are you being seen for, how many auditions have you set up, what is your booking percentage, how are you doing on reporting, and how many projects are you still under consideration for (a.k.a. how many projects don't have a result reported just yet)

## Running Actio Locally

To run locally, clone this repo and the backend (https://github.com/adigitalnative/actor_manager_backend).  Start the backend server with `rails s -p 3001`. You will need to have Postgres server running locally, or change database settings accordingly. In the frontend, go to `/src/redux/actions/settings.js` and switch the commented line. Running `npm start` will start the local server on port 3000.

Alternatively, you can leave the settings as is, skip the backend clone and startup, and use the local frontend against the deployed backend.

## Live version

To view a live version of the site, visit https://nf-actio-frontend.herokuapp.com/

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## Credits

Jacqueline Chenault (@adigitalnative)
