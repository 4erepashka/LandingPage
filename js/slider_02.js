document.addEventListener('DOMContentLoaded', slider);
function slider(){
    let btns = document.querySelector('.stages__btns');
    let index_card = 0;
    let cards = [
        document.querySelector('.stages__card_01_mob'),
        document.querySelector('.stages__card_02_mob'),
        document.querySelector('.stages__card_03_mob'),
        document.querySelector('.stages__card_04_mob'),
        document.querySelector('.stages__card_05_mob'),

    ];

    let options = [
        btns.querySelector('.stages__btns_circle._01'),
        btns.querySelector('.stages__btns_circle._02'),
        btns.querySelector('.stages__btns_circle._03'),
        btns.querySelector('.stages__btns_circle._04'),
        btns.querySelector('.stages__btns_circle._05'),
    ];
    options[0].style.opacity = '1';
    btns.addEventListener('click', (event)=>{
        if (event.target.closest('svg')){
            if  (event.target.closest('svg').className.baseVal === 'back'){
                if (index_card > 0){
                    index_card--;
                    cards[index_card + 1].style.display = 'none';
                    cards[index_card].style.display = 'flex';
                    btns.querySelector('.forward').style.opacity = '1';
                    options[index_card].style.opacity = '1';
                    options[index_card+1].style.opacity = '.7';
                }else{
                    btns.querySelector('.back').style.opacity = '.7';
                }
            }else if (event.target.closest('svg').className.baseVal === 'forward'){
                if (index_card < 4){
                    index_card++;
                    cards[index_card-1].style.display = 'none';
                    cards[index_card ].style.display = 'flex';
                    btns.querySelector('.back').style.opacity = '1';
                    options[index_card].style.opacity = '1';
                    options[index_card-1].style.opacity = '.7';
                }else{
                    btns.querySelector('.forward').style.opacity = '.7';
                }
            }
        }
    })
}

