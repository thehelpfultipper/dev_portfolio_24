const pathPrefix = '/kleamerkuri';

// exports
export const categories = [
    "All",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python", 
    "SCSS"
];

export const links = {
    linkedin: {
        url: "https://www.linkedin.com/in/kmerkuri97",
        text: "LinkedIn"
    },
    resume: {
        url: `${process.env.NODE_ENV === "development" && pathPrefix || ''}/klea-merkuri-software-engineer-resume.pdf`,
        text: "Download"
    },
    github: {
        url: "https://github.com/thehelpfultipper/",
        text: "GitHub"
    },
    codepen: {
        url: "https://codepen.io/thehelpfultipper",
        text: "CodePen"
    },
    blog: {
        url: "https://thehelpfultipper.com/",
        text: "Blog"
    },
    portfolios: {
        km: {
            v1: 'https://thehelpfultipper.com/portfolios/v1/kleamerkuri/'
        }
    }
}
