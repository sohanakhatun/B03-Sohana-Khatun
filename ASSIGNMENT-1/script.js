function toggleTabs(tabIndex) {
  var tabButtons = document.querySelectorAll(".tab-btn");
  var content = document.querySelectorAll(".contents");
  tabButtons.forEach((item, index) => {
    if (index === tabIndex) {
      item.classList.add("active-tab");
    } else {
      item.classList.remove("active-tab");
    }
  });
  content.forEach((item, index) => {
    if (index === tabIndex) {
      item.classList.add("active-tab");
      item.classList.remove("in-active-tab");
    } else {
      item.classList.remove("active-tab");
      item.classList.add("in-active-tab");
    }
  });
}
