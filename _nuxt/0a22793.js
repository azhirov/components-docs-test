(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{630:function(e){e.exports=JSON.parse('{"validate":{"minLen":"Минимум {n} символ | Минимум {n} символа | Минимум {n} символов","password":"Неправильный пароль {password}"},"cabinet":{"api":{"ips":{"create":{"add_btn":"Добавить IP-адрес","cancel_btn":"Отмена","inputs":{"ip":{"placeholder":"0.0.0.0","validations":{"required":"Требуется IP-адрес","validateIp":"Неверный IP-адрес"}}},"submit_btn":"Добавлять","success_toast":"IP-адрес успешно добавлен"},"item":{"delete_btn":"Удалить","delete_tooltip":"⚠ Внимание <br>IP адрес будет удален","deleted_toast":"IP-адрес удален"},"title":"IP-адреса доступа"},"page_title_mobile":"Профиль","state":"Состояние API","state_description":"Включенный API позволяет работать со всеми функциями сервиса: добавлять токены, исключать ненужные IP-адреса.","tokens":{"create":{"add_btn":"Добавить токен","cancel_btn":"Отмена","inputs":{"name":{"placeholder":"Краткое описание, например &quot;Почтальон&quot;","validations":{"maxLength":"Максимум 255 символов","required":"Это поле обязательно к заполнению"}}},"submit_btn":"Добавлять","success_toast":"Токен создан"},"item":{"delete_btn":"Удалить","delete_tooltip":"⚠ Внимание! <br>Token будет удален","deleted_toast":"Токен удален","shown_once_warning":"Токен показывается один раз и после перезагрузки вы его больше не увидите"},"title":"Токены API"},"user_id_title":"ID пользователя"},"auth":{"errors":{"email_not_found":"Электронная почта не найдена","incorrect_credentials":"Электронная почта или пароль неверны.","need_wait":"Пожалуйста, подождите, прежде чем повторить попытку","user_blocked":"Вы заблокированы администратором"},"inputs":{"email":{"placeholder":"Эл. адрес","validations":{"alreadyExists":"Пользователь с таким адресом электронной почты уже существует","email":"Неправильный адрес электронной почты","required":"Электронная почта не может быть пустой"}},"name":{"placeholder":"Имя","validations":{"maxLength":"Максимум 255 символов","required":"Укажите имя."}},"password":{"placeholder":"Пароль","validations":{"minLength":"Минимум 8 символов","required":"Пароль не может быть пустым","simple":"Простой пароль"}},"repeat_password":{"placeholder":"Повторите пароль","validations":{"required":"Пароль не может быть пустым","sameAsPassword":"Пароли не совпадают"}},"two_fa_code":{"placeholder":"Код аутентификатора","validations":{"correct":"неверный код","required":"Код аутентификатора не может быть пустым."}},"two_fa_recovery_code":{"placeholder":"Recovery code","validations":{"correct":"Incorrect code","required":"Incorrect code"}}},"modals":{"recovery_codes":{"close_btn":"Сделанный","copy_btn":"Копировать коды","description":"Сохраните коды восстановления в надежном месте. Потеря этих кодов может привести к потере аккаунта","title":"Сохраните коды восстановления"},"verify_pass":{"cancel_btn":"Отмена","description":"Пожалуйста, подтвердите свой пароль, прежде чем продолжить","inputs":{"password":{"validations":{"required":"Пароль не может быть пустым","wrongPassword":"неверный пароль"}}},"submit_btn":"Продолжать","title":"Подтвердить Пароль"}},"register_link_text":"Нет аккаунта? {ссылка на сайт}","register_link_text_inner":"Зарегистрироваться","restore_password_link":"Восстановить пароль","restore_password_mail_sent":"Все сделано! Проверить почтовый ящик","restore_password_resend_link":"Отправить","restore_password_sign_in_btn":"Назад, чтобы войти","restore_password_submit_btn":"Отправьте письмо с подтверждением ✉","restore_password_timer_text":"Отправить повторно через {n} сек.","restore_password_title":"Восстановить пароль","set_password_submit_btn":"Продолжать","set_password_title":"Восстановить пароль","sign_in_btn":"Войти 🚀","sign_in_link_text":"Уже зарегистрирован? {ссылка на сайт}","sign_in_link_text_inner":"Войти","sign_in_title":"Войти в OnlineSIM","sign_up_btn":"Подписаться","sign_up_description":"Вы можете получать периодические обновления продукта и уведомления об учетной записи. Без спама ✅","sign_up_title":"Доступ к OnlineSIM","two_fa_recovery_code_msg":"Use one of the Recovery-codes that were issued when you turned on 2FA","two_fa_submit_btn":"Войти","two_fa_title":"Двухфакторная аутентификация","two_fa_use_auth_code":"Use Authenticator code","two_fa_use_recovery_code":"Use Recovery code"},"billing_history":{"amount_available":"доступно","buyer":{"item":{"comment":"Комментарий","country":"Страна","id":"Транс. Я БЫ","limits":"Ограничения","protocol":"Протокол","proxy":"Прокси","type":"Тип"},"top_up_link":"Пополнить баланс"},"empty_msg":"Нет истории операций","filters":{"date":{"end_placeholder":"End date","start_placeholder":"Start date"}},"page_title_mobile":"История баланса","seller":{"about":{"full":"<p>Подключайте ваши мобильные прокси к нашему сервису и зарабатывайте на этом. \\nМы сами найдём продавца, а вы легко получите прибыль со своих прокси.</p> <p>Узнать подробнее о программе</p>","short":"Как работает партнерская программа"},"item":{"account":"Счет","country":"Страна","details":"Детали прокси","device":"Устройство","id":"Транс. Я БЫ","proxy":"Прокси"},"withdraw_link":"Вывод средств"},"status":{"all":"Все статусы","pending":"В ожидании","refund":"Refund","success":"Успех"}},"buy":{"add":{"auto_renew":"Автопродление аренды прокси","filters":{"cities":{"label":"Города","placeholder":"Любой"},"countries":{"label":"Страны","placeholder":"Любой"},"protocol":{"label":"Протокол","no_proxy_tooltip":"Нет прокси, соответствующих этому параметру"},"providers":{"label":"Провайдеры","placeholder":"Любой"},"tariff":{"label":"Тариф"},"type":{"label":"Тип","no_proxy_tooltip":"Нет прокси, соответствующих этому параметру"}},"footer":{"buy_btn":"Купить для","cancel_btn":"Отмена","counts":"В {countries} странах. {города} города, {провайдеры} провайдеры","empty":{"content":"Попробуйте настроить фильтры, чтобы найти лучшее соответствие 🔎 <br> Нужен именно этот прокси? Позвольте нам уведомить вас, когда он будет доступен.","inputs":{"email":{"placeholder":"Эл. почта"}},"notify_btn":"Сообщите мне","title":"Не могу найти такие прокси"},"title":"{n} доступных вариантов прокси"},"title":"Купить прокси","title_mobile":"Купить прокси"},"list":{"buttons":{"add":"Добавить прокси","refresh":"Обновить"},"empty_popup":{"btn":"Добавить прокси","content":"130+ миллионов IP-адресов в 150 странах мира всего в один клик!","title":"Пока нет купленных прокси"},"expired_count":"{n} прокси с истекшим сроком действия | {n} просроченный прокси | {n} прокси с истекшим сроком действия | {n} просроченных прокси","item":{"add_comment_placeholder":"Добавить комментарий"},"page_title":"Мои прокси","page_title_mobile":"Мои прокси","table_cols":{"country":"Страна","limits":"Ограничения","login":"Авторизоваться","password":"Пароль","protocol":"Протокол","proxy":"Прокси","type":"Тип"}}},"common":{"days_plural":"{n} дней | {n} день | {n} дней","errors":{"error_404":{"btn":"Go to main page","text":"Something went wrong. Please try refreshing the page or contact support.","title":"Error"},"unknown":"Что-то пошло не так"},"loading_error":{"content":"При загрузке данных произошла ошибка. Если ошибка возникает регулярно, напишите на {support_link}","content_support_link":"техническая поддержка","title":"Ошибка загрузки данных"},"proxy_type":{"private":"Частный","shared":"Общий"},"roles":{"buyer":"Покупатель","developer":"Разработчик","referral":"Направления","seller":"Продавец"}},"layout":{"header":{"account_dropdown":{"admin_panel":"Перейти в панель администратора","api":"Настройки API","settings":"Настройки учетной записи","sign_out":"Выход","support":"Поддержка"},"balance":{"top_up":"Пополнить баланс","withdraw":"Вывести средства"},"nav":{"buy":"Купить прокси","sell":"Продать прокси"},"sign_in":"Войти","sign_up":"Подписаться"},"sidebar":{"balance":{"top_up":"Пополнить баланс","withdraw":"Отзывать"},"nav":{"account":"Настройки учетной записи","api":"Настройки API","billing_history":"История платежей","buy":"Купить прокси","news":"Новости","referral":"Реферальная программа","sell":"Продать прокси","support":"Поддерживать"},"user_id":"Я БЫ"}},"onboarding":{"buy":{"description":"Купить мобильные прокси для анализа запросов из разных стран","title":"Купить прокси"},"description":"Здесь хорошо бы разместить текст. Чтоб экран не пустовал и для дальнейшего продвижения себя","page_title_mobile":"Добро пожаловать","sell":{"description":"Выставляйте любое количество прокси на продажу и зарабатывайте вместе с нами","title":"Продать прокси"},"title":"Чем бы Вы хотели заняться?"},"profile":{"change_password":{"change_btn":"Изменить пароль","inputs":{"confirmation":{"label":"Подтверждать","validations":{"match":"Пароли не совпадают","required":"Введите пароль для подтверждения."}},"new_password":{"label":"Новый","validations":{"required":"Новый пароль не может быть пустым","simple":"Простой пароль","validatePassword":"Минимум 8 символов"}},"old_password":{"label":"Старый","validations":{"required":"Старый пароль не может быть пустым"}}},"title":"Изменить пароль"},"lang_label":"Язык","page_title_mobile":"Счет","personal":{"inputs":{"email":{"buttons":{"cancel":"Отмена","change":"сменить имейл"},"check_inbox":"Проверьте свой почтовый ящик на наличие ссылки для подтверждения","label":"Эл. почта","not_confirmed_text":"Адрес электронной почты не подтвержден {ссылка}","not_confirmed_text_link":"Отправить письмо","success_toast":"Электронная почта изменена на {email}","validations":{"email":"Неправильный электронный адрес","required":"Электронная почта не может быть пустой"}},"name":{"buttons":{"cancel":"Отмена","change":"Изменить имя"},"label":"Имя","success_toast":"Имя изменено на {имя}","validations":{"required":"Укажите имя."}}},"title":"Личный"},"tabs":{"api":"Настройки API","profile":"Профиль"},"two_fa":{"create_key_btn":"Создайте секретный ключ аутентификации 2FA","disable_btn":"Отключено 2FA","disabled_msg":"Двухфакторная аутентификация защищает от фишинга и атак социальной инженерии, а также защищает слабые пароли пользователей от злоумышленников, занимающихся подбором или кражей учетных данных.","disabled_suffix":"инвалид","enabled_msg":"Если вы хотите отключить двухфакторную аутентификацию, нажмите кнопку «Отключить 2FA».","enabled_suffix":"включено","title":"Двухфакторная аутентификация"}},"sell":{"account":{"add":{"back_btn":"Назад","current_step":"Шаг {шаг} из 3","next_btn":"Следующий","title":"Добавить аккаунт","title_mobile":"Добавить аккаунт"},"autopilot":{"description":"При включении автопилот добавляет новые прокси для продажи, чтобы удовлетворить <br> потребности рынка","title":"🚀 Автопилот"},"base_proxy_price":{"error_blank":"Необходимо указать базовую цену прокси (1 день, приватный)","fee_one_day":"Комиссия услуги за 1 день:","hint":"Укажите стоимость в месяц и мы рассчитаем за другие периоды автоматически","include_fee_in_price_switch":"Включить комиссию за услугу в цену","paid":"Вам будут платить:","title":"Базовая цена прокси","title_tooltip":"Определяет ценовые категории"},"credentials":{"cancel_btn":"Отмена","check_btn":"Проверить доступ","check_btn_loading":"Проверка доступа","inputs":{"api_key":{"label":"Ключ авторизации"},"login":{"label":"Авторизоваться"},"password":{"label":"Пароль"}},"providers_help":"Не видите своего провайдера? <a href=\\"mailto:support@onlineproxy.io\\" target=\\"_blank\\">Напишите нам </a>","providers_label":"Провайдеры","selling_unavailable_msg":"Продажа временно недоступна для этого аккаунта","title":"Реквизиты для входа","update_cred_btn":"Обновить учетные данные"},"footer":{"cancel_btn":"Отмена","delete_popover":{"content":"Аккаунт будет удален","title":"⚠ Внимание"},"delete_step_1_btn":"Удалить аккаунт","delete_step_2_btn":"Удалить навсегда","save_and_close_btn":"Сохранить и закрыть"},"price_by_country":{"description":"Вы можете установить цены для каждой страны индивидуально. <br> По умолчанию сумма одинакова для всех стран","title":"Настройка цен для разных стран"},"price_table":{"fee_tooltip":{"commission":"комиссия","paid":"Вам заплатят"},"fee_tooltip_mobile":{"commission":"Комиссия","paid":"Вам будут платить:"},"price_too_low":"Минимальная цена","proxy_type":"Тип прокси"}},"list":{"buttons":{"add":"Добавить аккаунт","refresh":"Обновить"},"empty_popup":{"btn":"Добавить аккаунт","content":"Просто добавьте свой прокси-аккаунт. Через нас вы сможете получить трафик и прибыль.","how_it_works":"Как это работает?","title":"Зарабатывайте на продаже мобильных прокси"},"item":{"account":{"autopilot_disabled":"🚀 Автопилот приостановлен","autopilot_disabled_no_emoji":"Автопилот приостановлен","autopilot_disabled_tooltip_text":"{ссылка}, чтобы продолжить использовать автопилот","autopilot_disabled_tooltip_text_link":"Пополнить баланс счета","autopilot_enabled":"🚀 Автопилот","autopilot_enabled_no_emoji":"Автопилот","autopilot_enabled_tooltip":"При включении автопилот добавляет новые прокси для продажи в соответствии с потребностями рынка.","autopilot_for_add":"Включите 🚀 автопилот, чтобы добавлять новые","available_count":"{n} доступно","empty_text":"Ваш прокси появится здесь. {ссылка}, чтобы начать вечеринку 🕺","empty_text_link":"Завершить настройку","expired_count":"{n} просроченный прокси","finish_setting_up_link":"Завершить настройку","incorrect_credentials_link":"Обновить учетные данные","no_proxies":"Нет доступных прокси","occupied_count":"{n} занято","unavailable_count":"{n} недоступен"},"proxy":{"expires_on":"Истекает","status":{"available":"Доступный","occupied_until":"Занято до {дата}","unavailable":"Недоступен"}}},"page_title":"учетные записи","page_title_mobile":"учетные записи","table_cols":{"account":"Аккаунт","expires_on":"Истекает","revenue":"Доход","status":"Статус"}}},"support":{"add_ticket_btn":"Создать тикет","add_ticket_btn_mobile":"Добавить билет","create":{"cancel_btn":"Отмена","inputs":{"message":{"placeholder":"Сообщение","validations":{"minLength":"Минимум 10 символов","required":"Сообщение не может быть пустым"}},"subject":{"placeholder":"Предмет","validations":{"maxLength":"Максимум 255 символов","minLength":"Не менее 3 символов","required":"Необходимо указать тему"}},"uploader":{"add_file":"Добавить вложения"}},"submit_btn":"Создать тикет","submit_btn_loading":"Дождитесь загрузки...","title":"Создать тикет"},"empty_msg":"Нет билетов","filters":{"category":{"label":"Категория","placholder":"Любой"},"clear_btn":"Очистить фильтры","period":{"end_placeholder":"Конец","label":"Период","start_placeholder":"Начинать"},"status":{"label":"Статус"},"title":"Фильтры"},"page_title":"Поддерживать","page_title_mobile":"Поддерживать","refund_modal":{"cancel_btn":"Cancel","info":{"income":"income for partner","proxy_worth":"Proxy worth","refund":"refund"},"inputs":{"amount":{"label":"Amount","refund":"Refund","validations":{"decimal":"Incorrect value","minValue":"Minimum value is 1","required":"Amount can\'t be blank."}},"comment":{"label":"Comment","validations":{"required":"Comment can\'t be blank."}},"proxy":{"label":"Proxy","placeholder":"Any"}},"submit_btn":"Refund the funds and close the ticket","title":"Refund of funds"},"side":{"contact_support_link":"Связаться с техподдержкой","knowledge_link":"Посмотреть базу знаний","msg":"Возможно, проблема, которая у вас возникла, уже была решена ранее."},"status":{"closed":"Закрыто","in_work":"В работе","open":"Открытым"},"tech_work_msg":"Технические работы на сервере. Перебои в обслуживании возможны завтра с 10 :00 до 11 :00 по московскому времени (GMT+3)","ticket":{"comment_form":{"minLength":"Минимум 10 символов","upload_wait_tooltip":"Сообщение не может быть отправлено <br>, пока все файлы не будут загружены"},"message":{"author":{"support":"Поддерживать","you":"Ты"}},"refund_btn":"Возврат средств","summary":{"category":"Категория","client":"Клиент","close_btn":"Закрыть тикет","close_btn_closed":"Билет закрыт","date":"Свидание","status":"Статус","updated":"Обновлено"},"tabs":{"support":"Поддерживать","ticket":"Проездной билет"}}},"top_up":{"apply_promo_btn":"Подать заявление","cancel_btn":"Отмена","cancel_promo_btn":"Отмена","currency_label":"Выберите валюту","history":{"empty_msg":"Нет истории операций","refresh_btn":"Обновить","status":{"all":"Все статусы","failed":"не удалось","pending":"в ожидании","success":"успех"}},"inputs":{"amount":{"label":"Количество","validations":{"minValue":"Минимальная сумма ${n}","numeric":"Неверная сумма.","required":"Необходимо указать сумму."}},"promocode":{"applied":"Применен промокод.","label":"Промо-код","validations":{"incorrect":"Промокод недействителен"}}},"no_services_msg":"Нет доступных услуг для оплаты в этой валюте","page_title":"Пополнение","page_title_mobile":"Пополнение","pay_btn":"Платить","redirect_msg":"Вы будете перенаправлены на платежный сервис"},"two_fa":{"copy_code_btn":"Скопировать код","enable_btn":"Включить двухфакторную аутентификацию","google_code":"Код Google-аутентификатора","inputs":{"code":{"label":"Код аутентификатора","validations":{"incorrect":"неверный код","required":"Код аутентификатора не может быть пустым."}}},"list":{"1":{"links":"<a href=\\"https://apps.apple.com/ru/app/google-authenticator/id388497605\\" target=\\"_blank\\">ios </a>, <a href=\\"https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2\\" target=\\"_blank\\">андроид </a>","text":"Откройте {icon} приложение Google Authenticator ({links})"},"2":{"desktop":"Отсканируйте QR-код или введите {secret} код вручную","mobile":"Использование кода вручную"},"3":"Введите код аутентификатора, чтобы включить 2FA, и нажмите «Включить 2FA»."},"page_title_mobile":"Счет","title":"Двухфакторная аутентификация"},"withdraw":{"cancel_btn":"Отмена","history":{"empty_msg":"Нет истории операций","item":{"pay_method_label":"Способ оплаты","transaction_id_label":"Транс. Я БЫ"},"status":{"all":"Все статусы","failed":"не удалось","pending":"в ожидании","success":"успех"}},"inputs":{"amount":{"label":"Количество"},"card_holder":{"label":"Визитница","placeholder":"Имя и фамилия","validations":{"required":"Держатель карты не может быть пустым"}},"card_number":{"label":"Номер карты","placeholder":"ХХХ ХХХ ХХХ ХХХХ","validations":{"card":"Неверный номер карты","required":"Необходимо указать номер карты."}},"wallet":{"label":"Бумажник","validations":{"required":"Кошелек не может быть пустым"}},"where":{"label":"Где"}},"page_title":"Отзывать","page_title_mobile":"Отзывать","success_toast":"${amount} снимается. Это может занять некоторое время","target":{"bank_card":"банковская карта","buyer":"Аккаунт покупателя","crypto":"Криптовалюта","qiwi":"Киви","webmoney":"Вебмани","yandex_money":"яндекс деньги"},"withdraw_btn":"Отзывать"}}}')}}]);