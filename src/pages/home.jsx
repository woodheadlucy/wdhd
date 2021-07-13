import styled from 'styled-components'
import lucy from '../lw1.jpg'

const Home = (props) => {

    return (
        <div className={props.className}>
        <h1>Home</h1>
        <div className="intro">
            <img className="img" src={lucy}/>
            <p>Enthusiastic individual that likes coding, talking, and travelling. <a className="contact" target="_blank" href="https://www.linkedin.com/in/woodheadlucy/" >Get in touch!</a></p>
        </div>
        <div className="content-wrapper">
            <div>
                <h3>Full Stack Development</h3>
                <p>Day to day use of React, JavaScript, TypeScript, node, and TDD. Also a fan of C# and GraphQL.</p>
            </div>
            <div>
                <h3>Data and databases</h3>
                <p>Strong SQL skills, PostgreSql, GraphQL, and NoSQL.</p>
            </div>
            <div>
                <h3>Azure</h3>
                <p>Confident working with Azure products and services.</p>
            </div>
            <div>
                 <h3>Project Management</h3>
                 <p>Experience overseeing the SDLC and dealing with stakeholders.</p>
            </div>
            <div>
                 <h3>User Research</h3>
                 <p>Leading user testing sessions, everything from card sorting, interviewing and usability testing.</p>
            </div>
            <div>
                <h3>Artifical Intelligence</h3>
                <p>Utilising services to support and enhance my software. </p>
            </div>
        </div>
        </div>
    )
}

const styledHome = styled(Home)`
.img {
    max-width: 150px;
}

.content-wrapper {
    padding: 3rem;
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    justify-content: flex-start;
}

.content-wrapper > div {
    width: calc(33.3% - 2rem);
    min-width: calc(33.3% - 2rem);
    min-height: 100px;
}

.contact {
    text-decoration: none;
    font-weight: bold;
}

@media only screen and (max-width: 700px) {
    .content-wrapper {
    display: flex;
    flex-direction: column;
    gap: unset;
}

.content-wrapper > div {
    width: unset;
}


}

`


export default styledHome;