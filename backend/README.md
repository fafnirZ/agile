# Setup
Run
```
npm install
npm start
```
## Basic testing
```
curl -d "email=abc&password=abcdefgh" -X POST localhost:8080/api/v1/register
curl -d "email=abc&password=12345678" -X POST localhost:8080/api/v1/register

curl -d "email=abc&password=abcdefghi" -X POST localhost:8080/api/v1/register
curl -d "email=abc&password=123456789" -X POST localhost:8080/api/v1/register

curl -d "email=abc&password=abcd56789" -X POST localhost:8080/api/v1/register
curl -d "email=abc&password=abcd56789" -X POST localhost:8080/api/v1/login
```

## Make test script executable
```
chmod +x test.sh
```