export class CreateBookingDto {
  name: string;
  email: string;
  startAt: string; // ISO8601
  packageId?: number;
  notes?: string;
}
