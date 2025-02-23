export interface ElectricityDto {
  meterReading: bigint;
  date: string | Date;
  diff?: string;
  formattedDate?: string;

}
