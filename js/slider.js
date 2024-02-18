document.addEventListener('DOMContentLoaded', slider);
function slider(){
    let btns = document.querySelector('.participants__buttons');
    let cards_wrapper = document.querySelector('.participants__cards_wrapper');
    let btn_descr = document.querySelector('.participants__buttons_descr_desc');
    let btn_descr_mob = document.querySelector('.participants__buttons_descr_mob');
    let device  = (cards_wrapper.getBoundingClientRect().height === 462)?'desctop':'mobile';
    let index = 0;
 
    setInterval(()=>{
        if (index <= 4){
            index++;
            cards_wrapper.style.marginLeft = -index*356 + 'px';
            btn_descr_mob.innerHTML = `${index+1}<span>/6</span>`
            btns.querySelector('.forward._mob').style.opacity = '1';
            btns.querySelector('.back._mob').style.opacity = '.7';
            if (index === 5){
                index = -1;
                btns.querySelector('.forward._mob').style.opacity = '.7';
                btn_descr_mob.lastChild.style.opacity = '1';
            }
        }
            
    }, 4000);
    let index_card = 0;
    btns.addEventListener('click', (event)=>{
         if (event.target.closest('svg')){
            if (event.target.closest('svg').className.baseVal === 'back'){
                cards_wrapper.style.marginLeft = '0';
                btn_descr.innerHTML = '3<span>/6</span>';
                btns.querySelector('#back').style.opacity= '0.7';
                btns.querySelector('#forward').style.opacity= '1';
            }else if (event.target.closest('svg').className.baseVal === 'forward'){
                cards_wrapper.style.marginLeft = '-825px';
                btn_descr.innerHTML = '6<span>/6</span>'
                btn_descr.lastChild.style.opacity = '1';
                btns.querySelector('#forward').style.opacity = '0.7';
                btns.querySelector('#back').style.opacity = '1';
            } else if (event.target.closest('svg').className.baseVal === 'back _mob'){
                if (index_card > 0){
                    index_card --;
                    cards_wrapper.style.marginLeft =  -index_card*356 + 'px';
                    btn_descr_mob.innerHTML = `${index_card+1}<span>/6</span>`
                    btns.querySelector('.forward._mob').style.opacity = '1';
                    btns.querySelector('.back._mob').style.opacity = '.7';
                }

            }else{
                if (index_card <= 4){
                    index_card ++;
                    cards_wrapper.style.marginLeft = -index_card*356 + 'px';
                    btn_descr_mob.innerHTML = `${index_card+1}<span>/6</span>`
                    btns.querySelector('.forward._mob').style.opacity = '.7';
                    btns.querySelector('.back._mob').style.opacity = '1';
                }if (index_card+1 ===6){
                    btn_descr_mob.lastChild.style.opacity = '1';
                }
            }
         }
    })
}