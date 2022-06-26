//section 2
const profileContainer = document.getElementById('mechanic-form')
const profiles=document.getElementById('myProfiles')
const mechProfile=document.getElementsByClassName('profile')
const profileForm = document.getElementById('form')
const profileName = document.getElementById('name')
const profileLocation = document.getElementById('location')
const profileContacts = document.getElementById('contacts')
const profileImage = document.getElementById('image')
const profileReviews = document.getElementById('review-contact')
const addReview=document.querySelectorAll('#review-button')
//section 4
const userRegForm = document.getElementById('myForm')
const registerDiv = document.getElementById("register")
const loginPage=document.getElementById('login-card')
const login=document.getElementById('login-form')
const loginEmail = document.getElementById('email')
const loginPassword = document.getElementById('password')
const loginButton=document.getElementById('loginButton')
const registerButton = document.getElementById('registerButton')
const contactForm=document.getElementById('contact-form')
const contactName = document.getElementById('contactName')
const contactEmail = document.getElementById('contactEmail')
const message = document.getElementById('contactTextArea')
const messageButton=document.getElementById('messageUs')
 // render the profile to the profile section  
function renderMechanicData(mechanic) {
    let newDiv = document.createElement('div')
    newDiv.className = 'profile'
    //create the profile image for the mechanics
    let imageDiv = document.createElement('div')
    imageDiv.className = "profile-image";
    let profileImage = document.createElement('img')
    profileImage.src = mechanic.image;
    let myDiv = document.createElement('div')
    //create the profile name element 
    let paragraphName = document.createElement('p')
    paragraphName.className = "profile-name";
    paragraphName.textContent = `Name: ${mechanic.name}`
    //create the  mechanic location's
    let paragraphLocation = document.createElement('p')
    paragraphLocation.className = "profile-location";
    paragraphLocation.textContent = `location: ${mechanic.location}`
    //create the mechanic's contacts element
    let paragraphContact = document.createElement("p");
    paragraphContact.className = "contacts";
    paragraphContact.textContent = `Contacts: ${mechanic.contacts}`;
    //create the review
    let reviewDiv = document.createElement('div')
    reviewDiv.id = "review-mechanic";
    
    let reviewInput = document.createElement('input')
    reviewInput.className="reviewInput"
    reviewInput.type = 'text'
  reviewInput.placeholder = "Add Reviews here"
  let paragraphReviews = document.createElement("p");
  paragraphReviews.className = "profile-review";
  
    let addButton = document.createElement('button')
    addButton.id = "review-button";
  addButton.textContent = 'Add'
  addButton.addEventListener('click', handleClicks)
  function handleClicks() {
    paragraphReviews.textContent = `Review: ${reviewInput.value}`;
      updates(mechanic)
  }
  function updates(mechanic) {
    
    fetch(" http://localhost:3000/mechanics/", {
      method: "PATCH",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(mechanic),
    })
      .then((res) => res.json())
      .then((mechanic) => console.log(mechanic));
  }
    //append the children nodes to the parent nodes
    imageDiv.appendChild(profileImage);
    newDiv.appendChild(imageDiv);
    myDiv.appendChild(paragraphName);
    myDiv.appendChild(paragraphLocation);
    myDiv.appendChild(paragraphContact)
    reviewDiv.appendChild(paragraphReviews);
    reviewDiv.appendChild(reviewInput)
    reviewDiv.appendChild(addButton)
    newDiv.appendChild(myDiv);
    newDiv.appendChild(reviewDiv)
    profiles.appendChild(newDiv)
}
 //fetch the data from the server
function getMechanicData() {
    fetch("http://localhost:3000/mechanics")
      .then((res) => res.json())
      .then((mechanics) =>
        mechanics.forEach((mechanic) => {
          renderMechanicData(mechanic);
         
        })
      );
}


//Event listeners
document.addEventListener("DOMContentLoaded", (e) => {
  console.log("DOM fully loaded");
});
profileForm.addEventListener('submit', handleSubmit);
userRegForm.addEventListener('submit', userRegistration);
document.getElementById('registerLink').addEventListener('click', () => {
  registerDiv.style.display = 'none'
  loginPage.style.display="block"
})
login.addEventListener('submit', userLogin)
contactForm.addEventListener('submit', handleMessages)
registerButton.addEventListener('click', handleClicks)
  function handleClicks(e)
{
  e.preventDefault()
  let inputs = document.querySelectorAll('#formName, #formEmail, #formPassword, #formPassword2')
  inputs.forEach(input => {
    input.value = '';
  })
}
//event handlers
function handleReviews() {
  console.log('clicked')
  // fetch("http://localhost:3000/mechanics");
}
function userLogin(e) {
  e.preventDefault("http://localhost:3000/mechanics",
    {
      method: "",
      
  });
  let loggedinUser = {
    email: e.target.email.value,
    password: e.target.password.value,

  };
  if (
    loggedinUser.email === "denisdelaki@gmail.com" &&
    loggedinUser.password=== "denis"
  ) {
    loginPage.style.display = 'none'
    registerDiv.style.display = 'none'
    window.location.href='./index.html'
    alert("Welcome Back!! You have succesfully logged in")
  } else {
    loginPage.style.display = "none";
    registerDiv.style.display = "block";
    alert('kindly sign up')
  }
  let inputs = document.querySelectorAll('#email, #password')
  inputs.forEach((input) => {
    input.value = "";
  });
}

function userRegistration(e) {
  e.preventDefault()
  let user = {
    name: e.target.name.value,
    email: e.target.name.value,
    password1: e.target.password.value,
    password2: e.target.password.value
  }
  registerUser(user)
} 
function handleMessages(e) {
  e.preventDefault();
  let feedback = {
  Name: e.target.name.value,
  Email:e.target.email.value,
  Message: e.target.contact.value
  }
  getMessages(feedback)
}
function handleSubmit(e) {
    e.preventDefault()
    let myMechanic = {
        name: e.target.name.value, 
        location: e.target.location.value,
        contacts: e.target.contacts.value,
        image: e.target.image.value
    }
    renderMechanicData(myMechanic);
    createProfile(myMechanic)
}
let myUrl = "http://localhost:3000/RegisteredUsers";
function registerUser(user) {
  fetch(myUrl, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    credentials: 'same-origin',
    body: JSON.stringify(user),
  })
    .then(res => res.json())
  .then(users=>console.log(users))
}
// document.querySelector('#myForm').addEventListener('submit', handleUserRegistration);
// function handleUserRegistration(e) {
  
//    let user = {
//      name: e.target.document.getElementById("formName").value,
//      email: e.target.document.getElementById("formEmail").value,
//      password: e.target.document.getElementById("formPassword").value,
//    };
 
//   registerUsers(user);
 
// }

// function registerUsers(user) {
//   e.preventDefault();
//   fetch("http://localhost:3000/users", {
//     method: "POST",
//     headers: {
//       "content-Type": "application/json",
//     },
//     body: JSON.stringify(user),
//   })

//     .then((res) => res.json())
//     .then(user => { console.log(user)
// })
//   // .catch(error=>console.error(error))
// }
//post the data when the user create a profile
function createProfile(myMechanic) {
  fetch(" http://localhost:3000/mechanics", {
    method: 'POST',
    headers: {
      'content-Type':'application/json'
    },
    body: JSON.stringify(myMechanic)
  })
  .then(res => res.json())
  .then(myMechanic=>console.log(myMechanic))
  
}

function getMessages(feedback) {
  fetch("http://localhost:3000/messages", {
    method: 'POST',
    headers: {
      'content-Type': 'application/json'
    },
    body: JSON.stringify(feedback)
  })
    .then(res => res.json())
  .then(feedback=>console.log(feedback))
}
 //display the data on  on the DOM
 function displayMechanicData() {
   getMechanicData()
  //  renderPageRegistration();
 }
displayMechanicData()