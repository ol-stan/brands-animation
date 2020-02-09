const brandImg = document.querySelectorAll('.brand-img__logo');
const brandTxt = document.querySelectorAll('.brand-txt__information');

for (let i = 0; i < brandImg.length; i++) {
    brandImg[i].addEventListener('mouseover', function () {
        for (let i = 0; i < brandTxt.length; i++) {
            brandTxt[i].className = 'brand-txt__information';
        }
        document.getElementById(this.dataset.id).className = 'brand-txt__information brand-txt__information--active';

        for (let i = 0; i < brandImg.length; i++) {
            brandImg[i].className = 'brand-img__logo';
        }
        this.className = 'brand-img__logo brand-img__logo--active';
    })
}