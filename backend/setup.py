from setuptools import find_packages, setup

__version__ = "0.1.0"

install_requires = [
    "fastapi==0.63.0",
    "pydantic==1.7.3",
    "SQLAlchemy==1.3.22",
    "uvicorn==0.13.3",
    "alembic==1.4.3",
    "python-dotenv==0.15.0",
    "psycopg2-binary==2.8.6",
]

setup(
    author="Andrei.M",
    author_email="andrei.mukhametvaleev@gmail.com",
    description="g-mate / FastAPI app",
    entry_points={"paste.app_factory": "main = g_mate:main"},
    install_requires=install_requires,
    long_description="",
    name="g_mate",
    packages=find_packages(),
    python_requires="~=3.8",
    version=__version__,
    zip_safe=False,
)
