const portfolio = [
    {
        id: 0,
        projectName: "Netflix GPT",
        url: "https://reactneflixgpt.web.app/",
        image: "projects/pf_1.jpg",
        projectDetail: "Built a movie recommendation system, integrating the openAI Web API and managing Redux state to boost AI API proficiency.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "TailwindCSS"
            },
            {
                tech: "OpenAI"
            },
            {
                tech: "Redux"
            },
            {
                tech: "Google Firebase CLI"
            }
        ]
    },
    {
        id: 1,
        projectName: "Food Order App",
        url: "https://github.com/mihirpalyekar/React-Food-Order",
        image: "projects/pf_4.jpg",
        projectDetail: "Implemented Swiggy API to create dynamic UI with state management system to understand react in depth.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "Babel"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 2,
        projectName: "Time Flare",
        url: "https://github.com/mihirpalyekar/Timeflare",
        image: "projects/pf_2.jpg",
        projectDetail: "Implemented this project as a part of my capstone project for graduation. Its a project which provide clock in clock out feature to the users and many more.",
        technologiesUsed: [
            {
                tech: "Next.js"
            },
            {
                tech: "Node.js"
            },
            {
                tech: "Rest API"
            },
            {
                tech: "OpenAI"
            },
            {
                tech: "MongoDB"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 3,
        projectName: "Namaste Youtube",
        url: "https://github.com/mihirpalyekar/React-youtube",
        image: "projects/pf_5.jpg",
        projectDetail: "Recreated live chat, N-level nested comments, and optimized search functionalities of YouTube to enhance skills.",
        technologiesUsed: [
            {
                tech: "React"
            },
            {
                tech: "Parcel"
            },
            {
                tech: "Tailwind"
            },
            
        ]
    },
    {
        id: 4,
        projectName: "Book Darbar",
        url: "https://github.com/mihirpalyekar/Book-Darbar-backend",
        image: "projects/pf_3.jpg",
        projectDetail: "Utilized Java and Spring Boot to engineer distributed systems, implementing object-oriented programming for library management.",
        technologiesUsed: [
            {
                tech: "Java"
            },
            {
                tech: "Spring boot"
            },
            {
                tech: "micro-services"
            },
            {
                tech: "Vue.js"
            },
            {
                tech: "GraphQL"
            },
        ]
    },
    {
        id: 5,
        projectName: "Tweetor demonstrator",
        url: "https://github.com/mihirpalyekar/Twit-Twit-A-twitter-replica",
        image: "projects/pf_6.jpg",
        projectDetail: "Created Twitter replica to demonstrate data structure, algorithm design, software development life cycle(SDLC) skills.",
        technologiesUsed: [
            {
                tech: "HTML"
            },
            {
                tech: "SCSS"
            },
            {
                tech: "JavaScript"
            },
            {
                tech: "Node.js"
            },
        ]
    },
    {
        id: 6,
        projectName: "9 tiles puzzle problem",
        url: "https://alsn.app/",
        image: "projects/pf_1.jpg",
        projectDetail: "The '9 Tiles Puzzle' is a web-based game crafted with HTML, CSS, and JavaScript. The objective is to move tiles within a 3x3 grid to guide the empty space to the bottom-right corner. Players slide tiles strategically, aiming to create a path for the empty tile's journey. This puzzle challenges spatial reasoning and problem-solving abilities while offering an engaging experience for users of all skill levels.",
        technologiesUsed: [
            {
                tech: "HTML"
            },
            {
                tech: "CSS"
            },
            {
                tech: "JavaScript"
            },
        ]
    },
    {
        id: 7,
        projectName: "Match the tiles",
        url: "/domain-expired",
        image: "projects/pf_4.jpg",
        projectDetail: `"Match the Tiles" is a web game developed with HTML, CSS, and JavaScript. Players aim to uncover and match pairs of similar tiles within a grid. Flipping two tiles at a time, they reveal matches or close both if unsuccessful. The objective is to uncover all pairs to win, offering an engaging memory challenge for all ages.`,
        technologiesUsed: [
            {
                tech: "HTML"
            },
            {
                tech: "CSS"
            },
            {
                tech: "JavaScript"
            },
        ]
    },
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
