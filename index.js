// Project: atnx
// Started: 20-09-2023
// Ended: -

const filterBy = (e) => {
  // request to the back end
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");
};

const toggleAttendance = (e) => {
  const status = e.dataset.status == "true";
  const studnetId = e.dataset.id;
  if (!status) {
    //update database as present
  } else {
    //update database as absent
  }
  e.children[0].style.display = !status ? "none" : "block";
  e.children[1].style.display = status ? "none" : "block";
  e.dataset.status = !status;
  alert(
    `${
      e.parentElement.parentElement.children[1].children[0].innerText
    } recorded as ${!status ? "Present" : "Absent"}`
  );
};
