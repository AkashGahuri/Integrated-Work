from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Opportunities API",
    description="Personalized Work Discovery Platform API",
    version="0.1.0"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Welcome to Opportunities API"}

@app.get("/health")
async def health_check():
    return {"status": "healthy", "service": "opportunities-api"}

@app.get("/api/opportunities")
async def get_opportunities():
    # Mock data for now
    return {
        "opportunities": [
            {
                "id": 1,
                "title": "Software Engineer",
                "company": "Tech Corp",
                "location": "San Francisco, CA",
                "description": "Build innovative solutions",
                "match_score": 85
            },
            {
                "id": 2,
                "title": "Product Manager",
                "company": "Startup Inc",
                "location": "Remote",
                "description": "Lead product development",
                "match_score": 92
            }
        ]
    } 