from typing import Any, List, Optional, Type, Union

from fastapi import APIRouter, Depends
from fastapi.params import Query
from sqlalchemy.orm import Session

from g_mate import crud, dependencies
from g_mate.models.vacancy_filter import filter_meta_by_param, vacancy_filter_children_by_param
from g_mate.schemas import (
    CollectionResponse,
    Location,
    Salary,
    Specialization,
    Vacancy,
    VacancyFilter,
    VacancyFilterParam,
)

router = APIRouter(prefix="/vacancies", tags=["vacancies"])


@router.get("/", response_model=CollectionResponse[Vacancy])
async def retrieve_vacancy_collection(
    db: Session = Depends(dependencies.get_db),
    skip: int = Query(0, description="Query offset"),
    limit: int = Query(10, description="Query limit"),
    s: Optional[List[Specialization]] = Query(
        None, description="Vacancy.specializations filter criterion"
    ),
    l: Optional[List[Location]] = Query(
        None, description="Vacancy.locations filter criterion"
    ),
    st: Optional[Salary] = Query(
        None, description="Vacancy.salary_from filter criterion"
    ),
) -> Any:
    """ Retrieve Vacancy collection """

    count, vacancies = crud.vacancy.retrieve_collection(
        db, skip=skip, limit=limit, s=s, l=l, st=st
    )

    return {
        "count": count,
        "items": vacancies,
    }


@router.get(
    "/filters/{param}",
    response_model=Union[
        VacancyFilter[Specialization], VacancyFilter[Location], VacancyFilter[Salary]
    ],
)
async def retrieve_vacancy_filters(param: VacancyFilterParam) -> Any:
    """ Retrieve Vacancy filter """

    children = vacancy_filter_children_by_param[param]
    rest = filter_meta_by_param[param]

    def get_vacancy_filter() -> Type[VacancyFilter]:
        if param == "s":
            return VacancyFilter[Specialization]
        if param == "l":
            return VacancyFilter[Location]
        if param == "st":
            return VacancyFilter[Salary]

    vacancy_filter = get_vacancy_filter()

    return vacancy_filter(param=param, children=children, **rest)
