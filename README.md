![Image of logo](https://i.imgur.com/28JyIYL.png)

## Restick is my porfolio project for this autumn.

### I'm applying my knowledge of Node.js and Vue.js to create a modern single page application for effective learning structures, such as spaced repetition. This webapp is inspired by the book "Make It Stick: The Science of Successful Learning". I will also be trying on MongoDB and Google OAuth for this project.

# API
Stacks contains cards.
Cards are double sided, a back and a front.
Repeats keeps track of when cards are to be repeated for learning.

## Auth
**/api/auth**
- POST: Sign up/in with google
The token from google should be in the body as idToken.
Return a JWT if valid.


## Stacks
**/api/stacks**
- GET: All stacks
- POST: Add stack

**/api/stacks/:stackId**
- GET: Get stack
- POST: Add card to stack
- PUT: Update stack
- DELETE: Delete stack
- PATCH: Update Repeats

**/api/stacks/:stackId/sub**
- POST: Add and subscribe to stack that doesn't belong to the current user.
- PUT: Subscribe to stack
- DELETE: Unsubscribe stack

## User
**/api/user/**
- POST: Select username

**/api/user/spaced**
- GET: Get all repeats

**/api/user/spaced/:id/:grade**
- POST: Adds grade and updates repeat
