function myFunction() {
    var y = document.getElementById('content-profile')
    var x = document.getElementById('display-contant-editing');
    if (x.style.display === 'block' && y.style.display == 'none') {
        x.style.display = 'none';
        y.style.display = 'block'
    } else {
        x.style.display = 'block';
        y.style.display = 'none';
    }
}
var password = document.getElementById('fakePassword');
var toggler = document.getElementById('toggler');

showHidePassword = () => {
    if (password.type == 'password') {
        password.setAttribute('type', 'text');
        toggler.classList.add('fa-eye-slash');
    } else {
        toggler.classList.remove('fa-eye-slash');
        password.setAttribute('type', 'password');
    }
};

toggler.addEventListener('click', showHidePassword);


const imgDiv = document.querySelector('.user-img');
const img =  document.querySelector('#photo');
const file=  document.querySelector('#file');
const uploadbtn=  document.querySelector('#uploadbtn');


file.addEventListener('change', function (){
    const choosefile = this.files[0];
    if(choosefile){
        const reader = new FileReader();
        reader.addEventListener('load', function(){
            img.setAttribute('src', reader.result);
        })
        reader.readAsDataURL(choosefile)
    }
});

