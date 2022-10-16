Table of Contents
- 

- [Red-Onion](#red-onion)
  - [Basic Project Setup](#basic-project-setup)
    - [Project Setup 01 (`Basic Setup`)](#project-setup-01-basic-setup)
    - [Project Setup 02 (`Image - Icons - JSON data`)](#project-setup-02-image---icons---json-data)
    - [Project Setup 03 (`create Routes`)](#project-setup-03-create-routes)
    - [Project Setup 04 (`firebase config`)](#project-setup-04-firebase-config)
    - [Project Setup 05 (`firebase Auth`)](#project-setup-05-firebase-auth)
    - [Project Setup 06 (`Advance Setup`)](#project-setup-06-advance-setup)
    - [Project Setup 07 (`Deploy or Hosting`)](#project-setup-07-deploy-or-hosting)
  - [Inefficient Regular Expression Complexity in nth-check (`Fix vulnerabilities`)](#inefficient-regular-expression-complexity-in-nth-check-fix-vulnerabilities)
    - [`Solutions`](#solutions)


# Red-Onion

## Basic Project Setup

### Project Setup 01 (`Basic Setup`)

- ___Create React App___
- ___Install & Setup___ React Router
  - Wrap `<App />` component by using `<BrowserRouter>` in ___src/index.js___ file
  - Create basic ___Components___ such as Home, Header, Login, NotFound
  - Maintain ___File-Structure___ or ___Folder-Structure___ in your App
  - Then, ___Add some Routes___ in `src/App.js` file
- Set `_redirects` file in ___public___ folder
- Create ___markdown___ file for documentation
  - Create `___Steps___.md` file inside the ___project___ folder
- Install ___React-Bootstrap___ and Add ___Bootstrap CDN Link___ inside the ___index.html___ file
- Add ___title___ and set ___favicon.ico___ in the ___index.html___ file
- ___CSS style___ added

**[🔼Back to Top](#table-of-contents)**

### Project Setup 02 (`Image - Icons - JSON data`)

- ___images___ folder added inside the ___src___ folder
- Images ___resize & optimize___ for using
- Image ___hosting___ & use, Because ___folder URL will be broken___ all the times.
- Setup or create ___JSON data___ in the ___public___ folder 
- Icons uses from ___FontAwesomeIcons___, ___HeroIcons___, ___React-Icons___ etc.
- Install ___FontAwesomeIcons___ and use in your App

**[🔼Back to Top](#table-of-contents)**

### Project Setup 03 (`create Routes`)

- Modify the ___Header___ component to make easy routing
  - ___Responsive Navber___ added from ___React-Bootstrap___
  - Responsive Header component and ___sticky top___
- Modify the ___Footer___ component
  - ___Dynamic Date___ added
- Modify the ___Not Found___ component
- Modify the ___Home___ component

**[🔼Back to Top](#table-of-contents)**

### Project Setup 04 (`firebase config`)

- Create a ___Firebase project___ and ___Register___ my app
- Install the ___SDK___ and ___initialize Firebase___
  - ___Install & Setup___ Firebase
- Implement the ___Firebase Configuration___
- Adding Custom Environment Variables: (___Set Environment Variables___ for Firebase Config)

**[🔼Back to Top](#table-of-contents)**

### Project Setup 05 (`firebase Auth`)

- ___Get Form data___ in 3 different ways:
  - ___State declare & onBlur EventHandler___
  - ___useRef hook___
  - ___event.target.email.value___
- Implement ___Email/Password___ authentication from ___firebase___ or ___react-firebase-hooks___
- Implement ___Additional Sign-in Providers___ from ___firebase___ or ___react-firebase-hooks___
- Implement ___SignOut___
- ___Verify Email___ and ___Profile update___
  - Display name and Async await

**[🔼Back to Top](#table-of-contents)**

### Project Setup 06 (`Advance Setup`)

- ___Setup Dynamic Route___ and Access ___route params___
  - ___Reading URL Params___ (Steps): 
    - Setup: `route` - `parameter-&-click` - `getId`
    - Setup: `Nested Route` - `navigate` - `get InvoiceId`
- ___Navigate___ to single services ___according to id___
- Implement ___Protected Route___ or ___RequireAuth___
- Implement ___Authenticate Redirect___
  - Implement ___Redirect to SignIn___
- ___Fix___ the ___Redirect to SignIn___ when ___reload___
- ___Error Handling___
  - Related to login, accept terms & conditions, and Reset Password

---

- Create ___Custom Hooks___
- Create ___Active Link___
- ___Conditional Rendering___, ___Conditional CSS Class___ and ___Conditional disabled___
- Display Toast message using ___React-Toastify___
- ___Responsive Design___ by using Vanilla CSS (___Media-Query___), ___Bootstrap___, ___React-Bootstrap___, ___Tailwind___

**[🔼Back to Top](#table-of-contents)**

### Project Setup 07 (`Deploy or Hosting`)

- ___Deploy___ or ___Hosting___ in Netlify & Firebase

**[🔼Back to Top](#table-of-contents)**

## Inefficient Regular Expression Complexity in nth-check (`Fix vulnerabilities`)

- [Help, npm audit says I have a vulnerability in react-scripts!](https://github.com/facebook/create-react-app/issues/11174 "facebook/create-react-app - github")
- [github Dependabot alert: Inefficient Regular Expression Complexity in nth-check](https://stackoverflow.com/questions/71282206/github-dependabot-alert-inefficient-regular-expression-complexity-in-nth-check "stackoverflow.com")

**[🔼Back to Top](#table-of-contents)**

### `Solutions`

`npm audit` says there's a warning about ___vulnerabilities___ in my project
Open `package.json`. You will find this:

``` JSON
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3"
  }
```

Take `react-scripts` and move it to `devDependencies` (if you **don't have** it, **create it**):

``` JSON
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  },
  "devDependencies": {
    "react-scripts": "4.0.3"
  },
```

Then, ensure you run `npm audit --production` rather than `npm audit`.

This will fix your warnings. 

> `Notes:` Not necessary to use `npm audit fix` or `npm audit fix --force`. It can be ___added more vulnerabilities issues___ rather than fix the issues.

**[🔼Back to Top](#table-of-contents)**

