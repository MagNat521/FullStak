# Road Marking Control — FastAPI skeleton

Тема: «Контроль дорожной разметки: инспекторы грузят снимки улиц, сервис отмечает стёртые линии и пробелы, формирует задания на ремонт».

## Быстрый старт (локально)

```bash
python -m venv .venv
# Windows: .venv\Scripts\activate
source .venv/bin/activate(PowerShell: .venv\Scripts\Activate.ps1)
pip install -U pip
pip install -e .
cp .env.example .env
uvicorn app.main:app --reload --port 8000
```

Открой:
- http://127.0.0.1:8000/
- http://127.0.0.1:8000/api/v1/health/live
- http://127.0.0.1:8000/docs

## Docker
```bash
docker compose up --build
```

## Структура
```
app/
  core/
  api/v1/endpoints/
  models/
  schemas/
  services/
tests/
```
