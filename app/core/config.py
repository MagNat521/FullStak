from pydantic_settings import BaseSettings
from functools import lru_cache
from pathlib import Path

class Settings(BaseSettings):
    APP_NAME: str = "Road Marking Control"
    API_V1_PREFIX: str = "/api/v1"
    ENV: str = "dev"
    DEBUG: bool = True
    STORAGE_PATH: str = "/data/uploads"

    class Config:
        env_file = ".env"

@lru_cache
def get_settings() -> Settings:
    s = Settings()
    Path(s.STORAGE_PATH).mkdir(parents=True, exist_ok=True)
    return s
