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
    users15 = document.querySelector('.users15'),
    users25 = document.querySelector('.users25'),
    users35 = document.querySelector('.users35'),
    users45 = document.querySelector('.users45'),
    users110 = document.querySelector('.users110'),
    users210 = document.querySelector('.users210'),
    users310 = document.querySelector('.users310'),
    users410 = document.querySelector('.users410'),
    users125 = document.querySelector('.users125'),
    users225 = document.querySelector('.users225'),
    users325 = document.querySelector('.users325'),
    users425 = document.querySelector('.users425'),
    users1100 = document.querySelector('.users1100'),
    users2100 = document.querySelector('.users2100'),
    users3100 = document.querySelector('.users3100'),
    users4100 = document.querySelector('.users4100')

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
    conteiner_month6_year1.style.display = 'block'
    conteiner_month6_year2.style.display = 'block'
    conteiner_month6_year3.style.display = 'block'
    conteiner_month6_year4.style.display = 'block'
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
})

users15.addEventListener("click", function() {
    users15.style.border = '1px solid black'
    users110.style.border = 'none'
    users125.style.border = 'none'
    users1100.style.border = 'none'
    price1.textContent = '67 023 ₽'
})

users25.addEventListener("click", function() {
    users25.style.border = '1px solid black'
    users210.style.border = 'none'
    users225.style.border = 'none'
    users2100.style.border = 'none'
    price2.textContent = '82 148 ₽'
})

users35.addEventListener("click", function() {
    users35.style.border = '1px solid black'
    users310.style.border = 'none'
    users325.style.border = 'none'
    users3100.style.border = 'none'
    price3.textContent = '85 932 ₽'
})

users45.addEventListener("click", function() {
    users45.style.border = '1px solid black'
    users410.style.border = 'none'
    users425.style.border = 'none'
    users4100.style.border = 'none'
    price4.textContent = '102 773 ₽'
})

users110.addEventListener("click", function() {
    users110.style.border = '1px solid black'
    users15.style.border = 'none'
    users125.style.border = 'none'
    users1100.style.border = 'none'
    price1.textContent = '134 046 ₽'
})

users210.addEventListener("click", function() {
    users210.style.border = '1px solid black'
    users25.style.border = 'none'
    users225.style.border = 'none'
    users2100.style.border = 'none'
    price2.textContent = '164 296 ₽'
})

users310.addEventListener("click", function() {
    users310.style.border = '1px solid black'
    users35.style.border = 'none'
    users325.style.border = 'none'
    users3100.style.border = 'none'
    price3.textContent = '171 864 ₽'
})

users410.addEventListener("click", function() {
    users410.style.border = '1px solid black'
    users45.style.border = 'none'
    users425.style.border = 'none'
    users4100.style.border = 'none'
    price4.textContent = '205 546 ₽'
})

users125.addEventListener("click", function() {
    users125.style.border = '1px solid black'
    users15.style.border = 'none'
    users110.style.border = 'none'
    users1100.style.border = 'none'
    price1.textContent = '268 070 ₽'
})

users225.addEventListener("click", function() {
    users225.style.border = '1px solid black'
    users25.style.border = 'none'
    users210.style.border = 'none'
    users2100.style.border = 'none'
    price2.textContent = '328 570 ₽'
})

users325.addEventListener("click", function() {
    users325.style.border = '1px solid black'
    users35.style.border = 'none'
    users310.style.border = 'none'
    users3100.style.border = 'none'
    price3.textContent = '343 750 ₽'
})

users425.addEventListener("click", function() {
    users425.style.border = '1px solid black'
    users45.style.border = 'none'
    users410.style.border = 'none'
    users4100.style.border = 'none'
    price4.textContent = '411 070 ₽'
})

users1100.addEventListener("click", function() {
    users1100.style.border = '1px solid black'
    users15.style.border = 'none'
    users110.style.border = 'none'
    users125.style.border = 'none'
    price1.textContent = '547 800 ₽'
})

users2100.addEventListener("click", function() {
    users2100.style.border = '1px solid black'
    users25.style.border = 'none'
    users210.style.border = 'none'
    users225.style.border = 'none'
    price2.textContent = '687 500 ₽'
})

users3100.addEventListener("click", function() {
    users3100.style.border = '1px solid black'
    users35.style.border = 'none'
    users310.style.border = 'none'
    users325.style.border = 'none'
    price3.textContent = '823 900 ₽'
})

users4100.addEventListener("click", function() {
    users4100.style.border = '1px solid black'
    users45.style.border = 'none'
    users410.style.border = 'none'
    users425.style.border = 'none'
    price4.textContent = '1 372 800 ₽'
})