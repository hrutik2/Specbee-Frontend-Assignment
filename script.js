const speakers = [
  {
    id: 1,
    name: "John Doe 1",
    position: "Chief Marketing Officer",
    company: "Acme Corp",
    image:
      "https://t4.ftcdn.net/jpg/02/44/43/69/240_F_244436923_vkMe10KKKiw5bjhZeRDT05moxWcPpdmb.jpg",
    description:
      "With over 15 years in digital marketing, John has driven growth and innovation at Acme Corp, helping shape the company's global brand strategy.",
  },
  {
    id: 2,
    name: "John Doe 2",
    position: "Chief Engagement Officer",
    company: "Acquia",
    image:
      "https://t4.ftcdn.net/jpg/02/44/43/69/240_F_244436923_vkMe10KKKiw5bjhZeRDT05moxWcPpdmb.jpg",
    description:
      "A leader in customer engagement, John specializes in building meaningful connections between brands and their audiences, with a focus on digital transformation.",
  },
  {
    id: 3,
    name: "John Doe 3",
    position: "Chief Technical Developer",
    company: "Pantheon",
    image:
      "https://t4.ftcdn.net/jpg/02/44/43/69/240_F_244436923_vkMe10KKKiw5bjhZeRDT05moxWcPpdmb.jpg",
    description:
      "As Chief Technical Developer, John brings a wealth of experience in software engineering and cloud infrastructure, leading Pantheon’s technical innovations.",
  },
  {
    id: 4,
    name: "John Doe 4",
    position: "Chief Marketing Officer",
    company: "Specbee",
    image:
      "https://t4.ftcdn.net/jpg/02/44/43/69/240_F_244436923_vkMe10KKKiw5bjhZeRDT05moxWcPpdmb.jpg",
    description:
      "John is a strategic marketer with a passion for storytelling, helping Specbee to reach new heights through data-driven marketing initiatives.",
  },
];

function renderSpeakers(speakers) {
  const speakersList = document.querySelector(".speakers__list");
  speakersList.innerHTML = "";

  speakers.forEach((speaker) => {
    const speakerElement = document.createElement("div");
    speakerElement.classList.add("speaker");

    speakerElement.innerHTML = `
                <img src="${speaker.image}" alt="${speaker.name}" class="speaker__image">
                <h3 class="speaker__name">${speaker.name}</h3>
                <p class="speaker__position">${speaker.position}</p>
                <p class="speaker__company">${speaker.company}</p>
            `;
    speakerElement.addEventListener("click", () => {
      openmodel(
        speaker.name,
        speaker.image,
        speaker.position,
        speaker.company,
        speaker.description
      );
    });
    speakersList.appendChild(speakerElement);
  });
}

function openmodel(name, image, position, company, description) {
  const modal = document.querySelector(".modal");
  modal.innerHTML = "";
  const modalContent = document.createElement("div");
  modalContent.classList.add("modal__content");
  const closeButton = document.createElement("button");
  closeButton.classList.add("close_button");
  closeButton.innerHTML = `
    <button class="modal__close" onclick="closeModal()">✕</button>
    `;
  modal.appendChild(closeButton);

  modalContent.innerHTML = `
    
     
     <div class="modal_content_1">
     <img src="${image}" alt="${name}" class="modal__image">
     <div >
     <h3 class="modal__name">${name}</h3>
     <p class="modal__position">${position}</p>
     <p class="modal__company">${company}</p>
     </div>
     </div>
     <div class="modal_content_2">
     
     <p class="modal__description">${description}</p>
    </div>
    `;
  modal.appendChild(modalContent);
  modal.style.display = "block";
}
function closeModal() {
  const modal = document.querySelector(".modal");
  modal.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  renderSpeakers(speakers);
});
