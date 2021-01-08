from sqlalchemy import Column, DateTime, Integer, String
from sqlalchemy.dialects import postgresql

from g_mate.db.base_class import Base


class Vacancy(Base):
    """ Вакансия """
    id = Column(Integer, primary_key=True)
    company_name = Column(String, nullable=False)
    company_logo = Column(String)
    url = Column(String, nullable=False)
    position = Column(String, nullable=False)
    telegram_message = Column(String, nullable=False)
    specializations = Column(
        postgresql.ARRAY(String(32), dimensions=1), index=True, nullable=False
    )
    locations = Column(
        postgresql.ARRAY(String(32), dimensions=1), index=True, nullable=False
    )
    salary_from = Column(Integer, index=True, nullable=False)
    salary_to = Column(Integer, nullable=False)
    published_at = Column(DateTime, index=True, nullable=False)
