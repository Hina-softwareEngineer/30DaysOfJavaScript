let dict = [
  {
    firstName: "MARTHA",
    lastName: "YOHANES",
    country: "FINLAND",
    scores: 85
  },
  {
    firstName: "DAVID",
    lastName: "SMITH",
    country: "UNITED KINGDOM",
    scores: 84
  },
  {
    firstName: "ASABENEH",
    lastName: "YETAYEH",
    country: "FINLAND",
    scores: 75
  },
  { firstName: "HINA", lastName: "KHADIM", country: "PAKISTAN", scores: 90 }
];

document.addEventListener("DOMContentLoaded", function() {
  addRecordListner();
  sortRecords();
  updatePage();
});

function Dategiver() {
  let date = new Date();
  let months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
  };
  let monthName = "";
  let month1 = date.getMonth() + 1;
  let date1 = date.getDate();
  let year = date.getFullYear();
  for (var i = 1; i < 13; i++) {
    if (month1 == i) {
      monthName = months[i];
    }
  }
  let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  let min =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  return `${monthName
    .substr(0, 3)
    .toUpperCase()} ${date1},${year} ${hour}:${min}`;
}

function renderRecords() {
  document.querySelector(".box").innerHTML = "";
  for (let i = 0; i < dict.length; i++) {
    const record = dict[i];
    dict[i].id = i;
    $(".box").append(
      "<li class='data'>\
      <div class='main'>\
          <p class='name'>" +
        record.firstName +
        " " +
        record.lastName +
        "</p>\
          <p class='date'>" +
        Dategiver() +
        "</p>\
      </div>\
      <div class='country'><p >" +
        record.country +
        "</p></div>\
      <div class='score'><p >" +
        record.scores +
        "</p></div>\
      <div class='bins' >\
          <p class='bin' id=bin" +
        i +
        "><i class='fa fa-trash-o'></i></p>\
          <p class='plus' id=plus" +
        i +
        ">+5</p>\
          <p class='minus' id=minus" +
        i +
        ">-5</p>\
      </div>\
      </li>"
    );
  }
}

function addDeleteListeners() {
  const limit = document.getElementsByClassName("bin").length;
  for (let i = 0; i < limit; i++) {
    document.getElementById(`bin${i}`).addEventListener("click", () => {
      dict = dict.filter(object => object.id != i);
      updatePage();
    });
  }
}

function addPlusFiveListener() {
  const limit = document.querySelectorAll(".plus").length;
  for (let i = 0; i < limit; i++) {
    document
      .getElementById(`plus${i}`)
      .addEventListener("click", function(item) {
        let currentScore =
          new Number(item.path[2].children[2].firstChild.innerHTML) + 5;
        dict[i].scores = currentScore;
        sortRecords();
        updatePage();
      });
  }
}

function addMinusFiveListener() {
  const limit = document.querySelectorAll(".minus").length;
  for (let i = 0; i < limit; i++) {
    document
      .getElementById(`minus${i}`)
      .addEventListener("click", function(item) {
        let currentScore =
          new Number(item.path[2].children[2].firstChild.innerHTML) - 5;
        dict[i].scores = currentScore;
        sortRecords();
        updatePage();
      });
  }
}

function addRecordListner() {
  let addButton = document.querySelector("button");
  addButton.addEventListener("click", () => {
    let inputs = document.querySelectorAll("input");
    for (let i = 0; i < inputs.length; i++) inputs[i] = inputs.value;
    if (
      inputs[0].value == "" ||
      inputs[2].value == "" ||
      inputs[2].value == "" ||
      inputs[3].value == ""
    ) {
      document.querySelector(".error").style.display = "block";
    } else {
      document.querySelector(".error").style.display = "none";
      dict.push({
        firstName: inputs[0].value.toUpperCase(),
        lastName: inputs[1].value.toUpperCase(),
        country: inputs[2].value.toUpperCase(),
        scores: parseInt(inputs[3].value)
      });
      sortRecords();
      updatePage();
    }
  });
}

function sortRecords() {
  dict.sort((a, b) => {
    if (a.scores < b.scores) return 1;
    if (a.scores > b.scores) return -1;
    return 0;
  });
}

function updatePage() {
  renderRecords();
  addDeleteListeners();
  addPlusFiveListener();
  addMinusFiveListener();
}
