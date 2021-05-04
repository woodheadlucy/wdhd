import styled from 'styled-components'
import lucy from '../lw1.jpg'

const options = {
    method: 'POST',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'
},
    body: JSON.stringify({
      profiles: [{email: 'lwoodhead38026@gmail.com'}, {phone_number: '07791664991'}]
    })
  };

const submitForm = () => {

    console.log("hit submit form")
      fetch('https://a.klaviyo.com/api/v2/list/VFFeWZ/members?api_key=pk_e44220a3bd92c55b2d67a5bbbc6ff96e56', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
  }
const Home = (props) => {


 
      
    return (
        <div className={props.className}>
        <h1>Home</h1>
        <img className="img" src={lucy}/>
        <form style={{width: 400}} onSubmit={submitForm}>
            <input type="text"></input>
            <button type="submit">submit</button>
        </form>
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