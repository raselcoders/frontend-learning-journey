 document.getElementById('change-girgity-color').addEventListener('click',function (){
            const conBtnAndTitle = document.getElementById('page-title');
            console.log("Button Working")
            conBtnAndTitle.innerText = 'Ha Ha! you are fall i am snack';
            document.body.style.backgroundColor='red';
        })

document.getElementById('login-page').addEventListener('click',function(){
            const changeEl = document.getElementById('user-page');
            changeEl.innerText ='Login successfully';
            document.body.style.backgroundColor='green'

        })        