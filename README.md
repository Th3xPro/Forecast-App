# Table of contents

- [General Info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Quick Look Inside](#quick-look-inside)
- [Learn More](#learn-more)

## General Info

This React application was created to display:

- Temperature
- Sunrise and sunset times
- Today forecast
- 5 day forecast

for (Poznan, London, Havana)
*All API calls are saved after to localstorage to prevent from calling continuously.

## Technologies

Project is created with:

- axios: 0.24.0,
- react-bootstrap: 2.0.3,
- react-icons: 4.3.1,
- jest: 26.6.0,

## Setup

To run this project, install it locally using npm:

```
npm install
npm start
```

OR

```
npm i axios react-bootstrap
npm install react-icons --save
npm install --save-dev jest
npm start
```

## Quick Look Inside

![image](https://user-images.githubusercontent.com/42244290/145558036-b6dd9f05-b3d7-45d1-aa59-e982760698ad.png)


## Learn More

The creation of this app was simple but also twisted with getting time date in differenet formats and I couldn't decide how I want to format it.</br>
So I ended up using "new Date(...)" and also Slicing it in some parts.</br>
But mostly it was a fun doing it but I still have to catch up a lot on unit tests because I couldn't done it properly in such an app where i pass many variables and on conditions renders them.</br>
