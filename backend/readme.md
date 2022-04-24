## Setup
1. Install packages
```
npm install
```
2. Run dev server
```
npm run server
```

## Endpoints
| Path     | Method | Description                                                                                                                                                 |
| -------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /signup  | POST   | Takes in username(email) and password. Returns a JWT Token for authorization                                                                                          |
| /process | POST   | Validate JWT token in the header. Process ./data/data.json file by inserting records into database using sequelize (ORM) where randAlphabet is 'a' and 'b'. This endpoint verify JWT Token in the HTTP Header 'Authoriszation Bearer <JWT Token>'. |
| /fetch   | GET    | Fetch the persisted data and return them as HTTP Response Body.                                                                                            |

