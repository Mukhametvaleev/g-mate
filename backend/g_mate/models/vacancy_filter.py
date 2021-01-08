""" TODO: Вынести в модель: справочник фильтров Vacancy """
from typing import Dict, List

from g_mate.schemas import Location, Salary, Specialization, VacancyFilterChildren, VacancyFilterParam

filter_meta_by_param = {
    VacancyFilterParam.s: {"title": "Специализации"},
    VacancyFilterParam.l: {"title": "Локации"},
    VacancyFilterParam.st: {"title": "Заплата на руки", "multiple": False},
}

vacancy_filter_children_by_param: Dict[VacancyFilterParam, List[VacancyFilterChildren]] = {
    VacancyFilterParam.s: [
        VacancyFilterChildren[Specialization](
            value="data_science", title="Data Science"
        ),
        VacancyFilterChildren[Specialization](value="dev_ops", title="DevOps"),
        VacancyFilterChildren[Specialization](
            value="product_design", title="Design & UX"
        ),
        VacancyFilterChildren[Specialization](value="ios", title="iOS"),
        VacancyFilterChildren[Specialization](value="js_frontend", title="JS/Frontend"),
        VacancyFilterChildren[Specialization](value="js_backend", title="JS/Backend"),
        VacancyFilterChildren[Specialization](value="java_scala", title="Java / Scala"),
        VacancyFilterChildren[Specialization](value="python", title="Python"),
        VacancyFilterChildren[Specialization](value="c_sharp", title="C#"),
        VacancyFilterChildren[Specialization](value="android", title="Android"),
        VacancyFilterChildren[Specialization](value="c_cpp", title="С / С++"),
        VacancyFilterChildren[Specialization](value="golang", title="Golang"),
        VacancyFilterChildren[Specialization](value="ruby", title="Ruby"),
        VacancyFilterChildren[Specialization](value="php", title="PHP"),
        VacancyFilterChildren[Specialization](
            value="product_management", title="Product Management"
        ),
        VacancyFilterChildren[Specialization](
            value="project_management", title="Project Management"
        ),
        VacancyFilterChildren[Specialization](
            value="engineering_management", title="Tech Management"
        ),
        VacancyFilterChildren[Specialization](value="qa_manual", title="QA / Manual"),
        VacancyFilterChildren[Specialization](value="qa_auto", title="QA / Auto"),
        VacancyFilterChildren[Specialization](
            value="tech_recruitment", title="Recruitment"
        ),
    ],
    VacancyFilterParam.l: [
        VacancyFilterChildren[Location](value="moscow", title="Москва"),
        VacancyFilterChildren[Location](value="remote", title="Remote"),
        VacancyFilterChildren[Location](value="relocate", title="Relocate"),
        VacancyFilterChildren[Location](value="saints_p", title="Санкт-Петербург"),
    ],
    VacancyFilterParam.st: [
        VacancyFilterChildren[Salary](value="150000", title="от 150 000 ₽/мес"),
        VacancyFilterChildren[Salary](value="200000", title="от 200 000 ₽/мес"),
        VacancyFilterChildren[Salary](value="250000", title="от 250 000 ₽/мес"),
        VacancyFilterChildren[Salary](value="350000", title="от 350 000 ₽/мес"),
    ],
}
