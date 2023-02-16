import React from 'react'
import {ReactComponent as GithubLogo} from '../assets/github.svg'

const ArchivedProjectsArray = [
    {
        id : 1,
        name : "proj",
        githublink : "https://www.github.com/",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, esse.",
        techStack : [{id:1,name:"html"},{id:2,name:"css"}]
    },
    {
        id : 2,
        name : "proj",
        githublink : "https://www.github.com/",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, esse.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, esse.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, esse.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, esse.",
        techStack : [{id:1,name:"html"},{id:2,name:"css"}]
    },
    {
        id : 3,
        name : "proj",
        githublink : "https://www.github.com/",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, esse.",
        techStack : [{id:1,name:"html"},{id:2,name:"css"}]
    },{
        id : 4,
        name : "proj",
        githublink : "https://www.github.com/",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, esse.",
        techStack : [{id:1,name:"html"},{id:2,name:"css"}]
    },
]

const ArchiveProjects = () => {
  return (
    <section id="archive_projects" className="archive_projects">
        <h2 style={{visibility: "visible",
            opacity: "1",transform: "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)",transition: "opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s"}}>
                Other Noteworthy Projects
            </h2>
            <ul className="projects-grid">
                {ArchivedProjectsArray.map((projects) => {
                    return (
                    <li key={projects.id} className="archived_project-item" style={{
                        transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s", 
                        visibility: "visible", 
                        opacity: "1", 
                        transform:"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}}
                        >
                        <div className="project-inner">
                            <div>
                                <div className="project-top">
                                    <div className="folder">
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                                    </div>
                                    <div className="project-links">
                                        <a href={projects.githublink} rel="noopener noreferrer" target="_blank">
                                            <GithubLogo />
                                        </a>
                                    </div>
                                </div>
                                <h3 className="project-title">
                                    <a href={projects.githublink} rel="noopener noreferrer" target="_blank">
                                        {`${projects.name}`}
                                    </a>
                                </h3>
                                <div className="project-description">
                                    <p>{`${projects.description}`}</p>
                                </div>
                            </div>
                            <div>
                                <ul className="project-tech-list">
                                    {projects.techStack.map((tech) => {
                                        return (<li key={tech.id}>{`${tech.name}`}</li>)
                                    })}
                                </ul>
                            </div>
                        </div>   
                    </li>)
                })}
            </ul>
    </section>
  )
}

export default ArchiveProjects