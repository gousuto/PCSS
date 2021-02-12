function msg(text, title, type){
    const msgContainer = document.createElement('div');
    msgContainer.classList = 'message-container';

    msgContainer.innerHTML = document.views.messages;

    msgContainer.querySelector('.title').textContent = title
    msgContainer.querySelector('.title').classList.add(type)
    msgContainer.querySelector('.message').textContent = text
    msgContainer.querySelector('.message').classList.add(type)
    msgContainer.querySelector('.icon').classList.add(type)

    
    msgContainer.querySelector('.btn-close').addEventListener('click', () =>{
        document.body.removeChild(msgContainer)
    })
    
    document.body.appendChild(msgContainer);
}


export default msg