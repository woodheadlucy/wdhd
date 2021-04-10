import styled from 'styled-components'
const Home = (props) => {
    return (
        <div className={props.className}>
        <h1>Home</h1>
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

.content-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.content-wrapper > div {
    width: 33.33.%;
}

`


export default styledHome;