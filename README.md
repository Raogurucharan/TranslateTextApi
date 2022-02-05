# Translation Api with Caching

This is a api created to showcase the translation api with the redis and its benifits:
Tech stacks used:
Node.js
Redis
npm packages used:
Express
redis
nodemon
request

Quick start:
-----------
1) First we start with installing node.js, if u dont have node.js installing in the device open Terminal and follow th instructions  
👉[HERE](https://phoenixnap.com/kb/install-node-js-npm-on-windows) 

2) Once node is installed download this file as zip and extract it
3) Next would be to install npm package:

   ```
   npm install -g nodemon
   ```
   ```
   npm install redis
   ```
    ```
   npm install express
   ```
    ```
   npm install request
   ```
4) To install redis follow [This](https://dev.to/divshekhar/how-to-install-redis-on-windows-10-3e99)

5) Once the above points are done, open terminal in file directory and type 
```
nodemon TranslateTextApi.mjs
```
6) If installed properly you will see the message 
  **" Server has been started at port 8000 "**



Before cache:
--------------
* *You can see before caching the response time was 3430 ms* *

![alt text](https://github.com/Raogurucharan/codeyoung/blob/main/finalCache.png)


After Caching:
---------------
* *After caching is done using redis the response time is reduced to 4ms* *
 
![alt text](https://github.com/Raogurucharan/codeyoung/blob/main/finalcachehit1.png)
