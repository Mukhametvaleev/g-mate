# g-mate

g-mate FastAPI/Angular App

## Requirements

```text
postgresql
python~=3.8
node
```

## Installation

1. Clone the project
    ```shell
    git clone git@github.com:Mukhametvaleev/g-mate.git
    ```
2. Build backend
    ```shell
    cd g-mate/backend
    cp .env.example .env # <- Define SQLALCHEMY_DATABASE_URI
    python3 -m venv .venv
    source .venv/bin/activate
    pip install --upgrade pip && pip install -e .
    alembic upgrade head
    ```
3. Build frontend
    ```shell
    cd ../frontend
    npm install
    ```

## Run the development FastAPI app

```shell
# Workdir: g-mate/backend
uvicorn g_mate.main:app --host=0.0.0.0 --port=5000
```

## Run the development Angular app

```shell
# Workdir: g-mate/frontend
npm run start
```
