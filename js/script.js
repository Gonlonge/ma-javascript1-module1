const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// Question 1

const cat = {
  name: "tom",
  color: "white",
  complain: function (catsSays) {
    console.log(catsSays);
  }
};
cat.complain("meow");

// Question 2

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Question 3
heading.style.fontSize = `2em`;

// Question 4
heading.className = "subheading";

// Question 5
const paragraphs = document.querySelectorAll("p");
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = `red`;
}

// Question 6
const resultsContainer = document.getElementsByClassName("results");
resultsContainer[0].innerHTML = "<p>New paragraph</p>";
resultsContainer[0].style.backgroundColor = "yellow";

// Question 7
function findAllNames(list) {
  for (let i = 0; i < list.length; i++) {
    const name = list[i].name;
    console.log(name);
  }
}
findAllNames(cats);

// Question 8

function createCats(cats) {
  const wrapper = document.createElement("div");

  for (let i = 0; i < cats.length; i++) {

    const itemWrapper = document.createElement("div");

    const cat = cats[i];
    const name = document.createElement("h5");
    name.innerHTML = cat.name;
    itemWrapper.appendChild(name);

    const age = document.createElement("p");
    age.innerHTML = cat.age ?? "Age unknown";
    itemWrapper.appendChild(age);

    wrapper.appendChild(itemWrapper);
  }
  return wrapper;
}

const catContainer = document.getElementsByClassName("cat-container");
const catsHtml = createCats(cats);
catContainer[0].appendChild(catsHtml);