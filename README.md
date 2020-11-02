![Image of logo](https://i.imgur.com/28JyIYL.png)

## Restick is my porfolio project for this autumn.

### I'm applying my knowledge of Node.js and Vue.js to create a modern single page application for effective learning structures, such as spaced repetition. This webapp is inspired by the book "Make It Stick: The Science of Successful Learning". I will also be trying on MongoDB and Google OAuth for this project.

# API

## Stacks
**/api/stacks**
- GET: All stacks
- POST: Add stack

**/api/stacks/:stackId**
- GET: Get stack
- POST: Add card to stack
- PUT: Update stack
- DELETE: Delete stack

**/api/stacks/:stackId/sub**
- POST: Subscribe to card that isn't in stacks
- PUT: Subscribe to card in stack
- DELETE: Unsubscribe to card in stack

## User
**/api/user/**
- POST: Select username
