import React from 'react'
import '../styles/App.css';



// Sample response from api below, dont use this data
// {
//   results: [
//     {
//       gender: "female",
//       name: {
//         title: "Miss",
//         first: "Zara",
//         last: "White"
//       },
//       location: {
//         street: {
//           number: 9548,
//           name: "Wairau Road"
//         },
//         city: "Hamilton",
//         state: "Tasman",
//         country: "New Zealand",
//         postcode: 52652,
//         coordinates: {
//           latitude: "68.0268",
//           longitude: "114.0576"
//         },
//         timezone: {
//           offset: "-1:00",
//           description: "Azores, Cape Verde Islands"
//         }
//       },
//       email: "zara.white@example.com",
//       login: {
//         uuid: "fd26ff4c-794a-41d9-bc82-c79997d6309b",
//         username: "bigrabbit521",
//         password: "liang",
//         salt: "JsOd1LTX",
//         md5: "c60353ef1d02626f8afcb50bc80baac2",
//         sha1: "2a0aea755e22c24f52a75b6b972af4e32a892997",
//         sha256: "f01f1d678bebaec80d452621a9a81f78296079a0c3fdb9bea24d1a74561863d2"
//       },
//       dob: {
//         date: "1978-03-29T10:36:08.698Z",
//         age: 44
//       },
//       registered: {
//         date: "2012-09-08T19:40:27.630Z",
//         age: 10
//       },
//       phone: "(483)-206-7882",
//       cell: "(986)-684-2134",
//       id: {
//         name: "",
//         value: null
//       },
//       picture: {
//         large: "https://randomuser.me/api/portraits/women/60.jpg",
//         medium: "https://randomuser.me/api/portraits/med/women/60.jpg",
//         thumbnail: "https://randomuser.me/api/portraits/thumb/women/60.jpg"
//       },
//       nat: "NZ"
//     }
//   ],
//     info: {
//     seed: "00bf0e8b7e323357",
//       results: 1,
//         page: 1,
//           version: "1.3"
//   }
// }
const App = () => {
  
const imageElement = document.getElementById('image');
const nameElement = document.getElementById('name');
const ageButton = document.getElementById('age');
const emailButton = document.getElementById('email');
const phoneButton = document.getElementById('phone');
const additionalInfoElement = document.getElementById('additional-info');
const getUserButton = document.getElementById('getUser');

const RANDOM_USER_API = "https://randomuser.me/api/";
let age = 24;
let email = "rainajavid15@gmail.com";
let phone = "(+91) 9797555369";

function getRandomUser(){
     return fetch(RANDOM_USER_API).then(res => res.json()).then(res => res.results[0]);
}

async function renderRandomUser(){
     let randomUser = await getRandomUser();
     imageElement.src = randomUser.picture.large;
     nameElement.innerText = `${randomUser.name.first} ${randomUser.name.last}`;
     age = randomUser.dob.age;
     email = randomUser.email;
     phone = randomUser.phone;
     console.log(randomUser);
}

renderRandomUser();

ageButton.addEventListener('click', _ => {
     additionalInfoElement.innerText = age;
});
emailButton.addEventListener('click', _ => {
     additionalInfoElement.innerText = email;
});
phoneButton.addEventListener('click', _ => {
     additionalInfoElement.innerText = phone;
});

getUserButton.addEventListener('click', renderRandomUser);
  
  return (
    <div id="main">
      <div class="container">
          <div class="img-container">
               <img src="" id="image" alt="img">
          </div>
          <h1 id="name">Javid Ahmad Raina</h1>
          <div class="buttons">
               <button id="age" data-attr = "age">Age</button>
               <button id="email" data-attr = "email">Email</button>
               <button id="phone" data-attr = "phone">Phone</button>
          </div>
          <section>
               <h1 id="additional-info">Additional info</h1>
          </section>
          <button id="getUser">Get User</button>
     </div>
    </div>
  )
}


export default App;
