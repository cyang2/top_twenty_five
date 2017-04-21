# top_twenty_five
A webapp that performs text frequency analysis with basic stemming on a user-uploaded text file.

/*~~~~~~~~~~~ Web App Description ~~~~~~~~~~~~~*/

Top_Twenty_Five is a web app that accepts a text file, counts how often each word is used in it, and reports the top 25 most frequently used words along with the number of times that each word was used. The Top_Twenty_Five website is built using HTML, processed using JavaScript, and formatted using CSS. 

First, the JavaScript algorithm accepts an uploaded text file and reads the words into a string. Then, it splits the string into one-word substrings and stores each word as an element of an array. Next, the analysis extracts the stems of the words so that different conjugations/pluralizations of the same word are counted as one word. This stemming is done by removing common endings added by conjugation/pluralization (e.g. "-ed", "-ing", "-s", etc.). The algorithm then transfers each word into a dictionary, either creating a new entry or increasing the count of the word if it has already been passed into the array. Finally, the algorithm sorts the words in order from highest to lowest frequency, and then displays the words in order on the webpage.


/*~~~~~~~~~~~ Future Direction ~~~~~~~~~~~~~*/

Currently, the web app only accepts .txt files, and only works in Safari. In the future, I would like to support other types of text files and other web browsers.
