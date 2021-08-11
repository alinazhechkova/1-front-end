// node.append(...nodes or strings) – вставляет в node в конец,
// node.prepend(...nodes or strings) – вставляет в node в начало,
// node.before(...nodes or strings) – вставляет прямо перед node,
// node.after(...nodes or strings) – вставляет сразу после node,
// node.replaceWith(...nodes or strings) – заменяет node.
// node.remove() – удаляет node.

function createElem(options) {
    if (!options || !options.tagName) return;
    const tag = document.createElement(options.tagName);

    addClass(tag, options.classList)
    addAttributes(tag, options.attributes);
    addContent(tag, options.content);
    if (options.events) addEvents(tag, options.events)

    return tag;

}

function addEvents(node, events) {
    if (!node && !events) return;
    node.addEventListener(events.eventName, events.handler);
}

function addClass(node, classList) {
    if (!classList && !node) return;
    classList.split(' ').forEach(element => {
        node.classList.add(element)
    });
    //  node.classList.add(...classList.split(' '))
}

function addAttributes(node, options) {
    if (!options && !node) return;
    for (let key in options) {
        node.setAttribute(key, options[key])
    }
}

function addContent(node, content) {
    if (!content) return;

    if (typeof content === 'string') {
        node.textContent = content;
    } else if (content.nodeType === 1) {
        node.append(content)
    } else if (Array.isArray(content)) {
        content.forEach(element => {
            addContent(node, element);
        });
    }
}
// 1. Создать страницу, которая выводит нумерованный список песен:

let playList = [{
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }
];

function getText(array) {
    let text = array.map(function (item) {
        return `<li>${item.author}: ${item.song}</li>`
    })
    return text;
}

function createPlaylist() {
    const ol = createElem({
        tagName: 'ol',
        classList: 'playlist__content',
    });
    const content = getText(playList);
    content.forEach(item => {
        ol.insertAdjacentHTML('beforeend', item)
    })
    document.getElementById('playlist').append(ol);
}

createPlaylist()
