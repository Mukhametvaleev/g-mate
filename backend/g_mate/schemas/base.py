from typing import Generic, List, TypeVar

from pydantic.generics import GenericModel

from g_mate.db.base_class import Base

ModelType = TypeVar("ModelType", bound=Base)


class CollectionResponse(GenericModel, Generic[ModelType]):
    items: List[ModelType]
    count: int

    class Config:
        arbitrary_types_allowed = True
