const expertise = [
    {
        id: 0,
        title: 'Full Stack Development',
        desc: 'I am a proficient full-stack developer with extensive experience in building robust web applications using the MERN (MongoDB, Express.js, React.js, Node.js) and MEAN (MongoDB, Express.js, Angular, Node.js) stacks. I specialize in server-side rendering, API integration, and database management. My expertise in the Express.js framework enables me to create scalable server-side applications efficiently. With strong skills in both React and Angular, I deliver high-performance web solutions tailored to client needs, ensuring flexibility and dynamic functionality.',
    },
    {
        id: 1,
        title: 'Python Development',
        desc: 'Python is a powerful language for software development, and I leverage its capabilities to build robust and scalable applications. As an active contributor to open-source projects, I spend weekends enhancing my skills and collaborating with top developers in the community. This involvement allows me to learn from industry best practices, implement efficient coding techniques, and contribute to innovative solutions. My proficiency in Python, combined with my passion for open-source contributions, ensures that I deliver high-quality software while fostering community growth and collaboration.',
    },
    {
        id: 2,
        title: 'Scrum and Jira',
        desc: "As a developer, I excel in utilizing Jira and Scrum methodologies for efficient project management and agile development. My proficiency in Jira streamlines tasks such as task assignment, prioritization, and progress tracking, enhancing overall productivity. Implementing Scrum practices, including daily stand-ups, sprint planning, and retrospectives, has significantly improved my team's collaboration and workflow. My expertise in agile methodologies ensures the timely delivery of high-quality software products, meeting client requirements and driving project success.",
    },
    {
        id: 3,
        title: 'Designing (UI/UX)',
        desc: 'I am proficient in design software such as Figma, Adobe XD, and Adobe Illustrator. Through hackathons and freelance work, I have gained valuable experience in UI/UX design and graphic design. My passion for designing drives me to continually develop my creative skills and advance in the field. My expertise in these tools ensures the creation of visually appealing and user-friendly interfaces, enhancing the overall user experience.',
    },
    {
        id: 4,
        title: 'Github',
        desc: "GitHub is crucial for version control and team collaboration, offering an intuitive interface and essential features like pull requests and issue tracking. These tools streamline the development process, while continuous integration keeps code up-to-date and ensures quality. GitHub's capabilities are vital to my success as a developer, enhancing productivity and fostering seamless teamwork.",
    },
    {
        id: 5,
        title: 'Open Source Contributor',
        desc: "Open Source is the future of software development. On weekends, I dedicate time to contribute to open-source projects, allowing me to learn from the best development practices and collaborate with top developers. This involvement not only enhances my skills but also enables me to help others and contribute positively to the community. Participating in open-source projects fuels innovation and fosters a spirit of collaboration.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
