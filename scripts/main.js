let myImage = document.querySelector('img');
let dio_jojo = document.querySelector('#dio');
let dio_jojo2 = document.querySelector('#dio2');


myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/e6499ec033e1b69c4e4cee8aaf8575ba1534629271_full.png'){
        myImage.setAttribute('src', 'images/dio.jpg')
        dio_jojo.style.display = 'none';
        dio_jojo2.style.display = 'block';
    } else {
        myImage.setAttribute('src', 'images/e6499ec033e1b69c4e4cee8aaf8575ba1534629271_full.png')
        dio_jojo.style.display = 'block';
        dio_jojo2.style.display = 'none';
    }
}

function setHeading(name) {
    let myHeading = document.querySelector('h1');
    myHeading.textContent = '我不做人了' + name +'!';
}

function setUserName() {
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name', myName);
    setHeading(myName);
}

let storedName = localStorage.getItem('name');
if(!storedName) {
    setUserName();
} else {
    setHeading(storedName);
}

let myButton = document.querySelector('button');
myButton.onclick = setUserName;