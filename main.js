import "./style.css"

// const colorChangeButton = document.querySelector(".hero-button")

// const heroSection = document.querySelector(".hero-section")

// colorChangeButton.addEventListener("click", () => {
//   heroSection.style.backgroundColor = changeImage()
// })

// const randomColor = () => {
//   let n = (Math.random() * 0xfffff * 1000000).toString(16)
//   return "#" + n.slice(0, 6)
// }

// const contactForm = document.querySelector(".contact-form")

// contactForm.addEventListener("submit", (event) => {
//   const nameError = document.querySelector("#nameError")
//   const emailError = document.querySelector("#emailError")
//   const passwordError = document.querySelector("#passwordError")

//   const nameInput = document.querySelector("#name")
//   const emailInput = document.querySelector("#email")
//   const passwordInput = document.querySelector("#password")

//   let isValid = true

//   const nameInputValue = nameInput.value.trim()

//   if (!nameInputValue) {
//     nameError.textContent = "Name is required"
//     isValid = false
//   } else {
//     nameError.textContent = ""
//   }

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

//   if (!emailInput.value || !emailRegex.test(emailInput.value)) {
//     emailError.textContent = "Invalid e-mail address"
//     isValid = false
//   } else {
//     emailError.textContent = ""
//   }

//   if (!passwordInput.value || passwordInput.value.length < 8) {
//     passwordError.textContent = "Password must be at least 8 characters long..."
//     isValid = false
//   } else {
//     passwordError.textContent = ""
//   }

//   if (!isValid) {
//     event.preventDefault()
//   } else {
//     event.preventDefault()

//     nameInput.value = ""
//     emailInput.value = ""
//     passwordInput.value = ""
//   }
// })

// const slideShowImage = document.querySelector("#slideshow")

// const imageUrls = [
//   "https://picsum.photos/id/2/600/400",
//   "https://picsum.photos/id/6/600/400",
//   "https://picsum.photos/id/8/600/400",
// ]

// let currentImageIndex = 0

// const changeImage = () => {
//   slideShowImage.src = imageUrls[currentImageIndex]

//   currentImageIndex = (currentImageIndex + 1) % imageUrls.length
// }

// setInterval(changeImage, 3000)

let currentPage = 1 // Initial page

const fetchAndRenderCharacters = (page) => {
  fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then((response) => response.json())
    .then((data) => {
      const characters = data.results

      const characterContainer = document.getElementById("characterContainer")

      const row = document.createElement("div")
      row.classList.add("row", "justify-content-center")

      characters.forEach((character) => {
        const characterCard = createCharacterCard(character)
        row.appendChild(characterCard)
      })

      characterContainer.appendChild(row)

      currentPage = page

      const loadMoreButton = document.getElementById("loadMoreButton")

      if (currentPage < data.info.pages) {
        loadMoreButton.style.display = "block"
      } else {
        loadMoreButton.style.display = "none"
      }
    })
    .catch((error) => console.error("Error fetching data...", error))
}

const createCharacterCard = (character) => {
  const card = document.createElement("div")
  card.classList.add("card", "m-2", "col-sm-6", "col-md-3", "col-lg-2")

  const image = document.createElement("img")
  image.src = character.image
  image.alt = character.name
  image.classList.add("card-img-top", "img-fluid")

  const cardBody = document.createElement("div")
  cardBody.classList.add("card-body")

  const name = document.createElement("h5")
  name.classList.add("card-title")
  name.textContent = character.name

  const species = document.createElement("p")
  species.classList.add("card-text")
  species.textContent = character.species

  const gender = document.createElement("p")
  gender.classList.add("card-text")
  gender.textContent = character.gender

  card.appendChild(image)

  cardBody.appendChild(name)
  cardBody.appendChild(species)
  cardBody.appendChild(gender)

  card.appendChild(cardBody)

  return card
}

fetchAndRenderCharacters(currentPage)

const loadMoreButton = document.getElementById("loadMoreButton")

loadMoreButton.addEventListener("click", () => {
  fetchAndRenderCharacters(currentPage + 1)
})
