function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    const props = reactElement.props;
    for (key in props) {
        if (key === 'children') continue
        domElement.setAttribute(key, props[key])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://github.com/isadarsh',
        target: '_blank'
    },
    children: 'click me to visit github'
}

const mainContainer = document.querySelector('#root')

const render=  customRender(reactElement, mainContainer);
