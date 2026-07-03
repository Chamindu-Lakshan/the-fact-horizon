// ============================================================
// THE FACT HORIZON — CREATOR PACKAGE v1.0
// Data Libraries for AI Video Prompt Generation
// ============================================================

const LIBRARIES = {

  // ── PART 4: CAMERA ──────────────────────────────────────────
  camera: {
    "Wide Shot":          "wide establishing shot, vast environment visible, subject small in frame",
    "Extreme Wide":       "extreme wide aerial shot, epic scale, landscape dominates frame",
    "Drone Aerial":       "cinematic drone aerial shot, sweeping overhead perspective, smooth gimbal movement",
    "FPV Drone":          "dynamic FPV drone shot, fast immersive first-person flight through environment",
    "Macro":              "extreme macro close-up, microscopic detail visible, shallow depth of field",
    "Close-up":           "tight close-up shot, subject fills frame, emotional detail captured",
    "Medium Shot":        "medium framing from waist up, balanced composition, natural perspective",
    "Orbit":              "smooth orbital camera movement circling the subject, 360-degree reveal",
    "Tracking":           "lateral tracking shot following subject movement, cinematic parallax",
    "Dolly":              "smooth dolly push-in or pull-out on rails, controlled perspective shift",
    "Crane":              "crane shot rising or descending vertically, dramatic reveal or exit",
    "Handheld":           "subtle handheld shot, organic movement, documentary realism",
    "POV":                "first-person point-of-view shot, immersive subjective perspective",
    "Satellite":          "satellite orbital perspective, Earth curvature visible, ultra-wide scale",
    "Microscope":          "microscope lens perspective, cellular or molecular scale, scientific detail",
    "Telescope":           "telescope deep-space perspective, celestial objects in frame, cosmic scale",
    "Overhead Top-Down":   "directly overhead top-down shot, flat perspective, geometric composition",
    "Dutch Angle":         "tilted Dutch angle shot, disorienting perspective, tension and unease",
    "Slow Motion":         "high-frame-rate slow motion, time stretched, every detail visible",
    "Time-lapse":          "accelerated time-lapse, hours compressed into seconds, environmental change"
  },

  // ── COMPOSITION ────────────────────────────────────────────
  composition: {
    "Rule of Thirds":      "composed using rule of thirds, subject at intersection points, balanced visual weight",
    "Golden Ratio":        "golden ratio spiral composition, natural mathematical harmony, organic flow",
    "Centered":            "centered symmetrical composition, subject at exact center, commanding presence",
    "Leading Lines":       "leading lines drawing eye to focal point, depth and direction, visual narrative",
    "Negative Space":      "minimal negative space composition, isolated subject, vast emptiness surrounding",
    "Symmetry":            "perfect bilateral symmetry, mirror-image balance, architectural precision",
    "Frame Within Frame":  "natural frame within frame, subject viewed through doorway arch or opening",
    "Foreground Framing":  "strong foreground element framing subject, layered depth, environmental context",
    "Diagonal":            "diagonal composition, dynamic energy, movement across frame",
    "S-Curve":             "S-curve composition, flowing organic lines, visual rhythm through landscape"
  },

  // ── CAMERA MOVEMENT ────────────────────────────────────────
  cameraMovement: {
    "Slow Push In":        "very slow cinematic push-in toward subject, gradual reveal, building tension",
    "Pull Out":            "slow pull-out revealing full environment, context established, scale revealed",
    "Orbit":               "smooth 360-degree orbit around subject, continuous perspective change",
    "Crane Up":            "crane rising vertically upward, expanding view, dramatic scale reveal",
    "Crane Down":          "crane descending from above, closing in on detail, intimate approach",
    "Truck Left":          "smooth lateral truck left, parallax shift, environmental sweep",
    "Truck Right":         "smooth lateral truck right, parallax shift, environmental sweep",
    "Arc Shot":            "arc movement around subject at distance, cinematic perspective rotation",
    "Parallax":            "multi-layer parallax movement, foreground and background shifting at different speeds",
    "Steadicam":           "fluid steadicam movement, floating smooth perspective, following action",
    "Slow FPV":            "slow controlled FPV drone flythrough, immersive environment exploration",
    "Drone Flythrough":    "continuous drone flythrough environment, unbroken shot, architectural passage",
    "Static Hold":         "locked-off static camera, no movement, subjects moving through frame",
    "Whip Pan":            "fast whip pan transition between subjects, motion blur, energetic",
    "Vertigo Dolly":       "dolly zoom vertigo effect, simultaneous push-in and zoom-out, disorienting"
  },

  // ── PART 6: LIGHTING ───────────────────────────────────────
  lighting: {
    "Golden Hour":         { prompt: "golden hour warm sunlight, long soft shadows, amber and orange tones, magical atmosphere", intensity: "medium-warm", direction: "low horizontal", contrast: "soft", shadows: "long warm", atmosphere: "magical warm" },
    "Blue Hour":           { prompt: "blue hour twilight lighting, deep blue and purple tones, cool ambient glow, peaceful dusk atmosphere", intensity: "low cool", direction: "diffused ambient", contrast: "low", shadows: "soft blue", atmosphere: "serene melancholy" },
    "Moonlight":           { prompt: "silver moonlight illumination, cool blue-white tones, deep shadows, nocturnal atmosphere, subtle lunar glow", intensity: "low silver", direction: "overhead", contrast: "high", shadows: "deep sharp", atmosphere: "mysterious quiet" },
    "Overcast":            { prompt: "soft overcast diffused light, even illumination, minimal shadows, neutral cool tones, cloud-filtered daylight", intensity: "medium diffused", direction: "omnidirectional", contrast: "very low", shadows: "minimal soft", atmosphere: "neutral calm" },
    "Laboratory":          { prompt: "bright clinical laboratory lighting, overhead fluorescent, sterile white-blue illumination, sharp detail visibility", intensity: "high bright", direction: "overhead direct", contrast: "medium", shadows: "minimal clean", atmosphere: "clinical precise" },
    "Torch Light":         { prompt: "warm flickering torch light, dancing shadows, amber glow on surfaces, medieval cave atmosphere", intensity: "medium warm", direction: "single source", contrast: "high", shadows: "flickering dramatic", atmosphere: "ancient mysterious" },
    "Fire Light":          { prompt: "warm firelight illumination, orange and amber dancing light, intimate glow, crackling warmth", intensity: "medium warm", direction: "below and sides", contrast: "high", shadows: "dancing warm", atmosphere: "intimate cozy" },
    "Storm":               { prompt: "dramatic storm lighting, intermittent lightning flashes, dark ominous clouds, blue-white bursts", intensity: "variable dramatic", direction: "overhead scattered", contrast: "extreme", shadows: "harsh intermittent", atmosphere: "ominous powerful" },
    "Deep Space":          { prompt: "harsh directional starlight in void of space, extreme contrast, deep black shadows, cold white highlights", intensity: "harsh directional", direction: "single star source", contrast: "extreme", shadows: "absolute black", atmosphere: "void isolation" },
    "Volcanic Glow":       { prompt: "ominous red-orange volcanic glow, underlit terrain, hellish atmosphere, smoke-filtered light", intensity: "medium intense", direction: "below ground level", contrast: "high", shadows: "red-orange dramatic", atmosphere: "apocalyptic primal" },
    "Aurora":              { prompt: "shimmering aurora borealis light, green and purple curtains dancing across sky, ethereal polar illumination", intensity: "medium ethereal", direction: "overhead sweeping", contrast: "low magical", shadows: "soft shifting", atmosphere: "ethereal magical" },
    "Neon":                { prompt: "vibrant neon artificial lighting, pink blue cyan purple, futuristic urban glow, reflective wet surfaces", intensity: "high colorful", direction: "multiple sources", contrast: "high", shadows: "colored sharp", atmosphere: "futuristic cyber" },
    "Sunset":              { prompt: "warm sunset golden light, horizon glow, orange pink purple gradient sky, silhouette potential", intensity: "medium warm", direction: "horizontal low", contrast: "medium", shadows: "long warm", atmosphere: "romantic transitional" },
    "Sunrise":             { prompt: "fresh sunrise morning light, soft warm first rays, dew sparkle, new day atmosphere, gentle awakening", intensity: "medium fresh", direction: "horizontal rising", contrast: "soft", shadows: "long gentle", atmosphere: "hopeful fresh" },
    "Underwater Caustics": { prompt: "dancing underwater caustic light patterns, rippling sunlight through water surface, aquatic blue-green illumination", intensity: "medium shifting", direction: "overhead filtered", contrast: "low shifting", shadows: "rippling moving", atmosphere: "aquatic dreamlike" },
    "Bioluminescence":     { prompt: "soft bioluminescent glow from living organisms, ethereal blue-green light in darkness, organic illumination", intensity: "low organic", direction: "distributed ambient", contrast: "low", shadows: "soft organic", atmosphere: "magical alive" },
    "Silhouette":          { prompt: "strong backlight silhouette lighting, subject in pure black against bright background, dramatic outline", intensity: "high behind", direction: "directly behind subject", contrast: "extreme", shadows: "total subject black", atmosphere: "dramatic mysterious" },
    "Rembrandt":           { prompt: "Rembrandt lighting, single key light creating triangle of light on shadow-side cheek, classical portraiture", intensity: "focused warm", direction: "45-degree key light", contrast: "high", shadows: "dramatic defined", atmosphere: "classical intimate" },
    "Volumetric":          { prompt: "volumetric god-rays cutting through atmosphere, visible light beams in fog or dust, atmospheric depth", intensity: "medium dramatic", direction: "directional beams", contrast: "high", shadows: "defined beams", atmosphere: "epic atmospheric" },
    "Underwater Darkness": { prompt: "deep ocean darkness, minimal bioluminescent accent lights, abyssal pressure, crushing void", intensity: "very low", direction: "scattered minimal", contrast: "extreme", shadows: "overwhelming", atmosphere: "terrifying vast" }
  },

  // ── PART 7: COLOR GRADING ──────────────────────────────────
  colorGrading: {
    "Netflix Documentary":   "Netflix documentary color grade, rich blacks, controlled highlights, warm skin tones, cinematic contrast, teal-orange balance",
    "National Geographic":   "National Geographic color grade, natural vibrant colors, saturated greens and blues, warm earth tones, editorial clarity",
    "BBC Earth":             "BBC Earth color grade, lush natural saturation, deep greens, vivid wildlife colors, premium broadcast quality",
    "IMAX":                  "IMAX large-format color grade, maximum dynamic range, ultra-vivid colors, incredible depth and clarity, theatrical impact",
    "Space Documentary":     "space documentary color grade, deep blacks, cold blue highlights, nebula color accents, infinite void contrast",
    "Ancient History":       "ancient history color grade, warm sepia undertones, sandstone and gold, aged parchment warmth, archaeological atmosphere",
    "Cold Science":          "cold science color grade, sterile blue-white, clinical precision, desaturated warmth, laboratory neutrality",
    "Forest":                "forest color grade, rich deep greens, warm sun-dappled highlights, organic earth browns, natural saturation",
    "Ocean":                 "ocean color grade, deep blues and teals, aquamarine highlights, coral accent colors, aquatic depth",
    "Cyberpunk":             "cyberpunk color grade, neon pink and cyan, deep purple shadows, high contrast, futuristic urban glow",
    "Retro Analog":          "retro analog film grade, faded colors, warm highlights, lifted blacks, film grain texture, nostalgic vintage",
    "Minimal Clean":         "minimal clean color grade, neutral whites, soft contrast, desaturated palette, Scandinavian simplicity",
    "Vintage Film":          "vintage 35mm film stock grade, warm amber highlights, cool shadows, subtle grain, organic color transitions",
    "Horror":                "horror color grade, desaturated cold tones, green-gray shadows, high contrast, unsettling atmosphere",
    "Warm Documentary":      "warm documentary grade, golden undertones, comforting saturation, natural skin tones, inviting warmth",
    "Cold Blue":             "cold blue color grade, icy highlights, steel blue midtones, clinical precision, winter atmosphere",
    "Apocalyptic":           "apocalyptic color grade, orange dust haze, blown-out highlights, desaturated landscape, end-of-world atmosphere",
    "Dreamlike":             "dreamlike soft color grade, pastel highlights, gentle bloom, soft contrast, ethereal atmosphere",
    "Military/Ops":          "military operations color grade, olive-drab greens, tactical gray, night-vision green accents, gritty realism"
  },

  // ── PART 8: ENVIRONMENTS ───────────────────────────────────
  environments: {
    "Forest":              "dense temperate forest, towering ancient trees, dappled sunlight through canopy, moss-covered ground, misty atmosphere",
    "Rainforest":          "lush tropical rainforest, massive green canopy, exotic flowers, vines, humidity haze, rich biodiversity",
    "Deep Space":          "infinite void of deep space, distant stars, nebula clouds, cosmic dust, absolute darkness between galaxies",
    "Mars":                "Martian landscape, red iron-oxide terrain, rocky desert, thin atmosphere, distant mountains, rusty sky",
    "Moon":                "lunar surface, grey regolith, cratered terrain, Earth visible in sky, harsh sunlight, absolute silence",
    "Ocean Surface":       "vast open ocean surface, rolling waves, horizon line, salt spray, deep blue water, sky reflection",
    "Deep Ocean":          "abyssal deep ocean, crushing darkness, bioluminescent creatures, hydrothermal vents, alien landscape",
    "Laboratory":          "modern scientific laboratory, glass equipment, chemical solutions, precision instruments, sterile white environment",
    "Ancient Rome":        "ancient Roman city, marble columns, forum plaza, togas, chariots, Mediterranean sunlight, grand architecture",
    "Ancient Egypt":       "ancient Egyptian landscape, golden sand dunes, pyramids, hieroglyphic walls, Nile river, blazing sun",
    "Medieval":            "medieval European setting, stone castles, torchlit corridors, market squares, armored knights, cobblestone streets",
    "Future City":         "futuristic megacity, towering glass skyscrapers, flying vehicles, holographic advertisements, neon lights, vertical gardens",
    "Volcano":             "active volcanic landscape, flowing lava rivers, smoke and ash plumes, red-hot magma, scorched earth, dangerous beauty",
    "Desert":              "vast empty desert, endless sand dunes, heat shimmer, mirage effect, blazing sun, minimal life",
    "Arctic":              "frozen arctic landscape, ice sheets, glaciers, northern lights, polar bears, extreme cold, white expanse",
    "Jungle":              "dense tropical jungle, giant ferns, colorful birds, hanging vines, humid air, canopy layers",
    "Microscopic World":   "microscopic cellular world, organelles, cell membranes, molecular structures, internal biological architecture",
    "Human Body Interior": "inside human body, blood vessels, organs, cellular structures, biological processes, internal anatomy",
    "DNA Structure":       "molecular DNA double helix, base pairs, sugar-phosphate backbone, genetic code visualization, molecular bonds",
    "Brain Interior":      "inside human brain, neural networks, synapses firing, electrical impulses, cerebral cortex terrain",
    "Quantum World":       "quantum mechanical realm, probability clouds, particle-wave duality, subatomic interactions, abstract physics visualization",
    "Crystal Cave":        "massive crystal cave, giant quartz formations, prismatic light refraction, underground cathedral of minerals",
    "Coral Reef":          "vibrant coral reef, tropical fish, anemones, clear water, sunlight filtering through water surface",
    "Inside a Volcano":    "inside volcanic caldera, magma chamber, glowing walls, extreme heat distortion, liquid rock below",
    "Abandoned City":      "post-apocalyptic abandoned city, overgrown buildings, cracked streets, nature reclaiming civilization, eerie silence",
    "Space Station":       "interior of space station, zero gravity, observation windows with Earth view, technology panels, floating objects",
    "Submarine Interior":  "inside submarine, porthole windows, deep ocean view, mechanical instruments, pressure hull, blue-green filtered light",
    "Library":             "grand ancient library, floor-to-ceiling bookshelves, warm lamp light, wooden ladders, dust motes in light beams",
    "Underwater City":     "sunken underwater city, coral-encrusted buildings, fish swimming through streets, filtered light, ancient ruins"
  },

  // ── PART 9: MUSIC ──────────────────────────────────────────
  music: {
    "Wonder":     "sweeping orchestral wonder theme, piano and strings crescendo, sense of awe and discovery",
    "Discovery":  "curious pizzicato and woodwinds, light exploration theme, sense of journey and revelation",
    "Hope":       "uplifting piano melody building to full orchestra, emotional warmth, triumphant resolution",
    "Epic":       "massive orchestral epic score, brass fanfare, thundering percussion, cinematic grandeur",
    "Suspense":   "tension-building ambient score, low strings, heartbeat percussion, rising unease",
    "Mystery":    "enigmatic piano and ambient pads, noir atmosphere, questions without answers",
    "Danger":     "aggressive percussion, dissonant strings, warning brass, imminent threat energy",
    "Ancient":    "ethnic instruments, drone harmonics, primitive drums, time-period appropriate atmosphere",
    "Future":     "electronic synthesis, arpeggiated sequences, digital textures, forward-looking sonic palette",
    "Scientific": "precise rhythmic patterns, mathematical sequences, clean electronic tones, intellectual atmosphere",
    "Emotional":  "solo piano with string quartet, intimate and vulnerable, deep emotional resonance",
    "Minimal":    "sparse piano notes, single instrument, vast silence between notes, contemplative space",
    "Triumphant": "full orchestra triumphant finale, brass and percussion climax, achievement and victory",
    "Melancholy": "minor-key strings and piano, bittersweet melody, beautiful sadness, reflective mood",
    "Ambient":    "floating ambient textures, evolving pads, no rhythm, pure atmosphere and texture",
    "Dark":       "deep bass drones, industrial textures, ominous undertones, threatening atmosphere"
  },

  // ── SOUND EFFECTS ──────────────────────────────────────────
  soundEffects: {
    "Wind":          "atmospheric wind ambience, gentle breeze to strong gusts, environmental movement",
    "Leaves":        "rustling leaves, forest canopy movement, organic natural texture",
    "Fire":          "crackling fire, wood popping, ember glow sound, warm fireplace ambience",
    "Ocean Waves":   "ocean wave cycles, surf crashing, tide rolling, coastal ambience",
    "Rain":          "rainfall ambience, light drizzle to heavy downpour, water droplets on surfaces",
    "Lightning":     "thunder crack, electrical storm, distant rumble to close strike",
    "Heartbeat":     "human heartbeat rhythm, steady pulse, life-affirming biological sound",
    "Computer":      "computer processing sounds, data streams, digital beeps, technology ambience",
    "Electricity":   "electrical arcing, power surge, Tesla coil, high-voltage energy",
    "Stone":         "stone grinding, rock falling, geological movement, heavy impact",
    "Glass":         "glass shattering, crystal resonance, delicate transparency sound",
    "Footsteps":     "footsteps on various surfaces, gravel, wood, metal, snow, concrete",
    "Animals":       "animal vocalizations, creature sounds, wildlife ambience",
    "Birds":         "birdsong chorus, morning dawn chorus, tropical bird calls, raptor screech",
    "Machines":      "industrial machinery, gears turning, hydraulic systems, mechanical rhythm",
    "Space Ambient": "deep space low-frequency ambience, cosmic hum, void silence with subtle tones",
    "Water Drips":   "cave water drips, echo, stalactite drops, underground rhythm",
    "Insects":       "insect chorus, cicadas, buzzing wings, night cricket sounds",
    "Crowd":         "crowd murmur, public gathering, ambient human activity",
    "Creaking":      "old wood creaking, ship hull stress, structure settling, tension sound"
  },

  // ── PART 10: NARRATORS ─────────────────────────────────────
  narrators: {
    "BBC Documentary":     { style: "authoritative British narration, measured pace, subtle gravitas, professional warmth, David Attenborough-inspired", speed: "measured 130wpm", emotion: "restrained wonder", pauses: "dramatic before key facts", emphasis: "understated key words", pronunciation: "Received Pronunciation" },
    "National Geographic": { style: "warm American narration, adventurous spirit, genuine curiosity, accessible expertise, explorer's enthusiasm", speed: "natural 145wpm", emotion: "authentic excitement", pauses: "before reveals", emphasis: "natural conversational", pronunciation: "General American" },
    "Calm Professor":      { style: "calm academic narration, patient explanation, gentle wisdom, approachable authority, classroom intimacy", speed: "slow 120wpm", emotion: "gentle enthusiasm", pauses: "after complex concepts", emphasis: "key terminology", pronunciation: "clear academic" },
    "Curious Explorer":    { style: "excited explorer narration, genuine discovery moments, infectious wonder, adventure energy", speed: "varied 140-160wpm", emotion: "high curiosity", pauses: "before surprises", emphasis: "discovery words", pronunciation: "energetic clear" },
    "Science Teacher":     { style: "friendly teacher narration, clear explanations, encouraging tone, simplifying complex ideas", speed: "clear 135wpm", emotion: "patient excitement", pauses: "for comprehension", emphasis: "learning points", pronunciation: "precise accessible" },
    "Ancient Storyteller": { style: "deep resonant narration, mythic quality, ancient wisdom, campfire intimacy, oral tradition cadence", speed: "slow deliberate 110wpm", emotion: "reverent mystery", pauses: "long dramatic", emphasis: "mythic words", pronunciation: "formal classical" },
    "Future AI":           { style: "precise synthetic narration, slight digital processing, emotionless with hints of curiosity, machine intelligence", speed: "precise 150wpm", emotion: "subtle artificial", pauses: "calculated", emphasis: "data points", pronunciation: "crisp synthetic" },
    "Minimal Documentary": { style: "minimal narration, long silences, sparse words, visuals carry story, whispered tone", speed: "very slow 100wpm", emotion: "contemplative calm", pauses: "extended reflective", emphasis: "whispered key words", pronunciation: "barely articulated" }
  },

  // ── SUBTITLE STYLES ────────────────────────────────────────
  subtitles: {
    "Clean Modern":     "clean sans-serif font, centered bottom, white text with subtle shadow, no background, 42px",
    "Cinematic Bold":   "bold cinematic font, centered bottom-third, white with dark outline, slight letter-spacing, 48px",
    "Documentary":      "documentary-style lower third subtitles, thin white text, minimal shadow, left-aligned option, 38px",
    "Minimal Italic":   "minimal italic serif font, bottom-center, light gray with soft shadow, elegant simplicity, 40px",
    "Tech HUD":         "futuristic HUD-style subtitles, monospace font, cyan glow, slight transparency, bottom-left, 36px",
    "News Ticker":      "news-style lower-third ticker bar, dark background strip, white text, professional broadcast, 34px",
    "Vintage Typewriter": "typewriter-style monospace font, slightly uneven, cream color, paper texture feel, 40px",
    "Karaoke Highlight":  "karaoke-style word-by-word highlighting, each word lights up as spoken, yellow active highlight, 44px"
  },

  // ── NARRATION STYLES ───────────────────────────────────────
  narrationStyles: {
    "Hook Opening":     { template: "Did you know that [SURPRISING FACT]? What if I told you that [PROVOCATIVE QUESTION]?", purpose: "Grab attention in first 5 seconds" },
    "Shocking Stat":    { template: "[NUMBER] percent of [SUBJECT] [UNEXPECTED OUTCOME]. And scientists have no idea why.", purpose: "Create immediate curiosity gap" },
    "In Media Res":     { template: "Right now, inside your [BODY PART], [DRAMATIC PROCESS] is happening that you will never feel.", purpose: "Drop viewer into middle of action" },
    "Contradiction":    { template: "Everything you think you know about [TOPIC] is wrong. Here's what's actually happening.", purpose: "Challenge assumptions immediately" },
    "Scale Shift":      { template: "Imagine shrinking down to the size of an atom. Now look up. What you'd see would change everything.", purpose: "Shift perspective dramatically" },
    "Time Travel":      { template: "[NUMBER] years ago, [HISTORICAL EVENT] changed the course of human history forever.", purpose: "Establish temporal context" },
    "Personal Address":  { template: "Your body is doing something incredible right now — and you have absolutely no idea.", purpose: "Create personal connection" },
    "Mystery Setup":    { template: "Deep beneath the ocean surface, scientists found something that shouldn't exist.", purpose: "Build mystery and intrigue" }
  },

  // ── STORYTELLING FORMULA ───────────────────────────────────
  storytellingBeats: [
    { name: "Hook",           timing: "0:00-0:10", purpose: "Capture attention with surprising fact or provocative question", intensity: 10 },
    { name: "Promise",        timing: "0:10-0:25", purpose: "Tell viewer what they'll learn or experience", intensity: 8 },
    { name: "Context",        timing: "0:25-1:00", purpose: "Establish the world, background, and stakes", intensity: 6 },
    { name: "Rising Action",  timing: "1:00-3:00", purpose: "Build through discoveries, each bigger than the last", intensity: 7 },
    { name: "Midpoint Wow",   timing: "3:00-3:30", purpose: "Mind-blowing fact or visual that re-hooks attention", intensity: 10 },
    { name: "Deep Dive",      timing: "3:30-6:00", purpose: "Detailed explanation with compelling visuals", intensity: 7 },
    { name: "Emotional Peak", timing: "6:00-7:00", purpose: "Most emotionally resonant moment of the video", intensity: 9 },
    { name: "Resolution",     timing: "7:00-8:00", purpose: "Bring understanding full circle, answer the core question", intensity: 8 },
    { name: "Mind-Blow",      timing: "8:00-8:30", purpose: "Final surprising fact that reframes everything", intensity: 10 },
    { name: "CTA",            timing: "8:30-9:00", purpose: "Call to action that feels natural, not forced", intensity: 6 }
  ],

  // ── PSYCHOLOGY TECHNIQUES ──────────────────────────────────
  psychology: {
    "Curiosity Gap":     "Open a question in the viewer's mind that can only be closed by watching more. Never answer a question immediately.",
    "Open Loops":        "Start multiple narrative threads. Close them one by one, saving the biggest for the end.",
    "Surprise":          "Violate expectations every 30-60 seconds. If viewers can predict what's next, they leave.",
    "Emotional Peaks":   "Create at least 3 emotional peaks per video. Emotion drives sharing and memory.",
    "Pattern Interrupt": "Break visual or narrative patterns suddenly. Change music, pace, or visual style to re-engage attention.",
    "Story Rhythm":      "Alternate between tension and release, fast and slow, simple and complex. Monotony kills retention.",
    "Social Proof":      "Reference experts, institutions, or millions of people who believe/find/confirm something.",
    "Scarcity":          "Imply this information is rare, newly discovered, or not widely known.",
    "Anchoring":         "Start with an extreme comparison to make your main point seem reasonable.",
    "Narrative Transport": "Use vivid sensory details so the viewer mentally 'enters' the scene rather than watching from outside."
  },

  // ── THUMBNAIL TEMPLATES ────────────────────────────────────
  thumbnails: {
    "Space":       { layout: "Subject left-third, space background right, bold text top, red/orange accent arrow or circle", colors: "deep blue-black, white text, red accent" },
    "History":     { layout: "Historical artifact or figure center, dramatic lighting, text overlay bottom", colors: "warm sepia tones, gold text, dark vignette" },
    "Science":     { layout: "Scientific visualization center, magnified detail, clean modern text right", colors: "white background, blue accent, clean modern" },
    "Technology":  { layout: "Tech component or circuit close-up, neon highlights, futuristic text overlay", colors: "dark background, neon cyan/magenta, tech font" },
    "Human Body":  { layout: "Anatomical cross-section or X-ray style, body part highlighted, text overlay", colors: "medical blue, red accent, clinical clean" },
    "What If":     { layout: "Split reality or impossible scenario, dramatic comparison, question text prominent", colors: "high contrast, yellow/red text, dramatic" },
    "Nature":      { layout: "Stunning nature close-up or wide shot, minimal text, visual-first approach", colors: "natural greens and blues, white text, earth tones" },
    "Mystery":     { layout: "Dark moody scene, question mark or silhouette, mysterious lighting, bold text", colors: "dark tones, white/red text, shadowy" }
  },

  // ── VIDEO QUALITY PRESETS ──────────────────────────────────
  qualityPresets: {
    "Ultra Cinematic 4K":  "masterpiece, best quality, ultra-detailed, photorealistic, cinematic 4K, film grain, anamorphic lens, professional color grading, volumetric lighting, ray tracing, 8K textures",
    "Documentary Real":    "photorealistic documentary footage, natural lighting, handheld realism, broadcast quality, 4K detail, authentic textures, no artificial effects",
    "Hyper Real":          "hyperrealistic, indistinguishable from real footage, extreme detail, 8K resolution, perfect lighting, flawless composition, HDR",
    "Stylized Premium":    "premium stylized visual, cinematic quality with artistic interpretation, controlled color palette, intentional visual style, high-end production",
    "Scientific Accurate": "scientifically accurate visualization, correct proportions, authentic material properties, research-quality detail, educational clarity"
  }
};

// ── PROMPT TEMPLATES ─────────────────────────────────────────
const PROMPT_TEMPLATES = {
  veoMaster: {
    name: "Veo Master Prompt",
    description: "Complete modular prompt system for Google Veo",
    structure: `[QUALITY]

[SCENE DESCRIPTION]

[ENVIRONMENT]
{environment}

[CAMERA]
Shot Type: {camera}
Movement: {cameraMovement}
Composition: {composition}

[LIGHTING]
{lighting}

[COLOR GRADING]
{colorGrading}

[VISUAL STYLE]
{visualStyle}

[DETAILS]
{details}

[NEGATIVE]
Negative: {negative}`
  },

  soraMaster: {
    name: "Sora Master Prompt",
    description: "Optimized for OpenAI Sora",
    structure: `{quality}

A cinematic {camera} shot with {cameraMovement} movement. {environment}.

{lighting}. {colorGrading}.

{composition}. {details}

Visual style: {visualStyle}.`
  },

  sceneBuilder: {
    name: "Scene Builder",
    description: "Scene-by-scene prompt for storyboards",
    structure: `SCENE {sceneNumber} — {sceneTitle}
Duration: {duration}
Purpose: {purpose}

VISUAL PROMPT:
{quality}. {camera} with {cameraMovement}. {environment}.
{lighting}. {colorGrading}. {composition}.

NARRATION:
"{narration}"

AUDIO:
Music: {music}
SFX: {soundEffects}

TRANSITION:
{transition}

EMOTION: {emotion}`
  }
};

// ── NEGATIVE PROMPTS ─────────────────────────────────────────
const NEGATIVE_PROMPTS = {
  standard:   "blurry, low quality, distorted, watermark, text overlay, cartoon, anime, painting, illustration, 3D render, unrealistic, oversaturated, noisy, grainy, artifacts, deformed, ugly, disfigured",
  documentary: "cartoon, anime, illustration, 3D render, unrealistic colors, oversaturated, text, watermark, logo, timestamp, camera overlay, shaky footage, out of focus",
  cinematic:   "blurry, low quality, flat lighting, amateur, handheld shake, lens flare, chromatic aberration, noise, grain, artifacts, text overlay, watermark",
  scientific:  "artistic interpretation, stylized, cartoon, anime, abstract, imprecise proportions, wrong scale, inaccurate colors, fantasy elements"
};

// ── TRANSITION TYPES ─────────────────────────────────────────
const TRANSITIONS = {
  "Cut":              "hard cut, immediate scene change",
  "Dissolve":         "smooth cross-dissolve, two-second blend between scenes",
  "Fade to Black":    "fade to black, two-second darkness, fade into next scene",
  "Match Cut":        "match cut, visual element from one scene morphs into next",
  "Whip Pan":         "fast whip pan blur transition between scenes",
  "Zoom Transition":  "digital zoom through subject into next scene",
  "Light Leak":       "warm light leak flash transition between scenes",
  "Morph":            "morphing transition, one shape transforms into another",
  "Clock Wipe":       "clock wipe, circular reveal of next scene",
  "Ink Bleed":        "ink bleeding transition, organic liquid movement between scenes"
};
