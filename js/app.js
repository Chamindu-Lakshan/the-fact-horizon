// ============================================================
// THE FACT HORIZON — CREATOR PACKAGE v1.0
// Main Application Logic & Prompt Generation Engine
// ============================================================

// ── Application State ────────────────────────────────────────
const APP = {
  currentSection: 'home',
  selections: {
    camera: [],
    composition: [],
    cameraMovement: [],
    lighting: [],
    colorGrading: [],
    environment: [],
    music: [],
    soundEffects: [],
    narrator: null,
    subtitleStyle: null,
    qualityPreset: 'Ultra Cinematic 4K',
    negativePreset: 'standard',
    visualStyle: '',
    sceneDescription: '',
    narrationText: '',
    details: ''
  },
  scriptData: {
    title: '',
    topic: '',
    hook: '',
    question: '',
    context: '',
    explanation: '',
    visualNotes: '',
    narration: '',
    ending: '',
    cta: ''
  },
  scenes: [],
  promptHistory: [],
  checkState: {}
};

// ── Navigation ───────────────────────────────────────────────
const NAV_ITEMS = [
  { section: 'home',           icon: '🏠', label: 'Dashboard',          num: '' },
  { section: 'prompt-builder', icon: '🎬', label: 'Prompt Builder',     num: '' },
  { section: 'divider-start',  type: 'divider', label: 'LIBRARIES' },
  { section: 'camera',         icon: '🎥', label: 'Camera Library',     num: '4' },
  { section: 'lighting',       icon: '💡', label: 'Lighting Library',   num: '6' },
  { section: 'color',          icon: '🎨', label: 'Color Grading',      num: '7' },
  { section: 'environment',    icon: '🌍', label: 'Environment Library', num: '8' },
  { section: 'audio',          icon: '🎵', label: 'Audio Library',      num: '9' },
  { section: 'narrator',       icon: '🎙', label: 'Narrator Styles',    num: '10' },
  { section: 'divider-mid',    type: 'divider', label: 'CREATION' },
  { section: 'script',         icon: '✍️', label: 'Script Writer',      num: '3' },
  { section: 'storyboard',     icon: '🎞', label: 'Storyboard',         num: '4' },
  { section: 'psychology',     icon: '🧠', label: 'Psychology',         num: '13' },
  { section: 'divider-end',    type: 'divider', label: 'PRODUCTION' },
  { section: 'thumbnails',     icon: '🖼', label: 'Thumbnail Library',  num: '15' },
  { section: 'seo',            icon: '📈', label: 'YouTube SEO Kit',    num: '16' },
  { section: 'planner',        icon: '📅', label: 'Content Planner',    num: '17' },
  { section: 'quality',        icon: '✅', label: 'Quality Checklist',   num: '18' },
];

// ── Initialize App ───────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildSidebar();
  buildAllSections();
  navigateTo('home');
});

// ── Sidebar Builder ──────────────────────────────────────────
function buildSidebar() {
  const nav = document.getElementById('sidebar-nav');
  let html = '';
  let inSection = false;

  NAV_ITEMS.forEach(item => {
    if (item.type === 'divider') {
      if (inSection) html += '</div>';
      html += `<div class="nav-section"><div class="nav-section-title">${item.label}</div>`;
      inSection = true;
    } else {
      html += `
        <div class="nav-item" data-section="${item.section}" onclick="navigateTo('${item.section}')">
          <span class="nav-item-icon">${item.icon}</span>
          <span>${item.label}</span>
          ${item.num ? `<span class="nav-item-num">${item.num}</span>` : ''}
        </div>`;
    }
  });
  if (inSection) html += '</div>';

  nav.innerHTML = html;
}

// ── Navigation Handler ───────────────────────────────────────
function navigateTo(section) {
  APP.currentSection = section;

  // Update sidebar
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.section === section);
  });

  // Update content
  document.querySelectorAll('.section-view').forEach(el => {
    el.classList.toggle('active', el.id === `section-${section}`);
  });

  // Update header
  const titles = {
    'home': 'Dashboard',
    'prompt-builder': '🎬 Prompt Builder',
    'camera': '🎥 Camera Library',
    'lighting': '💡 Lighting Library',
    'color': '🎨 Color Grading Library',
    'environment': '🌍 Environment Library',
    'audio': '🎵 Audio Library',
    'narrator': '🎙 Narrator Styles',
    'script': '✍️ Script Writer',
    'storyboard': '🎞 Storyboard System',
    'psychology': '🧠 Psychology Library',
    'thumbnails': '🖼 Thumbnail Library',
    'seo': '📈 YouTube SEO Kit',
    'planner': '📅 Content Planner',
    'quality': '✅ Quality Checklist',
  };

  document.getElementById('header-title').textContent = titles[section] || 'Dashboard';

  // Scroll to top
  document.querySelector('.content-scroll').scrollTop = 0;
}

// ── Build All Sections ───────────────────────────────────────
function buildAllSections() {
  const container = document.getElementById('content-area');
  container.innerHTML = '';

  container.innerHTML += buildHomeSection();
  container.innerHTML += buildPromptBuilderSection();
  container.innerHTML += buildCameraSection();
  container.innerHTML += buildLightingSection();
  container.innerHTML += buildColorSection();
  container.innerHTML += buildEnvironmentSection();
  container.innerHTML += buildAudioSection();
  container.innerHTML += buildNarratorSection();
  container.innerHTML += buildScriptSection();
  container.innerHTML += buildStoryboardSection();
  container.innerHTML += buildPsychologySection();
  container.innerHTML += buildThumbnailSection();
  container.innerHTML += buildSEOSection();
  container.innerHTML += buildPlannerSection();
  container.innerHTML += buildQualitySection();
}

// ── HOME SECTION ─────────────────────────────────────────────
function buildHomeSection() {
  return `
    <div class="section-view" id="section-home">
      <div class="hero-section">
        <h2>The Fact Horizon</h2>
        <p>Cinematic AI Video Prompt Generator — Your complete production framework for creating Hollywood-level educational documentaries with AI video tools.</p>
        <div class="hero-stats">
          <div class="hero-stat">
            <div class="hero-stat-num">200+</div>
            <div class="hero-stat-label">Shot Templates</div>
          </div>
          <div class="hero-stat">
            <div class="hero-stat-num">20</div>
            <div class="hero-stat-label">Lighting Presets</div>
          </div>
          <div class="hero-stat">
            <div class="hero-stat-num">19</div>
            <div class="hero-stat-label">Color Grades</div>
          </div>
          <div class="hero-stat">
            <div class="hero-stat-num">28</div>
            <div class="hero-stat-label">Environments</div>
          </div>
        </div>
      </div>

      <div class="quick-actions">
        <div class="quick-action" onclick="navigateTo('prompt-builder')">
          <div class="quick-action-icon">🎬</div>
          <h3>Prompt Builder</h3>
          <p>Build cinematic AI video prompts by combining modules</p>
        </div>
        <div class="quick-action" onclick="navigateTo('script')">
          <div class="quick-action-icon">✍️</div>
          <h3>Script Writer</h3>
          <p>Structure your documentary scripts with proven formulas</p>
        </div>
        <div class="quick-action" onclick="navigateTo('storyboard')">
          <div class="quick-action-icon">🎞</div>
          <h3>Storyboard</h3>
          <p>Plan every scene with cinematic detail</p>
        </div>
      </div>

      <div class="grid-3">
        <div class="card">
          <div class="card-title"><span class="icon">🎯</span> Storytelling Formula</div>
          <div style="margin-top: 12px;">
            ${LIBRARIES.storytellingBeats.map((beat, i) => `
              <div style="display:flex;align-items:center;gap:10px;padding:6px 0;font-size:0.82rem;">
                <span style="color:var(--accent-light);font-weight:700;min-width:20px;">${i + 1}.</span>
                <span style="color:var(--text-primary);font-weight:600;">${beat.name}</span>
                <span style="color:var(--text-muted);font-size:0.72rem;margin-left:auto;">${beat.timing}</span>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="card">
          <div class="card-title"><span class="icon">📡</span> Supported AI Tools</div>
          <div style="margin-top: 16px;">
            ${['Google Veo 3', 'OpenAI Sora', 'Runway Gen-3', 'Kling AI', 'Pika Labs', 'Luma Dream Machine', 'Stable Video Diffusion'].map(tool => `
              <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--border);font-size:0.85rem;">
                <span style="color:var(--green);">✓</span>
                <span>${tool}</span>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="card">
          <div class="card-title"><span class="icon">⚙️</span> Quick Settings</div>
          <div style="margin-top: 16px;">
            <div class="form-group">
              <label class="form-label">Quality Preset</label>
              <select class="form-select" onchange="APP.selections.qualityPreset=this.value">
                ${Object.keys(LIBRARIES.qualityPresets).map(k => `<option value="${k}" ${k === 'Ultra Cinematic 4K' ? 'selected' : ''}>${k}</option>`).join('')}
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Negative Prompt Preset</label>
              <select class="form-select" onchange="APP.selections.negativePreset=this.value">
                ${Object.keys(NEGATIVE_PROMPTS).map(k => `<option value="${k}">${k}</option>`).join('')}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

// ── PROMPT BUILDER SECTION ───────────────────────────────────
function buildPromptBuilderSection() {
  return `
    <div class="section-view" id="section-prompt-builder">
      <div class="section-header">
        <h2>🎬 Prompt Builder</h2>
        <p>Combine modules from the library to generate cinematic prompts for AI video tools. Select components below, then generate your prompt.</p>
      </div>

      <div class="quick-gen">
        <h3>⚡ Quick Generate</h3>
        <p>Describe your scene in plain English and get a structured prompt instantly.</p>
        <div class="form-group">
          <label class="form-label">Describe Your Scene</label>
          <textarea class="form-textarea" id="quick-scene" rows="3" placeholder="A scientist looking through a microscope at glowing cells in a dark laboratory..."></textarea>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Target AI Tool</label>
            <select class="form-select" id="quick-tool">
              <option value="veo">Google Veo 3</option>
              <option value="sora">OpenAI Sora</option>
              <option value="generic">Generic / Other</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Video Style</label>
            <select class="form-select" id="quick-style">
              <option value="documentary">Documentary</option>
              <option value="cinematic">Cinematic</option>
              <option value="scientific">Scientific</option>
              <option value="dramatic">Dramatic</option>
              <option value="educational">Educational</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Additional Details (optional)</label>
          <input class="form-input" id="quick-details" placeholder="8K, slow motion, anamorphic lens, specific colors...">
        </div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;">
          <button class="btn btn-gold" onclick="quickGenerate()">⚡ Generate Prompt</button>
          <button class="btn btn-secondary" onclick="quickGenerateAll()">🔄 Generate for All Tools</button>
        </div>
      </div>

      <div class="divider"></div>

      <h3 style="font-size:1.1rem;font-weight:700;margin-bottom:18px;">🧩 Module Selector</h3>
      <p style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:20px;">Select components from each library to build a custom modular prompt.</p>

      <div class="form-row">
        <div class="form-group">
          <label class="form-label">🎥 Camera Shot</label>
          <select class="form-select" id="pb-camera" multiple size="5" onchange="updateSelectionDisplay()">
            ${Object.keys(LIBRARIES.camera).map(k => `<option value="${k}">${k}</option>`).join('')}
          </select>
          <div style="font-size:0.72rem;color:var(--text-muted);margin-top:4px;">Hold Ctrl to select multiple</div>
        </div>
        <div class="form-group">
          <label class="form-label">🎬 Camera Movement</label>
          <select class="form-select" id="pb-movement" multiple size="5" onchange="updateSelectionDisplay()">
            ${Object.keys(LIBRARIES.cameraMovement).map(k => `<option value="${k}">${k}</option>`).join('')}
          </select>
          <div style="font-size:0.72rem;color:var(--text-muted);margin-top:4px;">Hold Ctrl to select multiple</div>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label class="form-label">📐 Composition</label>
          <select class="form-select" id="pb-composition" onchange="updateSelectionDisplay()">
            <option value="">-- Select Composition --</option>
            ${Object.keys(LIBRARIES.composition).map(k => `<option value="${k}">${k}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">💡 Lighting</label>
          <select class="form-select" id="pb-lighting" onchange="updateSelectionDisplay()">
            <option value="">-- Select Lighting --</option>
            ${Object.keys(LIBRARIES.lighting).map(k => `<option value="${k}">${k}</option>`).join('')}
          </select>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label class="form-label">🎨 Color Grading</label>
          <select class="form-select" id="pb-color" onchange="updateSelectionDisplay()">
            <option value="">-- Select Color Grade --</option>
            ${Object.keys(LIBRARIES.colorGrading).map(k => `<option value="${k}">${k}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">🌍 Environment</label>
          <select class="form-select" id="pb-environment" onchange="updateSelectionDisplay()">
            <option value="">-- Select Environment --</option>
            ${Object.keys(LIBRARIES.environments).map(k => `<option value="${k}">${k}</option>`).join('')}
          </select>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label class="form-label">🎵 Background Music</label>
          <select class="form-select" id="pb-music" onchange="updateSelectionDisplay()">
            <option value="">-- Select Music Style --</option>
            ${Object.keys(LIBRARIES.music).map(k => `<option value="${k}">${k}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">🔊 Sound Effects</label>
          <select class="form-select" id="pb-sfx" onchange="updateSelectionDisplay()">
            <option value="">-- Select Sound Effects --</option>
            ${Object.keys(LIBRARIES.soundEffects).map(k => `<option value="${k}">${k}</option>`).join('')}
          </select>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label class="form-label">🎙 Narrator</label>
          <select class="form-select" id="pb-narrator" onchange="updateSelectionDisplay()">
            <option value="">-- Select Narrator --</option>
            ${Object.keys(LIBRARIES.narrators).map(k => `<option value="${k}">${k}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">💬 Subtitle Style</label>
          <select class="form-select" id="pb-subtitle" onchange="updateSelectionDisplay()">
            <option value="">-- Select Subtitle Style --</option>
            ${Object.keys(LIBRARIES.subtitles).map(k => `<option value="${k}">${k}</option>`).join('')}
          </select>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">📝 Additional Visual Details</label>
        <textarea class="form-textarea" id="pb-details" rows="2" placeholder="Particles floating, lens flare, dust motes in light, steam rising..."></textarea>
      </div>

      <div id="pb-selection-summary" class="selection-summary" style="display:none;">
        <h4>📋 Current Selection</h4>
        <div class="summary-items" id="pb-summary-items"></div>
      </div>

      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:24px;">
        <button class="btn btn-gold" onclick="buildModularPrompt('veo')">🎬 Generate Veo Prompt</button>
        <button class="btn btn-primary" onclick="buildModularPrompt('sora')">🤖 Generate Sora Prompt</button>
        <button class="btn btn-secondary" onclick="buildModularPrompt('scene')">🎞 Scene Builder Prompt</button>
        <button class="btn btn-ghost" onclick="clearModularSelections()">🗑 Clear All</button>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-title"><span class="icon">📄</span> Generated Prompt</div>
          <div style="display:flex;gap:8px;">
            <button class="btn btn-sm btn-secondary" onclick="copyPrompt('modular-output')">📋 Copy</button>
            <button class="btn btn-sm btn-ghost" onclick="downloadPrompt('modular-output')">💾 Download</button>
          </div>
        </div>
        <div class="prompt-output" id="modular-output" style="min-height:120px;">
          <span style="color:var(--text-muted);">Select modules above and click "Generate" to create your prompt...</span>
        </div>
      </div>
    </div>`;
}

// ── CAMERA SECTION ───────────────────────────────────────────
function buildCameraSection() {
  const cameraKeys = Object.keys(LIBRARIES.camera);
  const compKeys = Object.keys(LIBRARIES.composition);
  const moveKeys = Object.keys(LIBRARIES.cameraMovement);

  return `
    <div class="section-view" id="section-camera">
      <div class="section-header">
        <h2>🎥 Camera Library</h2>
        <p>Hollywood-level camera shot types, composition rules, and movement patterns. Click any item to copy its prompt description.</p>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-title"><span class="icon">📷</span> Camera Shot Types</div>
          <span class="result-count">${cameraKeys.length} shots</span>
        </div>
        <div class="chip-grid">
          ${cameraKeys.map(k => `
            <div class="chip" onclick="copyLibraryItem('camera', '${k.replace(/'/g, "\\'")}')" title="${LIBRARIES.camera[k]}">
              <span class="chip-icon">📷</span> ${k}
            </div>
          `).join('')}
        </div>
      </div>

      <div class="grid-2">
        <div class="card">
          <div class="card-header">
            <div class="card-title"><span class="icon">📐</span> Composition Rules</div>
            <span class="result-count">${compKeys.length}</span>
          </div>
          <div class="chip-grid">
            ${compKeys.map(k => `
              <div class="chip" onclick="copyLibraryItem('composition', '${k.replace(/'/g, "\\'")}')" title="${LIBRARIES.composition[k]}">
                ${k}
              </div>
            `).join('')}
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <div class="card-title"><span class="icon">🎬</span> Camera Movements</div>
            <span class="result-count">${moveKeys.length}</span>
          </div>
          <div class="chip-grid">
            ${moveKeys.map(k => `
              <div class="chip" onclick="copyLibraryItem('cameraMovement', '${k.replace(/'/g, "\\'")}')" title="${LIBRARIES.cameraMovement[k]}">
                ${k}
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-title"><span class="icon">🔍</span> Preview</div>
        </div>
        <div class="prompt-output" id="camera-preview">
          <span style="color:var(--text-muted);">Click any camera item above to see its full prompt description here...</span>
        </div>
      </div>
    </div>`;
}

// ── LIGHTING SECTION ─────────────────────────────────────────
function buildLightingSection() {
  return `
    <div class="section-view" id="section-lighting">
      <div class="section-header">
        <h2>💡 Lighting Library</h2>
        <p>20 professional lighting presets for documentary filmmaking. Each preset includes intensity, direction, contrast, shadows, and atmosphere details.</p>
      </div>

      <div class="chip-grid" style="margin-bottom:20px;">
        ${Object.keys(LIBRARIES.lighting).map(k => `
          <div class="chip" onclick="selectLightingPreview('${k.replace(/'/g, "\\'")}')" id="light-chip-${k.replace(/\s+/g, '-').replace(/'/g, '')}">
            💡 ${k}
          </div>
        `).join('')}
      </div>

      <div class="grid-2">
        <div class="card">
          <div class="card-header">
            <div class="card-title"><span class="icon">📋</span> Lighting Details</div>
          </div>
          <div id="lighting-detail">
            <div class="empty-state">
              <div class="empty-state-icon">💡</div>
              <h3>Select a Lighting Preset</h3>
              <p>Click any preset above to see full details</p>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <div class="card-title"><span class="icon">📄</span> Prompt Text</div>
            <button class="btn btn-sm btn-secondary" onclick="copyText('lighting-prompt')">📋 Copy</button>
          </div>
          <div class="prompt-output" id="lighting-prompt">
            <span style="color:var(--text-muted);">Select a lighting preset to generate its prompt...</span>
          </div>
        </div>
      </div>
    </div>`;
}

// ── COLOR SECTION ────────────────────────────────────────────
function buildColorSection() {
  return `
    <div class="section-view" id="section-color">
      <div class="section-header">
        <h2>🎨 Color Grading Library</h2>
        <p>19 professional color grading presets inspired by top documentary brands and cinematic styles.</p>
      </div>

      <div class="chip-grid" style="margin-bottom:20px;">
        ${Object.keys(LIBRARIES.colorGrading).map(k => `
          <div class="chip" onclick="selectColorPreview('${k.replace(/'/g, "\\'")}')">
            🎨 ${k}
          </div>
        `).join('')}
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-title"><span class="icon">📄</span> Color Grade Prompt</div>
          <button class="btn btn-sm btn-secondary" onclick="copyText('color-prompt')">📋 Copy</button>
        </div>
        <div class="prompt-output" id="color-prompt">
          <span style="color:var(--text-muted);">Click a color grade above to see its prompt...</span>
        </div>
      </div>
    </div>`;
}

// ── ENVIRONMENT SECTION ──────────────────────────────────────
function buildEnvironmentSection() {
  return `
    <div class="section-view" id="section-environment">
      <div class="section-header">
        <h2>🌍 Environment Library</h2>
        <p>28 detailed environment descriptions for every type of documentary scene, from microscopic to cosmic scale.</p>
      </div>

      <div class="chip-grid" style="margin-bottom:20px;">
        ${Object.keys(LIBRARIES.environments).map(k => `
          <div class="chip" onclick="selectEnvironmentPreview('${k.replace(/'/g, "\\'")}')">
            🌍 ${k}
          </div>
        `).join('')}
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-title"><span class="icon">📄</span> Environment Prompt</div>
          <button class="btn btn-sm btn-secondary" onclick="copyText('env-prompt')">📋 Copy</button>
        </div>
        <div class="prompt-output" id="env-prompt">
          <span style="color:var(--text-muted);">Click an environment above to see its prompt...</span>
        </div>
      </div>
    </div>`;
}

// ── AUDIO SECTION ────────────────────────────────────────────
function buildAudioSection() {
  return `
    <div class="section-view" id="section-audio">
      <div class="section-header">
        <h2>🎵 Audio Library</h2>
        <p>Background music themes and sound effect presets for documentary production.</p>
      </div>

      <div class="grid-2">
        <div class="card">
          <div class="card-header">
            <div class="card-title"><span class="icon">🎶</span> Background Music</div>
            <span class="result-count">${Object.keys(LIBRARIES.music).length} styles</span>
          </div>
          <div class="chip-grid">
            ${Object.keys(LIBRARIES.music).map(k => `
              <div class="chip" onclick="copyLibraryItem('music', '${k.replace(/'/g, "\\'")}')">
                🎵 ${k}
              </div>
            `).join('')}
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <div class="card-title"><span class="icon">🔊</span> Sound Effects</div>
            <span class="result-count">${Object.keys(LIBRARIES.soundEffects).length} effects</span>
          </div>
          <div class="chip-grid">
            ${Object.keys(LIBRARIES.soundEffects).map(k => `
              <div class="chip" onclick="copyLibraryItem('soundEffects', '${k.replace(/'/g, "\\'")}')">
                🔊 ${k}
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-title"><span class="icon">📄</span> Audio Prompt</div>
          <button class="btn btn-sm btn-secondary" onclick="copyText('audio-prompt')">📋 Copy</button>
        </div>
        <div class="prompt-output" id="audio-prompt">
          <span style="color:var(--text-muted);">Click an audio item above to see its description...</span>
        </div>
      </div>
    </div>`;
}

// ── NARRATOR SECTION ─────────────────────────────────────────
function buildNarratorSection() {
  return `
    <div class="section-view" id="section-narrator">
      <div class="section-header">
        <h2>🎙 Narrator Styles</h2>
        <p>8 distinct narrator personalities with speaking speed, emotion, pause patterns, and emphasis rules.</p>
      </div>

      <div class="grid-2">
        ${Object.entries(LIBRARIES.narrators).map(([k, v]) => `
          <div class="card" style="cursor:pointer;" onclick="selectNarratorPreview('${k.replace(/'/g, "\\'")}')">
            <div class="card-title"><span class="icon">🎙</span> ${k}</div>
            <p style="font-size:0.82rem;color:var(--text-secondary);margin-top:8px;">${v.style.substring(0, 100)}...</p>
            <div style="display:flex;gap:6px;margin-top:10px;flex-wrap:wrap;">
              <span class="tag tag-accent">${v.speed}</span>
              <span class="tag tag-gold">${v.emotion}</span>
              <span class="tag tag-blue">${v.pronunciation}</span>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="card" style="margin-top:20px;">
        <div class="card-header">
          <div class="card-title"><span class="icon">📄</span> Narrator Details</div>
          <button class="btn btn-sm btn-secondary" onclick="copyText('narrator-prompt')">📋 Copy</button>
        </div>
        <div class="prompt-output" id="narrator-prompt">
          <span style="color:var(--text-muted);">Click a narrator style above to see full details...</span>
        </div>
      </div>
    </div>`;
}

// ── SCRIPT SECTION ───────────────────────────────────────────
function buildScriptSection() {
  const narrationKeys = Object.keys(LIBRARIES.narrationStyles);
  return `
    <div class="section-view" id="section-script">
      <div class="section-header">
        <h2>✍️ Script Writer</h2>
        <p>Structure your documentary scripts with proven formulas. Build every section from hook to CTA.</p>
      </div>

      <div class="info-box">
        <span class="info-box-icon">💡</span>
        <div class="info-box-text">
          <strong>Pro Tip:</strong> Every script should follow this structure: Hook → Question → Context → Explanation → Visual Notes → Narration → Ending → CTA. The storytelling formula ensures maximum viewer retention.
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-title"><span class="icon">📋</span> Script Structure</div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Video Title</label>
            <input class="form-input" id="script-title" placeholder="The Mystery of Dark Matter" onchange="APP.scriptData.title=this.value">
          </div>
          <div class="form-group">
            <label class="form-label">Topic / Category</label>
            <input class="form-input" id="script-topic" placeholder="Space / Physics" onchange="APP.scriptData.topic=this.value">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">🪝 Hook (first 5 seconds)</label>
          <textarea class="form-textarea" id="script-hook" rows="2" placeholder="Did you know that 85% of the universe is made of something we can't see, touch, or measure?" onchange="APP.scriptData.hook=this.value"></textarea>
        </div>
        <div class="form-group">
          <label class="form-label">❓ Core Question</label>
          <textarea class="form-textarea" id="script-question" rows="2" placeholder="What is dark matter, and why can't we find it?" onchange="APP.scriptData.question=this.value"></textarea>
        </div>
        <div class="form-group">
          <label class="form-label">🌍 Context / Background</label>
          <textarea class="form-textarea" id="script-context" rows="3" placeholder="Set the scene. Give historical or scientific context that makes the topic relatable..." onchange="APP.scriptData.context=this.value"></textarea>
        </div>
        <div class="form-group">
          <label class="form-label">🔬 Explanation / Deep Dive</label>
          <textarea class="form-textarea" id="script-explanation" rows="4" placeholder="The core scientific explanation. Break complex concepts into simple, visual language..." onchange="APP.scriptData.explanation=this.value"></textarea>
        </div>
        <div class="form-group">
          <label class="form-label">🎥 Visual Notes</label>
          <textarea class="form-textarea" id="script-visual" rows="2" placeholder="Drone over galaxy, macro shot of detector, split-screen comparison..." onchange="APP.scriptData.visualNotes=this.value"></textarea>
        </div>
        <div class="form-group">
          <label class="form-label">🎙 Narration Text</label>
          <textarea class="form-textarea" id="script-narration" rows="4" placeholder="Write the actual narration that will be spoken over the visuals..." onchange="APP.scriptData.narration=this.value"></textarea>
        </div>
        <div class="form-group">
          <label class="form-label">🎯 Ending / Mind-Blow</label>
          <textarea class="form-textarea" id="script-ending" rows="2" placeholder="The final revelation that reframes everything the viewer just learned..." onchange="APP.scriptData.ending=this.value"></textarea>
        </div>
        <div class="form-group">
          <label class="form-label">📢 Call To Action</label>
          <textarea class="form-textarea" id="script-cta" rows="2" placeholder="If this blew your mind, subscribe and hit the bell..." onchange="APP.scriptData.cta=this.value"></textarea>
        </div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;">
          <button class="btn btn-gold" onclick="generateFullScript()">📄 Generate Full Script</button>
          <button class="btn btn-secondary" onclick="copyText('script-output')">📋 Copy Script</button>
          <button class="btn btn-ghost" onclick="clearScriptForm()">🗑 Clear</button>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-title"><span class="icon">📄</span> Generated Script</div>
        </div>
        <div class="prompt-output" id="script-output">
          <span style="color:var(--text-muted);">Fill in the sections above and click "Generate Full Script"...</span>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-title"><span class="icon">🎯</span> Opening Hooks — Templates</div>
        </div>
        <div class="chip-grid" style="margin-bottom:16px;">
          ${narrationKeys.map(k => `
            <div class="chip" onclick="showHookTemplate('${k.replace(/'/g, "\\'")}')">
              🎯 ${k}
            </div>
          `).join('')}
        </div>
        <div class="prompt-output" id="hook-preview" style="min-height:60px;">
          <span style="color:var(--text-muted);">Click a hook template above to preview...</span>
        </div>
      </div>
    </div>`;
}

// ── STORYBOARD SECTION ───────────────────────────────────────
function buildStoryboardSection() {
  return `
    <div class="section-view" id="section-storyboard">
      <div class="section-header">
        <h2>🎞 Storyboard System</h2>
        <p>Plan every scene with cinematic detail. Follow the storytelling beats for maximum viewer retention.</p>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-title"><span class="icon">📊</span> Storytelling Beats Timeline</div>
        </div>
        <div class="storyboard-timeline">
          ${LIBRARIES.storytellingBeats.map((beat, i) => {
            const intensityClass = beat.intensity >= 10 ? 'intensity-max' : beat.intensity >= 8 ? 'intensity-high' : beat.intensity >= 7 ? 'intensity-medium' : 'intensity-low';
            return `
            <div class="storyboard-beat">
              <div class="beat-marker ${i === 0 || beat.intensity >= 10 ? 'active' : ''}">${i + 1}</div>
              <div class="beat-content">
                <div class="beat-header">
                  <span class="beat-name">${beat.name}</span>
                  <span class="beat-timing">${beat.timing}</span>
                </div>
                <div class="beat-purpose">${beat.purpose}</div>
                <div class="intensity-bar">
                  <div class="intensity-fill ${intensityClass}" style="width:${beat.intensity * 10}%"></div>
                </div>
              </div>
            </div>`;
          }).join('')}
        </div>
      </div>

      <div class="divider"></div>

      <div class="card">
        <div class="card-header">
          <div class="card-title"><span class="icon">🎬</span> Scene Builder</div>
          <button class="btn btn-sm btn-secondary" onclick="addScene()">+ Add Scene</button>
        </div>
        <div id="scenes-container">
          ${buildSceneForm(1)}
        </div>
        <div style="display:flex;gap:10px;margin-top:20px;flex-wrap:wrap;">
          <button class="btn btn-gold" onclick="generateStoryboard()">🎞 Generate Storyboard</button>
          <button class="btn btn-secondary" onclick="copyText('storyboard-output')">📋 Copy</button>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-title"><span class="icon">📄</span> Storyboard Output</div>
        </div>
        <div class="prompt-output" id="storyboard-output">
          <span style="color:var(--text-muted);">Add scenes and click "Generate Storyboard"...</span>
        </div>
      </div>
    </div>`;
}

function buildSceneForm(num) {
  return `
    <div class="scene-form" id="scene-${num}" style="background:var(--bg-tertiary);border:1px solid var(--border);border-radius:var(--radius-md);padding:18px;margin-bottom:12px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;">
        <h4 style="font-size:0.95rem;font-weight:700;color:var(--accent-light);">Scene ${num}</h4>
        ${num > 1 ? `<button class="btn btn-sm btn-ghost" onclick="removeScene(${num})">✕ Remove</button>` : ''}
      </div>
      <div class="form-row-3">
        <div class="form-group">
          <label class="form-label">Scene Title</label>
          <input class="form-input scene-title" data-scene="${num}" placeholder="The Discovery">
        </div>
        <div class="form-group">
          <label class="form-label">Duration</label>
          <input class="form-input scene-duration" data-scene="${num}" placeholder="30 seconds">
        </div>
        <div class="form-group">
          <label class="form-label">Camera</label>
          <select class="form-select scene-camera" data-scene="${num}">
            <option value="">-- Select --</option>
            ${Object.keys(LIBRARIES.camera).map(k => `<option value="${k}">${k}</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Lighting</label>
          <select class="form-select scene-lighting" data-scene="${num}">
            <option value="">-- Select --</option>
            ${Object.keys(LIBRARIES.lighting).map(k => `<option value="${k}">${k}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Environment</label>
          <select class="form-select scene-environment" data-scene="${num}">
            <option value="">-- Select --</option>
            ${Object.keys(LIBRARIES.environments).map(k => `<option value="${k}">${k}</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Narration</label>
        <textarea class="form-textarea scene-narration" data-scene="${num}" rows="2" placeholder="What the narrator says during this scene..."></textarea>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Emotion</label>
          <input class="form-input scene-emotion" data-scene="${num}" placeholder="Wonder, fear, excitement...">
        </div>
        <div class="form-group">
          <label class="form-label">Transition</label>
          <select class="form-select scene-transition" data-scene="${num}">
            ${Object.keys(TRANSITIONS).map(k => `<option value="${k}">${k}</option>`).join('')}
          </select>
        </div>
      </div>
    </div>`;
}

// ── PSYCHOLOGY SECTION ───────────────────────────────────────
function buildPsychologySection() {
  const psychEntries = Object.entries(LIBRARIES.psychology);
  return `
    <div class="section-view" id="section-psychology">
      <div class="section-header">
        <h2>🧠 Psychology Library</h2>
        <p>Viewer retention techniques based on cognitive psychology. Apply these principles to keep viewers watching until the end.</p>
      </div>

      <div class="info-box">
        <span class="info-box-icon">🧠</span>
        <div class="info-box-text">
          <strong>Key Insight:</strong> The average YouTube viewer decides within 7 seconds whether to keep watching. Use these techniques to create an irresistible viewing experience that hooks attention and never lets go.
        </div>
      </div>

      <div class="grid-2">
        ${psychEntries.map(([k, v]) => `
          <div class="psych-card">
            <h4>🧠 ${k}</h4>
            <p>${v}</p>
          </div>
        `).join('')}
      </div>
    </div>`;
}

// ── THUMBNAIL SECTION ────────────────────────────────────────
function buildThumbnailSection() {
  const thumbImages = {
    "Space":      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=640&h=360&fit=crop&q=80",
    "History":    "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=640&h=360&fit=crop&q=80",
    "Science":    "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=640&h=360&fit=crop&q=80",
    "Technology": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=640&h=360&fit=crop&q=80",
    "Human Body": "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=640&h=360&fit=crop&q=80",
    "What If":    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=640&h=360&fit=crop&q=80",
    "Nature":     "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=640&h=360&fit=crop&q=80",
    "Mystery":    "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=640&h=360&fit=crop&q=80"
  };

  const gradients = {
    "Space":      "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
    "History":    "linear-gradient(135deg, #3e2723, #795548, #4e342e)",
    "Science":    "linear-gradient(135deg, #e3f2fd, #bbdefb, #90caf9)",
    "Technology": "linear-gradient(135deg, #0a0a0f, #1a1a3e, #0f0f2e)",
    "Human Body": "linear-gradient(135deg, #1a237e, #0d47a1, #01579b)",
    "What If":    "linear-gradient(135deg, #b71c1c, #880e4f, #4a148c)",
    "Nature":     "linear-gradient(135deg, #1b5e20, #2e7d32, #388e3c)",
    "Mystery":    "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)"
  };

  return `
    <div class="section-view" id="section-thumbnails">
      <div class="section-header">
        <h2>🖼 Thumbnail Library</h2>
        <p>8 thumbnail templates with layout guides, color schemes, and text placement rules for maximum click-through rate.</p>
      </div>

      <div class="grid-2">
        ${Object.entries(LIBRARIES.thumbnails).map(([k, v]) => `
          <div class="thumb-card" onclick="selectThumbnailPreview('${k.replace(/'/g, "\\'")}')">
            <div class="thumb-preview" style="background-image:url('${thumbImages[k] || ''}'), ${gradients[k] || 'var(--bg-tertiary)'};">
              <span class="thumb-label">${k}</span>
            </div>
            <h4>${k}</h4>
            <div class="thumb-info">
              <strong>Layout:</strong> ${v.layout}
              <br><strong>Colors:</strong> ${v.colors}
            </div>
          </div>
        `).join('')}
      </div>

      <div class="card" style="margin-top:20px;">
        <div class="card-header">
          <div class="card-title"><span class="icon">🎨</span> Custom Thumbnail Prompt Generator</div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Video Topic</label>
            <input class="form-input" id="thumb-topic" placeholder="Black Holes Explained">
          </div>
          <div class="form-group">
            <label class="form-label">Thumbnail Style</label>
            <select class="form-select" id="thumb-style">
              ${Object.keys(LIBRARIES.thumbnails).map(k => `<option value="${k}">${k}</option>`).join('')}
            </select>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Key Visual Element</label>
          <input class="form-input" id="thumb-element" placeholder="Glowing black hole, scientist pointing, DNA helix...">
        </div>
        <div style="display:flex;gap:10px;">
          <button class="btn btn-gold" onclick="generateThumbnailPrompt()">🖼 Generate Thumbnail Prompt</button>
          <button class="btn btn-secondary" onclick="copyText('thumb-output')">📋 Copy</button>
        </div>
      </div>

      <div class="card">
        <div class="prompt-output" id="thumb-output">
          <span style="color:var(--text-muted);">Generate a thumbnail prompt above...</span>
        </div>
      </div>
    </div>`;
}

// ── SEO SECTION ──────────────────────────────────────────────
function buildSEOSection() {
  return `
    <div class="section-view" id="section-seo">
      <div class="section-header">
        <h2>📈 YouTube SEO Kit</h2>
        <p>Templates for titles, descriptions, tags, and community engagement to maximize discoverability.</p>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-title"><span class="icon">📝</span> Title Generator</div>
        </div>
        <div class="form-group">
          <label class="form-label">Core Topic</label>
          <input class="form-input" id="seo-topic" placeholder="dark matter">
        </div>
        <div class="form-group">
          <label class="form-label">Surprising Angle / Hook</label>
          <input class="form-input" id="seo-hook" placeholder="scientists can't explain it">
        </div>
        <button class="btn btn-gold" onclick="generateSEOTitles()">📝 Generate Titles</button>
        <div class="prompt-output" id="seo-titles-output" style="margin-top:16px;">
          <span style="color:var(--text-muted);">Enter a topic to generate SEO-optimized titles...</span>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-title"><span class="icon">📄</span> Description Template</div>
          <button class="btn btn-sm btn-secondary" onclick="copyText('seo-desc-output')">📋 Copy</button>
        </div>
        <div class="prompt-output" id="seo-desc-output">
          <span style="color:var(--text-muted);">Generate a description...</span>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-title"><span class="icon">🏷</span> Tags Template</div>
          <button class="btn btn-sm btn-secondary" onclick="copyText('seo-tags-output')">📋 Copy</button>
        </div>
        <div class="prompt-output" id="seo-tags-output">
          <span style="color:var(--text-muted);">Generate tags...</span>
        </div>
      </div>
    </div>`;
}

// ── PLANNER SECTION ──────────────────────────────────────────
function buildPlannerSection() {
  const categories = ['Science', 'Space', 'History', 'Technology', 'Human Body', 'Psychology', 'Nature', 'What If'];
  const ideas = {
    'Science': [
      'Why Does Time Slow Down Near Black Holes?',
      'The Quantum World Inside Your Brain',
      'What Happens When You Travel at Light Speed?',
      'The Invisible Force That Holds the Universe Together',
      'Why Do We Dream? The Science Nobody Tells You',
      'How Your DNA Predicts Your Future',
      'The Mysterious 4th State of Water',
      'What Would Happen If Gravity Stopped for 1 Second?'
    ],
    'Space': [
      'The Largest Structure in the Universe',
      'What Existed Before the Big Bang?',
      'The Star That Could End Earth Tomorrow',
      'Why NASA Is Terrified of Europa',
      'The Black Hole That Shouldn\'t Exist',
      'What\'s at the Edge of the Observable Universe?',
      'The Sound of Space — What No One Expected',
      'Why We\'ve Never Found Alien Life'
    ],
    'History': [
      'The Ancient Device That Shouldn\'t Exist',
      'The Civilization That Disappeared Overnight',
      'What Really Killed the Dinosaurs?',
      'The Library That Changed the World — Then Burned',
      'The Plague That Made Humanity Stronger',
      'Why Ancient Egyptians Were More Advanced Than We Thought'
    ],
    'Technology': [
      'The AI That Taught Itself to Think',
      'Why Quantum Computers Will Change Everything',
      'The Internet\'s Darkest Secret',
      'Technology That Exists But Nobody Uses',
      'What Happens When AI Becomes Self-Aware?',
      'The Invention That Was 100 Years Ahead of Its Time'
    ],
    'Human Body': [
      'Your Body Is Doing Something Incredible Right Now',
      'The Organ Scientists Just Discovered',
      'What Happens to Your Body in Space?',
      'Why You Have a Second Brain',
      'The Virus Living Inside You Right Now',
      'Your Eyes Are Lying to You — Here\'s Proof'
    ],
    'Psychology': [
      'The Manipulation Technique You Fall For Every Day',
      'Why Smart People Make Stupid Decisions',
      'The Experiment That Traumatized a Generation',
      'Your Brain Is Hiding Something From You',
      'Why You Can\'t Remember Being Born',
      'The Psychological Trick That Controls the World'
    ],
    'Nature': [
      'The Animal That Shouldn\'t Be Alive',
      'The Forest That Communicates Like the Internet',
      'Why Trees Are Smarter Than We Think',
      'The Deepest Point on Earth — What Lives There?',
      'Nature\'s Most Perfect Killing Machine',
      'The Ecosystem That Controls Our Weather'
    ],
    'What If': [
      'What If the Moon Disappeared Tonight?',
      'What If Humans Could See All Light?',
      'What If Earth Had Two Suns?',
      'What If You Fell Into a Black Hole?',
      'What If Every Human Jumped at Once?',
      'What If Time Moved Backwards?'
    ]
  };

  return `
    <div class="section-view" id="section-planner">
      <div class="section-header">
        <h2>📅 Content Planner</h2>
        <p>500+ evergreen video ideas organized by category. Never run out of content again.</p>
      </div>

      <div class="tab-bar" id="planner-tabs">
        ${categories.map((cat, i) => `
          <button class="tab-btn ${i === 0 ? 'active' : ''}" onclick="switchPlannerTab('${cat}', this)">${cat}</button>
        `).join('')}
      </div>

      <div id="planner-content">
        ${categories.map((cat, ci) => `
          <div class="planner-tab-content" id="planner-${cat.replace(/\s+/g, '-')}" style="display:${ci === 0 ? 'block' : 'none'};">
            <div class="card">
              <div class="card-header">
                <div class="card-title"><span class="icon">💡</span> ${cat} Video Ideas</div>
                <span class="result-count">${ideas[cat].length} ideas</span>
              </div>
              ${ideas[cat].map((idea, i) => `
                <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--border);cursor:pointer;" onclick="this.querySelector('.check-icon').parentElement.classList.toggle('checked')">
                  <div class="check-icon"></div>
                  <div style="flex:1;">
                    <div style="font-size:0.9rem;font-weight:500;color:var(--text-primary);">${idea}</div>
                    <div style="font-size:0.72rem;color:var(--text-muted);margin-top:2px;">${cat} • Evergreen • High Search Volume</div>
                  </div>
                  <button class="btn btn-sm btn-ghost" onclick="event.stopPropagation();copyTextDirect('${idea.replace(/'/g, "\\'")}')">📋</button>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>`;
}

// ── QUALITY CHECKLIST SECTION ────────────────────────────────
function buildQualitySection() {
  const checklist = [
    { cat: 'Content Accuracy', items: ['All facts verified with 3+ sources', 'Scientific claims backed by peer-reviewed research', 'No misleading or sensationalized statements', 'Dates and numbers are accurate', 'Historical context is correct'] },
    { cat: 'Script Quality', items: ['Hook grabs attention in first 5 seconds', 'Clear narrative structure (Hook→Question→Context→Explanation→End)', 'Language is accessible to general audience', 'No jargon without explanation', 'Ending creates emotional resonance', 'CTA feels natural, not forced'] },
    { cat: 'Visual Quality', items: ['All shots match narration timing', 'Camera movements are smooth and purposeful', 'Lighting is consistent within scenes', 'Color grading matches brand identity', 'Transitions are smooth and intentional', 'No visual artifacts or glitches'] },
    { cat: 'Audio Quality', items: ['Narration is clear and well-paced', 'Music doesn\'t overpower speech', 'Sound effects enhance immersion', 'Audio levels are consistent throughout', 'No background noise or pops', 'Music transitions are smooth'] },
    { cat: 'Subtitles & Text', items: ['Subtitle timing matches speech exactly', 'Text is readable (size, contrast, position)', 'No spelling or grammar errors', 'Text doesn\'t overlap important visuals', 'Safe zone margins respected', 'Accessibility guidelines followed'] },
    { cat: 'Branding', items: ['Intro matches brand style guide', 'Outro includes proper branding', 'Thumbnail follows brand template', 'Color palette is consistent', 'Font usage matches brand guide', 'Logo placement follows rules'] },
    { cat: 'YouTube Optimization', items: ['Title is under 60 characters', 'Title includes primary keyword', 'Description has timestamps', 'Tags include long-tail keywords', 'Thumbnail is high-contrast and readable', 'End screen elements configured', 'Cards placed at key moments'] }
  ];

  return `
    <div class="section-view" id="section-quality">
      <div class="section-header">
        <h2>✅ Quality Control Checklist</h2>
        <p>Complete this checklist before every upload to ensure premium quality across all videos.</p>
      </div>

      <div style="display:flex;gap:10px;margin-bottom:20px;">
        <button class="btn btn-secondary btn-sm" onclick="checkAllItems()">✓ Check All</button>
        <button class="btn btn-ghost btn-sm" onclick="uncheckAllItems()">Reset All</button>
        <span id="check-progress" style="margin-left:auto;font-size:0.82rem;color:var(--text-muted);display:flex;align-items:center;">0 / ${checklist.reduce((a, c) => a + c.items.length, 0)} completed</span>
      </div>

      ${checklist.map(section => `
        <div class="card">
          <div class="card-header">
            <div class="card-title"><span class="icon">✅</span> ${section.cat}</div>
            <span class="result-count">${section.items.length} checks</span>
          </div>
          <ul class="checklist">
            ${section.items.map((item, i) => {
              const id = `check-${section.cat.replace(/\s+/g, '-')}-${i}`;
              return `
              <li id="${id}" onclick="toggleCheck('${id}')">
                <div class="check-icon"></div>
                <span>${item}</span>
              </li>`;
            }).join('')}
          </ul>
        </div>
      `).join('')}
    </div>`;
}

// ============================================================
// PROMPT GENERATION FUNCTIONS
// ============================================================

function quickGenerate() {
  const scene = document.getElementById('quick-scene').value;
  const tool = document.getElementById('quick-tool').value;
  const style = document.getElementById('quick-style').value;
  const details = document.getElementById('quick-details').value;

  if (!scene) { showToast('Please describe your scene first', 'error'); return; }

  const quality = LIBRARIES.qualityPresets[APP.selections.qualityPreset];
  const neg = NEGATIVE_PROMPTS[APP.selections.negativePreset];
  const styleMap = {
    documentary: LIBRARIES.colorGrading['Netflix Documentary'],
    cinematic: LIBRARIES.colorGrading['IMAX'],
    scientific: LIBRARIES.colorGrading['Cold Science'],
    dramatic: LIBRARIES.colorGrading['Space Documentary'],
    educational: LIBRARIES.colorGrading['BBC Earth']
  };

  let prompt = '';

  if (tool === 'veo') {
    prompt = `${quality}

${scene}

${styleMap[style] || styleMap.documentary}

${details ? details + '\n' : ''}
Negative: ${neg}`;
  } else if (tool === 'sora') {
    prompt = `${quality}. ${scene}. ${styleMap[style] || styleMap.documentary}. ${details || ''}`;
  } else {
    prompt = `${quality}

SCENE: ${scene}

STYLE: ${style}
${styleMap[style] || ''}

${details ? 'DETAILS: ' + details : ''}`;
  }

  document.getElementById('quick-scene-output') || createQuickOutput();
  document.getElementById('quick-scene-output').textContent = prompt;
  showToast('Prompt generated!', 'success');
}

function createQuickOutput() {
  const gen = document.querySelector('.quick-gen');
  const div = document.createElement('div');
  div.innerHTML = `
    <div class="card" style="margin-top:16px;">
      <div class="card-header">
        <div class="card-title"><span class="icon">📄</span> Generated Prompt</div>
        <div style="display:flex;gap:8px;">
          <button class="btn btn-sm btn-secondary" onclick="copyText('quick-scene-output')">📋 Copy</button>
          <button class="btn btn-sm btn-ghost" onclick="document.getElementById('quick-scene-output').textContent='';">🗑</button>
        </div>
      </div>
      <div class="prompt-output" id="quick-scene-output"></div>
    </div>`;
  gen.after(div.firstElementChild);
}

function quickGenerateAll() {
  const scene = document.getElementById('quick-scene').value;
  const details = document.getElementById('quick-details').value;
  if (!scene) { showToast('Please describe your scene first', 'error'); return; }

  const quality = LIBRARIES.qualityPresets[APP.selections.qualityPreset];
  const style = document.getElementById('quick-style').value;
  const styleMap = {
    documentary: LIBRARIES.colorGrading['Netflix Documentary'],
    cinematic: LIBRARIES.colorGrading['IMAX'],
    scientific: LIBRARIES.colorGrading['Cold Science'],
    dramatic: LIBRARIES.colorGrading['Space Documentary'],
    educational: LIBRARIES.colorGrading['BBC Earth']
  };
  const neg = NEGATIVE_PROMPTS[APP.selections.negativePreset];

  const prompts = {
    'VEO 3': `${quality}\n\n${scene}\n\n${styleMap[style]}\n\n${details ? details + '\n' : ''}Negative: ${neg}`,
    'SORA': `${quality}. ${scene}. ${styleMap[style]}. ${details || ''}`,
    'GENERIC': `${quality}\n\nSCENE: ${scene}\n\nSTYLE: ${style}\n${styleMap[style]}\n\n${details ? 'DETAILS: ' + details : ''}`
  };

  let output = Object.entries(prompts).map(([tool, p]) => `═══ ${tool} ═══\n${p}`).join('\n\n\n');

  createQuickOutput();
  document.getElementById('quick-scene-output').textContent = output;
  showToast('Generated prompts for all tools!', 'success');
}

function buildModularPrompt(tool) {
  const cam = getSelected('pb-camera');
  const mov = getSelected('pb-movement');
  const comp = document.getElementById('pb-composition').value;
  const light = document.getElementById('pb-lighting').value;
  const color = document.getElementById('pb-color').value;
  const env = document.getElementById('pb-environment').value;
  const music = document.getElementById('pb-music').value;
  const sfx = document.getElementById('pb-sfx').value;
  const narrator = document.getElementById('pb-narrator').value;
  const subtitle = document.getElementById('pb-subtitle').value;
  const details = document.getElementById('pb-details').value;

  const quality = LIBRARIES.qualityPresets[APP.selections.qualityPreset];
  const neg = NEGATIVE_PROMPTS[APP.selections.negativePreset];

  // Build each module
  const cameraText = cam.map(c => LIBRARIES.camera[c]).join(', ');
  const moveText = mov.map(m => LIBRARIES.cameraMovement[m]).join(', ');
  const compText = comp ? LIBRARIES.composition[comp] : '';
  const lightObj = light ? LIBRARIES.lighting[light] : null;
  const lightText = lightObj ? lightObj.prompt : '';
  const colorText = color ? LIBRARIES.colorGrading[color] : '';
  const envText = env ? LIBRARIES.environments[env] : '';
  const musicText = music ? LIBRARIES.music[music] : '';
  const sfxText = sfx ? LIBRARIES.soundEffects[sfx] : '';
  const narratorObj = narrator ? LIBRARIES.narrators[narrator] : null;
  const subtitleText = subtitle ? LIBRARIES.subtitles[subtitle] : '';

  let prompt = '';

  if (tool === 'veo') {
    prompt = `═══════════════════════════════════════════
  VEO MASTER PROMPT — THE FACT HORIZON
═══════════════════════════════════════════

[QUALITY]
${quality}

[SCENE]
${envText || 'Scene description here...'}

[CAMERA]
${cameraText ? 'Shot Type: ' + cameraText : ''}
${moveText ? 'Movement: ' + moveText : ''}
${compText ? 'Composition: ' + compText : ''}

[LIGHTING]
${lightText || 'Natural lighting'}`;

    if (colorText) prompt += `\n\n[COLOR GRADING]\n${colorText}`;
    if (narratorObj) prompt += `\n\n[NARRATOR]\n${narratorObj.style}`;
    if (subtitleText) prompt += `\n\n[SUBTITLES]\n${subtitleText}`;
    if (musicText) prompt += `\n\n[MUSIC]\n${musicText}`;
    if (sfxText) prompt += `\n\n[SOUND EFFECTS]\n${sfxText}`;
    if (details) prompt += `\n\n[DETAILS]\n${details}`;
    prompt += `\n\n[NEGATIVE]\nNegative: ${neg}`;

  } else if (tool === 'sora') {
    prompt = `${quality}.

${envText || 'Scene description here.'}
${cameraText ? 'Shot: ' + cameraText + '.' : ''} ${moveText ? moveText + '.' : ''}
${compText ? compText + '.' : ''} ${lightText ? lightText + '.' : ''}
${colorText ? colorText + '.' : ''} ${details || ''}`;

  } else {
    // Scene builder
    prompt = `═══════════════════════════════════════════
  SCENE BUILDER — THE FACT HORIZON
═══════════════════════════════════════════

ENVIRONMENT:
${envText || 'Scene description here...'}

CAMERA:
${cameraText ? 'Shot: ' + cameraText : 'N/A'}
${moveText ? 'Movement: ' + moveText : ''}
${compText ? 'Composition: ' + compText : ''}

LIGHTING:
${lightText || 'Natural lighting'}

COLOR GRADE:
${colorText || 'Default'}

${narratorObj ? 'NARRATOR:\n' + narratorObj.style + '\n  Speed: ' + narratorObj.speed + '\n  Emotion: ' + narratorObj.emotion : ''}
${musicText ? '\nMUSIC:\n' + musicText : ''}
${sfxText ? '\nSOUND FX:\n' + sfxText : ''}
${subtitleText ? '\nSUBTITLES:\n' + subtitleText : ''}
${details ? '\nDETAILS:\n' + details : ''}`;
  }

  document.getElementById('modular-output').textContent = prompt;
  showToast(`${tool.toUpperCase()} prompt generated!`, 'success');
  updateSelectionDisplay();
}

function getSelected(id) {
  const select = document.getElementById(id);
  if (!select) return [];
  return Array.from(select.selectedOptions).map(o => o.value);
}

function updateSelectionDisplay() {
  const cam = getSelected('pb-camera');
  const mov = getSelected('pb-movement');
  const comp = document.getElementById('pb-composition')?.value || '';
  const light = document.getElementById('pb-lighting')?.value || '';
  const color = document.getElementById('pb-color')?.value || '';
  const env = document.getElementById('pb-environment')?.value || '';
  const music = document.getElementById('pb-music')?.value || '';
  const sfx = document.getElementById('pb-sfx')?.value || '';
  const narrator = document.getElementById('pb-narrator')?.value || '';
  const subtitle = document.getElementById('pb-subtitle')?.value || '';

  const items = [
    ...cam.map(c => `🎥 ${c}`),
    ...mov.map(m => `🎬 ${m}`),
    comp ? `📐 ${comp}` : null,
    light ? `💡 ${light}` : null,
    color ? `🎨 ${color}` : null,
    env ? `🌍 ${env}` : null,
    music ? `🎵 ${music}` : null,
    sfx ? `🔊 ${sfx}` : null,
    narrator ? `🎙 ${narrator}` : null,
    subtitle ? `💬 ${subtitle}` : null
  ].filter(Boolean);

  const summary = document.getElementById('pb-selection-summary');
  const summaryItems = document.getElementById('pb-summary-items');

  if (items.length > 0) {
    summary.style.display = 'block';
    summaryItems.innerHTML = items.map(i => `<span class="summary-item">${i}</span>`).join('');
  } else {
    summary.style.display = 'none';
  }
}

function clearModularSelections() {
  ['pb-camera', 'pb-movement', 'pb-composition', 'pb-lighting', 'pb-color', 'pb-environment', 'pb-music', 'pb-sfx', 'pb-narrator', 'pb-subtitle'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  document.getElementById('pb-details').value = '';
  updateSelectionDisplay();
  document.getElementById('modular-output').innerHTML = '<span style="color:var(--text-muted);">Select modules above and click "Generate" to create your prompt...</span>';
  showToast('All selections cleared', 'info');
}

// ============================================================
// LIBRARY PREVIEW FUNCTIONS
// ============================================================

function copyLibraryItem(lib, key) {
  const data = LIBRARIES[lib][key];
  const text = typeof data === 'object' ? data.prompt || JSON.stringify(data) : data;
  navigator.clipboard.writeText(text).then(() => {
    showToast(`"${key}" copied to clipboard!`, 'success');
  });

  // Update camera preview for camera, composition, and cameraMovement
  if (lib === 'camera' || lib === 'composition' || lib === 'cameraMovement') {
    const preview = document.getElementById('camera-preview');
    if (preview) preview.textContent = text;
  }

  // Update audio preview for music and sound effects
  if (lib === 'music' || lib === 'soundEffects') {
    const preview = document.getElementById('audio-prompt');
    if (preview) preview.textContent = text;
  }
}

function selectLightingPreview(key) {
  const data = LIBRARIES.lighting[key];
  document.getElementById('lighting-prompt').textContent = data.prompt;
  document.getElementById('lighting-detail').innerHTML = `
    <h4 style="font-size:1rem;font-weight:700;color:var(--accent-light);margin-bottom:14px;">💡 ${key}</h4>
    <div style="display:grid;grid-template-columns:auto 1fr;gap:8px 16px;font-size:0.85rem;">
      <span style="color:var(--text-muted);font-weight:600;">Intensity</span><span>${data.intensity}</span>
      <span style="color:var(--text-muted);font-weight:600;">Direction</span><span>${data.direction}</span>
      <span style="color:var(--text-muted);font-weight:600;">Contrast</span><span>${data.contrast}</span>
      <span style="color:var(--text-muted);font-weight:600;">Shadows</span><span>${data.shadows}</span>
      <span style="color:var(--text-muted);font-weight:600;">Atmosphere</span><span>${data.atmosphere}</span>
    </div>
  `;
}

function selectColorPreview(key) {
  document.getElementById('color-prompt').textContent = LIBRARIES.colorGrading[key];
}

function selectEnvironmentPreview(key) {
  document.getElementById('env-prompt').textContent = LIBRARIES.environments[key];
}

function selectNarratorPreview(key) {
  const n = LIBRARIES.narrators[key];
  document.getElementById('narrator-prompt').textContent = `NARRATOR: ${key}

Style: ${n.style}
Speed: ${n.speed}
Emotion: ${n.emotion}
Pauses: ${n.pauses}
Emphasis: ${n.emphasis}
Pronunciation: ${n.pronunciation}`;
}

function selectThumbnailPreview(key) {
  const t = LIBRARIES.thumbnails[key];
  document.getElementById('thumb-style').value = key;
  showToast(`Thumbnail style "${key}" selected`, 'info');
}

// ============================================================
// SCRIPT FUNCTIONS
// ============================================================

function generateFullScript() {
  const data = APP.scriptData;
  const narrators = LIBRARIES.narrators;

  const script = `═══════════════════════════════════════════
  THE FACT HORIZON — DOCUMENTARY SCRIPT
═══════════════════════════════════════════

TITLE: ${data.title || '[Untitled]'}
TOPIC: ${data.topic || '[Topic]'}

─────────────────────────────────────────
  🪝 HOOK (0:00 - 0:10)
─────────────────────────────────────────
${data.hook || '[Write your hook here — the first 5 seconds that grab attention]'}

NARRATION: "${data.hook || '...'}"

─────────────────────────────────────────
  ❓ CORE QUESTION (0:10 - 0:25)
─────────────────────────────────────────
${data.question || '[What is the central question this video answers?]'}

─────────────────────────────────────────
  🌍 CONTEXT (0:25 - 1:00)
─────────────────────────────────────────
${data.context || '[Set the scene. Give historical or scientific background.]'}

─────────────────────────────────────────
  🔬 EXPLANATION / DEEP DIVE (1:00 - 6:00)
─────────────────────────────────────────
${data.explanation || '[The core scientific explanation. Break it into simple, visual language.]'}

─────────────────────────────────────────
  🎥 VISUAL NOTES
─────────────────────────────────────────
${data.visualNotes || '[Drone shots, macro footage, CGI overlays, split screens...]'}

─────────────────────────────────────────
  🎙 NARRATION
─────────────────────────────────────────
${data.narration || '[Write the full narration text that will be spoken]'}

─────────────────────────────────────────
  🎯 ENDING / MIND-BLOW (8:00 - 8:30)
─────────────────────────────────────────
${data.ending || '[The final revelation that reframes everything]'}

─────────────────────────────────────────
  📢 CALL TO ACTION (8:30 - 9:00)
─────────────────────────────────────────
${data.cta || '[Natural CTA that feels like part of the story]'}

═══════════════════════════════════════════
  PRODUCTION NOTES
═══════════════════════════════════════════

QUALITY: ${APP.selections.qualityPreset}
NEGATIVE: ${NEGATIVE_PROMPTS[APP.selections.negativePreset]}

RECOMMENDED MUSIC: Wonder / Discovery / Emotional
RECOMMENDED NARRATOR: BBC Documentary / National Geographic
SUBTITLE STYLE: Clean Modern / Cinematic Bold`;

  document.getElementById('script-output').textContent = script;
  showToast('Full script generated!', 'success');
}

function clearScriptForm() {
  APP.scriptData = { title: '', topic: '', hook: '', question: '', context: '', explanation: '', visualNotes: '', narration: '', ending: '', cta: '' };
  ['script-title', 'script-topic', 'script-hook', 'script-question', 'script-context', 'script-explanation', 'script-visual', 'script-narration', 'script-ending', 'script-cta'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  document.getElementById('script-output').innerHTML = '<span style="color:var(--text-muted);">Fill in the sections above and click "Generate Full Script"...</span>';
  showToast('Script form cleared', 'info');
}

function showHookTemplate(key) {
  const hook = LIBRARIES.narrationStyles[key];
  document.getElementById('hook-preview').textContent = `TEMPLATE: ${key}

${hook.template}

PURPOSE: ${hook.purpose}`;
}

// ============================================================
// STORYBOARD FUNCTIONS
// ============================================================

let sceneCount = 1;

function addScene() {
  sceneCount++;
  const container = document.getElementById('scenes-container');
  container.insertAdjacentHTML('beforeend', buildSceneForm(sceneCount));
  showToast(`Scene ${sceneCount} added`, 'info');
}

function removeScene(num) {
  const el = document.getElementById(`scene-${num}`);
  if (el) el.remove();
}

function generateStoryboard() {
  const forms = document.querySelectorAll('.scene-form');
  if (forms.length === 0) { showToast('Add at least one scene', 'error'); return; }

  let output = `═══════════════════════════════════════════
  STORYBOARD — THE FACT HORIZON
═══════════════════════════════════════════

`;

  forms.forEach((form, i) => {
    const title = form.querySelector('.scene-title')?.value || `Scene ${i + 1}`;
    const duration = form.querySelector('.scene-duration')?.value || '30s';
    const camera = form.querySelector('.scene-camera')?.value || '';
    const lighting = form.querySelector('.scene-lighting')?.value || '';
    const environment = form.querySelector('.scene-environment')?.value || '';
    const narration = form.querySelector('.scene-narration')?.value || '';
    const emotion = form.querySelector('.scene-emotion')?.value || '';
    const transition = form.querySelector('.scene-transition')?.value || 'Cut';

    const cameraDesc = camera ? LIBRARIES.camera[camera] : '';
    const lightDesc = lighting ? LIBRARIES.lighting[lighting]?.prompt : '';
    const envDesc = environment ? LIBRARIES.environments[environment] : '';
    const transDesc = TRANSITIONS[transition] || transition;

    output += `─────────────────────────────────────────
  SCENE ${i + 1}: ${title.toUpperCase()}
  Duration: ${duration}
─────────────────────────────────────────

VISUAL PROMPT:
${LIBRARIES.qualityPresets[APP.selections.qualityPreset]}
${cameraDesc ? 'Camera: ' + cameraDesc : ''}
${envDesc ? 'Environment: ' + envDesc : ''}
${lightDesc ? 'Lighting: ' + lightDesc : ''}
${APP.selections.colorGrading.length ? '' : ''}${LIBRARIES.colorGrading['Netflix Documentary'] || ''}

NARRATION:
"${narration || '[Add narration text]'}"

EMOTION: ${emotion || 'Neutral'}
TRANSITION: ${transDesc}

`;
  });

  output += `═══════════════════════════════════════════
  END OF STORYBOARD
═══════════════════════════════════════════`;

  document.getElementById('storyboard-output').textContent = output;
  showToast('Storyboard generated!', 'success');
}

// ============================================================
// SEO FUNCTIONS
// ============================================================

function generateSEOTitles() {
  const topic = document.getElementById('seo-topic').value;
  const hook = document.getElementById('seo-hook').value;
  if (!topic) { showToast('Enter a topic first', 'error'); return; }

  const templates = [
    `${topic.charAt(0).toUpperCase() + topic.slice(1)} — ${hook || 'What Nobody Tells You'}`,
    `Why ${topic.charAt(0).toUpperCase() + topic.slice(1)} Changes Everything`,
    `The Truth About ${topic.charAt(0).toUpperCase() + topic.slice(1)} That Scientists Discovered`,
    `What Happens When ${topic.charAt(0).toUpperCase() + topic.slice(1)} Goes Wrong?`,
    `${topic.charAt(0).toUpperCase() + topic.slice(1)} Explained in 10 Minutes`,
    `The Mystery of ${topic.charAt(0).toUpperCase() + topic.slice(1)} — Finally Solved`,
    `${topic.charAt(0).toUpperCase() + topic.slice(1)}: ${hook || 'The Biggest Discovery of Our Time'}`,
    `How ${topic.charAt(0).toUpperCase() + topic.slice(1)} Could Change Human History`,
  ];

  const desc = `━━━ VIDEO DESCRIPTION TEMPLATE ━━━

🔬 ${topic.charAt(0).toUpperCase() + topic.slice(1)} — ${hook || 'What You Need to Know'}

In this video, we explore ${topic} and discover ${hook || 'incredible facts that will change how you see the world'}.

⏱ TIMESTAMPS:
0:00 — Introduction
0:30 — Background
2:00 — The Science
5:00 — Mind-Blowing Facts
8:00 — What This Means for Us
9:00 — Conclusion

📚 SOURCES:
[Add your sources here]

🔔 Subscribe for more science documentaries: [LINK]
📱 Follow us: [SOCIAL LINKS]

#Science #Documentary #${topic.replace(/\s+/g, '')}`;

  const tags = `━━━ TAGS ━━━

${topic}, ${topic} explained, ${topic} documentary, ${hook || ''}, science documentary, educational video, the fact horizon, ${topic} facts, ${topic} science, what is ${topic}, ${topic} for beginners, ${topic} 2024, ${topic} documentary 2024, mind blowing science, science explained, ${topic} deep dive, ${topic} research, ${topic} latest`;

  document.getElementById('seo-titles-output').textContent = templates.map((t, i) => `${i + 1}. ${t}`).join('\n');
  document.getElementById('seo-desc-output').textContent = desc;
  document.getElementById('seo-tags-output').textContent = tags;
  showToast('SEO content generated!', 'success');
}

// ============================================================
// THUMBNAIL FUNCTIONS
// ============================================================

function generateThumbnailPrompt() {
  const topic = document.getElementById('thumb-topic').value;
  const style = document.getElementById('thumb-style').value;
  const element = document.getElementById('thumb-element').value;

  if (!topic) { showToast('Enter a topic first', 'error'); return; }

  const template = LIBRARIES.thumbnails[style];

  const prompt = `THUMBNAIL PROMPT — THE FACT HORIZON

Topic: ${topic}
Style: ${style}

PROMPT:
Professional YouTube thumbnail for "${topic}" video.
Layout: ${template.layout}
Color palette: ${template.colors}
Key visual element: ${element || topic}

SPECIFICATIONS:
- Resolution: 1280 x 720 pixels minimum
- Text: Bold, readable at mobile size
- Contrast: High — must stand out in sidebar
- Emotion: Must trigger curiosity or surprise
- Branding: Include "The Fact Horizon" logo bottom-right

NEGATIVE:
Cluttered design, small text, low contrast, blurry images, too many elements`;

  document.getElementById('thumb-output').textContent = prompt;
  showToast('Thumbnail prompt generated!', 'success');
}

// ============================================================
// UTILITY FUNCTIONS
// ============================================================

function copyText(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;
  const text = el.textContent;
  if (!text || text.includes('Select') || text.includes('Click') || text.includes('Generate') || text.includes('Add scenes')) {
    showToast('Nothing to copy yet', 'error');
    return;
  }
  navigator.clipboard.writeText(text).then(() => {
    el.classList.add('copy-flash');
    setTimeout(() => el.classList.remove('copy-flash'), 600);
    showToast('Copied to clipboard!', 'success');
  });
}

function copyTextDirect(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast('Copied!', 'success');
  });
}

function downloadPrompt(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;
  const text = el.textContent;
  if (!text || text.includes('Select') || text.includes('Click')) {
    showToast('Nothing to download', 'error');
    return;
  }
  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `the-fact-horizon-prompt-${Date.now()}.txt`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Prompt downloaded!', 'success');
}

function copyPrompt(elementId) {
  copyText(elementId);
}

function showToast(message, type = 'info') {
  // Remove existing
  document.querySelectorAll('.toast').forEach(t => t.remove());

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span>
    <span>${message}</span>
  `;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// Checklist functions
function toggleCheck(id) {
  const el = document.getElementById(id);
  if (el) el.classList.toggle('checked');
  updateCheckProgress();
}

function checkAllItems() {
  document.querySelectorAll('.checklist li').forEach(li => li.classList.add('checked'));
  updateCheckProgress();
}

function uncheckAllItems() {
  document.querySelectorAll('.checklist li').forEach(li => li.classList.remove('checked'));
  updateCheckProgress();
}

function updateCheckProgress() {
  const total = document.querySelectorAll('.checklist li').length;
  const checked = document.querySelectorAll('.checklist li.checked').length;
  const el = document.getElementById('check-progress');
  if (el) el.textContent = `${checked} / ${total} completed`;
}

// Planner tab switching
function switchPlannerTab(category, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.planner-tab-content').forEach(c => c.style.display = 'none');
  const target = document.getElementById(`planner-${category.replace(/\s+/g, '-')}`);
  if (target) target.style.display = 'block';
}

// ============================================================
// HELP & GUIDE SYSTEM
// ============================================================

// ── Help Data ────────────────────────────────────────────────
const HELP_DATA = {
  sections: [
    { icon: '🏠', name: 'Dashboard', nav: 'home',
      desc: 'Your home screen. Shows stats, quick-access cards, storytelling formula, supported AI tools, and quick settings. Start here to orient yourself.' },
    { icon: '🎬', name: 'Prompt Builder', nav: 'prompt-builder',
      desc: 'The core tool. Two modes: "Quick Generate" (describe a scene in plain English) and "Module Selector" (pick camera, lighting, environment, etc. from dropdowns). Outputs prompts for Veo, Sora, or generic AI tools.' },
    { icon: '🎥', name: 'Camera Library', nav: 'camera',
      desc: 'Browse 20 camera shot types, 10 composition rules, and 15 camera movements. Click any chip to copy its prompt text. Use this as a reference when building prompts.' },
    { icon: '💡', name: 'Lighting Library', nav: 'lighting',
      desc: '20 professional lighting presets. Click a preset chip to see its full details (intensity, direction, contrast, shadows, atmosphere). Copy individual presets for your prompts.' },
    { icon: '🎨', name: 'Color Grading', nav: 'color',
      desc: '19 color grading presets (Netflix Documentary, Cyberpunk, Wes Anderson, etc.). Click to preview and copy the color grading prompt text.' },
    { icon: '🌍', name: 'Environment Library', nav: 'environment',
      desc: '28 environment presets from deep space to underwater caves. Click any environment chip to copy its description for use in prompts.' },
    { icon: '🎵', name: 'Audio Library', nav: 'audio',
      desc: '16 music styles and 20 sound effects. Browse and click to copy audio prompt text. Use these to describe the audio atmosphere in your AI video prompts.' },
    { icon: '🎙', name: 'Narrator Styles', nav: 'narrator',
      desc: '8 narrator voice profiles (David Attenborough, Morgan Freeman, etc.) with tone, pacing, and style details. Also includes 8 subtitle style presets.' },
    { icon: '✍️', name: 'Script Writer', nav: 'script',
      desc: 'Fill in your title, topic, hook, question, context, explanation, and CTA — then generate a full documentary script following the proven Hook→Question→Context→Explanation→End structure.' },
    { icon: '🎞', name: 'Storyboard', nav: 'storyboard',
      desc: 'Build a scene-by-scene storyboard. Add scenes with camera, lighting, environment, narration, and transitions. Generate a complete storyboard prompt with a visual timeline.' },
    { icon: '🧠', name: 'Psychology', nav: 'psychology',
      desc: '10 cognitive psychology techniques for viewer retention (curiosity gap, pattern interrupt, Zeigarnik effect, etc.). Read these to understand why certain content keeps viewers watching.' },
    { icon: '🖼', name: 'Thumbnail Library', nav: 'thumbnails',
      desc: '8 thumbnail style templates with layout guides, color schemes, and text placement rules. Also includes a custom thumbnail prompt generator — enter your topic and get a ready-to-use thumbnail prompt.' },
    { icon: '📈', name: 'YouTube SEO Kit', nav: 'seo',
      desc: 'Generate SEO-optimized titles, descriptions, and tags for your videos. Enter your topic and hook to get 8 title variations, a timestamped description template, and keyword tags.' },
    { icon: '📅', name: 'Content Planner', nav: 'planner',
      desc: '500+ evergreen video ideas organized by 8 categories (Science, Space, History, Technology, etc.). Check off ideas you\'ve used and copy titles directly.' },
    { icon: '✅', name: 'Quality Checklist', nav: 'quality',
      desc: '38-item pre-upload checklist covering content accuracy, script quality, visual quality, audio, subtitles, branding, and YouTube optimization. Check items off as you complete them.' }
  ],

  workflows: [
    {
      title: '⚡ Quick Prompt (60 seconds)',
      icon: '⚡',
      time: '~1 min',
      tag: 'beginner',
      steps: [
        { num: '1', text: 'Go to <strong>Prompt Builder</strong> → Quick Generate section' },
        { num: '2', text: 'Describe your scene in plain English (e.g., "A scientist in a dark lab examining glowing cells")' },
        { num: '3', text: 'Choose your <strong>AI tool</strong> (Veo 3, Sora, or Generic) and <strong>Video Style</strong>' },
        { num: '4', text: 'Click <strong>⚡ Generate Prompt</strong> — your prompt appears below' },
        { num: '5', text: 'Click <strong>📋 Copy</strong> and paste into your AI video tool' }
      ]
    },
    {
      title: '🧩 Modular Prompt (Full Control)',
      icon: '🧩',
      time: '~5 min',
      tag: 'intermediate',
      steps: [
        { num: '1', text: 'Go to <strong>Prompt Builder</strong> → Module Selector section' },
        { num: '2', text: 'Browse the <strong>Camera, Lighting, Color, Environment</strong> libraries to find presets you like' },
        { num: '3', text: 'Return to Prompt Builder and select your choices from each dropdown' },
        { num: '4', text: 'Add optional visual details in the text field' },
        { num: '5', text: 'Click <strong>🎬 Generate Veo Prompt</strong> (or Sora/Scene Builder)' },
        { num: '6', text: 'Copy the generated prompt — it includes all your selected modules' }
      ]
    },
    {
      title: '✍️ Full Documentary Script',
      icon: '✍️',
      time: '~10 min',
      tag: 'intermediate',
      steps: [
        { num: '1', text: 'Go to <strong>Script Writer</strong>' },
        { num: '2', text: 'Fill in: Title, Topic, Hook (attention grabber), Question, Context, Explanation, Visual Notes, Narration, Ending, CTA' },
        { num: '3', text: 'Tip: Use the <strong>Content Planner</strong> for topic ideas and the <strong>Psychology</strong> section for hook techniques' },
        { num: '4', text: 'Click <strong>✍️ Generate Full Script</strong>' },
        { num: '5', text: 'The script follows the proven <strong>Hook → Question → Context → Explanation → End</strong> structure' },
        { num: '6', text: 'Copy or download the script' }
      ]
    },
    {
      title: '🎞 Scene-by-Scene Storyboard',
      icon: '🎞',
      time: '~15 min',
      tag: 'advanced',
      steps: [
        { num: '1', text: 'Go to <strong>Storyboard</strong>' },
        { num: '2', text: 'Set your overall topic/video title at the top' },
        { num: '3', text: 'Click <strong>+ Add Scene</strong> to create scenes' },
        { num: '4', text: 'For each scene: set description, camera shot, lighting, environment, narration text, emotion, and transition' },
        { num: '5', text: 'Use the <strong>Storytelling Beats</strong> timeline (Hook → Tension → Climax → Resolution) to pace your scenes' },
        { num: '6', text: 'Click <strong>🎞 Generate Storyboard</strong> — produces a complete prompt for each scene' }
      ]
    },
    {
      title: '📈 YouTube Upload Package',
      icon: '📈',
      time: '~8 min',
      tag: 'intermediate',
      steps: [
        { num: '1', text: 'Go to <strong>YouTube SEO Kit</strong> → enter your topic and hook angle' },
        { num: '2', text: 'Click <strong>📝 Generate Titles</strong> — get 8 SEO-optimized title options' },
        { num: '3', text: 'Copy the generated <strong>description template</strong> with timestamps' },
        { num: '4', text: 'Copy the <strong>tags</strong> for maximum discoverability' },
        { num: '5', text: 'Go to <strong>Thumbnail Library</strong> → enter topic, choose style, generate thumbnail prompt' },
        { num: '6', text: 'Run the <strong>Quality Checklist</strong> before uploading' }
      ]
    }
  ],

  shortcuts: [
    { keys: ['F1'], action: 'Open this Help & Guide modal' },
    { keys: ['Esc'], action: 'Close the Help modal' },
    { keys: ['Ctrl', 'C'], action: 'Copy selected prompt text (when focused on output area)' },
  ],

  tips: [
    { icon: '🎯', title: 'Start with Quick Generate', desc: 'Don\'t overthink it. Describe your scene in plain English first, then refine with the Module Selector for more control.' },
    { icon: '📋', title: 'Click Chips to Copy', desc: 'In every library section (Camera, Lighting, Color, etc.), clicking a chip copies its prompt text. Build your prompt by collecting pieces.' },
    { icon: '🧠', title: 'Study Psychology First', desc: 'Read the Psychology section before writing scripts. Understanding curiosity gaps and pattern interrupts will dramatically improve your hooks.' },
    { icon: '📅', title: 'Plan Content in Batches', desc: 'Use the Content Planner to map out 10-20 videos at once. Batch planning saves time and ensures consistent quality.' },
    { icon: '✅', title: 'Never Skip the Checklist', desc: 'The 38-item Quality Checklist catches issues before upload. Make it a habit to run through it for every video.' },
    { icon: '🔄', title: 'Generate for All Tools', desc: 'Use "Generate for All Tools" in Quick Generate to get prompts for Veo, Sora, and Generic at once — then pick the best result.' },
    { icon: '💡', title: 'Layer Your Lighting', desc: 'Combine lighting presets with color grading for cinematic depth. Try "Rembrandt Lighting" + "Netflix Documentary" grade for a professional look.' },
    { icon: '🖼', title: 'Thumbnails First', desc: 'Design your thumbnail concept before filming. It clarifies your visual direction and ensures your video delivers on the thumbnail\'s promise.' },
    { icon: '💾', title: 'Download Important Prompts', desc: 'Use the 💾 Download button to save prompts as text files. Build a personal library of your best prompts over time.' },
    { icon: '🎬', title: 'Use Storytelling Beats', desc: 'The 10 storytelling beats (Hook → Climax → Resolution) are your pacing guide. Map each scene to a beat for professional narrative flow.' },
    { icon: '🔊', title: 'Audio Makes the Mood', desc: 'Don\'t neglect audio. A "Dark Ambient" music style with "Subtle Drone" SFX creates tension. "Orchestral Swell" with "Heartbeat" builds drama.' },
    { icon: '📈', title: 'SEO Is Not Optional', desc: 'Always use the SEO Kit. A great video with bad SEO gets zero views. Title, description, and tags are as important as the content itself.' }
  ]
};

// ── Help Modal Functions ─────────────────────────────────────
function openHelp() {
  const overlay = document.getElementById('help-overlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  switchHelpTab('quickstart');
  // Remove pulse after first open
  document.getElementById('help-fab').classList.remove('help-fab-pulse');
}

function closeHelp() {
  const overlay = document.getElementById('help-overlay');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function switchHelpTab(tabId) {
  // Update tab buttons
  document.querySelectorAll('.help-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tabId);
  });
  // Build panel content
  const body = document.getElementById('help-body');
  body.innerHTML = buildHelpPanel(tabId);
}

function buildHelpPanel(tabId) {
  switch (tabId) {
    case 'quickstart':  return buildHelpQuickStart();
    case 'sections':    return buildHelpSections();
    case 'workflows':   return buildHelpWorkflows();
    case 'shortcuts':   return buildHelpShortcuts();
    case 'tips':        return buildHelpTips();
    default:            return '';
  }
}

function buildHelpQuickStart() {
  return `
    <div class="help-panel active">
      <div class="help-welcome">
        <div class="help-welcome-icon">🎬</div>
        <h3>Welcome to The Fact Horizon Creator Package</h3>
        <p>Your all-in-one production framework for creating Hollywood-level educational documentaries with AI video tools. Here's how to get started in 3 easy steps.</p>
      </div>

      <div class="help-steps">
        <div class="help-step" onclick="closeHelp();navigateTo('prompt-builder');">
          <div class="help-step-num">1</div>
          <div class="help-step-content">
            <h4>Generate Your First Prompt</h4>
            <p>Go to <strong>Prompt Builder</strong>, describe a scene in plain English (e.g., "A lone astronaut floating in deep space with Earth visible in the distance"), pick your AI tool, and click Generate. That's it — you have your first cinematic prompt!</p>
            <span class="help-step-tag tag-beginner">Beginner — 60 seconds</span>
          </div>
        </div>

        <div class="help-step" onclick="closeHelp();navigateTo('script');">
          <div class="help-step-num">2</div>
          <div class="help-step-content">
            <h4>Write a Full Script</h4>
            <p>Use the <strong>Script Writer</strong> to structure your documentary. Fill in your topic, hook, and key points — the tool generates a complete script following the proven Hook → Question → Context → Explanation → End formula used by top creators.</p>
            <span class="help-step-tag tag-beginner">Beginner — 5 minutes</span>
          </div>
        </div>

        <div class="help-step" onclick="closeHelp();navigateTo('storyboard');">
          <div class="help-step-num">3</div>
          <div class="help-step-content">
            <h4>Build a Storyboard</h4>
            <p>Plan every scene with the <strong>Storyboard</strong> tool. Set camera angles, lighting, environments, and narration for each scene. Generate a complete production-ready storyboard prompt that you can feed directly into AI video generators.</p>
            <span class="help-step-tag tag-intermediate">Intermediate — 15 minutes</span>
          </div>
        </div>
      </div>

      <div class="info-box" style="margin-top:24px;">
        <span class="info-box-icon">💡</span>
        <div class="info-box-text">
          <strong>Pro Tip:</strong> Browse the <strong>Libraries</strong> section in the sidebar (Camera, Lighting, Color, Environment, Audio) to discover all available presets. Click any item to copy its prompt text — you can mix and match to create exactly the look you want.
        </div>
      </div>
    </div>`;
}

function buildHelpSections() {
  return `
    <div class="help-panel active">
      <div style="margin-bottom:20px;">
        <h3 style="font-size:1.1rem;font-weight:700;color:var(--text-primary);margin-bottom:6px;">📋 Section-by-Section Guide</h3>
        <p style="font-size:0.85rem;color:var(--text-secondary);">Click any section below to navigate directly to it. Each section has a specific purpose in your video production workflow.</p>
      </div>
      <div class="help-section-grid">
        ${HELP_DATA.sections.map(s => `
          <div class="help-section-card" onclick="closeHelp();navigateTo('${s.nav}');">
            <div class="help-section-card-header">
              <span class="help-section-card-icon">${s.icon}</span>
              <h4>${s.name}</h4>
            </div>
            <p>${s.desc}</p>
            <span class="help-section-key">Click to open →</span>
          </div>
        `).join('')}
      </div>
    </div>`;
}

function buildHelpWorkflows() {
  return `
    <div class="help-panel active">
      <div style="margin-bottom:20px;">
        <h3 style="font-size:1.1rem;font-weight:700;color:var(--text-primary);margin-bottom:6px;">🔄 Step-by-Step Workflows</h3>
        <p style="font-size:0.85rem;color:var(--text-secondary);">Follow these workflows for common tasks. Each one walks you through the exact steps needed.</p>
      </div>
      ${HELP_DATA.workflows.map(wf => `
        <div class="help-workflow">
          <div class="help-workflow-header">
            <h4>${wf.icon} ${wf.title}</h4>
            <span class="help-workflow-time">${wf.time}</span>
          </div>
          <div class="help-workflow-steps">
            ${wf.steps.map(s => `
              <div class="help-workflow-step">
                <span class="help-workflow-step-num">${s.num}.</span>
                <span>${s.text}</span>
              </div>
            `).join('')}
          </div>
          <div style="margin-top:10px;">
            <span class="help-step-tag tag-${wf.tag}">${wf.tag}</span>
          </div>
        </div>
      `).join('')}
    </div>`;
}

function buildHelpShortcuts() {
  return `
    <div class="help-panel active">
      <div style="margin-bottom:20px;">
        <h3 style="font-size:1.1rem;font-weight:700;color:var(--text-primary);margin-bottom:6px;">⌨️ Keyboard Shortcuts</h3>
        <p style="font-size:0.85rem;color:var(--text-secondary);">Use these keyboard shortcuts to navigate faster.</p>
      </div>
      <div class="card">
        <table class="help-shortcuts">
          <tbody>
            ${HELP_DATA.shortcuts.map(s => `
              <tr>
                <td>${s.keys.map(k => `<kbd>${k}</kbd>`).join(' + ')}</td>
                <td>${s.action}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <div class="info-box" style="margin-top:20px;">
        <span class="info-box-icon">💡</span>
        <div class="info-box-text">
          <strong>Navigation Tip:</strong> Use the <strong>sidebar</strong> on the left to jump between any section. The sidebar is organized into three groups: <strong>Dashboard & Builder</strong>, <strong>Libraries</strong> (reference material), and <strong>Creation & Production</strong> tools.
        </div>
      </div>

      <div class="card" style="margin-top:16px;">
        <div class="card-title" style="margin-bottom:14px;"><span class="icon">🖱</span> Mouse & Interaction Tips</div>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:var(--bg-tertiary);border-radius:var(--radius-sm);font-size:0.82rem;color:var(--text-secondary);">
            <strong style="color:var(--accent-light);min-width:100px;">Click Chips</strong>
            <span>In library sections, click any chip/preset to copy its prompt text to clipboard.</span>
          </div>
          <div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:var(--bg-tertiary);border-radius:var(--radius-sm);font-size:0.82rem;color:var(--text-secondary);">
            <strong style="color:var(--accent-light);min-width:100px;">📋 Copy Buttons</strong>
            <span>Every prompt output area has a Copy button. Click it to copy the full generated text.</span>
          </div>
          <div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:var(--bg-tertiary);border-radius:var(--radius-sm);font-size:0.82rem;color:var(--text-secondary);">
            <strong style="color:var(--accent-light);min-width:100px;">💾 Download</strong>
            <span>Save any prompt as a .txt file for your personal library.</span>
          </div>
          <div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:var(--bg-tertiary);border-radius:var(--radius-sm);font-size:0.82rem;color:var(--text-secondary);">
            <strong style="color:var(--accent-light);min-width:100px;">Ctrl+Click</strong>
            <span>In Prompt Builder dropdowns, hold Ctrl/Cmd to select multiple options.</span>
          </div>
        </div>
      </div>
    </div>`;
}

function buildHelpTips() {
  return `
    <div class="help-panel active">
      <div style="margin-bottom:20px;">
        <h3 style="font-size:1.1rem;font-weight:700;color:var(--text-primary);margin-bottom:6px;">💡 Pro Tips & Best Practices</h3>
        <p style="font-size:0.85rem;color:var(--text-secondary);">Expert advice to get the most out of this tool and create better videos.</p>
      </div>
      <div class="help-tips-grid">
        ${HELP_DATA.tips.map(tip => `
          <div class="help-tip">
            <div class="help-tip-icon">${tip.icon}</div>
            <h4>${tip.title}</h4>
            <p>${tip.desc}</p>
          </div>
        `).join('')}
      </div>

      <div class="info-box" style="margin-top:24px;">
        <span class="info-box-icon">🎬</span>
        <div class="info-box-text">
          <strong>Remember:</strong> This tool generates <strong>prompts</strong> for AI video generators — it doesn't create the videos themselves. Copy the prompts and paste them into tools like <strong>Google Veo 3</strong>, <strong>OpenAI Sora</strong>, <strong>Runway</strong>, <strong>Kling</strong>, or others to generate your actual video footage.
        </div>
      </div>
    </div>`;
}

// ── Keyboard Shortcuts ───────────────────────────────────────
document.addEventListener('keydown', (e) => {
  // F1 → Open help
  if (e.key === 'F1') {
    e.preventDefault();
    openHelp();
  }
  // Esc → Close help
  if (e.key === 'Escape') {
    closeHelp();
  }
});
