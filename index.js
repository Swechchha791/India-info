let navbar = document.querySelector(".header .navbar");
document.querySelector(".menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

const sliderContainer = [...document.querySelectorAll(".slideshow-container")];
const nxtbtn = [...document.querySelectorAll(".right-arr")];
const prevbtn = [...document.querySelectorAll(".left-arr")];

sliderContainer.forEach((item, j) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtbtn[j].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });
  prevbtn[j].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

fetch("./state.js")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    if (data.length > 0) {
      let temp = "";

      data.forEach((u) => {
        temp += "<tr>";
        temp += "<td>" + u.sr_no + "</td>";
        temp += "<td>" + u.state + "</td>";
        temp += "<td>" + u.capital + "</td>";
        temp += "<td>" + u.land_area + "</td>";
        temp += "<td>" + u.state_website + "</td></tr>";
      });
      document.getElementById("mytbodydata").innerHTML = temp;
    } else {
      debugger;
    }
  })
  .catch((error) => console.log("Can't Fetch The API"));

fetch("./ut.js")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    if (data.length > 0) {
      let temp = "";

      data.forEach((u) => {
        temp += "<tr>";
        temp += "<td>" + u.sr_no + "</td>";
        temp += "<td>" + u.ut + "</td>";
        temp += "<td>" + u.capital + "</td>";
        temp += "<td>" + u.land_area + "</td>";
        temp += "<td>" + u.state_website + "</td></tr>";
      });
      document.getElementById("utbodydata").innerHTML = temp;
    } else {
      debugger;
    }
  })
  .catch((error) => console.log("Can't Fetch The API"));

const searchData = () => {
  let filter = document.getElementById("mySearchData").value.toUpperCase();
  let myTable = document.getElementById("myTable");
  let tr = myTable.getElementsByTagName("tr");

  for (var k = 0; k < tr.length; k++) {
    let td = tr[k].getElementsByTagName("td")[1];

    if (td) {
      let textvalue;
      textvalue = td.textContent || td.innerHTML;

      if (textvalue.toUpperCase().indexOf(filter) > -1) {
        tr[k].style.display = "";
      } else {
        tr[k].style.display = "none";
      }
    }
  }
};

// var coll = document.getElementsByClassName("collapsible1");
