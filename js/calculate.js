const card = document.querySelectorAll('#card');
const selectItem = document.getElementById('select-item');
const totalPrice = document.getElementById('total-price');
const makeBtn = document.getElementById('make-btn');
const applyBtn = document.getElementById('apply-btn');
const discountPrice = document.getElementById('discount-price');
const DiscountedPrice = document.getElementById('total');
const inputField = document.getElementById('input-field');
applyBtn.disabled = true
makeBtn.disabled = true;

let total = 0;

for (let i of card) {
    i.addEventListener('click', function () {
        const cardText = i.childNodes[3].childNodes[3].innerText;
        const priceString = i.childNodes[3].childNodes[5].childNodes[0].innerText;

        const p = document.createElement('p');
        const count = selectItem.childElementCount;
        p.innerText = count + 1 + ". " + cardText;
        selectItem.appendChild(p);
        const price = parseFloat(priceString);
        total = total + price;
        totalPrice.innerText = total;
        makeBtn.disabled = false;
        if (total > 1500) {
            applyBtn.disabled = false;
        }
        else {
            applyBtn.disabled = true;
        }
    });
}

applyBtn.addEventListener('click', function () {
    if (inputField.value === 'SELL200') {
        const discount = total * 20 / 100;
        discountPrice.innerText = discount;
        const totalPrice = total - discount;
        DiscountedPrice.innerText = totalPrice;
        swal("Good job!", "20% discount is given!", "success");

    }
    else {
        swal("Sorry", "Pleace right promo code", "error");
    }
})