import React from 'react'
import {createRoot} from 'react-dom/client'

import App from './App.jsx'
//this is one method
function MYapp(){
    return(
        <a href="https.//google.com" target='_blank'>Visit google</a>
    )
}
//this is one method otherElemtgive inside line 18
const AnotherElemnet= (
       <a href="https.//google.com" target='_blank'>Visit Google</a>
)


const areactelement = React.createElement(
    'a',
    {
        href: 'https://google.com',  // Fixed the URL typo (https.// -> https://)
        target: "_blank"
    },
    'Visit Google'
);

  // Just to verify the output



createRoot(document.getElementById('root')).render(
    //it is a proper component
   AnotherElemnet

)
