// AI Resume Builder - KodNest Premium Build System
// Project 3 - Step-by-step gated flow

const STEPS = {
    '01-problem': {
        number: 1,
        title: 'Problem Definition',
        description: 'Identify the core problem your AI Resume Builder will solve'
    },
    '02-market': {
        number: 2,
        title: 'Market Research',
        description: 'Analyze the market and competitive landscape'
    },
    '03-architecture': {
        number: 3,
        title: 'Architecture Design',
        description: 'Design the overall system architecture'
    },
    '04-hld': {
        number: 4,
        title: 'High-Level Design',
        description: 'Create high-level design diagrams and specifications'
    },
    '05-lld': {
        number: 5,
        title: 'Low-Level Design',
        description: 'Detail component-level design and interactions'
    },
    '06-build': {
        number: 6,
        title: 'Build Phase',
        description: 'Implement the AI Resume Builder in Lovable'
    },
    '07-test': {
        number: 7,
        title: 'Testing Phase',
        description: 'Test all features and fix bugs'
    },
    '08-ship': {
        number: 8,
        title: 'Deployment',
        description: 'Deploy to production and share your work'
    },
    'proof': {
        number: 9,
        title: 'Proof of Work',
        description: 'Submit all artifacts and links'
    }
};

const STEP_CONTENT = {
    '01-problem': {
        sections: [
            {
                heading: 'The Problem',
                content: 'Modern job seekers struggle with creating professional, ATS-friendly resumes that stand out. They need a tool that combines AI intelligence with professional design to create compelling resumes quickly.'
            },
            {
                heading: 'Your Task',
                list: [
                    'Identify 3-5 specific pain points in the resume creation process',
                    'Research how current solutions fail to address these issues',
                    'Define your unique approach to solving these problems',
                    'Document user personas and their needs'
                ]
            },
            {
                heading: 'Deliverable',
                content: 'Create a problem statement document that clearly articulates the challenges and your proposed solution approach. Upload a screenshot or PDF of your analysis.'
            }
        ],
        lovablePrompt: 'Create a problem analysis document for an AI Resume Builder. Include:\n- 3-5 key user pain points\n- Market gap analysis\n- Proposed solution overview\n- User personas\n\nFormat as a professional document with clear sections.'
    },
    '02-market': {
        sections: [
            {
                heading: 'Market Analysis',
                content: 'Understand the competitive landscape and identify opportunities to differentiate your AI Resume Builder.'
            },
            {
                heading: 'Your Task',
                list: [
                    'Research 5-10 existing resume builders (Zety, Resume.io, Novoresume, etc.)',
                    'Analyze their features, pricing, and user experience',
                    'Identify gaps and opportunities in the market',
                    'Define your unique value proposition',
                    'Determine your target market segment'
                ]
            },
            {
                heading: 'Deliverable',
                content: 'Create a market research report with competitive analysis, feature comparison table, and your differentiation strategy. Upload your findings.'
            }
        ],
        lovablePrompt: 'Create a market research dashboard for resume builders. Include:\n- Competitive analysis table\n- Feature comparison matrix\n- Market opportunity visualization\n- Differentiation strategy section\n\nUse charts and tables for clear visualization.'
    },
    '03-architecture': {
        sections: [
            {
                heading: 'System Architecture',
                content: 'Design the overall architecture of your AI Resume Builder, including frontend, backend, AI integration, and data storage.'
            },
            {
                heading: 'Your Task',
                list: [
                    'Define the technology stack (React/Vue, Node.js/Python, AI APIs)',
                    'Design data flow between components',
                    'Plan AI integration strategy (OpenAI, Claude, custom models)',
                    'Design database schema for user data and resumes',
                    'Plan authentication and security measures'
                ]
            },
            {
                heading: 'Deliverable',
                content: 'Create an architecture diagram showing all system components, their interactions, and data flow. Include technology choices with justifications.'
            }
        ],
        lovablePrompt: 'Create an architecture diagram viewer for an AI Resume Builder. Include:\n- Frontend (React components)\n- Backend (API services)\n- AI Integration (OpenAI/Claude)\n- Database (PostgreSQL/Firebase)\n- Authentication layer\n\nUse a visual diagram with interactive elements.'
    },
    '04-hld': {
        sections: [
            {
                heading: 'High-Level Design',
                content: 'Create detailed high-level design specifications for major system components and user workflows.'
            },
            {
                heading: 'Your Task',
                list: [
                    'Design user flow diagrams for key features',
                    'Define API endpoints and data contracts',
                    'Plan component hierarchy and relationships',
                    'Design state management strategy',
                    'Create wireframes for main screens'
                ]
            },
            {
                heading: 'Deliverable',
                content: 'Produce HLD documentation with user flows, API specifications, component diagrams, and wireframes. Upload comprehensive design docs.'
            }
        ],
        lovablePrompt: 'Create a high-level design documentation page. Include:\n- User flow diagrams for resume creation\n- API endpoint specifications\n- Component hierarchy diagram\n- State management design\n- Wireframe previews\n\nMake it interactive and well-organized.'
    },
    '05-lld': {
        sections: [
            {
                heading: 'Low-Level Design',
                content: 'Detail the implementation specifics for each component, including data structures, algorithms, and detailed specifications.'
            },
            {
                heading: 'Your Task',
                list: [
                    'Define detailed data models and schemas',
                    'Specify component props and state structure',
                    'Design AI prompt templates and response handling',
                    'Plan error handling and validation logic',
                    'Document utility functions and helpers'
                ]
            },
            {
                heading: 'Deliverable',
                content: 'Create LLD documentation with detailed component specifications, data models, and implementation notes. Upload your design specs.'
            }
        ],
        lovablePrompt: 'Create a low-level design specification document. Include:\n- Detailed data models (JSON schemas)\n- Component specifications with props/state\n- AI prompt templates\n- Error handling patterns\n- Code structure outline\n\nFormat with syntax highlighting and examples.'
    },
    '06-build': {
        sections: [
            {
                heading: 'Build Phase',
                content: 'Implement your AI Resume Builder in Lovable. This is where your designs come to life.'
            },
            {
                heading: 'Core Features to Build',
                list: [
                    'User authentication and profile management',
                    'Resume template selection (3-5 professional templates)',
                    'AI-powered content generation for resume sections',
                    'Real-time preview and editing',
                    'Export to PDF functionality',
                    'ATS optimization scoring',
                    'Save and manage multiple resumes'
                ]
            },
            {
                heading: 'Deliverable',
                content: 'Build a functional AI Resume Builder in Lovable. Upload screenshots showing key features working, and share your Lovable project link.'
            }
        ],
        lovablePrompt: 'Build an AI Resume Builder with these features:\n\n1. Authentication (email/social login)\n2. Dashboard showing saved resumes\n3. Template selector (3-5 professional designs)\n4. Resume editor with sections:\n   - Personal info\n   - Summary (AI-generated)\n   - Experience (AI-enhanced descriptions)\n   - Education\n   - Skills\n   - Projects\n5. AI content generation using OpenAI/Claude\n6. Real-time preview\n7. PDF export\n8. ATS score checker\n\nUse modern design, smooth animations, and responsive layout.'
    },
    '07-test': {
        sections: [
            {
                heading: 'Testing Phase',
                content: 'Thoroughly test all features, fix bugs, and ensure the app works smoothly across different scenarios.'
            },
            {
                heading: 'Testing Checklist',
                list: [
                    'Test all user flows end-to-end',
                    'Verify AI content generation works correctly',
                    'Test PDF export with different templates',
                    'Check responsive design on mobile/tablet',
                    'Verify data persistence and state management',
                    'Test edge cases and error handling',
                    'Get feedback from 2-3 test users'
                ]
            },
            {
                heading: 'Deliverable',
                content: 'Document all bugs found and fixed. Upload test results, screenshots of fixes, and user feedback summary.'
            }
        ],
        lovablePrompt: 'Create a test results dashboard showing:\n- Test cases executed\n- Bugs found and fixed\n- User feedback summary\n- Feature completion checklist\n- Performance metrics\n\nInclude before/after screenshots of bug fixes.'
    },
    '08-ship': {
        sections: [
            {
                heading: 'Deployment',
                content: 'Deploy your AI Resume Builder to production and make it accessible to users.'
            },
            {
                heading: 'Deployment Checklist',
                list: [
                    'Deploy to production (Vercel/Netlify/Railway)',
                    'Set up custom domain (optional)',
                    'Configure environment variables and API keys',
                    'Set up error tracking (Sentry)',
                    'Enable analytics (Google Analytics/Plausible)',
                    'Create user documentation',
                    'Push code to GitHub with proper README'
                ]
            },
            {
                heading: 'Deliverable',
                content: 'Share your live deployment URL, GitHub repository link, and deployment documentation. Upload screenshots of the live app.'
            }
        ],
        lovablePrompt: 'Create a deployment documentation page with:\n- Live demo link\n- Setup instructions\n- Environment variables needed\n- Deployment platform details\n- GitHub repository link\n- Screenshots of deployed app\n\nMake it look like professional project documentation.'
    }
};

// State management
let currentStep = '';
let artifacts = {};
let currentArtifact = null;

// Initialize app
function init() {
    const app = document.getElementById('app');

    // Get step from URL for static sites
    // URL format: /rb/step-name
    const pathParts = window.location.pathname.split('/').filter(p => p); // Remove empty strings
    const stepInUrl = pathParts[pathParts.length - 1]; // Get last non-empty segment

    // Validate step exists, otherwise default to first step
    if (STEPS[stepInUrl] || stepInUrl === 'proof') {
        currentStep = stepInUrl;
    } else {
        currentStep = '01-problem';
        // Optional: Update URL to match
        // history.replaceState(null, '', '/rb/01-problem');
    }

    if (currentStep === 'proof') {
        renderProofPage();
    } else {
        renderStepPage();
    }

    loadArtifacts();
}

// Render step page with Premium Layout
function renderStepPage() {
    const stepData = STEPS[currentStep];
    const content = STEP_CONTENT[currentStep];

    const app = document.getElementById('app');
    app.innerHTML = `
        <!-- Top Bar -->
        <div class="top-bar">
            <div class="top-bar-left">AI Resume Builder</div>
            <div class="top-bar-center">Project 3 — Step ${stepData.number} of 8</div>
            <div class="top-bar-right">
                <div class="status-badge in-progress">
                    <span class="dot"></span>
                    <span>In Progress</span>
                </div>
            </div>
        </div>
        
        <!-- Main Layout -->
        <div class="main-layout">
            <!-- Workspace (70%) -->
            <div class="workspace">
                <div class="context-header">
                    <h1>${stepData.title}</h1>
                    <div class="subtitle">${stepData.description}</div>
                </div>
                
                ${renderContent(content)}
                
                <div class="nav-buttons">
                    ${stepData.number > 1 ? `
                        <a href="/rb/${getPreviousStep()}" class="btn btn-secondary">
                            ← Previous Step
                        </a>
                    ` : '<div></div>'}
                    <button id="nextBtn" class="btn btn-primary" disabled>
                        Next Step →
                    </button>
                </div>
            </div>
            
            <!-- Build Panel (30%) -->
            <div class="build-panel">
                <h3>📋 Build in Lovable</h3>
                
                <div class="build-panel-section">
                    <div class="textarea-container">
                        <textarea id="lovablePrompt" readonly>${content.lovablePrompt || 'Prompt will appear here...'}</textarea>
                    </div>
                    <button id="copyPromptBtn" class="btn btn-secondary">
                        📋 Copy This Into Lovable
                    </button>
                </div>
                
                <div class="build-panel-section">
                    <a href="https://lovable.dev" target="_blank" class="btn btn-primary">
                        🚀 Build in Lovable
                    </a>
                </div>
                
                <div class="build-panel-section">
                    <h3>📸 Upload Artifact</h3>
                    <div id="uploadZone" class="upload-zone">
                        <div class="upload-icon">📄</div>
                        <div class="upload-text">Click or drag to upload</div>
                        <div class="upload-hint">Screenshot, PDF, or image</div>
                    </div>
                    <input type="file" id="fileInput" style="display: none;" accept="image/*,.pdf">
                    <div id="filePreview"></div>
                </div>
                
                <div class="btn-group">
                    <button id="workedBtn" class="btn btn-success" disabled>
                        ✓ It Worked
                    </button>
                    <button id="errorBtn" class="btn btn-error" disabled>
                        ✗ Error
                    </button>
                </div>
            </div>
        </div>
    `;

    attachEventListeners();
}

// Render content sections
function renderContent(content) {
    if (!content || !content.sections) return '';

    return content.sections.map(section => `
        <div class="content-section">
            <h2>${section.heading}</h2>
            ${section.content ? `<p>${section.content}</p>` : ''}
            ${section.list ? `
                <ul>
                    ${section.list.map(item => `<li>${item}</li>`).join('')}
                </ul>
            ` : ''}
        </div>
    `).join('');
}

// Render proof page
function renderProofPage() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <!-- Top Bar -->
        <div class="top-bar">
            <div class="top-bar-left">AI Resume Builder</div>
            <div class="top-bar-center">Project 3 — Proof of Work</div>
            <div class="top-bar-right">
                <div class="status-badge">
                    <span class="dot"></span>
                    <span>Review</span>
                </div>
            </div>
        </div>
        
        <!-- Main Layout -->
        <div class="main-layout">
            <div class="workspace" style="flex: 0 0 100%;">
                <div class="proof-container">
                    <div class="context-header">
                        <h1>🏆 Proof of Work</h1>
                        <div class="subtitle">Review your journey and submit your final project</div>
                    </div>
                    
                    <h2 style="margin-bottom: 16px; color: var(--text-primary);">Step Completion Status</h2>
                    <div class="steps-grid">
                        ${renderStepCards()}
                    </div>
                    
                    <div class="submission-section">
                        <h2>📦 Final Submission</h2>
                        <div class="input-group">
                            <label for="lovableLink">Lovable Project Link</label>
                            <input type="url" id="lovableLink" placeholder="https://lovable.dev/projects/...">
                        </div>
                        <div class="input-group">
                            <label for="githubLink">GitHub Repository Link</label>
                            <input type="url" id="githubLink" placeholder="https://github.com/username/ai-resume-builder">
                        </div>
                        <div class="input-group">
                            <label for="deployLink">Live Deployment Link</label>
                            <input type="url" id="deployLink" placeholder="https://your-app.vercel.app">
                        </div>
                        <button id="copySubmissionBtn" class="btn btn-primary" style="margin-top: 16px;">
                            📋 Copy Final Submission
                        </button>
                    </div>
                    
                    <div class="nav-buttons">
                        <a href="/rb/08-ship" class="btn btn-secondary">
                            ← Back to Step 8
                        </a>
                        <button id="submitBtn" class="btn btn-success" disabled>
                            🚀 Submit Project
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    attachProofEventListeners();
}

// Render step cards for proof page
function renderStepCards() {
    return Object.keys(STEPS)
        .filter(key => key !== 'proof')
        .map(key => {
            const step = STEPS[key];
            const artifactKey = `rb_step_${key.split('-')[0]}_artifact`;
            const isCompleted = artifacts[artifactKey];

            return `
                <div class="step-card ${isCompleted ? 'completed' : ''}">
                    <div class="step-number">Step ${step.number}</div>
                    <div class="step-name">${step.title}</div>
                    <div class="step-status">
                        ${isCompleted ? '<span class="check">✓</span> Completed' : '⏳ Pending'}
                    </div>
                </div>
            `;
        }).join('');
}

// Attach event listeners for step page
function attachEventListeners() {
    // Copy prompt button
    const copyPromptBtn = document.getElementById('copyPromptBtn');
    copyPromptBtn?.addEventListener('click', () => {
        const textarea = document.getElementById('lovablePrompt');
        textarea.select();
        document.execCommand('copy');
        showToast('Copied to clipboard!', 'success');
    });

    // Upload zone
    const uploadZone = document.getElementById('uploadZone');
    const fileInput = document.getElementById('fileInput');

    uploadZone?.addEventListener('click', () => fileInput.click());

    uploadZone?.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadZone.style.borderColor = 'var(--primary)';
    });

    uploadZone?.addEventListener('dragleave', () => {
        uploadZone.style.borderColor = 'var(--border)';
    });

    uploadZone?.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadZone.style.borderColor = 'var(--border)';
        if (e.dataTransfer.files.length > 0) {
            handleFileUpload(e.dataTransfer.files[0]);
        }
    });

    fileInput?.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            handleFileUpload(e.target.files[0]);
        }
    });

    // Action buttons
    document.getElementById('workedBtn')?.addEventListener('click', () => {
        saveArtifact('success');
    });

    document.getElementById('errorBtn')?.addEventListener('click', () => {
        saveArtifact('error');
    });

    // Next button
    document.getElementById('nextBtn')?.addEventListener('click', () => {
        const nextStep = getNextStep();
        if (nextStep) {
            window.location.href = `/rb/${nextStep}`;
        }
    });
}

// Attach event listeners for proof page
function attachProofEventListeners() {
    const lovableInput = document.getElementById('lovableLink');
    const githubInput = document.getElementById('githubLink');
    const deployInput = document.getElementById('deployLink');
    const submitBtn = document.getElementById('submitBtn');

    const validateInputs = () => {
        const allFilled = lovableInput.value && githubInput.value && deployInput.value;
        submitBtn.disabled = !allFilled;
    };

    lovableInput?.addEventListener('input', validateInputs);
    githubInput?.addEventListener('input', validateInputs);
    deployInput?.addEventListener('input', validateInputs);

    document.getElementById('copySubmissionBtn')?.addEventListener('click', () => {
        const submission = `
🚀 AI Resume Builder - Final Submission

📦 Project Links:
- Lovable: ${lovableInput.value}
- GitHub: ${githubInput.value}
- Live Demo: ${deployInput.value}

✅ Steps Completed: ${Object.keys(artifacts).length} of 8

Generated: ${new Date().toLocaleString()}
        `.trim();

        navigator.clipboard.writeText(submission);
        showToast('Submission copied to clipboard!', 'success');
    });

    submitBtn?.addEventListener('click', () => {
        showToast('Project submitted successfully! 🎉', 'success');
        setTimeout(() => {
            window.location.href = '/rb/01-problem';
        }, 2000);
    });
}

// Handle file upload
function handleFileUpload(file) {
    const uploadZone = document.getElementById('uploadZone');
    const filePreview = document.getElementById('filePreview');
    const workedBtn = document.getElementById('workedBtn');
    const errorBtn = document.getElementById('errorBtn');

    // Create file reader
    const reader = new FileReader();
    reader.onload = (e) => {
        currentArtifact = {
            name: file.name,
            size: file.size,
            type: file.type,
            data: e.target.result
        };

        // Update UI
        uploadZone.classList.add('has-file');
        filePreview.innerHTML = `
            <div class="file-preview">
                <div class="file-icon">📄</div>
                <div class="file-info">
                    <div class="file-name">${file.name}</div>
                    <div class="file-size">${formatBytes(file.size)}</div>
                </div>
                <button class="file-remove" onclick="removeFile()">×</button>
            </div>
        `;

        // Enable action buttons
        workedBtn.disabled = false;
        errorBtn.disabled = false;

        showToast('File ready to upload', 'success');
    };

    reader.readAsDataURL(file);
}

// Remove file
window.removeFile = function () {
    currentArtifact = null;
    const uploadZone = document.getElementById('uploadZone');
    const filePreview = document.getElementById('filePreview');
    const workedBtn = document.getElementById('workedBtn');
    const errorBtn = document.getElementById('errorBtn');

    uploadZone.classList.remove('has-file');
    filePreview.innerHTML = '';
    workedBtn.disabled = true;
    errorBtn.disabled = true;
};

// Save artifact
async function saveArtifact(status) {
    if (!currentArtifact) {
        showToast('Please upload a file first', 'error');
        return;
    }

    const stepNumber = currentStep.split('-')[0];
    const artifactData = {
        ...currentArtifact,
        status: status,
        timestamp: new Date().toISOString()
    };

    try {
        const response = await fetch(`/api/artifacts/${stepNumber}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(artifactData)
        });

        if (response.ok) {
            artifacts[`rb_step_${stepNumber}_artifact`] = artifactData;
            document.getElementById('nextBtn').disabled = false;

            // Update status badge
            const statusBadge = document.querySelector('.status-badge');
            statusBadge.classList.remove('in-progress');
            statusBadge.classList.add('completed');
            statusBadge.querySelector('span:last-child').textContent = 'Completed';

            showToast('Artifact saved successfully! ✓', 'success');
        } else {
            throw new Error('API not available');
        }
    } catch (error) {
        console.warn('API save failed (expected in static mode):', error);
        // Mock success for static demo & PERSIST to localStorage
        const artifactKey = `rb_step_${stepNumber}_artifact`;
        artifacts[artifactKey] = artifactData;
        localStorage.setItem('rb_artifacts', JSON.stringify(artifacts));

        document.getElementById('nextBtn').disabled = false;

        // Update status badge
        const statusBadge = document.querySelector('.status-badge');
        statusBadge.classList.remove('in-progress');
        statusBadge.classList.add('completed');
        statusBadge.querySelector('span:last-child').textContent = 'Completed';

        showToast('Artifact saved locally! (Static Mode)', 'success');
    }
}

// Load artifacts
async function loadArtifacts() {
    try {
        const response = await fetch('/api/artifacts');
        if (response.ok) {
            artifacts = await response.json();

            // Check if current step is completed
            const stepNumber = currentStep.split('-')[0];
            const artifactKey = `rb_step_${stepNumber}_artifact`;

            if (artifacts[artifactKey] && currentStep !== 'proof') {
                document.getElementById('nextBtn').disabled = false;
                const statusBadge = document.querySelector('.status-badge');
                statusBadge.classList.remove('in-progress');
                statusBadge.classList.add('completed');
                statusBadge.querySelector('span:last-child').textContent = 'Completed';
            }
        } else {
            throw new Error('API not available');
        }
    } catch (error) {
        console.log('API load failed (expected in static mode):', error);

        // Fallback to localStorage
        try {
            const saved = localStorage.getItem('rb_artifacts');
            if (saved) {
                artifacts = JSON.parse(saved);

                // Check if current step is completed
                const stepNumber = currentStep.split('-')[0];
                const artifactKey = `rb_step_${stepNumber}_artifact`;

                if (artifacts[artifactKey] && currentStep !== 'proof') {
                    document.getElementById('nextBtn').disabled = false;
                    const statusBadge = document.querySelector('.status-badge');
                    statusBadge.classList.remove('in-progress');
                    statusBadge.classList.add('completed');
                    statusBadge.querySelector('span:last-child').textContent = 'Completed';
                }
            }
        } catch (e) {
            console.error('Local storage load failed', e);
        }
    }
}

// Navigation helpers
function getNextStep() {
    const stepKeys = Object.keys(STEPS).filter(k => k !== 'proof');
    const currentIndex = stepKeys.indexOf(currentStep);
    if (currentIndex < stepKeys.length - 1) {
        return stepKeys[currentIndex + 1];
    }
    return 'proof';
}

function getPreviousStep() {
    const stepKeys = Object.keys(STEPS).filter(k => k !== 'proof');
    const currentIndex = stepKeys.indexOf(currentStep);
    if (currentIndex > 0) {
        return stepKeys[currentIndex - 1];
    }
    return null;
}

// Utility functions
function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <div class="toast-icon">${type === 'success' ? '✓' : '✗'}</div>
        <div class="toast-content">
            <div class="toast-message">${message}</div>
        </div>
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', init);
