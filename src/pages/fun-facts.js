import CircleCard from "../components/CircleCard/CircleCard";
import Layout from "../components/Layout/Layout";

const FunFactsPage = () => {
  return (
    <Layout
      titleText="Цікаві факти"
      subtitleText="Дізнаймось більше про наших пернатих улюбленців"
      backgroundVariant={2}
    >
      <div className="fun-facts-container">
        <CircleCard />
        <CircleCard
          title="2. Нерозлучники чахнуть один за одним."
          text="Якщо друга половинка помирає або відділяється, його товариш демонструє непостійну поведінку, яку дехто порівнює з депресією. Птахи, які утримуються як домашні тварини, часто не люблять бути на самоті й демонструватимуть подібну поведінку в неволі."
          position="right"
          colorVar={2}
        />
        <CircleCard
          title="3. Подібно до надто ніжних пар у ресторанах на День святого Валентина, нерозлучники годують одне одного."
          text="Часто після тривалої розлуки або стресового періоду часу пари нерозлучних птахів годують одне одного, щоб відновити зв’язок. Один птах переносить їжу до рота своєї половинки, техніка годування нагадує людську прихильність — звідси натхнення для назви папуг."
          colorVar={3}
        />
        <CircleCard
          title="4. Існує більше ніж один вид нерозлучників."
          text="Дев'ять видів, класифікованих як нерозлучники, походять із роду Agapornis. Більшість нерозлучників мають зелене тіло та різне забарвлення пір’я на голові. Їх найближчими родичами є висячі папуги, що зустрічаються в Азії."
          position="right"
        />
        <CircleCard
          title="5. Нерозлучники з Африки."
          text="Батьківщиною нерозлучників є ліси та савани Африки на південь від Сахари та Мадагаскару. У Південній Африці були знайдені скам’янілості стародавніх видів нерозлучників, які датуються аж 1,9 мільйона років тому."
          colorVar={2}
        />
        <CircleCard
          title="6. Але ви можете побачити нерозлучника біля годівниці на задньому дворі."
          text="Це якщо ви живете на південному заході Америки, у Сан-Франциско чи містах Африки. Ці території є домом для диких популяцій, зграй, які, ймовірно, втекли з вольєру або є залишками покинутого вольєра."
          position="right"
          colorVar={3}
        />
        <CircleCard
          title="7. Нерозлучники живуть у норах."
          text="Нерозлучники – мешканці порожнин, вони влаштовують свій дім у дуплах на деревах, скелях чи кущах у дикій природі. Деякі види гніздяться групами, а інші об’єднуються, щоб будувати гнізда подалі від зграї. У міських умовах вони можуть покладатися на що завгодно: від дерева до щілини в будівлі. Нерозлучники з персиковим обличчям у Феніксі, штат Арізона, часто влаштовують свої будинки в кактусах."
        />
        <CircleCard
          title="8. Різні види нерозлучників будують свої гнізда по-різному."
          text="Нерозлучники Фішера (Agapornis fischeri) носять у дзьобах окремі смужки кори дерев. З іншого боку, рожевощокі нерозлучники (Agapornis roseicollis) ховають кору в пір’ї. Вчені вважають, що більш складна поведінка останнього є родовою рисою, і використали цю грань будівництва гнізд нерозлучників як приклад перетину еволюційної та навченої поведінки."
          position="right"
          colorVar={2}
        />
        <CircleCard
          title="9. Деякі нерозлучники є андрогінами."
          text="У трьох видів нерозлучників самці та самки мають визначальні характеристики, за якими їх можна відрізнити. Наприклад, серед чорнокрилих нерозлучників (Agapornis taranta) самці мають корону з червоного пір’я, тоді як самки мають повністю зелене оперення. Але інші види не мають такого ж ступеня статевого диморфізму, що ускладнює визначення статі, просто дивлячись на них. У деяких видів самці можуть бути трохи більшими за самок, але для отримання остаточних результатів необхідний тест ДНК."
          colorVar={3}
        />
        <CircleCard
          title="10. Нерозлучники не їдять шоколад."
          text="Це може здатися здоровим глуздом, але збережіть свій шоколад і віддайте його людині. Нерозлучники виживають на здоровій дієті з насіння, ягід, фруктів, а іноді й личинок комах у дикій природі. В Африці вони також відомі як хитрі шкідники сільськогосподарських культур, оскільки вони ласують на фермах проса та кукурудзи."
          position="right"
        />
        <CircleCard
          title="11. Нерозлучники можуть бути злими."
          text="Агресія не рідкість у нерозлучників. Папуги територіальні, і, як відомо, погано уживаються з птахами іншого виду. У своєму власному вигляді нерозлучники також можуть стати ревнивими або гормональними під час шлюбного сезону. Відомо, що в неволі вони прив’язуються як до інших видів птахів, так і до інших нерозлучників, причому нерозлучники з персиковим обличчям найбільш відомі своєю агресивною поведінкою."
          colorVar={2}
        />
        <CircleCard
          title="12. Нерозлучники можуть бути переносниками зоонозних захворювань, які заражають людей."
          text="Деякі дослідження показують, що нерозлучні птахи можуть переносити дріжджові бактерії (Cryptococcus neoformans), здатні інфікувати людей, але вони збирають спори бактерій лише в тому випадку, якщо вони контактують з голубиними фекаліями. Інші звіти знаходять докази паразита під назвою Encephalitozoon hellem у фішерів, рожевощоких і маскових нерозлучників. Дослідники припускають, що паразити можуть поширюватися на людей з ослабленою імунною системою, таких як хворі на СНІД."
          position="right"
          colorVar={3}
        />
        <CircleCard
          title="13. Деякі нерозлучники можуть опинитися під загрозою зникнення в наступне десятиліття."
          text="Чорнощокий нерозлучник (Agapornis nigrigenis), що походить із Замбії та зустрічається в деяких частинах Зімбабве та Ботсвани, класифікується як вразливий у Червоному списку видів, що перебувають під загрозою МСОП. Найбільшою проблемою є посуха (можливо, спричинена довгостроковою зміною клімату), яка висихає регіональні джерела води, від яких покладаються стада. Згідно з останнім опитуванням, популяція чорнощокого нерозлучника становить приблизно 10 000 птахів."
        />
        <CircleCard
          title="14. Нерозлучники (начебто) надихнули День Святого Валентина."
          text="Вчені зазвичай цитують вірш Джеффрі Чосера як перший доказ зв’язку між релігійним святкуванням Дня святого Валентина та романтичним коханням. У вірші «Парламент фолів» фігурують два птахи, які демонструють усі ознаки людської любові."
          position="right"
          colorVar={2}
        />
      </div>
    </Layout>
  );
};

export default FunFactsPage;
