from fastapi import FastAPI

app = FastAPI(
    title="Neu Benchmark API",
    version="1.0"
)

@app.get("/")
def root():
    return {
        "message": "Neu Benchmark API"
    }

@app.get("/health")
def health():
    return {
        "status": "ok"
    }