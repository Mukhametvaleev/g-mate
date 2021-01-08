from enum import Enum
from typing import Generic, List, TypeVar

from pydantic.generics import GenericModel


class VacancyFilterParam(str, Enum):
    s = "s"
    l = "l"
    st = "st"


Value = TypeVar("Value")


class VacancyFilterChildren(GenericModel, Generic[Value]):
    value: Value
    title: str


class VacancyFilter(GenericModel, Generic[Value]):
    param: VacancyFilterParam
    title: str
    multiple: bool = True
    children: List[VacancyFilterChildren[Value]]
