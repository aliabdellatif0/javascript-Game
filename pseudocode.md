# Pseudocode

-will have to create a game container using a div
-within this container two more divs need to be placed, ground and flying block
-place the flyer in a sensible postion around the middle of the container 
-simulate gravity by creating a variable that will be altered continuously over time in relation to position
-create jump by an eventlistener and alter position of flyer

-the flyer will appear to stay static as this would make code easier
-instead generate moving tubes
-tubes should be of a set height with ranging positions and overflow hidden (also making code easier by this method)
-tubes will also move similar to gravity function by using set interval function
-now the flyer div when in contact with the ground game must stop, so stop gravity and remove event listener
-flyer must stop upon contact of tubes 

-in order to stop flyer on tubes, flyer maintains in middle, tubes move, if tube position is within middle of screen and flyer is underneath height, there surely must be contact hence stop game. 

-to allow game to restart and return to main menu for example could use a never ending while loop on all the functions

-to kepp score it may be easier to keep seconds played as a high score