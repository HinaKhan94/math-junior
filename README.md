# Math Junior

![Mockup responsive image](assets/images/)


**Math Junior** is a quiz where the user can test his math knowledge. The quiz is targeted to kids who are learning basic mathematical expressions(addition, subtraction, multiplication and division). Math junior is a fully responsive JavaScript quiz game that will allow users to test their knowledge of math by selecting through 4 categories.

## Features
### *Existing Features*
**Landing page with Title, Start Button and Instructions Button**

Title is at the top middle of the page. When the page loads, the user is able to see the name of the quiz with two buttons (Start button and Instructions button).

![Title and buttons](assets/images/)


### **The PlayGame Button**

This button allows the user to start the game. The section is hidden once the user clicks on the play button and the game area appears that allows the user to play with answering questions. 

![Start image](assets/images/)

### **The Instructions Button**

The instruction button when clicked opens up a modal which gives all the instructions related to the game play and it closes when the user clicks on the understood button or the cross at the top-right corner of the modal. It takes the user back to the landing page to start the game by clicking the play button.

### **The Game Page**

The game page has a header that features the title and 4 different categories. In this section the user can select the category that they find best and play the questions accordingly. By default, addition question is displayed but it can be changed as per user's wish. The game page also displays the following:

- Game area with question.
- Options to choose from. 
- Scoring area.  
- Buttons to end or reset the game.

![Game page image](assets/images/)

### **End Game**

In order to end the game, the user can simply click on the end game button and a popup will show the users' final score and a button when clicked will take the user back to the landing page with a play button and instructions button.

![End button alert](assets/images/)


## Game Design
### Main Color Palette

![Color Scheme](assets/images/)

I have used solid colors to make my game attractive to kids.
- Blue #02afd0 
- Yellow #ffff00, 
- White #fff 
- Gray #3a3a3a


### Typography
Google Font is used as the main font of the game. For the icon, I have used font awesome.

- luckiest guy font is used with a fallback font of sans-serif.
- Icon: rocket(fa fa-)


### Skeleton 
The game is a simple one page structure.

The initial sketch was made using Balsamic Wireframes. It was discussed and motified with the guidance of my mentor.
You can view the draft [here](assets/readme.docs/)


## Technologies Used
### Languages Used
HTML, CSS and JavaScript.

### Frameworks, Libraries & Programs Used
- Balsamiq - Used to create wireframes.
- Github - To save and store the files. 
- Google Fonts - To import the fonts used in the game.
- Font Awesome - For the icon.
- Google Dev Tools - To troubleshoot and test features, solve issues with responsiveness and styling.

## Testing

Testing was continuous throughout construction. I used Chrome developer console during the construct to identify and fix any issues along the way.

The following issues were raised during the meeting with my mentor:


### Validator Testing
- HTML 
  * No errors were found when passing through the recommended [W3C Validator]()
- CSS
  * No errors were found when passing through the recommended [Jigsaw Validator]()

- JavaScript
  * No errors were found when passing through the official Jshint validator
    - The following metrics were returned:
       

## Accessibility

I have made sure that I have used complimentary color contrasts throughout the game and made sure to use semantic HTML for accessibility. 

### Lighthouse Testing
- Desktop View
![Image of lighhouse desktop performance](assets/readme.docs/Readme.Images/)

- Mobile View 
![Image of lighthouse mobile performance](assets/readme.docs/Readme.Images/)

### Browser Testing
- Chrome
- Safari
- Mozilla Firefox

## Unfixed Bugs
No unfixed Bugs.

## Deployment

- The site was deployed to Github pages, the process of deployment that I followed is as below:
  * In the Github repositiory section, went to the settings tab
  * From the source section drop-down menu, chose the Master Branch
  * Once the master branch was selected, the page automatically refreshed and displayed a successfull deployment

The link can be viewed [here]() 

## Credits

I would like to thanks my mentor Oluwafemi Medale for his constant support and guidance through out the completion of the project.

### Content
- The icon was taken from [Font Awesome](https://fontawesome.com/).
- The instructions to how to add modal to the instructions button was taken from [Bootstrap5](ht) and [YouTube Channel](https:).
- The responsive mockup was generated with [Website Mockup Generator](https://websitemockupgenerator.com/)

