# Opportunities - Personalized Work Discovery Platform

A comprehensive platform for discovering and connecting with meaningful work opportunities that align with your values, skills, and aspirations.

## 🚀 Features

### Frontend (Next.js 15)
- **Personal Dashboard**: Centralized view of opportunities and insights
- **Human Atlas**: Interactive exploration of human society evolution
- **Global Insights**: Wall Street Journal-style news and analysis
- **Personal Profile**: Comprehensive self-assessment and growth tracking
- **Impact Timeline**: Track your contributions and achievements
- **Document Archive**: Store and organize important documents with wisdom quotes

### Backend (FastAPI)
- **RESTful API**: Modern, fast API built with FastAPI
- **PostgreSQL**: Robust database for data persistence
- **Redis**: Caching and session management
- **AI/ML Integration**: Intelligent opportunity matching
- **Data Collection**: Automated opportunity aggregation

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with shadcn/ui
- **Maps**: Leaflet.js for interactive maps
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Backend
- **Framework**: FastAPI
- **Language**: Python 3.9+
- **Database**: PostgreSQL
- **Cache**: Redis
- **ORM**: SQLAlchemy with Alembic
- **Authentication**: JWT tokens
- **Documentation**: Auto-generated with FastAPI

## 📁 Project Structure

```
Opportunities/
├── frontend/                 # Next.js frontend application
│   ├── src/
│   │   ├── app/             # App Router pages
│   │   │   ├── dashboard/   # Personal dashboard
│   │   │   ├── insights/    # Global insights & Atlas
│   │   │   ├── profile/     # User profile & impact tracking
│   │   │   └── service/     # Self & service assessment
│   │   ├── components/      # Reusable UI components
│   │   └── lib/            # Utilities and helpers
│   ├── public/             # Static assets
│   └── package.json
├── backend/                 # FastAPI backend application
│   ├── app/
│   │   ├── api/            # API routes
│   │   ├── models/         # Database models
│   │   ├── services/       # Business logic
│   │   └── utils/          # Utilities
│   ├── alembic/            # Database migrations
│   └── pyproject.toml
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Python 3.9+
- PostgreSQL
- Redis

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:3000`

### Backend Setup
```bash
cd backend
poetry install
poetry run uvicorn app.main:app --reload
```

The API will be available at `http://localhost:8000`

## 🎯 Key Features

### Personal Dashboard
- Opportunity recommendations based on your profile
- Quick access to all platform features
- Progress tracking and insights

### Human Atlas
- Interactive timeline of human civilization
- Region-specific historical insights
- Influential individuals by era and region
- Interactive map with historical markers

### Global Insights
- Wall Street Journal-style news layout
- Era-specific historical analysis
- Innovation and challenge tracking
- Social structure evolution

### Personal Profile
- Comprehensive self-assessment
- Skills, values, and personality traits
- Impact timeline and achievements
- Growth recommendations
- Document archive with wisdom quotes

### Self & Service
- Ideal vs. present reality assessment
- Progress tracking with sliders
- Goal setting and ambition management
- Service examples and opportunities

## 🎨 Design Philosophy

- **Minimalist**: Clean, uncluttered interfaces
- **Intentional**: Every element serves a purpose
- **Accessible**: Inclusive design principles
- **Responsive**: Works seamlessly across devices
- **Professional**: Wall Street Journal-inspired layouts

## 🔧 Development

### Code Style
- **Frontend**: ESLint + Prettier
- **Backend**: Black + isort + flake8
- **TypeScript**: Strict mode enabled
- **Python**: Type hints throughout

### Testing
- **Frontend**: Jest + React Testing Library
- **Backend**: pytest
- **E2E**: Playwright (planned)

## 🚀 Deployment

### Frontend
- **Platform**: Vercel
- **Domain**: Custom domain support
- **CDN**: Global edge network

### Backend
- **Platform**: Railway/Render
- **Database**: Managed PostgreSQL
- **Cache**: Managed Redis

## 📈 Roadmap

- [ ] AI-powered opportunity matching
- [ ] Real-time notifications
- [ ] Mobile app development
- [ ] Advanced analytics dashboard
- [ ] Community features
- [ ] Integration with job platforms
- [ ] Mentorship matching
- [ ] Skill development tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Inspired by the Wall Street Journal's design aesthetic
- Built with modern web technologies
- Designed for intentional living and purposeful work

---

**Crafted for Intentional Living** ✨ 