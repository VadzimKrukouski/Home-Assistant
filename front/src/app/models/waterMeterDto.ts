import {TypeWater} from "../meters/meters.component";

export class WaterMeterDto {
  typeWater?: TypeWater;
  meterReading?: string;
  date?: string;
  diff?: string;
}
