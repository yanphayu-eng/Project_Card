const people = [
    {
        id: 101,
        name: "John Smith",
        position: "Front End Developer",
        post: 110,
        following: 50,
        follower: 200,
        img: "./img/img2.jpg"
    },
    {
        id: 102,
        name: "Alice Johnson",
        position: "Back End Developer",
        post: 85,
        following: 40,
        follower: 180,
        img: "./img/img3.jpg"
    },
    {
        id: 103,
        name: "Michael Brown",
        position: "UI/UX Designer",
        post: 95,
        following: 60,
        follower: 250,
        img: "./img/img4.jpg"
    },
    {
        id: 104,
        name: "Emma Davis",
        position: "Full Stack Developer",
        post: 120,
        following: 70,
        follower: 300,
        img: "./img/img5.jpg"
    },
    {
        id: 105,
        name: "David Wilson",
        position: "Project Manager",
        post: 60,
        following: 30,
        follower: 150,
        img: "./img/img6.jpg"
    },
    {
        id: 106,
        name: "Sophia Martinez",
        position: "QA Engineer",
        post: 75,
        following: 35,
        follower: 160,
        img: "./img/img7.jpg"
    },
    {
        id: 107,
        name: "James Taylor",
        position: "DevOps Engineer",
        post: 90,
        following: 45,
        follower: 220,
        img: "./img/img8.jpg"
    },
    {
        id: 108,
        name: "Olivia Anderson",
        position: "Content Strategist",
        post: 50,
        following: 25,
        follower: 140,
        img: "./img/img9.jpg"
    }
];

let show = ``;

people.forEach((person) => {
    show += `
        <div class="card">
            <img src="${person.img}">
            <h3>${person.name}</h3>
            <h6>${person.position}</h6>
            <div class="logo">
                <div class="lg">
                    <i class="fa-brands fa-facebook"></i>
                </div>
                <div class="lg">
                    <i class="fa-brands fa-github"></i>
                </div>
                <div class="lg">
                    <i class="fa-brands fa-x-twitter"></i>
                </div>
                <div class="lg">
                    <i class="fa-brands fa-youtube"></i>
                </div>
            </div>
            <div class="btn">
                <button>Contact</button>
            </div>
            <div class="foot">
                <div class="box">
                    <span>${person.post}</span>
                    <span>POSTS</span>
                </div>
                <div class="box">
                    <span>${person.following}</span>
                    <span>FOLLOWING</span>
                </div>
                <div class="box">
                    <span>${person.follower}</span>
                    <span>FOLLOWER</span>
                </div>
            </div>
        </div>
    `;
});

document.getElementById("container").innerHTML = show;