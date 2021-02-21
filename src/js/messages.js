function msg(text, title, type){
    const msgContainer = document.createElement('div');
    msgContainer.classList = 'message-container';

    msgContainer.innerHTML = document.views.messages;

    msgContainer.querySelector('.message__text__title').textContent = title
    msgContainer.querySelector('.message__text__title').classList.add(type)
    msgContainer.querySelector('.message__text__message').textContent = text
    msgContainer.querySelector('.message__text__message').classList.add(type)
    msgContainer.querySelector('.message__icon').classList.add(type)

    
    msgContainer.querySelector('.message__btn-close').addEventListener('click', () =>{
        document.body.removeChild(msgContainer)
    });
    
    document.body.appendChild(msgContainer);
}



function msgYesNo(title, message, type, ok, no){
    const container = document.querySelector("div.modal");
    const view = document.createElement("div");

    view.classList.add('modal-content');
    view.classList.add('message-content')
    view.innerHTML = document.views.messageYN;

    view.querySelector('.message__text__title').textContent = title
    view.querySelector('.message__text__title').classList.add(type)
    view.querySelector('.message__text__message').textContent = message
    view.querySelector('.message__text__message').classList.add(type)
    view.querySelector('.message__icon').classList.add(type)

    const btnDelete = view.querySelector('button.btn-primary');
    const btnNot = view.querySelector('button.btn-secondary-simple');

    btnDelete.textContent = 'Eliminar';
    btnDelete.addEventListener('click', ok);
    btnDelete.addEventListener('click', () => container.style.visibility = 'hidden');

    if(no){
        btnNot.addEventListener('click', no1);
    }
    btnNot.addEventListener('click', () => container.style.visibility = 'hidden');
    
    
    view.querySelector('.message__btn-close').addEventListener('click', () =>{
        container.style.visibility = 'hidden'
    });
    
    if (container){
        container.innerHTML = "";
        container.appendChild(view);
        container.style.visibility = "visible";
    }
}

export {
    msg,
    msgYesNo
}