//section 2
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

