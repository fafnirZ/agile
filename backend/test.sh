#!/bin/bash


curl -d "email=a&password=abcdefgh" -X POST localhost:8080/api/v1/register
curl -d "email=ab&password=12345678" -X POST localhost:8080/api/v1/register
curl -d "email=abc&password=abcdefghi" -X POST localhost:8080/api/v1/register
curl -d "email=abcd&password=123456789" -X POST localhost:8080/api/v1/register
curl -d "email=abcde&password=abcd56789" -X POST localhost:8080/api/v1/register