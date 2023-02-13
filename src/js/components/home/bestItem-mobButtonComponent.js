const bestItemWrapper = document.querySelectorAll('.best__item');
const bestList = document.querySelector('.best__list')
bestItemWrapper.forEach(item => {
    let btnShow = item.querySelector('.best__item-showMore');
    let listReviews = item.querySelector('.best__item-plus-list');

    btnShow.addEventListener('click', () => {
        const allBtnShow = document.querySelectorAll('.best__item-showMore')

        listReviews.classList.toggle('_show');
        if(!btnShow.classList.contains('_openList') ){
            bestList.classList.add('_openItem')
        } else {
            bestList.classList.remove('_openItem')
        }
        btnShow.classList.toggle('_openList');

        allBtnShow.forEach(item=>{
            if(item.classList.contains('_openList')){
                bestList.classList.add('_openItem')
            }
        })

    })
})

// const bestItem = document.querySelectorAll('.best__item')
// const bestList = document.querySelector('.best__list')
// const allBtnShow = document.querySelectorAll('.best__item-showMore')
//
// bestItem.forEach( item => {
//     const btnShowMore = item.querySelector('.best__item-showMore')
//     const bestItemList = item.querySelector('.best__item-plus-list')
//
//     btnShowMore.addEventListener('click', () => {
//         btnShowMore.classList.toggle('_open')
//         bestItemList.classList.toggle('_open')
//         bestList.classList.add('_open')
//     })
// })