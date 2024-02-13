import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom React</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit Google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>
        Visit Google
    </a>
)
const anotherUser = "Chai aur Code"
const reactElement = React.createElement(
    'a',
    {
        href: 'https://google.com', target: '_blank'
    },
    'Click me to Visit Google',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    //<MyApp/>
 //ReactElement

 //anotherElement
 //reactElement

 <App/>
  
)
