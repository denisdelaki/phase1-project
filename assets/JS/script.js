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
const addReview=document.getElementById('review-button')
//section 4
const loginEmail = document.getElementById('email')
const loginPassword = document.getElementById('password')
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
    let paragraphReviews = document.createElement("p");
    paragraphReviews.className = "profile-review";
    paragraphReviews.textContent = `Reviews: ${mechanic.review}`
    let reviewInput = document.createElement('input')
    reviewInput.className="reviewInput"
    reviewInput.type = 'text'
    reviewInput.placeholder="Add Reviews here"
    let addButton = document.createElement('button')
    addButton.id = "review-button";
    addButton.textContent='Add'
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
    fetch("http://localhost:3000/mechanics/")
      .then((res) => res.json())
      .then((mechanics) =>
        mechanics.forEach((mechanic) => {
          renderMechanicData(mechanic);
        })
      );
}

 //display the data on  on the DOM
 function displayMechanicData() {
     getMechanicData()
 }
displayMechanicData()