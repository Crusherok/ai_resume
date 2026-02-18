import hashlib
import os
import json
from typing import Dict, Any

from fastapi import FastAPI, APIRouter, Request, Body
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates


def get_file_hash(filepath: str) -> str:
    with open(filepath, "rb") as f:
        return hashlib.md5(f.read()).hexdigest()[:8]


# In-memory storage for artifacts (replace with database in production)
artifacts_store: Dict[str, Any] = {}


def create_app(static_dir: str) -> FastAPI:
    api = APIRouter()
    templates = Jinja2Templates(directory=static_dir)

    @api.get("/health")
    def health():
        return {"ok": True}

    @api.get("/artifacts")
    def get_artifacts():
        return artifacts_store

    @api.post("/artifacts/{step}")
    def save_artifact(step: str, data: Dict[str, Any] = Body(...)):
        artifacts_store[f"rb_step_{step}_artifact"] = data
        return {"ok": True, "step": step}

    @api.get("/artifacts/{step}")
    def get_artifact(step: str):
        key = f"rb_step_{step}_artifact"
        return artifacts_store.get(key, {})

    app = FastAPI()
    app.include_router(api, prefix="/api")

    @app.get("/", response_class=HTMLResponse)
    def index(request: Request):
        css_hash = get_file_hash(os.path.join(static_dir, "styles.css"))
        js_hash = get_file_hash(os.path.join(static_dir, "app.js"))
        return templates.TemplateResponse(
            request, "index.html", {"css_hash": css_hash, "js_hash": js_hash}
        )

    # Resume Builder routes
    @app.get("/rb/{step}", response_class=HTMLResponse)
    def resume_builder_step(request: Request, step: str):
        css_hash = get_file_hash(os.path.join(static_dir, "styles.css"))
        js_hash = get_file_hash(os.path.join(static_dir, "rb.js"))
        return templates.TemplateResponse(
            request, "rb.html", {"css_hash": css_hash, "js_hash": js_hash, "step": step}
        )

    app.mount("/static", StaticFiles(directory=static_dir), name="ui")
    return app
