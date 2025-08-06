# BookBite - Restaurant Reservation System 🍽️

BookBite is a comprehensive restaurant reservation system featuring email confirmation workflows, user authentication, and modern cross-platform technologies. The system consists of a robust C++ backend using the Crow framework, a responsive Node.js/Express web frontend with EJS templating, and a native iOS SwiftUI mobile application that provides a seamless mobile-first experience.

## 🌟 Features

### Core Functionality
- **User Registration & Authentication** - Secure user accounts with JWT token-based authentication
- **Restaurant Discovery** - Browse restaurants with detailed information, ratings, and images
- **Table Reservation System** - Real-time table availability and booking with email confirmation
- **Review System** - Rate and review restaurants with star ratings
- **Admin Dashboard** - Complete restaurant and user management interface
- **Email Confirmations** - Automated email notifications for reservations and account verification

### User Features
- User registration with email verification
- Browse restaurants by cuisine type, rating, and location
- View restaurant details with table availability
- Make reservations with special requests
- Manage personal reservations (view, cancel)
- Write and edit restaurant reviews
- Responsive design for mobile and desktop
- **Native iOS app** with SwiftUI interface and native performance

### Mobile App Features
- **Native iOS Experience** - SwiftUI interface optimized for iPhone and iPad
- **Real-Time Reservations** - Live table availability and instant booking confirmation

### Admin Features
- Restaurant management (create, update, delete)
- User management with role-based permissions
- Reservation management and monitoring
- System analytics and audit logs
- Table management for restaurants

## 📸 Application Screenshots

### 🌐 Web Application

![Main Page](pictures/main-page.png)
*Homepage with featured restaurants and navigation*

![Restaurants Page](pictures/restaurants-page.png)
*Restaurant browsing with search and cuisine filters*

![Restaurant Details](pictures/restaurant-details.png)
*Detailed restaurant information and table availability*

![Restaurant Reviews](pictures/restaurant-reviews.png)
*Customer reviews and ratings system*

![Available Tables](pictures/avaliable-tables.png)
*Real-time table availability display*

![Make Reservation](pictures/make-reservation.png)
*Complete reservation form with payment options*

![My Reservations](pictures/my-reservations-page.png)
*User reservation management dashboard*

![Admin Dashboard](pictures/admin-dashboard.png)
*Administrative overview and system management*

![Manage Restaurants](pictures/admin-manage-restaurants.png)
*Restaurant management interface for admins*

![Manage Users](pictures/admin-manage-users.png)
*User management and role assignment*

### 📱 Mobile App Screenshots

<div align="center">
  <table>
    <tr>
      <td align="center" width="33%">
        <img src="pictures/restaurants-mobile.png" width="250" alt="Restaurants Mobile"/>
        <br/>
        <em>SwiftUI restaurant browsing with native iOS design</em>
      </td>
      <td align="center" width="33%">
        <img src="pictures/make-reservation-mobile.png" width="250" alt="Make Reservation Mobile"/>
        <br/>
        <em>Smart reservation form with time slot validation</em>
      </td>
      <td align="center" width="33%">
        <img src="pictures/my-reservations-mobile.png" width="250" alt="My Reservations Mobile"/>
        <br/>
        <em>User reservation management and booking history</em>
      </td>
    </tr>
    <tr>
      <td align="center" width="33%">
        <img src="pictures/payment-dark-mobile.png" width="250" alt="Payment Dark Mobile"/>
        <br/>
        <em>Dark mode payment interface</em>
      </td>
      <td align="center" width="33%">
        <img src="pictures/make-reservation-dark-mobile.png" width="250" alt="Make Reservation Dark Mobile"/>
        <br/>
        <em>Dark mode reservation form with optimized contrast</em>
      </td>
      <td align="center" width="33%">
        <img src="pictures/my-reservation-dark-mobile.png" width="250" alt="My Reservation Dark Mobile"/>
        <br/>
        <em>Dark mode reservation management interface</em>
      </td>
    </tr>
  </table>
</div>

## 🏗️ Project Structure

```
bookbite/
├── backend/                    # C++ API Server
│   ├── include/               # Header files
│   │   ├── businessLogic/     # Service layer (auth, restaurant, reservation, review)
│   │   ├── dataAccess/        # Database access layer
│   │   ├── models/            # Data models (User, Restaurant, Reservation, etc.)
│   │   ├── presentation/      # API controllers
│   │   └── utils/             # Utilities (email, database connection, env loader)
│   ├── src/                   # Source files
│   │   ├── main.cpp           # Application entry point
│   │   └── [mirrors include structure]
│   ├── build/                 # Build directory
│   └── CMakeLists.txt        # Build configuration
├── frontend/                  # Node.js/Express Web Frontend
│   ├── views/                 # EJS templates
│   │   ├── pages/            # Page templates
│   │   ├── partials/         # Reusable components
│   │   └── layouts/          # Layout templates
│   ├── public/               # Static assets (CSS, JS, images)
│   ├── app.js                # Express application
│   └── package.json          # Dependencies
├── ios/                       # Native iOS SwiftUI App
│   ├── BookBiteApp.swift     # Main app entry point
│   ├── Models.swift          # Data models matching backend API
│   ├── APIService.swift      # Network layer and API communication
│   ├── AuthenticationManager.swift # Authentication state management
│   ├── Theme.swift           # Centralized UI theme and styling
│   ├── Views/                # SwiftUI views
│   │   ├── AuthenticationView.swift
│   │   ├── ContentView.swift
│   │   ├── RestaurantsView.swift
│   │   ├── RestaurantDetailView.swift
│   │   ├── MakeReservationView.swift
│   │   ├── ReservationsView.swift
│   │   ├── ProfileView.swift
│   │   └── AddReviewView.swift
│   └── README.md             # iOS app documentation
├── mobile/                    # iOS Xcode Project
│   └── BoobBite/             # Xcode project files
│       ├── BoobBite.xcodeproj
│       ├── BoobBite/         # Source files (Swift UI views)
│       ├── BoobBiteTests/    # Unit tests
│       └── BoobBiteUITests/  # UI automation tests
├── diagrams/                  # System documentation
│   ├── entity-relationship-diagram.png
│   ├── sequence-diagram.png
│   ├── activity-diagram.png
│   ├── use-case-diagram.png
│   └── file-structure-diagram.png
├── pictures/                  # Application screenshots
├── bookbite.sql              # Database schema
└── README.md                 # This file
```

## 🛠️ Technology Stack

### Backend (C++)
- **Framework**: Crow (Modern C++ web framework)
- **Database**: MySQL with nanodbc connectivity
- **Authentication**: JWT tokens with bcrypt password hashing
- **Email**: CURL-based SMTP client with Gmail integration
- **JSON**: nlohmann/json for API responses
- **Security**: OpenSSL for cryptographic operations
- **Build System**: CMake

### Frontend (Node.js)
- **Framework**: Express.js with EJS templating
- **Session Management**: MySQL session store
- **Styling**: Bootstrap 5 with custom CSS
- **Icons**: Font Awesome
- **HTTP Client**: Axios for API communication
- **Image Service**: Unsplash API integration

### Mobile (iOS)
- **Framework**: SwiftUI (iOS 16.0+)
- **Architecture**: MVVM with Combine
- **Networking**: URLSession with async/await
- **Authentication**: JWT token management
- **UI**: Native iOS design with accessibility support
- **Deployment**: Xcode 15+ with iOS 16+ SDK

### Database
- **MySQL/MariaDB** with the following main tables:
  - `users` - User accounts and authentication
  - `restaurants` - Restaurant information and metadata
  - `tables` - Restaurant seating arrangements
  - `reservations` - Booking information and status
  - `reviews` - User reviews and ratings
  - `user_roles` - Role-based access control
  - `auth_tokens` - JWT token management

## 📱 Mobile Application

### iOS App Overview
The BookBite iOS app provides a native mobile experience built with SwiftUI, offering all the functionality of the web application optimized for mobile devices. The app features a clean, intuitive interface that follows iOS design guidelines while maintaining brand consistency with the web application.

### Key Mobile Features

#### 🎨 **Native UI/UX Design**
- **SwiftUI Framework**: Modern declarative UI with smooth animations
- **iOS Design Guidelines**: Native navigation, gestures, and interactions
- **Brand Consistency**: Matches web application color scheme and branding
- **Responsive Layout**: Optimized for iPhone and iPad screen sizes
- **Dark Mode Support**: Automatic adaptation to system appearance settings

#### 🔐 **Authentication & Security**
- **JWT Token Management**: Secure authentication with automatic token refresh
- **Keychain Storage**: Secure storage of user credentials and tokens
- **Session Persistence**: Automatic login on app restart

#### 🍽️ **Restaurant Discovery**
- **Interactive Restaurant List**: Card-based layout with search and filtering
- **Restaurant Details**: Comprehensive restaurant information with image galleries
- **Real-Time Reviews**: User reviews and ratings with ability to add new reviews
- **Cuisine Filtering**: Browse by cuisine type, rating, and price range

#### 📅 **Advanced Reservation System**
- **Smart Time Selection**: Time slots restricted to restaurant operating hours
- **Availability Checking**: Real-time table availability with visual indicators
- **Reservation Validation**: Prevents double-booking and validates time selections
- **Payment Integration**: Reservation fees with payment method selection
- **Email Confirmations**: Automatic email notifications for reservations

#### 📱 **Mobile-Optimized Features**
- **Loading States**: Smooth loading indicators and skeleton screens
- **Error Handling**: User-friendly error messages and retry mechanisms
- **Network Timeout Handling**: Automatic timeouts prevent app hanging

### Technical Architecture

#### 🏗️ **MVVM Architecture**
```
Views (SwiftUI) → ViewModels → Services → API Layer → Backend
```

#### 📦 **Core Components**
- **APIService.swift**: Network layer handling all backend communication
- **AuthenticationManager.swift**: Centralized authentication state management
- **Models.swift**: Data models matching backend API schema
- **Theme.swift**: Centralized styling and design system

#### 🌐 **API Integration**
- **RESTful API Communication**: Full integration with C++ backend
- **Async/Await Patterns**: Modern Swift concurrency for network operations
- **JSON Serialization**: Automatic encoding/decoding of API responses
- **Error Propagation**: Comprehensive error handling throughout the stack

### Development Workflow

#### 🛠️ **Development Setup**
1. **Xcode Requirements**: Xcode 15.0+ with iOS 16+ SDK

### Mobile App Screens

#### 📱 **Main Navigation**
- **Tab Bar Interface**: Easy navigation between main sections
- **Authentication Flow**: Login/register with brand-consistent design
- **Restaurant List**: Search, filter, and browse restaurants
- **Restaurant Details**: Comprehensive restaurant information

#### 🎯 **Reservation Flow**
1. **Table Selection**: Choose from available tables with capacity info
2. **Date/Time Picker**: Smart time selection within restaurant hours
3. **Guest Information**: Contact details and special requests
4. **Payment Options**: Card payment or pay-at-restaurant
5. **Confirmation**: Email confirmation and reservation summary

#### 👤 **User Management**
- **Profile Screen**: User information and preferences
- **Reservation History**: View and manage all reservations
- **Review Management**: View and edit submitted reviews

### Performance Optimizations

#### ⚡ **Network Optimization**
- **Request Caching**: Intelligent caching of restaurant data
- **Image Loading**: Lazy loading with placeholder images
- **Batch Requests**: Efficient data fetching strategies
- **Background Sync**: Data synchronization when app becomes active

#### 🎯 **UI Performance**
- **LazyVStack/LazyHStack**: Efficient list rendering for large datasets
- **SwiftUI Optimizations**: Proper state management and view updates
- **Memory Management**: Automatic reference counting and leak prevention

#### 📱 **Device Compatibility**
- **iOS Versions**: iOS 16.0+ support
- **Device Types**: iPhone 12+ and iPad (9th generation+)
- **Screen Sizes**: Responsive design for all screen sizes

## 🚀 Getting Started

### Prerequisites
- **C++ Compiler** (GCC 7+ or Clang 6+)
- **CMake** (3.12+)
- **Node.js** (14+) and npm
- **MySQL/MariaDB** server
- **Dependencies for C++ backend**:
  - Crow framework
  - nanodbc
  - OpenSSL
  - CURL
  - nlohmann/json

> **Note**: This project has been tested and verified to work on **macOS Tahoe Developer Beta 1**

### Database Setup
1. Install MySQL/MariaDB
2. Create the database:
   ```sql
   CREATE DATABASE bookbite;
   ```
3. Import the schema:
   ```bash
   mysql -u root -p bookbite < bookbite.sql
   ```

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies (macOS with Homebrew):
   ```bash
   brew install cmake nanodbc unixodbc openssl curl nlohmann-json
   ```

3. Create build directory and configure:
   ```bash
   mkdir build
   cd build
   cmake ..
   ```

4. Build the project:
   ```bash
   make
   ```

5. Create a `.env` file in the build directory:
   ```env
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=bookbite
   SMTP_SERVER=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_email@gmail.com
   SMTP_PASSWORD=your_app_password
   ```

6. Run the backend server:
   ```bash
   ./bookbite_server
   ```
   The backend API will be available at `http://localhost:8080/api`

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file:
   ```env
   PORT=3000
   API_URL=http://localhost:8080/api
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=bookbite
   SESSION_SECRET=your_session_secret
   ```

4. Start the frontend server:
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:3000`

### iOS App Setup
1. **Prerequisites**:
   - **macOS**: macOS Monterey (12.0) or later
   - **Xcode**: Xcode 15.0+ with iOS 16+ SDK
   - **Apple Developer Account**: For device testing
   - **Running Backend**: Ensure C++ backend server is running (steps above)

2. **Project Setup**:
   ```bash
   # Navigate to the mobile project
   cd mobile/BoobBite
   
   # Open in Xcode
   open BoobBite.xcodeproj
   ```

3. **Configuration**:
   - **Bundle Identifier**: Set to `com.yourcompany.bookbite`
   - **Team**: Select your Apple Developer team
   - **Deployment Target**: Set to iOS 16.0 minimum
   - **Signing**: Enable automatic signing for development

4. **Network Configuration**:
   Update the API base URL in `APIService.swift`:
   ```swift
   // For iOS Simulator (localhost)
   private let baseURL = "http://localhost:8080/api"
   
   // For Physical Device Testing (replace with your Mac's IP)
   private let baseURL = "http://192.168.1.100:8080/api"
   ```

5. **Build and Run**:
   - **Simulator**: Select any iPhone simulator and press Cmd+R
   - **Physical Device**: Connect iPhone, select device, and press Cmd+R
   - **Testing**: Ensure backend is running and accessible from the device

### Mobile App Architecture Details

#### 📱 **App Structure**
```
BoobBite/
├── BookBiteApp.swift          # Main app entry point
├── ContentView.swift          # Tab bar navigation
├── Theme.swift               # UI theme and styling
├── Models.swift              # Data models
├── APIService.swift          # Network layer
├── AuthenticationManager.swift # Auth state
└── Views/
    ├── AuthenticationView.swift    # Login/Register
    ├── RestaurantsView.swift      # Restaurant list
    ├── RestaurantDetailView.swift # Restaurant details & booking
    ├── ReservationsView.swift     # User reservations
    ├── ProfileView.swift          # User profile
    └── AddReviewView.swift        # Review submission
```

#### 🔄 **Data Flow**
1. **User Interaction** → SwiftUI View
2. **View** → ViewModel (state management)
3. **ViewModel** → APIService (network call)
4. **APIService** → Backend API
5. **Response** → Model parsing
6. **UI Update** → SwiftUI automatic refresh

#### 🎨 **UI Components**
- **Custom Cards**: Restaurant and reservation cards with shadows
- **Loading States**: Skeleton screens and progress indicators
- **Error Handling**: User-friendly error messages and retry buttons
- **Form Validation**: Real-time validation for reservation forms

> **Note**: For physical device testing, replace `localhost` with your Mac's IP address in the APIService configuration. Ensure both devices are on the same WiFi network and firewall allows connections on port 8080.

## 📊 System Architecture

### Entity Relationship Diagram
![ER Diagram](diagrams/entity-relationship-diagram.png)

The system uses a normalized database schema with proper foreign key relationships:
- Users can have multiple reservations and reviews
- Restaurants have multiple tables and receive reviews
- Tables belong to restaurants and can have multiple reservations
- Reservations link users, restaurants, and tables

### Use Case Diagram
![Use Case Diagram](diagrams/use-case-diagram.png)

The system supports different user roles:
- **Guest Users**: Browse restaurants, view details
- **Registered Users**: Make reservations, write reviews, manage bookings
- **Administrators**: Full system management capabilities

### Activity Diagram
![Activity Diagram](diagrams/activity-diagram.png)

Shows the complete reservation workflow from browsing to confirmation.

### Sequence Diagram
![Sequence Diagram](diagrams/sequence-diagram.png)

Illustrates the interaction between frontend, backend, and database components.

## 📧 Email Configuration

The system uses Gmail SMTP for sending emails. To configure:

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Use the app password in your `.env` file

Email features include:
- Account verification emails
- Reservation confirmation emails
- Reservation reminder emails
- Password reset emails (if implemented)

## 📚 API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/verify-email/{token}` - Verify email address

### Restaurant Endpoints
- `GET /api/restaurants` - List all restaurants
- `GET /api/restaurants/{id}` - Get restaurant details
- `GET /api/restaurants/{id}/tables` - Get restaurant tables
- `GET /api/restaurants/{id}/reviews` - Get restaurant reviews

### Reservation Endpoints
- `POST /api/reservations` - Create new reservation
- `GET /api/user/reservations` - Get user's reservations
- `POST /api/reservations/{id}/cancel` - Cancel reservation
- `GET /api/reservations/confirm/{token}` - Confirm reservation

### Admin Endpoints
- `GET /api/admin/users` - Manage users
- `GET /api/admin/restaurants` - Manage restaurants
- `GET /api/admin/reservations` - Manage reservations
- `POST /api/admin/restaurants` - Create restaurant

## 💫 Email Confirmation Workflow

### Account Verification
![Account Confirmation Email](pictures/account-confirmation-email.png)

1. **User Registration**:
   - User registers with email
   - System sends verification email
   - User clicks verification link
   - Account becomes active

### Reservation Confirmation
![Confirm Reservation Email](pictures/confirm-reservation-email.png)
![Reservation Confirmed Email](pictures/reservation-confirmed-email.png)

2. **Reservation Process**:
   - User makes reservation
   - System sends confirmation email with token
   - User clicks confirmation link
   - Reservation status changes to "confirmed"

## 🔧 Development

### Building the Backend
The C++ backend uses CMake and requires several dependencies. The build process automatically:
- Fetches the Crow framework if not installed
- Links against MySQL/ODBC drivers
- Configures SSL and CURL libraries
- Copies the executable to the project root

### Frontend Development
The Express.js frontend provides:
- Server-side rendering with EJS
- Session management with MySQL store
- API proxy to the C++ backend
- CORS handling for development

### File Structure
![File Structure](diagrams/file-structure-diagram.png)

The project follows a clean architecture pattern:
- **Models**: Data structures and entities
- **Data Access**: Database operations and queries
- **Business Logic**: Core application logic and rules
- **Presentation**: API controllers and routing
- **Utils**: Helper functions and utilities

## 📋 Common Issues

### Backend Issues
- **Database Connection**: Ensure MySQL is running and credentials are correct
- **ODBC Drivers**: Install MariaDB ODBC driver for macOS
- **SSL Certificates**: May need to configure SSL certificate paths

### Frontend Issues
- **Session Store**: Requires MySQL connection for session storage
- **API Communication**: Ensure backend is running on port 8080
- **Image Loading**: Unsplash integration requires internet connection

### Email Issues
- **SMTP Authentication**: Use App Passwords for Gmail
- **Firewall**: Ensure SMTP port 587 is not blocked
- **Email Delivery**: Check spam folders for confirmation emails

### Mobile App Issues
- **Network Connectivity**: Ensure backend server is accessible from mobile device
- **API Base URL**: Update APIService.swift with correct IP address for device testing
- **Xcode Build Errors**: Ensure iOS 16+ deployment target and Swift 5.7+ compatibility
- **Simulator vs Device**: Different network configurations required for localhost vs IP testing
- **Modal Presentation**: Use proper SwiftUI sheet presentation patterns to avoid white screens

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**BookBite** - Making restaurant reservations simple and elegant! 🎉

---

Made with ❤️ by Boris Milev
