# 🌞🌞 Hip Hip Array 🌞🌞

## 🌞 How to use
This app is fully deployed on Heroku at https://hip-hip-array.herokuapp.com/
OR install the code and run locally:
1. Clone the directory

```
$ git clone https://github.com/bibicollins/Hip-Hip-Array.git
$ cd Hip-Hip-Array
$ npm install (requires node to be installed)
```
2. Start the back end server 
```
$ npm start (web app will open in the browser at localhost:3000)
```
3. Start the front end server 
```
In a new terminal window: 
$ cd client
$ npm start (web app will open in the browser at localhost:3000)
``` 

### 🌞 Our objectives as a team

**1. Our project has a compelling technical aspect\
2. That said, we do not sacrifice developer processes for technical achievement\
3. We consolidate gaps in our learning from the course (we highlighted JSON API calls, client-side programming eg. React)\
4. We prefer a simple and finished output to a complex and messy/unfinished output\
5. We are all able to explain every aspect of the final product**

### 🌞 Our project

**Our aim is to provide a useful tool for beginner developers which provides the code needed to get from an input to an output, and which works for multiple programming languages.**

In other words:
- A single-page app, written in React
- Suggests methods to get from an input to an output, for example:
    1. User enters [a,b,c] as the input and [c,b,a] as the output
    2. Program returns `input.reverse` to the user
- Can  be used for a number of different programming languages

### 🌞 MVP
```
As a user
So that I can use the right array method in Ruby
I want to be able to input a simple initial array and a simple target array and be
given the method which gets me from one to the other
```
In practice this is:
- A web application written in React
- 10 array methods
- 1 language - Ruby

### 🌞 User stories

```
As user
So that I can use the right array method
I want to be able to input a simple initial array and a simple target array\ and be given the method which gets me from one to the other

As a user
So that I can use the tool for more complex methods
I want to be able to use arrays which take arguments

As a user
So that I can learn about lots of different languages
I want to be able to use the tool for Ruby, Javascript and Python

As a user
So that I can revisit my searches 
I want my queries to be logged in a search history 

As a user
So that I can use the tool easily 
I want to access the programme via a clean user interface
```
### :sun_with_face: Test Coverage 
To run the tests and see the full coverage report run: 
`$ npm test`
then: 
`$ open coverage/lcov-report/index.html`
![Coverage report](https://imgur.com/zjWEMoc.png)
![Coverage report client](https://imgur.com/jkZkOL9.png)
![Coverage report server](https://imgur.com/kWLpSZq.png)
