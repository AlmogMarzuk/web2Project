const {Flight}  = require("./models/flight_model");
const {Admin}   = require("./models/admins");
const {Orders} = require('./models/orders');

const seedFlight = [
    {
        id: 1,
        name: "France Paris",
        category: "Europe",
        image:
          "https://media.istockphoto.com/id/1185953092/photo/the-main-attraction-of-paris-and-all-of-europe-is-the-eiffel-tower-in-the-rays-of-the-setting.jpg?b=1&s=170667a&w=0&k=20&c=RQMkDSuO8X0Wm_j6WgvcgR3mTucjAiFFgz0XmeUuYjg=",
        price: "995",
        sum: 0,
        totalPrice:0,
      },
      {
        id: 2,
        name: "Spain Barcelona",
        category: "Europe",
        image:
          "https://i.ytimg.com/vi/brWYAALZes4/maxresdefault.jpg",
        price: "869",
        sum: 0,
        totalPrice:0,
      },
      {
        id: 3,
        name: "Germany Berlin",
        category: "Europe",
        image:
          "https://strongcitiesnetwork.org/en/wp-content/uploads/sites/5/2017/11/Berlin-Nikolaiviertel-scaled.jpg",
        price: "364",
        sum: 0,
        totalPrice:0,
      },
      {
        id: 4,
        name: "Romania Bucharest ",
        category: "Europe",
        image:
          "https://passportandplates.com/wp-content/uploads/2017/06/DSC08737-1-1200x800.jpg",
        price: "895",
        sum: 0,
        totalPrice:0,
      },
      {
        id: 5,
        name: "Argentina Buenos Aires ",
        category: "South America",
        image:
          "https://media.istockphoto.com/id/667138246/es/foto/argentina-buenos-aires-amanecer-en-el-centro-con-hora-punta.jpg?s=612x612&w=0&k=20&c=tpvOrY5aqJBBaqb5X27WjlhDsUB0GHJWc1GRD5Z5icQ=",
        price: "657",
        sum: 0,
        totalPrice:0,
      },
      {
        id: 6,
        name: "Brazil Rio de Janeiro",
        category: "South America",
        image:
          "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmlvJTIwZGUlMjBqYW5laXJvJTJDJTIwYnJhemlsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: "857",
        sum: 0,
        totalPrice:0,
      },
      {
        id: 7,
        name: "Peru	Lima",
        category: "South America",
        image:
          "https://images.unsplash.com/photo-1577587230708-187fdbef4d91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGltYSUyMHBlcnV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        price: "1002",
        sum: 0,
        totalPrice:0,
      },
      {
        id: 8,
        name: "Chile Santiago",
        category: "South America",
        image:
          "https://images.unsplash.com/photo-1478827387698-1527781a4887?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Q2hpbGUlMjBTYW50aWFnb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        price: "876",
        sum: 0,
        totalPrice:0,
      },
      {
        id: 9,
        name: "Mexico",
        category: "North America",
        image:
          "https://images.unsplash.com/photo-1547995886-6dc09384c6e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fE1leGljb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        price: "573",
        sum: 0,
        totalPrice:0,
      },
      {
        id: 10,
        name: "United States Manhattan",
        category: "North America",
        image:
          "https://images.unsplash.com/photo-1532960401447-7dd05bef20b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        price: "954",
        sum: 0,
        totalPrice:0,
      },
      {
        id: 11,
        name: "Canada Ottawa",
        category: "North America",
        image:
          "https://images.unsplash.com/photo-1607821367633-57b0c6a038ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b3R0YXdhfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        price: "798",
        sum: 0,
        totalPrice:0,
      },
      {
        id: 12,
        name: "Australia Sydney",
        category: "Australia",
        image:
          "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3lkbmV5JTIwY2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80",
        price: "490",
        sum: 0,
        totalPrice:0,
      },
      {
        id: 13,
        name: "Thailand Bangkok",
        category: "Asia",
        image:
          "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFuZ2tva3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        price: "514",
        sum: 0,
        totalPrice:0,
      },
      {
        id: 14,
        name: "Japan Tokio",
        category: "Asia",
        image:
          "https://images.unsplash.com/photo-1549693578-d683be217e58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRva3lvfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        price: "797",
        sum: 0,
        totalPrice:0,
      },
      {
        id: 15,
        name: "Philippines Manila",
        category: "Asia",
        image:
          "https://images.unsplash.com/photo-1566634159940-f5a66c4c80fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFuaWxhJTIwcGhpbGlwcGluZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        price: "300",
        sum: 0,
        totalPrice:0,
      },
      {
        id: 16,
        name: "China Beijing",
        category: "Asia",
        image:
          "https://images.unsplash.com/photo-1603258740665-711401f368bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlaWppbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        price: "400",
        sum: 0,
        totalPrice:0,
      },
  ];
  
  const admin = [{
    id : "1",
    name: "benfain12@gmail.com"
  }]

  const order = [{
    id:"1",
    name: "benfain12@gmail.com",
    price: 2024
  }]

  const seedDB = async () => {
  /*  await Flight.deleteMany({});
    await Flight.insertMany(seedFlight);
    await Admin.deleteMany({});
    await  Admin.insertMany(admin);
    await Orders.insertMany(order);*/
    console.log("The Database uploaded successfully");
  }
 


  exports.seedDB = seedDB;