import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import TabTitle from "@/shared/components/UI/TabTitle";

const PolicyPage = () => {
  return (
    <Section>
      <Container className="flex-col gap-12 my-section">
        <div className="space-y-8">
          <h2 className="text-h2">Политика конфиденциальности /</h2>
          <p>
            Настоящая Политика конфиденциальности регулирует порядок сбора,
            хранения и использования персональных данных посетителей сайта
            2нарру.kz (далее — «Сайт»), а также клиентов бренда 2HAPPY.
          </p>
        </div>
        <div className="space-y-8">
          <TabTitle>1. Сбор и использование информации</TabTitle>
          <div className="space-y-4">
            <p>
              Мы собираем только те данные, которые необходимы для обработки
              заказов и улучшения сервиса:
            </p>
            <ul className="pl-6 list-disc">
              <li className="text-placeholder text-gray-dark">
                ФИО, номер телефона, адрес доставки;
              </li>
              <li className="text-placeholder text-gray-dark">
                Адрес электронной почты;
              </li>
              <li className="text-placeholder text-gray-dark">
                История заказов и взаимодействия с сайтом.
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <p>Эти данные используются исключительно для:</p>
            <ul className="pl-6 list-disc">
              <li className="text-placeholder text-gray-dark">
                Обработки и доставки заказов;
              </li>
              <li className="text-placeholder text-gray-dark">
                Связи с клиентом по вопросам заказа;
              </li>
              <li className="text-placeholder text-gray-dark">
                Отправки уведомлений и акционных предложений (только с согласия
                клиента).
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <TabTitle>2. Конфиденциальность</TabTitle>
          <div className="space-y-4">
            <p>
              Мы гарантируем, что все полученные от вас персональные данные:
            </p>
            <ul className="pl-6 list-disc">
              <li className="text-placeholder text-gray-dark">
                Не будут переданы третьим лицам без вашего согласия
                (за исключением курьерских служб для доставки);
              </li>
              <li className="text-placeholder text-gray-dark">
                Хранятся в защищённой системе и используются строго в рамках
                действующего законодательства Республики Казахстан;
              </li>
              <li className="text-placeholder text-gray-dark">
                Не подлежат продаже, обмену или распространению.
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-8">
          <TabTitle>3. Cookies и аналитика</TabTitle>
          <div className="space-y-4">
            <p>
              Сайт может собирать техническую информацию (cookies, IP-адрес,
              тип устройства) для анализа трафика и улучшения пользовательского
              опыта. Эти данные обезличены и не связаны с конкретными
              пользователями.
            </p>
          </div>
        </div>
        <div className="space-y-8">
          <TabTitle>4. Согласие пользователя</TabTitle>
          <div className="space-y-4">
            <p>
              Оформляя заказ или подписываясь на рассылку, вы соглашаетесь с
              условиями данной политики конфиденциальности.
            </p>
          </div>
        </div>
        <div className="space-y-8">
          <TabTitle>5. Изменения</TabTitle>
          <div className="space-y-4">
            <p>
              Бренд 2НАРРУ оставляет за собой право вносить изменения в политику
              без предварительного уведомления. Актуальная версия всегда
              доступна на этой странице.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default PolicyPage;
