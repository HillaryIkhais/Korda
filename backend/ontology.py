from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime

class ProjectNode(BaseModel):
    """Represents a distinct software engineering initiative or product line."""
    project_id: str = Field(..., description="Unique identifier for the project")
    status: str = Field(..., description="Current status of the project (e.g., active, deprecated)")
    repository_url: Optional[str] = Field(None, description="URL of the project's repository")

class ActorNode(BaseModel):
    """Represents an engineer, product manager, or automated service agent."""
    name: str = Field(..., description="Name of the actor")
    role: str = Field(..., description="Role of the actor (e.g., Lead Engineer, Product Manager)")
    department: Optional[str] = Field(None, description="Department the actor belongs to")

class ArtifactNode(BaseModel):
    """Represents concrete documentation, code snippets, Pull Requests, or Incident Reports."""
    source_uri: str = Field(..., description="URI or path to the artifact source")
    content_hash: Optional[str] = Field(None, description="Hash of the artifact content for versioning")
    created_at: Optional[datetime] = Field(None, description="Timestamp when the artifact was created")

class DecisionNode(BaseModel):
    """The temporal core of Korda 2.0, representing an architectural choice or policy."""
    title: str = Field(..., description="Short title of the decision")
    rationale: str = Field(..., description="Detailed rationale behind the architectural decision")
    valid_from: Optional[datetime] = Field(None, description="Timestamp when this decision became active")
    invalid_at: Optional[datetime] = Field(None, description="Timestamp when this decision was superseded")
    supersedes_decision_title: Optional[str] = Field(None, description="Title of the previous decision this one supersedes")

class ConceptNode(BaseModel):
    """Abstract technologies, frameworks, or methodologies (e.g., 'PostgreSQL', 'Agile')."""
    name: str = Field(..., description="Name of the concept")
    domain: str = Field(..., description="Domain the concept belongs to (e.g., Database, Methodology)")
    description: Optional[str] = Field(None, description="Description of the concept")
