# Compatibility_Quiz

### About

This is a quiz application that contains a variety of questions (10 in total) that the user can provide an answer to on a scale of 1 (strongly disagree) to 5 (strongly agree). User answers are added up, and the user with the closest total score of answers is given as a 'match' as the most compatible other user on the app. 

This project contains a main server file, as well as routing files for HTML routes (for displaying pages of the app) and API routes (for getting/posting data on each user's responses + match). 

### Walkthrough

Upon app load, home screen is displayed. This screen gives a brief description of the app, and includes a button to 'Take Survey'.

Upon clicking button, user is taken to survey page. They ar presented first with a form, where they can input their name and a link to a photograp of them. Then there is a series of questions that the user can answer via dropdown menu. 

After all questions are answered and the user clicks 'Submit' at the bottom of the page, a modal appears showing them who they have been matched with. 

Here is a gif of the app functionality:
<br>
<img src="/public/assets/readme_1.gif" width="600" height="250"/>

### Technology Used

* JavaScript
  * Node.js
  * Express.js
* JQuery
* HTML
* CSS
* MySQL
  
### Future Development

* Get rid of 'superfriends' and somehow do all data storage/retrieval in one file
* Set TODO on server.js to extended:true, remove comment
* Do something after user is matched (send to home page, reset form, etc)
