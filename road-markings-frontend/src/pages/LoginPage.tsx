const LoginPage = () => {
  return (
    <section className="page-wrapper">
      <div className="auth-card wide">
        <h1 className="page-title">Вход</h1>
        <p className="page-subtitle linkish">Забыли пароль?</p>

        <form className="form">
          <label className="form-field">
            <span>Email</span>
            <input type="email" placeholder="inspector@example.com" />
          </label>

          <label className="form-field">
            <span>Пароль</span>
            <input type="password" placeholder="Введите пароль" />
          </label>

          <label className="checkbox-row">
            <input type="checkbox" />
            <span>
              Оставаться в системе — применяется ко всем способам входа ниже.
            </span>
          </label>

          <button type="button" className="btn-primary full-width">
            Войти по email
          </button>

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

          <p className="small-note">
            Нажимая «Войти», вы соглашаетесь с условиями обработки данных и
            политикой конфиденциальности сервиса.
          </p>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;