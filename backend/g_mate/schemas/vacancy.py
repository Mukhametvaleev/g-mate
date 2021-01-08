from datetime import datetime
from enum import Enum
from typing import List, Literal, Optional

from pydantic import AnyHttpUrl, BaseModel


class Specialization(str, Enum):
    data_science = "data_science"
    dev_ops = "dev_ops"
    product_design = "product_design"
    ios = "ios"
    js_frontend = "js_frontend"
    js_backend = "js_backend"
    java_scala = "java_scala"
    python = "python"
    c_sharp = "c_sharp"
    android = "android"
    c_cpp = "c_cpp"
    golang = "golang"
    ruby = "ruby"
    php = "php"
    product_management = "product_management"
    project_management = "project_management"
    engineering_management = "engineering_management"
    qa_manual = "qa_manual"
    qa_auto = "qa_auto"
    tech_recruitment = "tech_recruitment"


class Location(str, Enum):
    moscow = "moscow"
    saints_p = "saints_p"
    remote = "remote"
    relocate = "relocate"


class VacancyBase(BaseModel):
    url: AnyHttpUrl
    position: str
    telegram_message: str
    specializations: List[Specialization]
    locations: List[Location]
    company_name: str
    company_logo: Optional[AnyHttpUrl]
    salary_from: int
    salary_to: int
    published_at: datetime


class Vacancy(VacancyBase):
    id: int

    class Config:
        orm_mode = True


Salary = Literal["150000", "200000", "250000", "350000"]
