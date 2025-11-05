from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_liveness():
    r = client.get("/api/v1/health/live")
    assert r.status_code == 200
    assert r.json()["status"] == "ok"

def test_readiness():
    r = client.get("/api/v1/health/ready")
    assert r.status_code == 200
