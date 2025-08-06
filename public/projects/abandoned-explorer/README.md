# 🏚️ Abandoned Explorer

> **A comprehensive iOS app and API platform for discovering, documenting, and exploring abandoned locations worldwide**

[![iOS](https://img.shields.io/badge/iOS-17.0+-blue.svg)](https://developer.apple.com/ios/)
[![SwiftUI](https://img.shields.io/badge/SwiftUI-5.0-blue.svg)](https://developer.apple.com/xcode/swiftui/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0+-orange.svg)](https://www.mysql.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red.svg)]()

## 🌟 Features

### 📱 **iOS App (SwiftUI)**
- **🗺️ Interactive Map** - Mapbox-powered map with efficient clustering for 10,000+ locations
- **👥 Groups System** - Create, join, and manage exploration groups with real-time chat
- **📸 Media Upload** - Submit locations with photos and videos
- **🔔 Real-time Notifications** - Get notified about group activities, location approvals, and more
- **👤 User Profiles** - Track submissions, bookmarks, and exploration statistics
- **⚡ Modern UI** - Beautiful animations, dark theme, and responsive design
- **🌍 Regional Discovery** - Location-based grouping and exploration
- **🛡️ Admin Panel** - Built-in moderation tools for administrators

### 🖥️ **Backend API (Node.js/Express)**
- **🔐 JWT Authentication** - Secure user authentication and authorization
- **📍 Location Management** - CRUD operations with spatial indexing and nearby search
- **👥 Groups API** - Complete group management with roles, permissions, and chat
- **📤 Media Upload** - Image and video upload with automatic thumbnail generation
- **🔔 Notification System** - Real-time notifications for all user activities
- **👨‍💼 Admin Tools** - Location approval workflow and user management
- **📊 Analytics** - User activity tracking and statistics
- **📚 API Documentation** - Comprehensive Swagger/OpenAPI documentation

### 🗄️ **Database (MySQL)**
- **📍 Spatial Indexing** - Optimized for fast location queries and proximity searches
- **👥 Groups Schema** - Complete group management with roles, bans, and message history
- **🔔 Notifications** - Comprehensive notification system with read status
- **📊 Analytics Tables** - User activity, location statistics, and engagement metrics
- **🛡️ Security** - Proper foreign key relationships and data integrity constraints
- **⚡ Performance** - Optimized indexes for queries handling millions of records

## 🏗️ Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│  iOS App        │    │  Node.js API     │    │  MySQL Database │
│  (SwiftUI)      │◄──►│  (Express)       │◄──►│  (Spatial Index)│
└─────────────────┘    └──────────────────┘    └─────────────────┘
       ▲                         ▲                       ▲
       │                         │                       │
   ┌───▼───┐                ┌────▼────┐             ┌────▼────┐
   │MapBox │                │ Swagger │             │ Indexes │
   │  Maps │                │   Docs  │             │& Views  │
   └───────┘                └─────────┘             └─────────┘
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ and npm
- **MySQL** 8.0+
- **Xcode** 15+ (for iOS development)
- **iOS** 17.0+ (deployment target)

### 1. Database Setup

```bash
# Connect to MySQL
mysql -u root -p

# Create database
CREATE DATABASE abandoned_explorer CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# Import schema (choose one)
mysql -u root -p abandoned_explorer < database/abandoned-explorer.sql
# OR for the latest version with all features:
mysql -u root -p abandoned_explorer < database/abandoned-explorer-new.sql
```

### 2. API Server Setup

```bash
# Navigate to API directory
cd api

# Install dependencies
npm install

# Start the development server
npm start
```

**API will be available at:** `http://localhost:3000`  
**API Documentation:** `http://localhost:3000/api-docs`

### 3. iOS App Setup

```bash
# Install CocoaPods dependencies
cd upwork-project
pod install

# Open the workspace in Xcode
open upwork-project.xcworkspace
```

1. **Update API Configuration** in `Services/APIConfiguration.swift`
2. **Build and Run** (⌘+R)

## 📊 Database Schema

### Core Tables
| Table | Purpose | Records |
|-------|---------|---------|
| `users` | User accounts and profiles | 350+ sample users |
| `locations` | Abandoned places with spatial data | Production-ready schema |
| `groups` | Exploration groups | Complete group system |
| `group_messages` | Real-time chat messages | Message history |
| `group_members` | Group membership and roles | Role-based permissions |
| `notifications` | User notifications | All activity types |
| `location_images` | Photo storage with thumbnails | Media management |
| `location_videos` | Video content | Video support |

### Advanced Features
- **Spatial Indexes** for location queries within radius
- **Full-text Search** on titles, descriptions, and tags
- **Role-based Permissions** (Owner → Admin → Member)
- **Region-based Grouping** for localized exploration
- **Comprehensive Notification System** for all user activities

## 🔌 API Endpoints

### 🔐 Authentication
```http
POST /api/auth/register    # User registration
POST /api/auth/login       # User login
GET  /api/auth/me          # Current user profile
```

### 📍 Locations
```http
GET  /api/locations/nearby       # Locations by radius
GET  /api/locations/feed         # Paginated location feed
GET  /api/locations/:id          # Location details
POST /api/locations              # Submit new location
POST /api/locations/:id/like     # Toggle like
POST /api/locations/:id/bookmark # Toggle bookmark
```

### 👥 Groups
```http
GET    /api/groups                    # User's groups
POST   /api/groups                    # Create group
POST   /api/groups/join               # Join by invite code
GET    /api/groups/:id/members        # Group members
GET    /api/groups/:id/messages       # Chat messages
POST   /api/groups/:id/messages       # Send message
POST   /api/groups/:id/kick           # Kick member (admin)
POST   /api/groups/:id/ban            # Ban member (admin)
POST   /api/groups/:id/promote        # Promote/demote member
```

### 🔔 Notifications
```http
GET  /api/users/notifications         # User notifications
POST /api/users/notifications/:id/read # Mark as read
```

### 👨‍💼 Admin (Protected)
```http
GET  /api/admin/locations/pending     # Pending approvals
POST /api/admin/locations/:id/approve # Approve location
GET  /api/admin/stats                 # System statistics
```

### 📤 Upload
```http
POST /api/upload/images               # Upload images
POST /api/upload/videos               # Upload videos
```

## 📱 iOS App Structure

```
upwork-project/
├── 📱 Views/
│   ├── 🗺️ MapView.swift              # Interactive map with clustering
│   ├── 🔐 AuthenticationView.swift   # Login/register flow
│   ├── 👤 ProfileView.swift          # User profiles and stats
│   ├── 👥 GroupsView.swift           # Groups management
│   ├── 💬 GroupChatView.swift        # Real-time group chat
│   ├── 📝 SubmitLocationView.swift   # Location submission
│   ├── 🔔 NotificationsView.swift    # Notification center
│   └── 👨‍💼 AdminPanelView.swift       # Admin tools
├── 🛠️ Services/
│   ├── 🌐 APIService.swift           # Network layer
│   ├── 📊 DataManager.swift          # State management
│   ├── 📍 LocationManager.swift      # GPS and location services
│   └── 🗺️ MapboxConfiguration.swift  # Map configuration
├── 📦 Models/
│   ├── 📍 Location.swift             # Location data model
│   ├── 👤 User.swift                 # User data model
│   └── 👥 Group.swift                # Group data model
└── 🎨 Extensions/
    └── 🎨 Color+Hex.swift            # UI utilities
```

## 🚀 Production Deployment

### Backend Deployment

#### Environment Variables
```env
# Database
DB_HOST=your-db-host
DB_USER=your-db-user
DB_PASSWORD=your-secure-password
DB_NAME=abandoned_explorer

# Security
JWT_SECRET=your-super-secure-jwt-secret
NODE_ENV=production

# Optional: AWS S3 for media storage
AWS_ACCESS_KEY_ID=your-aws-key
AWS_SECRET_ACCESS_KEY=your-aws-secret
AWS_REGION=us-east-1
AWS_S3_BUCKET=your-bucket-name
```

#### Deployment Steps
```bash
# 1. Set up production database
mysql -u root -p abandoned_explorer < database/abandoned-explorer-new.sql

# 2. Install dependencies
npm install --production

# 3. Start with PM2 (recommended)
npm install -g pm2
pm2 start server.js --name "abandoned-explorer-api"

# 4. Set up reverse proxy (nginx)
# Configure SSL certificates
```

### iOS App Deployment

1. **Update API Configuration**
   ```swift
   // In APIConfiguration.swift
   static let baseURL = "https://your-api-domain.com/api"
   ```

2. **App Store Preparation**
   - Update app icons and metadata
   - Configure release build settings
   - Set up App Store Connect

3. **Submit to App Store**
   - Archive and upload via Xcode
   - Complete App Store review process

## ⚡ Performance Features

### Database Optimizations
- **Spatial indexes** for location queries (`POINT` data type with `SPATIAL INDEX`)
- **Compound indexes** for common query patterns
- **Connection pooling** (50 connections) for high concurrency
- **Query result caching** for frequently accessed data

### API Optimizations
- **Response compression** with gzip
- **Request rate limiting** (100 requests/15 minutes per IP)
- **Pagination** for large result sets
- **Efficient SQL queries** with proper JOINs and indexes

### iOS App Optimizations
- **Map marker clustering** for performance with 10,000+ locations
- **Lazy loading** and **image caching** with `AsyncImage`
- **Regional data loading** to minimize memory usage
- **Background location updates** for seamless experience

## 🔒 Security Features

- **JWT Authentication** with secure token management
- **Password hashing** using bcrypt with salt rounds
- **SQL injection prevention** with parameterized queries
- **XSS protection** using Helmet.js middleware
- **Rate limiting** to prevent abuse
- **Role-based access control** for admin functions
- **Input validation** on all API endpoints

## 🧪 Testing

### Backend Testing
```bash
cd api
npm test                    # Run test suite
npm run test:watch          # Watch mode
npm run test:coverage       # Coverage report
```

### Database Testing
- **Sample data** included for testing (350+ users, sample locations)
- **Stored procedures** for complex operations
- **Data integrity** enforced with foreign key constraints

### iOS Testing
- **Unit tests** for models and services
- **Integration tests** for API communication
- **UI tests** for critical user flows

## 🎯 Key Features Deep Dive

### Groups System
- **Real-time Chat** with message history and replies
- **Role Management** (Owner → Admin → Member)
- **Moderation Tools** (kick, ban, promote/demote)
- **Regional Grouping** for localized exploration
- **Comprehensive Notifications** for all group activities

### Location Management
- **Spatial Queries** for finding nearby locations
- **Admin Approval Workflow** for quality control
- **Media Support** with images and videos
- **Category System** (Hospital, Factory, School, etc.)
- **Danger Level Assessment** for safety

### Notification System
- **Real-time Updates** for group activities
- **Location Approvals** and rejections
- **Group Management** notifications (kicks, bans, promotions)
- **Custom Notification Types** for different activities

## 📈 Analytics & Monitoring

### Database Views
- **location_analytics** - View counts, likes, bookmarks per location
- **user_analytics** - User engagement metrics
- **daily_stats** - Daily submission and approval counts

### API Monitoring
- **Request logging** with Morgan middleware
- **Error tracking** with structured logging
- **Performance metrics** ready for monitoring tools (New Relic, DataDog)

## 🔧 Configuration

### Database Configuration (`api/config/database.js`)
```javascript
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'abandoned_explorer',
  connectionLimit: 50,        // High concurrency support
  enableKeepAlive: true,      // Connection optimization
  multipleStatements: true    // For stored procedures
});
```

### API Configuration (`api/server.js`)
- **Port:** 3000
- **Rate limiting:** 100 requests/15 minutes
- **CORS:** Enabled for all origins (configure for production)
- **Compression:** Enabled with gzip

### iOS Configuration
- **Deployment target:** iOS 17.0+
- **MapKit integration** with Mapbox for enhanced mapping
- **Location permissions** configured in Info.plist
- **Camera permissions** for photo upload

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

## 📄 License

This project is proprietary software created for a specific client. All rights reserved.

## 🆘 Support

For technical support and questions:

- **API Documentation:** Visit `/api-docs` when server is running
- **Database Schema:** Check `database/` directory for schema files
- **iOS Integration:** Refer to `iOS_API_Integration_README.md`

---

### 🎉 **Ready for Production**

This is a **complete, production-ready application** with:
- ✅ **Scalable architecture** supporting millions of users
- ✅ **Comprehensive API** with full documentation
- ✅ **Modern iOS app** with advanced features
- ✅ **Optimized database** with spatial indexing
- ✅ **Real-time features** (chat, notifications)
- ✅ **Admin tools** for content moderation
- ✅ **Security best practices** implemented
- ✅ **Performance optimizations** for scale

**Start exploring abandoned places today!** 🏚️✨
