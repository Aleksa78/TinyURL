# TinyURL
URL shortening system

1. What is a URL shortening system?
-It is a system that is  used to create shorter aliases for long URLs.

2. What's the main value? Who needs such a system and why?
- Convinience is definitely the main value. It is much simpler to share a shorter link than a long one.
-Small marketing businesses should be interested in such a system. 
-It allows you to track incoming traffic and measure effectiveness of marketing campaigns.

3. Describe The main mechanism of work and system components.
-Client sends the original URL from web page to the POST method. 
Post method generates short code and combines it with base URL(localhost).
It then saves those two URL's and generated code in mongoDB database as a mongooseSchema. 
Web page then takes that Schema and shows to the user only short URL.
User can then use that short URL which will redirect him to the original URL by a GET method.

4. What do you think are the main challenges in implementing and running the system
-Managing the DB would probably be the main challenge. After some time the DB will have milions of URL's.
Also, URL's tend to expire. So we need to search for expired links to remove them, but it would put a lot of pressure on  the database. 

5. Try to suggest some ideas for advanced features.
-Users can make their own account and make their own custom URL's.
-Users can track incoming traffic on every URL they made. 
-The service should collect metrics like most clicked links.
