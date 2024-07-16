const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Virginia Polytechnic Institute and State University (Virginia Tech)',
                degree: 'Master of Engineering in Computer Science',
                detail: "Secured a year long internship, in tough market scenario's.",
                year: '2022 - 2024',
                pointer: '3.93 / 4.0'
            },
            {
                id: 1,
                title: 'Mumbai University - Rajiv Gandhi Institute of Technology',
                degree: "Bachelor of Engineering in Computer Science",
                detail: "Student of the year 2019 from Computer Science Department. Sports secretory 2017-2019.",
                year: '2015 - 2019',
                pointer: '7.50 / 10.0'
            },
            {
                id: 2,
                title: 'Sathaye College',
                degree: 'HSC, Maharashtra State Board',
                detail: "Member of the National Cadet Corps - Senior Division. Captian Of College Volleyball Team.",
                year: '2013 - 2015',
                pointer: '81.70%'
            },
            {
                id: 2,
                title: 'Parle Tilak Vidyalaya',
                degree: 'SSC, Maharashtra State Board',
                detail: "Secured 8th rank in the final examination conducted by the State Board. Head of the National Cadet Corps - Junior Division. Captian Of School Volleyball Team.",
                year: '2003 - 2013',
                pointer: '93.27%'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Hookcam LLC',
                role: 'Software Developer',
                url: 'https://hookcam.com/',
                desc: 'I developed a cross-browser web platform with Python and Django, improved a native app with GPS and AWS features, enhanced code quality by 38%, and achieved 95% customer satisfaction using Agile Scrum.',
                year: '05/2023 - Present',
                location: 'Richmond, Virginia'
            },
            {
                id: 2,
                title: 'MyDupr | Pickel Ball Platform',
                role: 'Frontend Developer - Freelancer',
                url: 'https://www.dupr.com/',
                desc: 'I engineered reusable React components with TypeScript and Tailwind, enhanced analytics with Google Tag Manager, integrated third-party libraries for improved search, and implemented TDD for error-free code.',
                year: '01/2022 - 07/2022',
                location: 'Remote'
            },
            {
                id: 3,
                title: 'IGP | E-commarce store',
                role: 'Software Engineer',
                url: 'https://www.igp.com/',
                desc: "I boosted UI/UX performance by 60% with TypeScript and Angular, led a junior developer team, optimized databases with GraphQL and Redis, maintained 99.9% server uptime, and integrated secure Stripe and Paytm APIs.",
                year: '03/2021 - 07/2022',
                location: 'Mumbai, India'
            },
            {
                id: 4,
                title: 'Flexiloans | SME business loan lender',
                role: 'Junior Software Developer',
                url: 'https://flexiloans.com/',
                desc: "I engineered a 45% business-boosting Angular micro app for Google Pay, led agile teams with JIRA, ensured secure SHA-1 authentication, and developed RESTful APIs with Express.",
                year: '09/2020 - 02/2021',
                location: 'Mumbai, India'
            },
            {
                id: 5,
                title: 'Frantiger Business Consulting',
                role: 'PHP Developer Intern',
                url: 'https://frantiger.biz/',
                desc: "I worked as a PHP developer, where I learned to perform CRUD operations and gained experience with frontend developement.",
                year: '02/2018 - 03/2018',
                location: 'Remote'
            },
        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
