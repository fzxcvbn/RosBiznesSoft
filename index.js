let month61 = document.querySelector(".month61"),
    year1 = document.querySelector('.year1'),
    month62 = document.querySelector(".month62"),
    year2 = document.querySelector('.year2'),
    month63 = document.querySelector(".month63"),
    year3 = document.querySelector('.year3'),
    month64 = document.querySelector(".month64"),
    year4 = document.querySelector('.year4'),
    price1 = document.querySelector('.price1'),
    crossed_out_price1 = document.querySelector('.crossed-out-price1'),
    price2 = document.querySelector('.price2'),
    crossed_out_price2 = document.querySelector('.crossed-out-price2'),
    price3 = document.querySelector('.price3'),
    crossed_out_price3 = document.querySelector('.crossed-out-price3'),
    price4 = document.querySelector('.price4'),
    crossed_out_price4 = document.querySelector('.crossed-out-price4'),
    rent = document.querySelector('.rent'),
    purchase = document.querySelector('.purchase'),
    subscription = document.querySelector('.subscription'),
    changing_subtitle = document.querySelector('.changing-subtitle'),
    for_1_user_per_month1 = document.querySelector('.for-1-user-per-month1'),
    for_1_user_per_month2 = document.querySelector('.for-1-user-per-month2'),
    for_1_user_per_month3 = document.querySelector('.for-1-user-per-month3'),
    for_1_user_per_month4 = document.querySelector('.for-1-user-per-month4'),
    conteiner_month6_year1 = document.querySelector('.conteiner-month6-year1'),
    conteiner_month6_year2 = document.querySelector('.conteiner-month6-year2'),
    conteiner_month6_year3 = document.querySelector('.conteiner-month6-year3'),
    conteiner_month6_year4 = document.querySelector('.conteiner-month6-year4'),
    users1_5_10_25_1001 = document.querySelector('.users1-5-10-25-1001'),
    users2_5_10_25_1001 = document.querySelector('.users2-5-10-25-1001'),
    users3_5_10_25_1001 = document.querySelector('.users3-5-10-25-1001'),
    users4_5_10_25_1001 = document.querySelector('.users4-5-10-25-1001'),
    users1_5_10_25_1002 = document.querySelector('.users1-5-10-25-1002'),
    users2_5_10_25_1002 = document.querySelector('.users2-5-10-25-1002'),
    users3_5_10_25_1002 = document.querySelector('.users3-5-10-25-1002'),
    users4_5_10_25_1002 = document.querySelector('.users4-5-10-25-1002'),
    users1_forever = document.querySelector('.users1-forever'),
    users2_forever = document.querySelector('.users2-forever'),
    users3_forever = document.querySelector('.users3-forever'),
    users4_forever = document.querySelector('.users4-forever'),
    users115 = document.querySelector('.users115'),
    users125 = document.querySelector('.users125'),
    users135 = document.querySelector('.users135'),
    users145 = document.querySelector('.users145'),
    users1110 = document.querySelector('.users1110'),
    users1210 = document.querySelector('.users1210'),
    users1310 = document.querySelector('.users1310'),
    users1410 = document.querySelector('.users1410'),
    users1125 = document.querySelector('.users1125'),
    users1225 = document.querySelector('.users1225'),
    users1325 = document.querySelector('.users1325'),
    users1425 = document.querySelector('.users1425'),
    users11100 = document.querySelector('.users11100'),
    users12100 = document.querySelector('.users12100'),
    users13100 = document.querySelector('.users13100'),
    users14100 = document.querySelector('.users14100'),
    users215 = document.querySelector('.users215'),
    users225 = document.querySelector('.users225'),
    users235 = document.querySelector('.users235'),
    users245 = document.querySelector('.users245'),
    users2110 = document.querySelector('.users2110'),
    users2210 = document.querySelector('.users2210'),
    users2310 = document.querySelector('.users2310'),
    users2410 = document.querySelector('.users2410'),
    users2125 = document.querySelector('.users2125'),
    users2225 = document.querySelector('.users2225'),
    users2325 = document.querySelector('.users2325'),
    users2425 = document.querySelector('.users2425'),
    users21100 = document.querySelector('.users21100'),
    users22100 = document.querySelector('.users22100'),
    users23100 = document.querySelector('.users23100'),
    users24100 = document.querySelector('.users24100'),
    free_btn_conteiner = document.querySelector('.free-btn-conteiner'),
    erp_btn_conteiner = document.querySelector('.erp-btn-conteiner'),
    conteiner2_2 = document.querySelector('.conteiner2-2'),
    conteiner_free = document.querySelector('.conteiner-free'),
    conteiner_erp = document.querySelector('.conteiner-erp'),
    free_js = document.querySelector('.free-js'),
    erp_free_js = document.querySelector('.erp-free-js')

month61.addEventListener("click", function() {
    price1.style.color = 'black'
    year1.style.border = 'none'
    price1.textContent = '620 ₽'
    month61.style.border = '1px solid black'
    crossed_out_price1.style.visibility = 'hidden'
})

year1.addEventListener("click", function() {
    price1.style.color = '#30d4c7'
    month61.style.border = 'none'
    price1.textContent = '550 ₽'
    year1.style.border = '1px solid black'
    crossed_out_price1.style.visibility = 'visible'
})

month62.addEventListener("click", function() {
    price2.style.color = 'black'
    year2.style.border = 'none'
    price2.textContent = '906 ₽'
    month62.style.border = '1px solid black'
    crossed_out_price2.style.visibility = 'hidden'
})

year2.addEventListener("click", function() {
    price2.style.color = '#30d4c7'
    month62.style.border = 'none'
    price2.textContent = '815 ₽'
    year2.style.border = '1px solid black'
    crossed_out_price2.style.visibility = 'visible'
})

month63.addEventListener("click", function() {
    price3.style.color = 'black'
    year3.style.border = 'none'
    price3.textContent = '1 100 ₽'
    month63.style.border = '1px solid black'
    crossed_out_price3.style.visibility = 'hidden'
})

year3.addEventListener("click", function() {
    price3.style.color = '#30d4c7'
    month63.style.border = 'none'
    price3.textContent = '990 ₽'
    year3.style.border = '1px solid black'
    crossed_out_price3.style.visibility = 'visible'
})

month64.addEventListener("click", function() {
    price4.style.color = 'black'
    year4.style.border = 'none'
    price4.textContent = '1 435 ₽'
    month64.style.border = '1px solid black'
    crossed_out_price4.style.visibility = 'hidden'
})

year4.addEventListener("click", function() {
    price4.style.color = '#30d4c7'
    month64.style.border = 'none'
    price4.textContent = '1 290 ₽'
    year4.style.border = '1px solid black'
    crossed_out_price4.style.visibility = 'visible'
})

rent.addEventListener("click", function() {
    rent.style.backgroundColor = '#30d4c7'
    purchase.style.backgroundColor = 'white'
    subscription.style.backgroundColor = 'white'
    rent.style.color = 'white'
    subscription.style.color = 'black'
    purchase.style.color = 'black'
    changing_subtitle.textContent = 'Цены указаны за одного пользователя в месяц.'
    price1.style.color = '#30d4c7'
    price1.textContent = '550 ₽'
    price2.style.color = '#30d4c7'
    price2.textContent = '815 ₽'
    price3.style.color = '#30d4c7'
    price3.textContent = '990 ₽'
    price4.style.color = '#30d4c7'
    price4.textContent = '1 290 ₽'
    crossed_out_price1.style.visibility = 'visible'
    crossed_out_price2.style.visibility = 'visible'
    crossed_out_price3.style.visibility = 'visible'
    crossed_out_price4.style.visibility = 'visible'
    for_1_user_per_month1.textContent = 'за 1 пользователя в месяц при оплате за'
    for_1_user_per_month2.textContent = 'за 1 пользователя в месяц при оплате за'
    for_1_user_per_month3.textContent = 'за 1 пользователя в месяц при оплате за'
    for_1_user_per_month4.textContent = 'за 1 пользователя в месяц при оплате за'
    conteiner_month6_year1.style.display = 'flex'
    conteiner_month6_year2.style.display = 'flex'
    conteiner_month6_year3.style.display = 'flex'
    conteiner_month6_year4.style.display = 'flex'
    users1_5_10_25_1001.style.display = 'none'
    users2_5_10_25_1001.style.display = 'none'
    users3_5_10_25_1001.style.display = 'none'
    users4_5_10_25_1001.style.display = 'none'
    users1_5_10_25_1002.style.display = 'none'
    users2_5_10_25_1002.style.display = 'none'
    users3_5_10_25_1002.style.display = 'none'
    users4_5_10_25_1002.style.display = 'none'
    users1_forever.style.display = 'none'
    users2_forever.style.display = 'none'
    users3_forever.style.display = 'none'
    users4_forever.style.display = 'none'
    free_btn_conteiner.style.display = 'block'
    const mediaQuery = window.matchMedia('(max-width: 1200px)')
    if (mediaQuery.matches) {
        conteiner2_2.style.left = 'auto'
        conteiner_free.style.display = 'block'
        conteiner_free.style.visibility = 'visible'
        free_btn_conteiner.style.display = 'none'
    }
})

purchase.addEventListener("click", function() {
    purchase.style.backgroundColor = '#30d4c7'
    rent.style.backgroundColor = 'white'
    subscription.style.backgroundColor = 'white'
    purchase.style.color = 'white'
    rent.style.color = 'black'
    subscription.style.color = 'black'
    changing_subtitle.textContent = 'Цены указаны за всю компанию, а не за отдельных пользователей.'
    price1.style.color = 'black'
    price1.textContent = '67 023 ₽'
    price2.style.color = 'black'
    price2.textContent = '82 148 ₽'
    price3.style.color = 'black'
    price3.textContent = '85 932 ₽'
    price4.style.color = 'black'
    price4.textContent = '102 773 ₽'
    crossed_out_price1.style.visibility = 'hidden'
    crossed_out_price2.style.visibility = 'hidden'
    crossed_out_price3.style.visibility = 'hidden'
    crossed_out_price4.style.visibility = 'hidden'
    for_1_user_per_month1.textContent = 'при оплате за'
    for_1_user_per_month2.textContent = 'при оплате за'
    for_1_user_per_month3.textContent = 'при оплате за'
    for_1_user_per_month4.textContent = 'при оплате за'
    conteiner_month6_year1.style.display = 'none'
    conteiner_month6_year2.style.display = 'none'
    conteiner_month6_year3.style.display = 'none'
    conteiner_month6_year4.style.display = 'none'
    users1_5_10_25_1002.style.display = 'none'
    users2_5_10_25_1002.style.display = 'none'
    users3_5_10_25_1002.style.display = 'none'
    users4_5_10_25_1002.style.display = 'none'
    users1_5_10_25_1001.style.display = 'flex'
    users2_5_10_25_1001.style.display = 'flex'
    users3_5_10_25_1001.style.display = 'flex'
    users4_5_10_25_1001.style.display = 'flex'
    users1_forever.style.display = 'block'
    users2_forever.style.display = 'block'
    users3_forever.style.display = 'block'
    users4_forever.style.display = 'block'
    users1_forever.textContent = 'пользователей на навсегда'
    users2_forever.textContent = 'пользователей на навсегда'
    users3_forever.textContent = 'пользователей на навсегда'
    users4_forever.textContent = 'пользователей на навсегда'
    erp_btn_conteiner.style.display = 'none'
    free_btn_conteiner.style.display = 'none'
    conteiner_free.style.visibility = 'hidden'
    conteiner_erp.style.visibility = 'visible'
    erp_free_js.style.display = 'block'
    conteiner2_2.style.left = 'auto'
    conteiner2_2.style.left = '-166px'
    const mediaQuery = window.matchMedia('(max-width: 1200px)')
    if (mediaQuery.matches) {
        conteiner2_2.style.left = 'auto'
        conteiner_free.style.display = 'none'
    }
})

subscription.addEventListener("click", function() {
    subscription.style.backgroundColor = '#30d4c7'
    purchase.style.backgroundColor = 'white'
    rent.style.backgroundColor = 'white'
    subscription.style.color = 'white'
    rent.style.color = 'black'
    purchase.style.color = 'black'
    changing_subtitle.textContent = 'Цены указаны за всю компанию, а не за отдельных пользователей.'
    price1.style.color = 'black'
    price1.textContent = '33 511 ₽'
    price2.style.color = 'black'
    price2.textContent = '41 074 ₽'
    price3.style.color = 'black'
    price3.textContent = '42 966 ₽'
    price4.style.color = 'black'
    price4.textContent = '51 386 ₽'
    crossed_out_price1.style.visibility = 'hidden'
    crossed_out_price2.style.visibility = 'hidden'
    crossed_out_price3.style.visibility = 'hidden'
    crossed_out_price4.style.visibility = 'hidden'
    for_1_user_per_month1.textContent = 'при оплате за'
    for_1_user_per_month2.textContent = 'при оплате за'
    for_1_user_per_month3.textContent = 'при оплате за'
    for_1_user_per_month4.textContent = 'при оплате за'
    conteiner_month6_year1.style.display = 'none'
    conteiner_month6_year2.style.display = 'none'
    conteiner_month6_year3.style.display = 'none'
    conteiner_month6_year4.style.display = 'none'
    users1_5_10_25_1001.style.display = 'none'
    users2_5_10_25_1001.style.display = 'none'
    users3_5_10_25_1001.style.display = 'none'
    users4_5_10_25_1001.style.display = 'none'
    users1_5_10_25_1002.style.display = 'flex'
    users2_5_10_25_1002.style.display = 'flex'
    users3_5_10_25_1002.style.display = 'flex'
    users4_5_10_25_1002.style.display = 'flex'
    users1_forever.style.display = 'block'
    users2_forever.style.display = 'block'
    users3_forever.style.display = 'block'
    users4_forever.style.display = 'block'
    users1_forever.textContent = 'пользователей на год'
    users2_forever.textContent = 'пользователей на год'
    users3_forever.textContent = 'пользователей на год'
    users4_forever.textContent = 'пользователей на год'
    erp_btn_conteiner.style.display = 'none'
    free_btn_conteiner.style.display = 'none'
    conteiner_free.style.visibility = 'hidden'
    conteiner_erp.style.visibility = 'visible'
    erp_free_js.style.display = 'block'
    conteiner2_2.style.left = 'auto'
    conteiner2_2.style.left = '-166px'
    const mediaQuery = window.matchMedia('(max-width: 1200px)')
    if (mediaQuery.matches) {
        conteiner2_2.style.left = 'auto'
        conteiner_free.style.display = 'none'
    }
})

users115.addEventListener("click", function() {
    users115.style.border = '1px solid black'
    users1110.style.border = 'none'
    users1125.style.border = 'none'
    users11100.style.border = 'none'
    price1.textContent = '67 023 ₽'
})

users125.addEventListener("click", function() {
    users125.style.border = '1px solid black'
    users1210.style.border = 'none'
    users1225.style.border = 'none'
    users12100.style.border = 'none'
    price2.textContent = '82 148 ₽'
})

users135.addEventListener("click", function() {
    users135.style.border = '1px solid black'
    users1310.style.border = 'none'
    users1325.style.border = 'none'
    users13100.style.border = 'none'
    price3.textContent = '85 932 ₽'
})

users145.addEventListener("click", function() {
    users145.style.border = '1px solid black'
    users1410.style.border = 'none'
    users1425.style.border = 'none'
    users14100.style.border = 'none'
    price4.textContent = '102 773 ₽'
})

users1110.addEventListener("click", function() {
    users1110.style.border = '1px solid black'
    users115.style.border = 'none'
    users1125.style.border = 'none'
    users11100.style.border = 'none'
    price1.textContent = '134 046 ₽'
})

users1210.addEventListener("click", function() {
    users1210.style.border = '1px solid black'
    users125.style.border = 'none'
    users1225.style.border = 'none'
    users12100.style.border = 'none'
    price2.textContent = '164 296 ₽'
})

users1310.addEventListener("click", function() {
    users1310.style.border = '1px solid black'
    users135.style.border = 'none'
    users1325.style.border = 'none'
    users13100.style.border = 'none'
    price3.textContent = '171 864 ₽'
})

users1410.addEventListener("click", function() {
    users1410.style.border = '1px solid black'
    users145.style.border = 'none'
    users1425.style.border = 'none'
    users14100.style.border = 'none'
    price4.textContent = '205 546 ₽'
})

users1125.addEventListener("click", function() {
    users1125.style.border = '1px solid black'
    users115.style.border = 'none'
    users1110.style.border = 'none'
    users11100.style.border = 'none'
    price1.textContent = '268 070 ₽'
})

users1225.addEventListener("click", function() {
    users1225.style.border = '1px solid black'
    users125.style.border = 'none'
    users1210.style.border = 'none'
    users12100.style.border = 'none'
    price2.textContent = '328 570 ₽'
})

users1325.addEventListener("click", function() {
    users1325.style.border = '1px solid black'
    users135.style.border = 'none'
    users1310.style.border = 'none'
    users13100.style.border = 'none'
    price3.textContent = '343 750 ₽'
})

users1425.addEventListener("click", function() {
    users1425.style.border = '1px solid black'
    users145.style.border = 'none'
    users1410.style.border = 'none'
    users14100.style.border = 'none'
    price4.textContent = '411 070 ₽'
})

users11100.addEventListener("click", function() {
    users11100.style.border = '1px solid black'
    users115.style.border = 'none'
    users1110.style.border = 'none'
    users1125.style.border = 'none'
    price1.textContent = '547 800 ₽'
})

users12100.addEventListener("click", function() {
    users12100.style.border = '1px solid black'
    users125.style.border = 'none'
    users1210.style.border = 'none'
    users1225.style.border = 'none'
    price2.textContent = '687 500 ₽'
})

users13100.addEventListener("click", function() {
    users13100.style.border = '1px solid black'
    users135.style.border = 'none'
    users1310.style.border = 'none'
    users1325.style.border = 'none'
    price3.textContent = '823 900 ₽'
})

users14100.addEventListener("click", function() {
    users14100.style.border = '1px solid black'
    users145.style.border = 'none'
    users1410.style.border = 'none'
    users1425.style.border = 'none'
    price4.textContent = '1 372 800 ₽'
})

users215.addEventListener("click", function() {
    users215.style.border = '1px solid black'
    users2110.style.border = 'none'
    users2125.style.border = 'none'
    users21100.style.border = 'none'
    price1.textContent = '33 511 ₽'
})

users225.addEventListener("click", function() {
    users225.style.border = '1px solid black'
    users2210.style.border = 'none'
    users2225.style.border = 'none'
    users22100.style.border = 'none'
    price2.textContent = '41 074 ₽'
})

users235.addEventListener("click", function() {
    users235.style.border = '1px solid black'
    users2310.style.border = 'none'
    users2325.style.border = 'none'
    users23100.style.border = 'none'
    price3.textContent = '42 966 ₽'
})

users245.addEventListener("click", function() {
    users245.style.border = '1px solid black'
    users2410.style.border = 'none'
    users2425.style.border = 'none'
    users24100.style.border = 'none'
    price4.textContent = '51 386 ₽'
})

users2110.addEventListener("click", function() {
    users2110.style.border = '1px solid black'
    users215.style.border = 'none'
    users2125.style.border = 'none'
    users21100.style.border = 'none'
    price1.textContent = '67 023 ₽'
})

users2210.addEventListener("click", function() {
    users2210.style.border = '1px solid black'
    users225.style.border = 'none'
    users2225.style.border = 'none'
    users22100.style.border = 'none'
    price2.textContent = '82 148 ₽'
})

users2310.addEventListener("click", function() {
    users2310.style.border = '1px solid black'
    users235.style.border = 'none'
    users2325.style.border = 'none'
    users23100.style.border = 'none'
    price3.textContent = '85 932 ₽'
})

users2410.addEventListener("click", function() {
    users2410.style.border = '1px solid black'
    users245.style.border = 'none'
    users2425.style.border = 'none'
    users24100.style.border = 'none'
    price4.textContent = '102 773 ₽'
})

users2125.addEventListener("click", function() {
    users2125.style.border = '1px solid black'
    users215.style.border = 'none'
    users2110.style.border = 'none'
    users21100.style.border = 'none'
    price1.textContent = '107 228 ₽'
})

users2225.addEventListener("click", function() {
    users2225.style.border = '1px solid black'
    users225.style.border = 'none'
    users2210.style.border = 'none'
    users22100.style.border = 'none'
    price2.textContent = '131 428 ₽'
})

users2325.addEventListener("click", function() {
    users2325.style.border = '1px solid black'
    users235.style.border = 'none'
    users2310.style.border = 'none'
    users23100.style.border = 'none'
    price3.textContent = '137 500 ₽'
})

users2425.addEventListener("click", function() {
    users2425.style.border = '1px solid black'
    users245.style.border = 'none'
    users2410.style.border = 'none'
    users24100.style.border = 'none'
    price4.textContent = '164 428 ₽'
})

users21100.addEventListener("click", function() {
    users21100.style.border = '1px solid black'
    users215.style.border = 'none'
    users2110.style.border = 'none'
    users2125.style.border = 'none'
    price1.textContent = '219 120 ₽'
})

users22100.addEventListener("click", function() {
    users22100.style.border = '1px solid black'
    users225.style.border = 'none'
    users2210.style.border = 'none'
    users2225.style.border = 'none'
    price2.textContent = '275 000 ₽'
})

users23100.addEventListener("click", function() {
    users23100.style.border = '1px solid black'
    users235.style.border = 'none'
    users2310.style.border = 'none'
    users2325.style.border = 'none'
    price3.textContent = '329 560 ₽'
})

users24100.addEventListener("click", function() {
    users24100.style.border = '1px solid black'
    users245.style.border = 'none'
    users2410.style.border = 'none'
    users2425.style.border = 'none'
    price4.textContent = '549 120 ₽'
})

free_btn_conteiner.addEventListener("click", function() {
    free_btn_conteiner.style.display = 'none'
    conteiner2_2.style.left = '154px'
    erp_btn_conteiner.style.display = 'block'
    conteiner_free.style.visibility = 'visible'
    conteiner_erp.style.visibility = 'hidden'
    erp_free_js.style.display = 'none'
    free_js.style.display = 'block'
    crossed_out_price4.style.visibility = 'hidden'
})

erp_btn_conteiner.addEventListener("click", function() {
    erp_btn_conteiner.style.display = 'none'
    conteiner2_2.style.left = '-166px'
    free_btn_conteiner.style.display = 'block'
    conteiner_free.style.visibility = 'hidden'
    conteiner_erp.style.visibility = 'visible'
    conteiner2_2.style.transitionTimingFunction = 'linear'
    free_js.style.display = 'none'
    erp_free_js.style.display = 'block'
    crossed_out_price4.style.visibility = 'visible'
})