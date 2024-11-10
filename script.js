const speakers = [
  {
    id: 1,
    name: "John Doe",
    position: "Chief Marketing Officer",
    company: "Acme Corp",
    image:
      "https://s3-alpha-sig.figma.com/img/d6a6/fffd/2100d987b5946aa1df33cf0f6c34a418?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p0ozEGQKCEzpMDFiGB0WI7e3Jy5hs~XAzkQEmXckRff9Yql3RG4oZ3qz7U-lmzlgN5l~VSp88OF3WSEHLG8hewYzujk8BfcrkQvmBJSeDEvGfDm6uDq5Hsx9cQ1cfgLQHZz10fHEBoS7H8kb73P-hWtJj2qYrDYGdR5YhEHfHT9EQehf5C90C4PZkDVQRu6FZWCVcxHr7FcTZGWaNC-LSjOSmA4KZaKs1FIk-OEuIlV9fK7KSQoo-7pSIHsF2dGTfhxvY4s8ywp-UY0qcUPSa7BHmFJKLlpd~NhfU2JEvdZGid5XK-F6O7RbD4CLUF1cc6yaUuh1WrCdQ9fM~aRMJQ__",
    description:
      "With over 15 years in digital marketing, John has driven growth and innovation at Acme Corp, helping shape the company's global brand strategy.",
  },
  {
    id: 2,
    name: "John Doe",
    position: "Chief Engagement Officer",
    company: "Acquia",
    image:
      "https://s3-alpha-sig.figma.com/img/9de3/b8aa/4e6fd86d00bc645311899b3fbcca52d5?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i-2az8c~TQ4GQTgMdGGA~OiZRcxQqNliOmg1Nrh3~q5mCbkyAXoOFrZXz3rtpBmhoLH2MEPcD8uyzrysiBixOxyySVYRLqY2pdQYKhqW1Kibe4meVDaoZKzWOedglJPRuLQhW62vUhFnnDWDaxe74zfw1MfHfD-qLD4-v2FEWZy4Ww64U6DTEIPNSgwu2vhoCu0UzxocqOeUDrobUZuHnzPMc29WeTKpzHo~9NfifEoSciD~yZUa0s40o9Q~gM54g-UhG-46MlVop01DP9xSiLXP3RnQq6B3DimGuPflSgw9-5gSLX5Z94~AVOpkYwkxNCs-jiWwTnZfxmyz5X~qIw__",
    description:
      "A leader in customer engagement, John specializes in building meaningful connections between brands and their audiences, with a focus on digital transformation.",
  },
  {
    id: 3,
    name: "John Doe",
    position: "Chief Technical Developer",
    company: "Pantheon",
    image:
      "https://s3-alpha-sig.figma.com/img/9134/0d19/81845f21043dd8f5192da248767c4eae?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k803O02X0pXmvOoAJFVO6iTOVx5GGHL72bT8~YUINLU1Y6aGiPW2aRLhexGOSlbBUQ89XvZZIyecwmCJ5cV~hgYwOhN~oSLMER17lHrYCYNHAT2Jcn9BekVJbmj3zvnHHZVJR4KKR0tPZpDmCae~SI32EupBZK9ysXymdgpxj-WznEuPuu1xtWW3fyx7~ItSbU7hR86mpPpdqZ-Ds6PZH~4ZPPIkPip0oT7MehKrtQe-yXfJIoMZLu-bY9A02b~tUb2PtcZWKYBOElVVVcZRfkAG4MNx0B5RxvSxXsadVuMULmz3yebUvtY5qJrJy8gCIGCRpN35dN~qR3HpnuflCw__",
    description:
      "As Chief Technical Developer, John brings a wealth of experience in software engineering and cloud infrastructure, leading Pantheon’s technical innovations.",
  },
  {
    id: 4,
    name: "John Doe",
    position: "Chief Marketing Officer",
    company: "Specbee",
    image:
      "https://s3-alpha-sig.figma.com/img/aeba/3e61/75255eef4aafbeaf378e32d61894f628?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=THCVaU2hZrwyAHEhKFhbXoYU4qg1f7~FK7hrPzcA1iCzXSUKV88oyZd5eSNfxrMuuAW4CK4XbwO3NCLAk2QGzmpSTcqyvuz7honPyZsNEAklbn-Gq6x06PEkqzZWPaa2RBro6TBvLC9SUsP3S9LXnzg53jVNaJ5yg2YOBbUeLp3qzOF0zGCkKdBDFJ0EnvHqqqLmAEvMrhcxNBTbyWi2F0I7yk15nb5obNZYbGGz0Tr7z7U-tWrbHtmPC3ld7AFB~IBamtN9nQQ5GpER0agWBD0ZrbpLBfMLoCxhhIZQZeigQzKxqp9d~g8aWucIgPAZh8pDE-7IxdZjQ~CjaHDmEQ__",
    description:
      "John is a strategic marketer with a passion for storytelling, helping Specbee to reach new heights through data-driven marketing initiatives.",
  },
  {
    id: 5,
    name: "John Doe 5",
    position: "Chief Technical Officer",
    company: "TechWave",
    image:
      "https://t4.ftcdn.net/jpg/02/44/43/69/240_F_244436923_vkMe10KKKiw5bjhZeRDT05moxWcPpdmb.jpg",
    description:
      "As Chief Technical Officer, John plays a pivotal role in developing cutting-edge technology solutions for TechWave.",
  },
  {
    id: 6,
    name: "John Doe 6",
    position: "Chief Technical Developer",
    company: "Pantheon",
    image:
      "https://t4.ftcdn.net/jpg/02/44/43/69/240_F_244436923_vkMe10KKKiw5bjhZeRDT05moxWcPpdmb.jpg",
    description:
      "As Chief Technical Developer, John brings a wealth of experience in software engineering and cloud infrastructure, leading Pantheon’s technical innovations.",
  },
  {
    id: 7,
    name: "John Doe 7",
    position: "Chief Marketing Officer",
    company: "Specbee",
    image:
      "https://t4.ftcdn.net/jpg/02/44/43/69/240_F_244436923_vkMe10KKKiw5bjhZeRDT05moxWcPpdmb.jpg",
    description:
      "John is a strategic marketer with a passion for storytelling, helping Specbee to reach new heights through data-driven marketing initiatives.",
  },
  {
    id: 8,
    name: "John Doe 8",
    position: "Chief Technical Officer",
    company: "TechWave",
    image:
      "https://t4.ftcdn.net/jpg/02/44/43/69/240_F_244436923_vkMe10KKKiw5bjhZeRDT05moxWcPpdmb.jpg",
    description:
      "As Chief Technical Officer, John plays a pivotal role in developing cutting-edge technology solutions for TechWave.",
  },
];

let currentIndex = 0;

const renderSpeakers = () => {
  const speakersList = document.querySelector(".speakers__list");
  speakersList.innerHTML = "";

  const currentSpeakers = speakers.slice(currentIndex, currentIndex + 4);

  currentSpeakers.forEach((speaker) => {
    const speakerElement = document.createElement("div");
    speakerElement.classList.add("speaker");

    speakerElement.innerHTML = `
        <img src="${speaker.image}" alt="${speaker.name}" class="speaker__image">
        <h3 class="speaker__name">${speaker.name}</h3>
        <p class="speaker__position">${speaker.position}</p>
        <p class="speaker__company">${speaker.company}</p>
      `;

    speakerElement.addEventListener("click", () => openModal(speaker));

    speakersList.appendChild(speakerElement);
  });
};

const openModal = ({ name, image, position, company, description }) => {
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
};

const closeModal = () => {
  document.querySelector(".modal").style.display = "none";
};

const nextSlide = () => {
  if (currentIndex + 4 < speakers.length) {
    currentIndex += 4;
    renderSpeakers();
  }
};

const prevSlide = () => {
  if (currentIndex - 4 >= 0) {
    currentIndex -= 4;
    renderSpeakers();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  renderSpeakers();

  document.querySelector(".next_button").addEventListener("click", nextSlide);
  document.querySelector(".prev_button").addEventListener("click", prevSlide);
});
