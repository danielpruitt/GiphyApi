# GiphyApi

https://danielpruitt.github.io/GiphyApi/


The webpage populates with 10 movie buttons. On the click of a button, 10 images and their ratings appear according to the title of the button. 
There is also a search feature that upon giving it a value, a new button is created to be clicked to recieve 10 images.
The images are still but when clicking them the gifs are activated and will loop through the gif. 
With the "Get gif here" link a new window will open with the gif url to either download or use the url for any other purpose. 
OMDB Api was also used to give the short plot summary and year of the movie that was clicked or searched. 



Pseudocode
1. divs created for buttons from an array, array is made up of movies var="topics"
2. use a loop to append the buttons to the HTML, look back to activities for this
3. on click, the static images become the gif. look back to activities as well as the API for the static images links and their gif links
4. under the gif put the rating from the API, should cards be used from bootstrap?
5. use a form to add a search bar that will append to the array
6. make sure this is mobile responsive, ipad, iphone and galaxy