const textarea = document.getElementById('textarea');
const tagsEl = document.getElementById('tags');

textarea.addEventListener('keyup', (e)=> {
    createTag(e.target.value)
    if(e.code ==='Enter') {
        setTimeout(()=> {
            e.target.value =''
        }, 10);
        getRandom();
    }
})


function createTag(input) {
    const tags = input.split(',').filter(t => t.trim() !== "")
    .map(t=> t.trim());

    tagsEl.innerHTML = '';

    tags.forEach(tag => {
        const tagEl = document.createElement('span'); 
        tagEl.classList.add('tag');
        tagEl.innerText = tag; 
        tagsEl.appendChild(tagEl);
    });
}

function getRandom() {
    const times = 30; 

    const interval = setInterval(()=> {
        const picker = getPicker();

        if(picker !== undefined) {
            highlight(picker);

            setTimeout(()=> {
                unHighlight(picker)
            }, 100)
        }
    }, 100)

    setTimeout(()=> {
        clearInterval(interval);

        setTimeout(()=> {
            const picker = getPicker(); 
            if(picker !== undefined) {
                highlight(picker)
            }
        }, 100)
        
    }, 100*times)
}

function getPicker() {
    const tags = document.querySelectorAll('.tag'); 
    if (tags.length > 0) {
        return tags[Math.floor(Math.random() * tags.length)];
    }
    return undefined; 
}

function highlight(input) {
    input.classList.add('highlight');
}

function unHighlight(input) {
    input.classList.remove('highlight');
}