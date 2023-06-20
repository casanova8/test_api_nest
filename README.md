# instalation
yarn install

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# database sqlite
# sql ddl create table score
create table score ( id INTEGER primary key autoincrement,username TEXT not null,score INTEGER not null);

# endpoint
/auth/login

e.g:
curl --location 'localhost:3000/auth/login' --header 'Content-Type: application/x-www-form-urlencoded' --data-urlencode 'username=admin' --data-urlencode 'password=admin'

/leaderboard

e.g:
curl --location --request GET 'localhost:3000/leaderboard' --header 'Content-Type: application/x-www-form-urlencoded' --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwic2lkIjoiUUtBQk5KRkV5YTB5aWwzcE5BeWJ5IiwiaWF0IjoxNjg3MjQ0MTUxLCJleHAiOjE2ODcyNDUwNTEsInN1YiI6IjEifQ.xv_qpR-zkFcJbJwFluSZ67AhxV9418KnDJE1O6n-ZaU' --data-urlencode 'score=100' --data-urlencode 'username=admin'

/scores

e.g:
curl --location 'localhost:3000/scores' --header 'Content-Type: application/x-www-form-urlencoded' --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwic2lkIjoiZmlMSC1EZ2VURE5mY2tzOFgyYnU0IiwiaWF0IjoxNjg3MjQ4MTIyLCJleHAiOjE2ODcyNDkwMjIsInN1YiI6IjEifQ.m6OS7s8PfI-GzI027pxrZJuxIOpS5WypGr-7f7G_tqU' --data-urlencode 'score=1000' --data-urlencode 'username=admin'
