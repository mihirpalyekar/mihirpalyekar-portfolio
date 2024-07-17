// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Ashish Pawar',
    image: "images/Ashish Pawar.jpeg",
    designation: 'Senior Vice President and CTO - Head of Products and Engineering',
    view: "Mihir Palyekar was instrumental in developing our customer loan application journey. His front-end development expertise resulted in a smooth, user-friendly experience that greatly benefited our customers. Mihir consistently delivered top-quality work, met all deadlines, and brought innovative solutions to the table. He is a proactive, reliable, and effective team player, whose positive attitude and clear communication greatly contributed to our project’s success. I highly recommend Mihir for any development role. His skills and dedication will make him a valuable asset to any team.",
    linkednURL: "https://www.linkedin.com/in/ashishpawar24/"
  },
  {
    id: 1,
    name: 'Vijay Pagare',
    image: "images/Vijay Pagare.jpeg",
    designation: 'Senior Experience Engineer at Publicis Sapient | Passionate about frontend web dev & product building',
    view: "Mihir is extremely dedicated and hardworking individual. He is a great problem solver with a never giving up attitude. He is proficient at JavaScript and Frontend in general. I’ve collaborated with him on multiple projects. Exceptional team player and an asset for any team.",
    linkednURL: "https://www.linkedin.com/in/pagarevijayy/"
  },
  {
    id: 2,
    name: 'Mohit Gahlot',
    image: "images/Mohit Gahlot.jpeg",
    designation: 'Tech@Lenskart',
    view: "Mihir Palyekar spearheaded numerous critical projects at our company, consistently playing pivotal roles. He revolutionised our UI/UX performance, achieving a remarkable improvement through his mastery of TypeScript and Angular. Mihir's command over these technologies and innovative implementation strategies significantly boosted our platform's efficiency. In addition to his technical prowess, Mihir excelled as a team leader, guiding and mentoring a team of four junior developers. His expertise in best practices, coding standards, and debugging techniques fostered their professional growth and cultivated a collaborative, cross-functional team environment. I wholeheartedly recommend Mihir for any development role. His exceptional skills, unwavering dedication, innovative mindset, and outstanding leadership abilities make him an invaluable asset to any team.",
    linkednURL: "https://www.linkedin.com/in/gahlotbaba/"
  },
  {
    id: 3,
    name: 'Omkar Todkar',
    image: "images/Omkar Todkar.jpeg",
    designation: 'Founder and Chief Technology Officer at BinaryTouch',
    view: "I am delighted to recommend Mihir Palyekar, whose exceptional expertise as a Frontend Developer Freelancer has been pivotal to our projects' success. Mihir engineered reusable frontend components using React, Redux, TypeScript, and Tailwind, ensuring comprehensive test coverage with Jest and optimizing code with Babel. He enhanced our data analytics by implementing Google Tag Manager (GTM) for custom event tracking, aiding the product manager in extracting insights for informed decision-making. His seamless integration of third-party libraries for infinite scroll and Google Auth login significantly improved our search logic based on location and gender. Beyond his technical skills, Mihir excelled as a proactive, reliable, and effective team player. He championed Test-Driven Development (TDD) methodologies for frontend development, fostering an environment conducive to producing error-free code. Mihir's positive attitude, clear communication, and collaborative approach greatly contributed to our projects' success. I wholeheartedly recommend Mihir for any development role, as his exceptional skills and dedication make him an invaluable asset to any team.",
    linkednURL: "https://www.linkedin.com/in/omtodkar/"
  }
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
