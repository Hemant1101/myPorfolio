import React from 'react'

const SkillsetArray = [
    {
        id: 1,
        skillname: "Python",
        level: "intermediate"
    },
    {
        id: 2,
        skillname: "Javascript",
        level: "intermediate"
    },
    {
        id: 3,
        skillname: "React Js",
        level: "intermediate"
    },
    {
        id: 4,
        skillname: "Node Js",
        level: "intermediate"
    },
    {
        id: 5,
        skillname: "MySQL",
        level: "intermediate"
    },
    {
        id: 6,
        skillname: "Java",
        level: "Basic"
    },
    {
        id: 7,
        skillname: "Mongo",
        level: "Basic"
    },

]

const About = () => {
  return (
    <section id="about" className="about">
        <h2 className="numbered-heading">About Me</h2>
        <div className="inner">
            <div className="about-content">
                <p>Hello! My name is <span>Hemant</span> and I love to learn new things and build things to solve problems while having fun. I am a student of Computer Science Engineering at BCET affiliated to MAKAUT University. </p>
                <p>I have been recently working on a RNN based <span>Twitter sentiment Analysis </span>project with my friends for my Final Year Project.</p>
                <p> I love to explore different technologies and fields that interests me and learn to create different things. I like to work in groups , as I work on different projects with my friends together.
                    I love music and video games a lot and I am a huge fan of Anime and Manga.
                </p>
                <p>Here are a few technologies I've been working with recently:</p>
            </div>
            <ul className="skill-list">
                {SkillsetArray.map((values) => {
                    return (
                        <li key={values.id}><span>{`${values.skillname}`}</span> <i style={{fontSize:"var(--fz-xxs)"}}>( {`${values.level}`} )</i></li>
                    )
                })}
            </ul>
        </div>
    </section>
  )
}

export default About