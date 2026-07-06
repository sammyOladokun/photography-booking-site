export class CreateBookingDto {
  name: string;
  email: string;
  date: string; // ISO8601
  packageId?: number;
  notes?: string;
}
