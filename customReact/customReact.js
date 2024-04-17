function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
        //domElement.setAttribute('href', reactElement.props.href)
        //domElement.setAttribute('target', reactElement.props.target)
    for (const prop in reactElement.props) {
        if (prop == 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}

const mainContainer = document.querySelector('#root')
    //we have to create a custom render method 
customRender(reactElement, mainContainer)

//call the div element in the js file using dom
//const mainContainer = document.querySelector('#root')


//function customrender(reactelement, maincontainer){
// const domelement = document.createElement(reactElement.type)
// domelement.innerHTML(reactElement.children)
// domelement.setAttribute('href', reactElement.props.href)
//}

// const reactelement = {
//     type: 'a',
//     props: {
//         href:'https://google.com'
//         target: '_blank'
//     },
//     childern: 'click this link to open google.com'

// }
//customrender(reactelement, maincontainer)