import {TypeBills} from "../bills/bills.component";

export class BillsDto {
  typeBills?: TypeBills;
  storeName?: string;
  sum?: number;
  date?: string;
  description: string;
}
