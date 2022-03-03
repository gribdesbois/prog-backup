//local reviews data
const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "person-1_.jpg",
        text: "I'm baby meggings twee health goth +1. bicycle rights tumeric chartreuse before they sold out chambray pop-up.Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast every carry"

    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img: "person-2_np9x5l.jpg",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo jean shorts artisan narwhal."

    },
    {
        id: 3,
        name: "Peter Jones",
        job: "INTERN",
        img: "person-3_ipa0mj.jpg",
        text: "Sriracha litterally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow carb marfa hell of pabst raclette post-ironic jianbing swag."

    },
    {
        id: 4,
        name: "Bill Anderson",
        job: "THE BOSS",
        img: "person-4_t9nxjt.jpg",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf mooon tote bag street art shabby chic."

    },
    
];

//select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//set starting item
let currentItem = 0;
//console.log(reviews[0]);

// load initial item
window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem)
});

// show person based on item

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent =item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//show next person

nextBtn.addEventListener('click', function() {
    if (currentItem === reviews.length-1) { currentItem = 0; } else { currentItem++; }
    showPerson(currentItem);
});

//show previous person

prevBtn.addEventListener('click', function() {
    if (currentItem === 0) { currentItem = reviews.length-1; } else { currentItem--; }
    showPerson(currentItem);
});

//show next person

randomBtn.addEventListener('click', function() {
    currentItem = ~~(Math.random()*4);
    showPerson(currentItem);
});