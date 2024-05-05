function customRender(reactElement, container) {
    const element = document.createElement(reactElement.type);
    element.innerHTML = reactElement.children;
    element.setAttribute('href', reactElement.props.href);
    element.setAttribute('target', reactElement.props.target);
    container.appendChild(element);
}


const reactElement = {
    type: 'a',
    props: {
        href: 'https://youtube.com',
        target: '_blank'
    },
    children: 'Click me to visit youtube'
}

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);