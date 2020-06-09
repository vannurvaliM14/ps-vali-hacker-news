This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Approach

This App has been implemented by consuming the api: https://hn.algolia.com/api  to fetch the news.
Search query search_by_date?tags=story is used to fetch latest feed and only stories. Later page number is passed to get the remaining data when user clicks on Previous or Next links provided at the bottom the page. Also included a Real time graph at the bottom of the page, It is Responsive and automatically gets updated when user Hides an item or updates upvote.

## Functionalities
    1. All Paginated URLs are bookmarkable
    2. User can hide News Item by clicking the hide link at the end of News Details column. 
       This hidden Item ID is stored in localstorage, hence browsed refresh cannot reset and cannot be viewed by User again.
    3. user can add as many upvotes as he wants. As the hide functionality, upvotes are also stored in
       localstorage and cannot be reset on browser refresh. Data in upvotes column and graph is updated
       in real time as user clicks on upvote icon
    4. App is responsive, and it has breakpoint to switch when it is used in small screen devices.
    5. User can click on Previous and next links, depending on the page user currently viewing,
       page will navigate to next or its previous page. and this URL can be bookmarkable.

## Tech Stack used to implement

    **Tech:  `ReactJs`, `react-router`, `recharts`, `expressJs`, `jest`, `enzyme`, `css`, `html`**

## About APP
 
    1. App is deployed to heroku and live at: https://ps-vali-hacker-news.herokuapp.com/
    2. Source code contains heroku.yml file, allows heroku to build the images using Dockerfile and 
       make instance fully up and running.
    3. Dockerfile includes Node:12.18.0 images and it has build steps such as install dependancies, Test the
       the app with test cases writen, and build
    4. Source code contains Jenkinsfile as well, which has the script to publish the build docker image to
       docker hub.



