# Translation Api with Caching

This is a api created to showcase the translation api where on can pass the string and target language and get the desired string in target language.

![alt text](https://media.giphy.com/media/3o7aTFnG95Q8VIsRqw/giphy.gif)

Tech stacks used:

Node.js , Redis

npm packages used:

Express , redis , nodemon , request

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
  
Why Redis?
----------

Redis is a great choice for implementing a highly available in-memory cache to decrease data access latency, increase throughput, and ease the load off your relational or NoSQL database and application.

  
How to use:
-------------

1)Check  if redis is running:

   ```
   redis-server
   ```
   
   ```
   redis-cli
   ```
2)Start the server by using 
 
   ``` 
   nodemon TranslateTextApi.mjs
   ```
   
3)Go to url-> http://localhost:8000/

   You should get something like : **"Api is up on !!"**

4)Api struction is something like this:

 http://localhost:8000/translate/Source/lang
 
 eg:
 
  http://localhost:8000/translate/tiger/kn

   **If the call is new it will be stored in Redis DB, So that next time you call the same endpoint the response will come from Cache.**

Before cache:
--------------
* *You can see before caching the response time was **3430 ms*** *

![alt text](https://github.com/Raogurucharan/TranslateTextApi/blob/main/BeforeCacheHit.png)


After Caching:
---------------
* *After caching is done using redis the response time is reduced to **4ms*** *
 
![alt text](https://github.com/Raogurucharan/TranslateTextApi/blob/main/AfterCacheHit.png)



We can see the Huge difference here from 3430ms to 4ms which is around **850** Times faster.

![alt text](https://media.giphy.com/media/l41JGlWa1xOjJSsV2/giphy.gif)

All the best practices are followed and API testing is done
