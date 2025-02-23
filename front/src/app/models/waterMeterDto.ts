import {TypeWater} from "../meters/meters.component";

export interface WaterMeterDto {
  typeWater: TypeWater;
  meterReading: string;
  date: string | Date;
  diff?: string;
  formattedDate?: string;
}
