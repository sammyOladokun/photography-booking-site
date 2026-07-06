# Photography Booking - Data Model & Database Schema

## Tables (PostgreSQL)

### users
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20),
  role ENUM('customer', 'photographer', 'admin') DEFAULT 'customer',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### photographers
```sql
CREATE TABLE photographers (
  id SERIAL PRIMARY KEY,
  user_id INTEGER UNIQUE NOT NULL,
  bio TEXT,
  location VARCHAR(255),
  hourly_rate DECIMAL(10, 2),
  image_url VARCHAR(500),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

### packages
```sql
CREATE TABLE packages (
  id SERIAL PRIMARY KEY,
  photographer_id INTEGER NOT NULL,
  name VARCHAR(255) NOT NULL,
  category ENUM('fashion', 'commercial', 'portraits'),
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  duration_hours INTEGER,
  deliverables JSONB,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (photographer_id) REFERENCES photographers(id) ON DELETE CASCADE,
  INDEX idx_photographer_id (photographer_id)
);
```

### bookings
```sql
CREATE TABLE bookings (
  id SERIAL PRIMARY KEY,
  customer_id INTEGER NOT NULL,
  photographer_id INTEGER NOT NULL,
  package_id INTEGER NOT NULL,
  booking_date TIMESTAMP NOT NULL,
  status ENUM('pending', 'confirmed', 'completed', 'cancelled') DEFAULT 'pending',
  notes TEXT,
  price DECIMAL(10, 2),
  payment_id INTEGER,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (customer_id) REFERENCES users(id),
  FOREIGN KEY (photographer_id) REFERENCES photographers(id),
  FOREIGN KEY (package_id) REFERENCES packages(id),
  INDEX idx_customer_id (customer_id),
  INDEX idx_photographer_id (photographer_id),
  INDEX idx_status (status),
  INDEX idx_booking_date (booking_date)
);
```

### availability_slots
```sql
CREATE TABLE availability_slots (
  id SERIAL PRIMARY KEY,
  photographer_id INTEGER NOT NULL,
  start_time TIMESTAMP NOT NULL,
  end_time TIMESTAMP NOT NULL,
  type ENUM('available', 'blocked') DEFAULT 'available',
  recurring BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (photographer_id) REFERENCES photographers(id) ON DELETE CASCADE,
  INDEX idx_photographer_id (photographer_id),
  INDEX idx_start_time (start_time)
);
```

### payments
```sql
CREATE TABLE payments (
  id SERIAL PRIMARY KEY,
  booking_id INTEGER NOT NULL,
  stripe_charge_id VARCHAR(255) UNIQUE,
  amount DECIMAL(10, 2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'USD',
  status ENUM('pending', 'paid', 'failed', 'refunded') DEFAULT 'pending',
  payment_method VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (booking_id) REFERENCES bookings(id) ON DELETE CASCADE,
  INDEX idx_booking_id (booking_id),
  INDEX idx_stripe_charge_id (stripe_charge_id)
);
```

### collections
```sql
CREATE TABLE collections (
  id SERIAL PRIMARY KEY,
  photographer_id INTEGER NOT NULL,
  name VARCHAR(255) NOT NULL,
  category ENUM('fashion', 'commercial', 'portraits'),
  description TEXT,
  display_order INTEGER,
  created_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (photographer_id) REFERENCES photographers(id) ON DELETE CASCADE,
  INDEX idx_photographer_id (photographer_id),
  INDEX idx_category (category)
);
```

### media_assets
```sql
CREATE TABLE media_assets (
  id SERIAL PRIMARY KEY,
  photographer_id INTEGER NOT NULL,
  collection_id INTEGER,
  url VARCHAR(500) NOT NULL,
  alt_text VARCHAR(255),
  tags JSONB,
  width INTEGER,
  height INTEGER,
  file_size BIGINT,
  variants JSONB, -- stores thumbnail, medium, large URLs
  uploaded_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (photographer_id) REFERENCES photographers(id),
  FOREIGN KEY (collection_id) REFERENCES collections(id) ON DELETE SET NULL,
  INDEX idx_photographer_id (photographer_id),
  INDEX idx_collection_id (collection_id)
);
```

### testimonials
```sql
CREATE TABLE testimonials (
  id SERIAL PRIMARY KEY,
  photographer_id INTEGER NOT NULL,
  customer_id INTEGER,
  quote TEXT NOT NULL,
  author_name VARCHAR(255) NOT NULL,
  author_role VARCHAR(100),
  rating INTEGER DEFAULT 5,
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (photographer_id) REFERENCES photographers(id),
  FOREIGN KEY (customer_id) REFERENCES users(id) ON DELETE SET NULL,
  INDEX idx_photographer_id (photographer_id),
  INDEX idx_featured (featured)
);
```

## Relationships

```
users (1) ──── (1) photographers
            ──── (N) bookings (as customer)

photographers (1) ──── (N) packages
                    ──── (N) bookings
                    ──── (N) availability_slots
                    ──── (N) collections
                    ──── (N) media_assets
                    ──── (N) testimonials

packages (1) ──── (N) bookings

bookings (1) ──── (1) payments
           ──── (N) invoices (future)

collections (1) ──── (N) media_assets

testimonials (N) ──── (1) customers (users)
```

## Indexes Strategy
- Primary lookups: `photographer_id`, `customer_id`, `booking_id`
- Range queries: `booking_date`, `start_time`, `created_at`
- Filtering: `status`, `category`, `featured`
- Constraints: `email` (UNIQUE), `stripe_charge_id` (UNIQUE)

## Future Tables
- `invoices` - For detailed billing
- `calendar_sync` - For Google Calendar / Office 365 integration
- `notifications` - Email/SMS delivery log
- `reviews` - Extended review system beyond testimonials
