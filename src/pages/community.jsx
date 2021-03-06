import styled from 'styled-components'

const Community = (props) => {
    return (
        <div className={props.className}>
        <h1>Community</h1>
        <p>Since working in the tech sector I've been lucky to foster connections with several organisations. Below includes some of the initiatives I've been part of.</p>
        <div className='media'>
            <div>
                <h3>Northcoders interview</h3>
                <iframe width="420" height="345" src="https://www.youtube.com/embed/pKVq9aic6Mc">
</iframe>
            </div>
            <div>
                <h3>Article for Journey Hero</h3>
                <iframe src="https://www.journeyherotech.net/wp-content/uploads/2021/02/Interview-with-Lucy-Woodhead-1.pdf" height="345" width="420"></iframe>

            </div>
            <div>
                <h3>Article for The Code Zone</h3>
                <a href="https://www.thecodezone.co.uk/news/women-in-coding" target="_blank">
                    <img src="https://www.thecodezone.co.uk//content/Lucy%20Blog%20Thumbnail%202.png" height="345" width="220" href="https://medium.com/epic-women-in-tech/epic-women-in-tech-lucy-woodhead-3c3ff916b734"></img>
                </a>
            </div>
        </div>
        <h2>Code First: Girls Fellow</h2>
        <p>I gained a place on the fellowship in January 2021. The programme is designed for women who are 2+ years into their tech careers, in order to upskill them for technical leadership positions. I received several training sessions as part of this but I was also required to teach. For 8 weeks, I taught a group of women Data and SQL.</p>
        <h2>Community Manager with AI Tech North</h2>
        <p>I've been involved with AI Tech North for a while, starting out as a Social Media volunteer before becoming the Community Manager for 2020. It was a challenging year with the pandemic but we adapted to a hybrid AI Summit and brought together over 100 strategic partners. I now sit as an ambassador for AI Tech North and occasionally host their Innovation Exchange events.</p>
        <h2>#TechWomen100 Award winner</h2>
        <p>I was very grateful to receive an award for doing something that feels natural to me.</p>
        <h2>Speaker with Codeandstuff during National Coding Week</h2>
        <p>I've had a very positive experience growing as a developer and it was an honour to speak during National Coding Week with a non-profit that focus on getting more women into technical roles.</p>
        <h2>Speaker at Code First Girls</h2>
        <p>I shared my story of pivoting from project management into coding, and what I found most useful in journey.</p>
        </div>
    )
}

const styledCommunity = styled(Community)`
padding: 3rem;

.media {
    display: flex;
    justify-content: space-between;
    padding: 24px;
}
h2 {
    text-align: left;
}

 p {
    text-align: left;
}

`;
export default styledCommunity;