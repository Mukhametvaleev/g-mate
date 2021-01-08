from typing import List, Tuple

from sqlalchemy.dialects.postgresql import ARRAY, TEXT
from sqlalchemy.orm import Session

from g_mate.crud.base import CRUDBase
from g_mate.models.vacancy import Vacancy


class CRUDVacancy(CRUDBase[Vacancy]):
    """ Vacancy CRUD """

    def retrieve_collection(
        self, db: Session, skip: int = 0, limit: int = 10, s=None, l=None, st=None
    ) -> Tuple[int, List[Vacancy]]:
        """ Retrieve Vacancy collection """

        query = db.query(self.model)

        if s:
            query = query.filter(
                self.model.specializations.cast(ARRAY(TEXT)).overlap(s)
            )
        if l:
            query = query.filter(self.model.locations.cast(ARRAY(TEXT)).overlap(l))
        if st:
            query = query.filter(self.model.salary_from >= int(st))

        count = query.count()

        order_by = self.model.published_at.desc()
        vacancies = query.order_by(order_by).offset(skip).limit(limit).all()

        return count, vacancies


vacancy = CRUDVacancy(Vacancy)
