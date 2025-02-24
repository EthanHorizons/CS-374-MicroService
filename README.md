# CS-374-MicroService
## Description:
A micro service that will deliver random nature quotes, or quotes based on select vibes
The developer can specify between different feelings of quotes by supplying the right path to get a random quote of that vibe.

## Requires:
 - Node
 - Express: user needs to run 'npm express'
## Requests:
First the user needs run the server by putting 'run quotes.js' in terminal

### For a random quote:
- make a GET request using the URL:  'http://localhost:3001/quotesrandom'
### For a random quote from a with a specific feeling:
- make a GET request using the URL: 'http://localhost:3001/quotes/{category}
 - The List of categories are:
    - inspirational
    - peaceful
    - reflective
    - adventurous
    - contemplative
## Exampe Requests & Response
### For a random quote:


