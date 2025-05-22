import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import TabTitle from "@/shared/components/UI/TabTitle";

const OffertPage = () => {
  return (
    <Section>
      <Container className="flex-col gap-12 my-section">
        <div className="space-y-8">
          <h2 className="text-h2">Публичная оферта /</h2>
          <p className="text-h4">
            На заключение договора купли-продажи товаров через интернет-магазин
          </p>
        </div>
        <p>
          Настоящий документ является официальным предложением (публичной
          офертой) 2НАРРУ, размещённого по адресу: 2happy.kz, в лице
          ИП 2НАРРУ,ИИН 780329401669, Самал 1, дом. 31, оф.. 54, далее
          именуемого «Продавец», и содержит все существенные условия договора
          купли-продажи товаров дистанционным способом.
        </p>
        <div className="space-y-8">
          <TabTitle>1. Общие положения</TabTitle>
          <ul className="space-y-4">
            <li className="text-placeholder text-gray-dark">
              1.1. Настоящая Оферта является официальным предложением Продавца
              в адрес любого физического лица (далее — Покупатель), обладающего
              правоспособностью для заключения договора купли-продажи
              на условиях, указанных в настоящей Оферте.
            </li>
            <li className="text-placeholder text-gray-dark">
              1.2. Оформление заказа в интернет-магазине является полным
              и безоговорочным принятием (акцептом) условий настоящей Оферты.
            </li>
            <li className="text-placeholder text-gray-dark">
              1.3. Продавец оставляет за собой право вносить изменения
              в настоящую Оферту без предварительного уведомления. Актуальная
              версия всегда доступна на сайте.
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <TabTitle>2. Предмет договора</TabTitle>
          <ul className="space-y-4">
            <li className="text-placeholder text-gray-dark">
              2.1. Продавец обязуется передать в собственность Покупателю товар,
              представленный в каталоге интернет-магазина, а Покупатель
              обязуется оплатить и принять данный товар на условиях настоящего
              договора.
            </li>
          </ul>
        </div>
        <div className="space-y-8">
          <TabTitle>3. Порядок оформления и оплаты заказа</TabTitle>
          <ul className="space-y-4">
            <li className="text-placeholder text-gray-dark">
              3.1. Покупатель оформляет заказ самостоятельно на сайте
              интернет-магазина.
            </li>
            <li className="text-placeholder text-gray-dark">
              3.2. Оплата производится в тенге (KZT) через доступные на сайте
              способы: банковская карта, Kaspi Pay, перевод и т.д.
            </li>
            <li className="text-placeholder text-gray-dark">
              3.3. Заказ считается принятым после подтверждения Продавцом
              (по телефону, мессенджеру или электронной почте).
            </li>
          </ul>
        </div>
        <div className="space-y-8">
          <TabTitle>4. Условия доставки</TabTitle>
          <ul className="space-y-4">
            <li className="text-placeholder text-gray-dark">
              4.1. Доставка осуществляется по Казахстану, согласно выбранному
              Покупателем способу: курьером, через пункт самовывоза,
              транспортной компанией и др.
            </li>
            <li className="text-placeholder text-gray-dark">
              4.2. Стоимость доставки и сроки зависят от региона и способа
              доставки, и указываются при оформлении заказа.
            </li>
          </ul>
        </div>
        <div className="space-y-8">
          <TabTitle>5. Возврат и обмен товара</TabTitle>
          <ul className="space-y-4">
            <li className="text-placeholder text-gray-dark">
              5.1. Покупатель имеет право вернуть или обменять товар надлежащего
              качества в течение 14 календарных дней с момента получения,
              при условии сохранения товарного вида, ярлыков, упаковки
              и документа, подтверждающего покупку (в соответствии с Законом
              РК «О защите прав потребителей»).
            </li>
            <li className="text-placeholder text-gray-dark">
              5.2. Товары ненадлежащего качества подлежат возврату или обмену
              в соответствии с законодательством РК.
            </li>
          </ul>
        </div>
        <div className="space-y-8">
          <TabTitle>
            6. Конфиденциальность и защита персональных данных
          </TabTitle>
          <ul className="space-y-4">
            <li className="text-placeholder text-gray-dark">
              6.1. Продавец обязуется не передавать третьим лицам персональные
              данные Покупателя, за исключением случаев, предусмотренных
              законодательством РК.
            </li>
            <li className="text-placeholder text-gray-dark">
              6.2. Предоставляя свои данные, Покупатель соглашается
              на их обработку в целях исполнения настоящего договора
              и информирования о новинках и акциях.
            </li>
          </ul>
        </div>
        <div className="space-y-8">
          <TabTitle>7. Прочие условия</TabTitle>
          <ul className="space-y-4">
            <li className="text-placeholder text-gray-dark">
              7.1. Все споры и разногласия, возникающие в рамках исполнения
              настоящей Оферты, стороны будут стремиться решать путём
              переговоров. В случае недостижения соглашения спор подлежит
              разрешению в судебном порядке в соответствии с законодательством
              Республики Казахстан.
            </li>
            <li className="text-placeholder text-gray-dark">
              7.2. Настоящая Оферта действует бессрочно и размещена на сайте
              2happy.kz.
            </li>
          </ul>
        </div>
      </Container>
    </Section>
  );
};

export default OffertPage;
