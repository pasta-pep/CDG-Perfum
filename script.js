const container = document.getElementById("container");

const spreadsheetID = `174DHtiZFc0gAxtzzsfkrSYu952uFf_LDsqUlTsoK_Y8`;
let tabName = 'design';
let opensheet_uri = `https://opensheet.elk.sh/${spreadsheetID}/${tabName}`;

fetch(opensheet_uri)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    for (let parfum of data) {
      let newParfumDiv = document.createElement("DIV");
      newParfumDiv.classList.add("parfum");
      container.appendChild(newParfumDiv);

      // use camelCase variable names and avoid spaces or special characters
      const fragranceName = parfum["Fragrance Name"];
      const fragranceFamily = parfum["Fragrance Family"];
      const keyNotes = parfum["Key Notes"];
      const secondaryKeyNotes = parfum["Secondary Key Notes"];
      const style = parfum["Style"];
      const casual = parfum["Casual"];
      const name = parfum["Fragrance Name"];
      const bottleInfo = parfum["Bottle Info"];
      
      // setInterval(function(){
      // window.location.reload();
      // }, 30000);

      if (name) {
        const safeClassName = name.toLowerCase().replace(/\s+/g, "-");
        newParfumDiv.classList.add(safeClassName);
      }

      // determine color based on fragrance family
      let color;

      if (fragranceFamily === "Spicy") {
        color = "#A0201A";
      } else if (
        fragranceFamily === "Woody") {
        color = "#4C3A33";
      } else if (
        fragranceFamily === "Green") {
        color = "#286E42";
      } else if (fragranceFamily === "Synthetic") {
        color = "#E3E2D9";
      } else {
        color = "lightgray"; // fallback color
      }

      // ✅ size based on casualness (just an idea!)
      // let divSize = casual.toLowerCase() === "true" ? 150 : 80;

      newParfumDiv.style.background = color;
      newParfumDiv.style.margin = "10px";
      newParfumDiv.style.display = "inline-block";
      
         //  Always add the bottle image
        let bottleInfoImage = document.createElement("img");
        bottleInfoImage.classList.add("bottle-info");
        bottleInfoImage.src = "images/bottleinfo.png";
        newParfumDiv.appendChild(bottleInfoImage);


      if (fragranceName) {
         
         const safeClassName = fragranceName.toLowerCase().replace(/\s+/g, "-");
         newParfumDiv.classList.add(safeClassName);
        // Create name (h1)
        let nameElement = document.createElement("h1");
        nameElement.textContent = fragranceName;
        newParfumDiv.appendChild(nameElement);
      
        // Create Comme des Garçons label (p)
        let brandLabel = document.createElement("p");

       // Set label based on casual value
       if (casual && casual.toLowerCase() === "true") {
       brandLabel.textContent = "Comme des Garcons";
       } else {
       brandLabel.textContent = "Comme des Garçons";
       }

       brandLabel.classList.add("brand-label");
       newParfumDiv.appendChild(brandLabel);
      
        // Debugging: Check the style variable
        console.log(style);
      
        // Set text color based on style (Feminine or Masculine)
        if (style && style.trim().toLowerCase() === "feminine") {
          newParfumDiv.classList.add("feminine");
        } else if (style && style.trim().toLowerCase() === "masculine") {
          newParfumDiv.classList.add("masculine");
        }

      

        console.log(`Added class based on style:`, newParfumDiv.classList);
      }
      

  

  if (keyNotes) {
    let keyImage = document.createElement("img");
    keyImage.classList.add("key-note-icon");
    keyImage.src = `images/${keyNotes.toLowerCase().replace(/\s/g, "_")}.png`;
    newParfumDiv.appendChild(keyImage);
  }

  if (secondaryKeyNotes) {
    let secondaryKeyImage = document.createElement("img");
    secondaryKeyImage.classList.add("secondary-key-notes-icon");
  
    const secondaryNoteClass = secondaryKeyNotes.toLowerCase().replace(/\s/g, "-");
    secondaryKeyImage.classList.add(secondaryNoteClass); // ✅ using the correct variable
  
    secondaryKeyImage.src = `images/${secondaryKeyNotes.toLowerCase().replace(/\s/g, "_")}.png`;
    newParfumDiv.appendChild(secondaryKeyImage);
  }

  // Add star if casual is true
  if (casual && casual.trim().toLowerCase() === "true") {
    let star = document.createElement("span");
    star.innerText = "★";
    star.classList.add("casual-star");
    newParfumDiv.appendChild(star);
  }
    }
  });

  

