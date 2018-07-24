The project implemented get- and post- queries using Fetch API - fetch() method. 
HTML5, CSS3, JavaScript(ES6) are used. Gulp is used as an assembly tool.

On the page, the blocks with the description and the image of the hot dogs are loaded with GET-request from the URL 
```https://formula-test-api.herokuapp.com/menu```  in format:
```
{
  id: 1,
  name: 'Name', 
  description: 'Description', 
  expirationDate: '01-30-1999',
  backgroundURL: 'https://..../image.jpg'
}
```
The response received from the server is filtered by the filterByExpiration() function and drawing them on the page.
The function filterByExpiration() receives array and returns array that consist of elements whose expirationDate is greater than today's date.

When the ’Contact’ in navigation menu is clicked form for input name, email and comments is opened. When the button is clicked, the entered form data is sent to the server by using POST-request to the URL https://formula-test-api.herokuapp.com/contact in the json format:
```
{
  "name": "name",
  "email": "email",
  "comment": "comment",
}
```
