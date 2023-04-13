# Setup
```
npm install
npm start
```
## Basic testing
```
curl -d "email=abc&password=123" -X POST localhost:8080/api/v1/register
curl -d "email=abc&password=123" -X POST localhost:8080/api/v1/login
```