function showAlert() {
    alert("Doesn't support")
}

function showAlertNonExist() {
    alert("Didn't create a page for this. Check other pages for performance.")
}

function hideNotification() {
    const alertBox = document.querySelector(".firstAlertMessage");

    alertBox.classList.add("hide")

    sessionStorage.setItem("alertClosed", "true");

    setTimeout(() => {
        alertBox.style.display = "none";
    }, 400);
};

window.addEventListener("DOMContentLoaded", () => {
    const alertBox = document.querySelector(".firstAlertMessage");
  
    if (sessionStorage.getItem("alertClosed") === "true") {
      hideNotification()
    }
  });


// --------- index.html ---------

let isShown = false

function showDropMenu(event) {
    const drop_down = document.getElementById("drop-menu")
    const down_arrow = document.getElementById("arrow")

    if (drop_down.contains(event.target)) 
        return;

    if (!isShown) {
        drop_down.style.display = "flex"
        down_arrow.style.transform = "rotate(0)"
        isShown = true
    } else {
        drop_down.style.display = "none"
        down_arrow.style.transform = "rotate(-180deg)"
        isShown = false
    }
    
}

function updateData() {
    const drop_down = document.getElementById("drop-menu")
    let adult_count = document.getElementById("adult-count").value
    let child_count = document.getElementById("children-count").value
    let rooms_count = document.getElementById("rooms-count").value
    let are_pets = document.getElementById("ispet")

    let display_text = document.getElementById("count-data")

    let output = adult_count + " adults - " + child_count + " children - " + rooms_count + " rooms"
    
    display_text.textContent = output
    drop_down.style.display = "none"
}

// --------- car_rent.html ---------

document.querySelectorAll('.question-wrap').forEach(item => {
    const question = item.querySelector('.question');
    const answer = item.querySelector('.answer');
    const down_arrow = item.querySelector('.arrow');
    let isOpen = false;

    question.addEventListener('click', () => {
      answer.classList.toggle('open');
      isOpen = !isOpen;

      if (isOpen) {
        down_arrow.style.transform = "rotate(0)";
      } else {
        down_arrow.style.transform = "rotate(-180deg)";
      }
    });
});


// --------- flights.html ---------


let is_swapped = false

function swapDestinations() {
    const swap_icon = document.getElementById("swap-icon")
    const dest_1 = document.getElementById("destination-1-value")
    const dest_2 = document.getElementById("destination-2-value")
    
    if (!is_swapped) {
        swap_icon.style.transform = "rotate(180deg)"
        let dest_1_value = dest_1.value
        let dest_2_value = dest_2.value

        dest_1.value = dest_2_value
        dest_2.value = dest_1_value
        is_swapped = true 

    } else {
        swap_icon.style.transform = "rotate(0deg)"
        let dest_1_value = dest_1.value
        let dest_2_value = dest_2.value

        dest_1.value = dest_2_value
        dest_2.value = dest_1_value
        is_swapped = false
    }

}

let dist1_isShown = false
let dist2_isShown = false

function showDropdown(id, event) {
    const dest_dropdown1 = document.getElementById("dropdown-1")
    const dest_dropdown2 = document.getElementById("dropdown-2")
    const dest_input_1 = document.getElementById("destination-1-value")
    const dest_input_2 = document.getElementById("destination-2-value")

    if (id == "dropdown-1") {
        if (!dist1_isShown) {
            dest_dropdown1.style.display = "block"
            dist1_isShown = true

            if (dist2_isShown) {
                dest_dropdown2.style.display = "none"
                dist2_isShown = false
            }
        } 
    } else if (id == "dropdown-2") {
        if (!dist2_isShown) {
            dest_dropdown2.style.display = "block"
            dist2_isShown = true

            if (dist1_isShown) {
                dest_dropdown1.style.display = "none"
                dist1_isShown = false
            }
        }
    }
}

document.querySelectorAll("#dropdown-1 .des-drop-down-item").forEach(item => {
    item.addEventListener("click", function () {
        document.getElementById("destination-1-value").value = this.innerText.trim();
        document.getElementById("dropdown-1").style.display = "none";
        dist1_isShown = false;
    });
});

document.querySelectorAll("#dropdown-2 .des-drop-down-item").forEach(item => {
    item.addEventListener("click", function () {
        document.getElementById("destination-2-value").value = this.innerText.trim();
        document.getElementById("dropdown-2").style.display = "none";
        dist2_isShown = false;
    });
});

document.addEventListener("click", function(event) {
    const fl_dropdown_1 = document.getElementById("dropdown-1");
    const fl_dropdown_2 = document.getElementById("dropdown-2");
    const fl_input_1 = document.getElementById("destination-1-value");
    const fl_input_2 = document.getElementById("destination-2-value");

    if (dist1_isShown) {
        if (
        !fl_dropdown_1.contains(event.target) &&
        !fl_input_1.contains(event.target)
        ) {
        fl_dropdown_1.style.display = "none";
        dist1_isShown = false;
        }
    }

    if (dist2_isShown) {
        if (
        !fl_dropdown_2.contains(event.target) &&
        !fl_input_2.contains(event.target)
        ) {
        fl_dropdown_2.style.display = "none";
        dist2_isShown = false;
        }
    }

    
  });

let areFlightCardShown = false

function showFlightCards() {
    if (!areFlightCardShown) {
        document.getElementById("hidden-card-1").style.display = "flex"
        document.getElementById("hidden-card-2").style.display = "flex"
        document.getElementById("hidden-card-3").style.display = "flex"

        areFlightCardShown = true
    }
}


// --------- attractions.html ---------


let attrList_isShown = false

function showDropdownAttr(event) {
    const attr_dropdown = document.getElementById("attr-dropdown")
    const dest_input_1 = document.getElementById("attr-input")

    if (!attrList_isShown) {
        attr_dropdown.style.display = "block"
        attrList_isShown = true
    } else {
        attr_dropdown.style.display = "none"
        attrList_isShown = false
    }
}

document.querySelectorAll("#attr-dropdown .attr-drop-down-item").forEach(item => {
    item.addEventListener("click", function () {
        document.getElementById("attr-input").value = this.innerText.trim();
        document.getElementById("attr-dropdown").style.display = "none";
        dist1_isShown = false;
    });
});


document.addEventListener("click", function(event) {
    const attr_dropdown = document.getElementById("attr-dropdown");
    const attr_input = document.getElementById("attr-input");

    if (
      !attr_dropdown.contains(event.target) &&
      !attr_input.contains(event.target)
    ) {
      attr_dropdown.style.display = "none";
      attrList_isShown = false;
    }
  });


  // Code By Kaveesha Nethmal 244176N
