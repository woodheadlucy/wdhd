import styled from 'styled-components'

const About = (props) => {
    return (
        <div className={props.className}>
        <h1>About</h1>
        <p>Hello! I'm Lucy, a Software Developer based in the UK. I've worked in the digital space for 5 years, covering project management, User Research, and now software development. I have experience building APIs, user interfaces, Augmented Reality experiences, and complex data management.</p>
        </div>
    )
}

const styledAbout = styled(About)`
padding: 3rem;
`

export default styledAbout;