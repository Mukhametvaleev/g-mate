from pydantic import BaseSettings, PostgresDsn


class Settings(BaseSettings):
    SQLALCHEMY_DATABASE_URI: PostgresDsn
    CORS_ORIGIN: str

    class Config:
        case_sensitive = True
        env_file = ".env"


settings = Settings()
