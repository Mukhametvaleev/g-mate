from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from g_mate.config import settings
from g_mate.routers import vacancies

app = FastAPI()
app.include_router(vacancies.router)

origins = [settings.CORS_ORIGIN]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)
