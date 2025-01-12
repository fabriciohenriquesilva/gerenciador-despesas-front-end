import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DateService {

    createDate(date: string) {
        if (date == null) {
            return null;
        }

        const dataObject = new Date(date);

        const dia: number = dataObject.getUTCDate();
        const mes: number = dataObject.getMonth();
        const ano: number = dataObject.getFullYear();

        return new Date(ano, mes, dia);
    }

}
