const DashboardPage = () => {
  return (
    <section className="page-wrapper">
      <div className="dashboard">
        <h1 className="page-title">Контроль дорожной разметки</h1>
        <p className="page-subtitle">
          Загрузите снимок улицы, запустите диагностику и получите список
          участков, требующих ремонта разметки.
        </p>

        {/* Блок загрузки снимка */}
        <div className="block">
          <button className="pill-button">Загрузить снимок улицы</button>
          <div className="image-dropzone active">
            <div className="image-placeholder" />
          </div>
        </div>

        {/* Кнопка запуска диагностики */}
        <div className="block">
          <button className="pill-button pill-button-dark">
            Начать диагностику
          </button>
        </div>

        {/* Блок выявленных ошибок */}
        <div className="block">
          <h2 className="block-title">Выявленные ошибки:</h2>
          <div className="image-dropzone">
            <div className="image-placeholder" />
          </div>
        </div>

        {/* Блок генерации заданий на ремонт */}
        <div className="block">
          <button className="pill-button">Составить задания на ремонт</button>

          <ol className="tasks-list">
            <li>Секция 1 — стертая осевая разметка, перекрасить 120 м.</li>
            <li>Секция 2 — отсутствует стоп-линия у перекрёстка.</li>
            <li>Секция 3 — восстановить пешеходный переход, 2 полосы.</li>
            <li>Секция 4 — продублировать направления движения на полосах.</li>
            <li>Секция 5 — обновить разметку парковочных мест.</li>
            <li>Секция 6 — удалить устаревшую разметку при сужении дороги.</li>
            <li>Секция 7 — добавить разметку “лежачий полицейский”.</li>
            <li>Секция 8 — нанести предупреждающие надписи на асфальте.</li>
            <li>Секция 9 — локальный ремонт краски после раскопок.</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;