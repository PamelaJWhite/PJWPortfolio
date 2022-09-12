const gallerySamples = [
  {
    skills: ["React", "JavaScript", "Node.js", "SQL"],
    title: "Pick-A-Path",
    site: "https://pamelajwhite.github.io/JS211_RobotSearch/",
    story: ["Social skills are tough! My capstone project lets users experience social consequences in a safe, fun, and informative way."],
},
{
  skills: ["HTML", "JavaScript", "API", "CSS"],
  title: "Robots",
  site: "https://pamelajwhite.github.io/JS211_RobotSearch/",
  story: ["Creating a GUI clicked! I learned to grab HTML elements and play with them in JavaScript.", "Additionally, as I was showing it to a friend, he said, 'It would be funny if it got blurrier the more you clicked'. I thought, 'I can do that!' And I did."],
},

]

const getRemoteData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log("json"));
};

function myFunction() {
  var x = document.getElementById("topNavLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const storyClick = (id) => {

  let buttonId = id
 
  let descriptionId =  "des"+buttonId
  console.log("descriptionId:", descriptionId)
  let description = document.getElementById(descriptionId)
  // description.classList.toggle("descClicked")

  let textId = "text" + buttonId
  let text = document.getElementById(textId)
  // text.classList.toggle("textClicked")
};

const closeDesc = (element) => {
  console.log("element: ", element)
  description = document.getElementById(element.id)
  // description.style.display = "none"
  description.classList.toggle("descClicked")
  console.log("firstElementChild: ", description.firstElementChild)
  description.firstElementChild.classList.toggle("textClicked")
}

const createGallerySamples = () => {
  console.log("in createGallerySamples")
  //grab the container from the HTML
  let galleryContainer = document.getElementById("galleryContainer")
  
  //for each gallery sample:
  for (let i=0; i < gallerySamples.length; i++){
  //create div to display current content
    let galleryDisplay = document.createElement("div")
    galleryDisplay.className = "galleryDisplay"
    //append that div to the container
    galleryContainer.appendChild(galleryDisplay)

    //create div to hold skills
    let skillsCont = document.createElement("div")
    //give skillsCont a class
    skillsCont.className = "skillsCont"
    //append skillsCont to galleryDisplay
    galleryDisplay.appendChild(skillsCont)

    //loop over skills to display
    for (let j = 0; j < 4; j++){
      //create  div
      let skillDiv = document.createElement("div")
      //give it the class, "skills"
      skillDiv.className = "skills"
      //give it some content 
        //later this zero will need to be the iterator of the outer loop
      skillDiv.innerHTML = gallerySamples[i].skills[j]
      //append it to the skillCont
      skillsCont.appendChild(skillDiv)
    }

    //create an H1 for the title
    projectTitle = document.createElement("h1")
    //add a class to it
    projectTitle.className = "projectTitle"
    //add the title as text
    projectTitle.innerHTML = gallerySamples[i].title
    //append it to the galleryDisplay
    galleryDisplay.appendChild(projectTitle)

    //create a button for the site
    siteButton = document.createElement("button")
    //give it classNames
    siteButton.classList.add("bottomRow", "site")
    //append it to the galleryDisplay
    galleryDisplay.appendChild(siteButton)

    //create an a tag
    let siteATag = document.createElement("a")
    //give it an href
    siteATag.setAttribute('href', gallerySamples[i].site)
    //add site as text of a tag
      //later, dynamically render this based on if there is a site or code
    siteATag.innerHTML = "site"
    //append the a tag to the button
    siteButton.appendChild(siteATag)

    //create story button
      //later, dynamically render to video button
    let storyButton = document.createElement("button")
    //give storyButton classes
    storyButton.classList.add("bottomRow", "story")
    //create an id from the iterator and make it a string
    let id = i.toString()
    //give storyButton an id as per this button
    storyButton.id = id
    //give storyButton an onclick
    storyButton.addEventListener("click", function() {
      storyClick(id)
    })
    
    //create a div to hold the storyLabel
    let storyLabel = document.createElement("div")
    // give storyLavel a class
    storyLabel.className = "storyLabel"
    //give storyLabel some innerHTML
    storyLabel.innerHTML = "story"
    //append storyLabel to storyButton
    storyButton.appendChild(storyLabel)
    
    //append storyButton to galleryDisplay
    galleryDisplay.appendChild(storyButton)

    //create a div to open when the story button is clicked
    let description = document.createElement("div")
    //give description a class
    description.className = "description"
    //append description to galleryDisplay
    galleryDisplay.appendChild(description)


    
  }
  


  // <div class="galleryDisplay">
  // <div class="skillsCont">
  //   <div class="skills">HTML</div>
  //   <div class="skills">JavaScript</div>
  //   <div class="skills">API</div>
  //   <div class="skills">CSS</div>
  // </div>
  // <h1 class="projectTitle">Robots</h1>
  // <button class="bottomRow site">
  //   <a href="https://pamelajwhite.github.io/JS211_RobotSearch/"> site </a>
  // </button>
  // <button
  //   id="two"
  //   class="bottomRow story"
  //   onclick="storyClick(this)"
  // >
  //   <div class="storyLabel">story</div>
  // </button>
  // <div class="imgCont">
  //   <img class="galleryImg" src="./profilePics/seeingRobotsPic.png" />
  // </div>
  // <div id="destwo" class="description" onclick="closeDesc(this)">
  //   <p id="texttwo" class="text">
  //     Creating a GUI clicked! I learned to grab HTML elements and play with them in JavaScript. <br/> Additionally, as I was showing it to a friend, he said, "It would be funny if it got blurrier the more you clicked". I thought, "I can do that!" And I did. 
  //   </p>
  // </div>
// </div>
}

createGallerySamples()
