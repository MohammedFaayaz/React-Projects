function customrender(reactelement,_container){
  /*  const domelement = document.createElement(reactelement.type)
    domelement.innerHTML = reactelement.children
    domelement.setAttribute('href',reactelement.props.href)
    domelement.setAttribute('target',reactelement.props.target)
    container.appendchildren(domelement)
*/
    const domElement = document.createElement(reactelement.type)
    domElement.innerHTML = reactelement.children
    for( const prop in reactelement.props){
        if(prop ==='children') continue
         domElement.setAttribute(prop,reactelement.props[prop])

}
_container.appendChild(domElement)
}


const reactelement ={
    type:'a',
    props: { 
        href: "https://google.com",
        target: '_blank'
    },
    children: 'click me to visit google '

}

const maincontainer = document.querySelector('#root')

customrender(reactelement,maincontainer)