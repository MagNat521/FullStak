const RegisterPage = () => {
  return (
    <section className="page-wrapper">
      <div className="auth-card wide">
        <h1 className="page-title">Регистрация инспектора</h1>
        <p className="page-subtitle">Создайте учётную запись для работы с сервисом.</p>

        <div className="oauth-row">
          <button type="button" className="oauth-btn">
            G
          </button>
          <button type="button" className="oauth-btn">
            
          </button>
          <button type="button" className="oauth-btn">
            f
          </button>
        </div>

        <div className="or-separator">или по email</div>

        <form className="form">
          <label className="form-field">
            <span>Имя</span>
            <input type="text" placeholder="Имя" />
          </label>

          <label className="form-field">
            <span>Фамилия</span>
            <input type="text" placeholder="Фамилия" />
          </label>

          <fieldset className="fieldset">
            <legend>Должность</legend>
            <div className="fieldset-row">
              <label>
                <input type="radio" name="role" /> Инспектор
              </label>
              <label>
                <input type="radio" name="role" /> Бригадир
              </label>
              <label>
                <input type="radio" name="role" /> Аналитик
              </label>
            </div>
          </fieldset>

          <label className="form-field">
            <span>Email</span>
            <input type="email" placeholder="inspector@example.com" />
          </label>

          <label className="form-field">
            <span>Пароль</span>
            <input type="password" placeholder="Минимум 8 символов" />
          </label>

          <label className="checkbox-row">
            <input type="checkbox" />
            <span>
              Я согласен с условиями использования и политикой конфиденциальности.
            </span>
          </label>

          <label className="checkbox-row">
            <input type="checkbox" />
            <span>Оставаться в системе на этом устройстве.</span>
          </label>

          <button type="button" className="btn-primary full-width">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;