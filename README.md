We've created a simple Vue app which loads 100 posts from an open test API. Your task is to extend the app and create new components using this documentation as guideline.
This app uses vue, vue-router, element-ui and ES6 syntax so if you have any problems refer to the corresponding documentations.

### To install this app
    * install Node.js LTS
    * install Vue CLI globally
    ``` npm install -g @vue/cli ```
    * install project modules
    ``` npm install ```
    * run the project
    ``` npm run serve ```

### Components

  1. Post List
  * we've created a simple component that loads posts in a table component (see: Element UI)
  * allow the user to sort the table by any field
  * allow the user to select one or multiple posts and add them to a favorites list
  * save the favorites list to localStorage

  2. Favorites
  * create a favorites component that displays the list with all favorite posts
  * load the favorites list from localStorage (should work after refresh)
  * allow the user to remove favorites from the list

  3. Post View
  * create a component that loads the specific post
  * render the post content and title
  * iterate and display all comments related to that post

### Styling

  * apply basic but consistent styling across all components
  * handle the mobile/tablet views respectively
  * change the default font for all elements with a google font of your choice

### Bonus
  * allow the user to reorder Favorites (make sure that it works after refresh)
  * create a component which will create a new post (see api ref)

### API REFERENCE

  * load 100 posts
  ``` GET http://jsonplaceholder.typicode.com/posts/ ```
  * load post with comments
  ``` GET http://jsonplaceholder.typicode.com/posts/:id/comments ```
  * create a new post
  ``` POST http://jsonplaceholder.typicode.com/posts/ ```

