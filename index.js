const buttons = document.querySelectorAll(".header__nav-button");

buttons.forEach(button =>{
    button.addEventListener('click', function(){

        const targetId = this.getAttribute('data-target');
        const targetIFrame = document.getElementById(targetId);

        if(targetIFrame.style.display != 'block'){
            targetIFrame.style.display = 'block';
            offIFrames(targetId);
            offButton(button);
        }
    });
});

function offIFrames(targetId){
    const iFrames = document.querySelectorAll('.main-view');
    iFrames.forEach( iframe =>{
        if(iframe.id != targetId)
            iframe.style.display = 'none';
    });
}

function offButton(buttonClick){
    buttons.forEach(button =>{
        if(button == buttonClick)
            console.log(buttonClick);
    })
}