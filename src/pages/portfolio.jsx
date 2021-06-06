import ecommerce from '../ecommerce.png'

import styled from 'styled-components'


const Portfolio = (props) => {
    return (
        <div className={props.className}>
        <h1>Portfolio</h1>
        <p>I have worked on complex platforms, websites, and apps in my career so far. Whilst I cannot share specific work examples here please take a look at my side projects.</p>
        <div>
            <div>
                <a href="lucy-ecommerce-demo.netlify.app" target="_blank">Demo e-commerce site</a>
                <p>A front end site with React, Typescript, Material UI, and Styled Components. Fake store API used.</p>
                <img src={ecommerce}/>
            </div>
            <div>
                <a href="https://events-demo-app.netlify.app/" target="_blank">Demo events booking site</a>
                <p>I created a simple json API first, then called it from the front end and created an experience where users can search/book events. React and TypeScript</p>
            </div>
        </div>
        </div>
    )
}

const styledPortfolio = styled(Portfolio)`

img {
    width: 600px;
}
`
export default styledPortfolio;