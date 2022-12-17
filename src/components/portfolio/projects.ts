export type Project = {
    title:string,
    link?:string,
    linkTitle?:string,
    description:string
}

const projects: Project[]=  [{
    link: "https://mylc-backend.web.app/",
    title: "MyLC",
    linkTitle: "Live Demo",
    description: "Angular app for tracking Leetcode progress with offline and online progress storage"
  },
  {
    link: "https://github.com/ZhouJas/CryptoPi",
    title: "CryptoPi",
    linkTitle: "Go to Github",
    description: "Physical Ethereum wallet using Raspberry Pi, Node, MongoDB and Flutter" 
  },
  {
    link: "https://devpost.com/software/campusafe",
    title: "Campusafe",
    linkTitle: "Go to DevPost",
    description: "React Native app made to provide mental health support"
  },
  {
    link: "https://github.com/teppah/gitvoice",
    title: "GitVoice",
    linkTitle: "Go to Github",
    description: "VSCode extension to perform git commands remotely using voice prompts"
  }]
export default projects
