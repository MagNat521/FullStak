import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../shared/auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await loginUser({ email, password });
      navigate("/"); // на дашборд
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="page-wrapper">
      <div className="auth-card wide">
        <h1 className="page-title">Вход</h1>
        <p className="page-subtitle linkish">Забыли пароль?</p>

        {/* ВАЖНО: вешаем onSubmit на форму */}
        <form className="form" onSubmit={handleSubmit}>
          <label className="form-field">
            <span>Email</span>
            <input
              type="email"
              placeholder="inspector@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label className="form-field">
            <span>Пароль</span>
            <input
              type="password"
              placeholder="Введите пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          <label className="checkbox-row">
            <input type="checkbox" />
            <span>
              Оставаться в системе — применяется ко всем способам входа ниже.
            </span>
          </label>

          {error && <p className="auth-error">{error}</p>}

          {/* Кнопка должна быть type="submit", а не button */}
          <button
            type="submit"
            className="btn-primary full-width"
            disabled={loading}
          >
            {loading ? "Входим..." : "Войти по email"}
          </button>

          <div className="oauth-row">
            <button type="button" className="oauth-btn">
              G
            </button>
            <button type="button" className="oauth-btn">
              В
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
