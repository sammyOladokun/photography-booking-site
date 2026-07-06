# Photography Booking - API Specification

## Base URL
- **Frontend dev**: `http://localhost:3000`
- **Backend dev**: `http://localhost:4000`

## Core Entities

### Photographer
```json
{
  "id": 1,
  "name": "LIVIA BLAKE",
  "bio": "A fashion & lifestyle photographer...",
  "location": "Amsterdam"
}
```

### Package
```json
{
  "id": 1,
  "name": "Fashion Session",
  "category": "fashion" | "commercial" | "portraits",
  "price": 1200,
  "duration": 4,
  "deliverables": ["50+ edited images", "Digital files"],
  "description": "Professional fashion photography"
}
```

### Booking
```json
{
  "id": 1,
  "name": "Client Name",
  "email": "client@example.com",
  "date": "2024-07-15T14:00:00Z",
  "packageId": 1,
  "status": "pending" | "confirmed" | "cancelled",
  "createdAt": "2024-07-05T10:00:00Z"
}
```

### Collection
```json
{
  "id": 1,
  "name": "Fashion",
  "category": "fashion",
  "description": "Timeless fashion and lifestyle",
  "imageCount": 24
}
```

### Testimonial
```json
{
  "id": 1,
  "quote": "Best photographer ever...",
  "author": "CHLOE SMITH"
}
```

## API Endpoints

### Photographer
- `GET /photographer` - Get photographer profile
- `GET /photographer/testimonials` - Get all testimonials
- `GET /photographer/collections` - Get all collections
- `GET /photographer/collections/:id` - Get specific collection

### Packages
- `GET /packages` - List all packages
- `GET /packages/:id` - Get package details
- `GET /packages/category/:category` - Filter by category (fashion, commercial, portraits)

### Bookings
- `GET /bookings` - List all bookings (admin)
- `POST /bookings` - Create new booking request
  - **Body**: `{ name, email, date, packageId?, notes? }`
  - **Returns**: `{ message, booking }`
- `GET /bookings/:id` - Get booking status
- `PATCH /bookings/:id/confirm` - Confirm a booking
- `PATCH /bookings/:id/cancel` - Cancel a booking (TODO)

## Frontend Integration

### Homepage
1. Hero section fetches photographer data
2. Collections section renders from `GET /photographer/collections`
3. Testimonials from `GET /photographer/testimonials`
4. Booking modal calls `POST /bookings`

### Package Selection (future)
- Query `GET /packages` to display options
- Show category-filtered view via `GET /packages/category/:category`

## Future Enhancements
- Payment intent creation (Stripe integration)
- Calendar availability checking
- Email confirmations
- Admin dashboard for booking management
- Gallery management endpoints
- Availability time slots
- Rescheduling/modification support
