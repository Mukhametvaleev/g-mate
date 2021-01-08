"""create vacancy table

Revision ID: ae4ed4d3487e
Revises:
Create Date: 2020-12-20 19:18:38.806515
"""

import json
from pathlib import Path

import sqlalchemy as sa
from alembic import op
from sqlalchemy.dialects import postgresql
from sqlalchemy.orm import Session

from g_mate.models import Vacancy

revision = "ae4ed4d3487e"
down_revision = None
branch_labels = None
depends_on = None


def migrate_data_from(json_filename: str, session: Session):
    json_file_path = Path(__file__).parent.parent.joinpath(
        "data_migration", json_filename
    )

    with json_file_path.open() as json_file:
        vacancy_dicts = json.load(json_file)

        for vacancy_dict in vacancy_dicts:
            vacancy = Vacancy(**vacancy_dict)
            session.add(vacancy)

        session.commit()


def upgrade():
    op.create_table(
        "vacancy",
        sa.Column("id", sa.Integer(), nullable=False),
        sa.Column("company_name", sa.String(), nullable=False),
        sa.Column("company_logo", sa.String(), nullable=True),
        sa.Column("url", sa.String(), nullable=False),
        sa.Column("position", sa.String(), nullable=False),
        sa.Column("telegram_message", sa.String(), nullable=False),
        sa.Column(
            "specializations",
            postgresql.ARRAY(sa.String(length=32), dimensions=1),
            nullable=False,
        ),
        sa.Column(
            "locations",
            postgresql.ARRAY(sa.String(length=32), dimensions=1),
            nullable=False,
        ),
        sa.Column("salary_from", sa.Integer(), nullable=False),
        sa.Column("salary_to", sa.Integer(), nullable=False),
        sa.Column("published_at", sa.DateTime(), nullable=False),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index(
        op.f("ix_vacancy_locations"), "vacancy", ["locations"], unique=False
    )
    op.create_index(
        op.f("ix_vacancy_published_at"), "vacancy", ["published_at"], unique=False
    )
    op.create_index(
        op.f("ix_vacancy_salary_from"), "vacancy", ["salary_from"], unique=False
    )
    op.create_index(
        op.f("ix_vacancy_specializations"), "vacancy", ["specializations"], unique=False
    )

    bind = op.get_bind()
    session = Session(bind)
    migrate_data_from("vacancies.json", session)


def downgrade():
    op.drop_index(op.f("ix_vacancy_specializations"), table_name="vacancy")
    op.drop_index(op.f("ix_vacancy_salary_from"), table_name="vacancy")
    op.drop_index(op.f("ix_vacancy_published_at"), table_name="vacancy")
    op.drop_index(op.f("ix_vacancy_locations"), table_name="vacancy")
    op.drop_table("vacancy")
