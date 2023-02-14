import React from 'react'
import {ReactComponent as GitHubLogo} from '../assets/github.svg'
import {ReactComponent as ExternalLinkLogo} from '../assets/external_link.svg'
import PresentationSvg from '../assets/presentation.svg'

const ProjectsArray = [
    {
        id: 1,
        project_name: "Hotel Management System",
        link: "https://hemant1101.github.io/hotel-management-system-mongo/",
        githublink: "https://github.com/Hemant1101/hotel-management-system-mongo",
        description: "It is a Web-based application that allows the hotel manager to handle all hotel activities online. A fully responsive UI with landing page , customer registration and login.",
        techstack: [{id:1,name:"React Js"},{id:2,name:"SCSS"},{id:3,name:"Express Js"},{id:4,name:"MySQL"},{id:5,name:"MongoDb"},{id:6,name:"AdminBro"}],
        imgSrc: "/proj1.png"
    },
    {
        id: 2,
        project_name: "GitHub Profiles",
        link: "https://hemant1101.github.io/github-profiles/",
        githublink: "https://github.com/Hemant1101/web_Devs/tree/main/Github%20profiles",
        description: "It is a web-app in which you can search any GitHub user. You have to search with username and it will show you a profile card of the user",
        techstack: [{id:1,name:"HTML"},{id:2,name:"CSS"},{id:3,name:"Javascript"}],
        imgSrc: "/proj2.png"
    }
]

const Projects = () => {
  return (
    <section id="projects">
        <h2 className="numbered-heading" style={{visibility: "visible",
            opacity: "1",transform: "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)",transition: "opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s"}}>
                Some Things I've Built
            </h2>
            <ul className="project-list">
                {ProjectsArray.map((project) => {
                    return (
                    <li key={project.id} className="project-item" style={{visibility: "visible",
                    opacity: "1",transform: "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)",transition: "opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s"}}>
                        <div className="project-content">
                            <div>
                                <p className="project-overline">Featured Project</p>
                                <h3 className="project-title">
                                    <a href={project.link} rel="noopener noreferrer" target="_blank">{`${project.project_name}`}</a>
                                </h3>
                                <div className="project-description">
                                    <p>
                                        {`${project.description}`}
                                    </p>
                                </div>
                                <ul className="project-tech-list">
                                    {project.techstack.map((tech) => {
                                        return (<li key={tech.id}>{`${tech.name}`}</li>)
                                    })}
                                </ul>
                                <div className="project-links">
                                    <a href={project.githublink} rel="noopener noreferrer" target="_blank">
                                        <GitHubLogo />
                                    </a>
                                    <a href={project.link} rel="noopener noreferrer" target="_blank">
                                        <ExternalLinkLogo />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="project-image">
                            <a href={project.link} rel="noopener noreferrer" target="_blank">
                                <div className=" g-image-wrapper g-image-wrapper-constraned img">
                                    <div style={{maxWidth:"700px",display:"block"}}>
                                        <img alt role="presentation" aria-hidden="true" src={PresentationSvg} style={{maxWidth:"100%",display:"block",position:"static"}} />
                                    </div>
                                    <picture>
                                        <source type="image/avif" srcSet={project.imgSrc} style={{objectFit:"cover",opacity:"1"}} sizes="700px, 100vw"/>
                                        <img width="700" height="438" data-main-image sizes="700px, 100vw" decoding="async" style={{objectFit:"cover",opacity:"1"}} src={project.imgSrc} alt={project.project_name} />
                                    </picture>
                                    <noscript></noscript>
                                </div>
                            </a>
                        </div>
                    </li>)
                })}
                
            </ul>
    </section>
  )
}

export default Projects