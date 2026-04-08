const storageKey = "itec-lab-tracker-state-v1";
const presentationKey = "itec-lab-tracker-presentation-mode-v1";
const futureSkinKey = "itec-lab-tracker-future-skin-v1";

const defaultLabs = [
  {
    id: "robotics",
    name: "Robotics Lab",
    shortName: "Robotics",
    status: "proposed",
    visual: "robotics",
    outlook: "New resource planned for ITEC",
    summary:
      "Advanced robotics training environment with industrial and collaborative systems intended as a signature center asset.",
    equipment: [
      { name: "Industrial and collaborative robots", ownership: "purchase" },
      { name: "End effectors and tooling", ownership: "purchase" },
      { name: "PLC/control stations", ownership: "purchase" },
      { name: "Sensors and vision systems", ownership: "purchase" },
      { name: "Conveyor or material handling demo units", ownership: "purchase" },
      { name: "Electrical/pneumatic connections", ownership: "purchase" },
      { name: "Programming workstations", ownership: "purchase" },
    ],
    space: [
      "Robot training cells",
      "Safety guarding and barriers",
      "Programming workstations for learn-and-do instruction",
      "Storage for parts, tools, and fixtures",
    ],
    notes: [
      "Document identifies this as new resources to be obtained with NIST funds for the center.",
      "Likely a flagship lab for hands-on automation, controls, and manufacturing integration.",
    ],
  },
  {
    id: "hvac",
    name: "HVAC Lab",
    shortName: "HVAC",
    status: "planned",
    visual: "hvac",
    outlook: "Strong fit for ITEC pending final move scope",
    summary:
      "Applied building systems lab focused on HVAC equipment, controls, diagnostics, and smart integration.",
    equipment: [
      { name: "Residential/commercial HVAC training units", ownership: "owned" },
      { name: "Building automation controls", ownership: "investigate" },
      { name: "Thermostats and control panels", ownership: "owned" },
      { name: "Refrigeration training components", ownership: "owned" },
      { name: "Smart HVAC integration equipment", ownership: "investigate" },
      { name: "Diagnostic tools", ownership: "owned" },
      { name: "Sensors and monitoring devices", ownership: "investigate" },
    ],
    space: [
      "Air handling and ductwork mockups with network and IoT integration",
      "Electrical troubleshooting stations",
      "Ventilation and code-safe utility connections",
    ],
    notes: [
      "The document does not label HVAC as under investigation, so it is seeded here as likely planned for the center.",
      "Could connect directly to digital twin, smart building, and IoT learning experiences.",
    ],
  },
  {
    id: "cnc",
    name: "CNC Lab",
    shortName: "CNC",
    status: "planned",
    visual: "cnc",
    outlook: "Candidate for advanced manufacturing zone",
    summary:
      "Machining and digital manufacturing environment with CNC equipment, programming, and inspection workflows.",
    equipment: [
      { name: "CNC mills and/or lathes", ownership: "owned" },
      { name: "CAM/programming workstations", ownership: "owned" },
      { name: "Measuring and inspection equipment", ownership: "owned" },
      { name: "Network connection for digital manufacturing workflows", ownership: "investigate" },
    ],
    space: [
      "Tooling and tool storage",
      "Raw material storage",
      "Workholding fixtures",
      "Coolant/chip management",
      "Safety enclosures",
      "Material handling carts/tables",
    ],
    notes: [
      "Pairs well with robotics, smart factory, and simulation spaces.",
      "A later version of the tracker should add utility needs and floor loading considerations.",
    ],
  },
  {
    id: "iot",
    name: "IoT Lab",
    shortName: "IoT",
    status: "proposed",
    visual: "iot",
    outlook: "New resource planned for ITEC",
    summary:
      "Connected systems lab focused on sensors, controllers, gateways, dashboards, and industrial interfaces.",
    equipment: [
      { name: "Sensors and sensor kits", ownership: "purchase" },
      { name: "Edge devices/controllers", ownership: "purchase" },
      { name: "PLC/industrial control interfaces", ownership: "purchase" },
      { name: "Wireless networking devices", ownership: "purchase" },
      { name: "Gateways and data collection hardware", ownership: "purchase" },
      { name: "Cloud/data dashboard workstations", ownership: "purchase" },
      { name: "SCADA / controls exposure", ownership: "investigate" },
    ],
    space: [
      "Embedded systems benches",
      "Smart building / smart infrastructure demo rig area",
      "Cybersecurity test environment",
      "Power supplies and bench testing stations",
    ],
    notes: [
      "Document identifies this as new resources to be obtained with NIST funds for the center.",
      "Could serve as a bridge between networking, cybersecurity, HVAC, robotics, and analytics programs.",
    ],
  },
  {
    id: "gis",
    name: "GIS Lab",
    shortName: "GIS",
    status: "investigation",
    visual: "gis",
    outlook: "Needs stay-vs-move decision",
    summary:
      "Geospatial analysis and mapping environment with workstations, displays, field devices, and civic data access.",
    equipment: [
      { name: "High-performance computer workstations", ownership: "investigate" },
      { name: "Large-format displays", ownership: "investigate" },
      { name: "GIS and mapping software access", ownership: "owned" },
      { name: "Data visualization stations", ownership: "investigate" },
      { name: "Drone data processing capability in collaboration with UAS", ownership: "investigate" },
      { name: "GPS/GNSS field collection devices", ownership: "investigate" },
      { name: "Shared regional/civic/environmental data access", ownership: "owned" },
    ],
    space: [
      "Printing/plotting access",
      "Collaboration tables for team projects",
      "Storage for field kits",
    ],
    notes: [
      "The source document gives a full program sketch but no clear move decision, so this is marked under investigation.",
      "Could remain distributed if plotters, field kits, or partner workflows make relocation less practical.",
    ],
  },
  {
    id: "xr",
    name: "AR/VR / XR Space",
    shortName: "XR",
    status: "planned",
    visual: "xr",
    outlook: "Strong shared-use center asset",
    summary:
      "Immersive technology zone for simulation, content creation, demonstrations, and cross-program visualization.",
    equipment: [
      { name: "VR/AR headsets", ownership: "investigate" },
      { name: "High-performance computers", ownership: "investigate" },
      { name: "Simulation software access", ownership: "investigate" },
      { name: "Motion tracking/interaction tools", ownership: "purchase" },
      { name: "Content creation/editing workstations", ownership: "investigate" },
    ],
    space: [
      "Open flexible floor area",
      "Projection or display walls",
      "3D modeling capability",
      "Seating/collaboration zone for demos and debrief",
      "Secure equipment storage",
    ],
    notes: [
      "This space likely supports healthcare simulation, digital twin, digital media, and workforce demonstrations.",
      "A future version should track headset counts, room-scale zones, and faculty/shared scheduling needs.",
    ],
  },
  {
    id: "data-center",
    name: "Data Center",
    shortName: "Data Center",
    status: "proposed",
    visual: "data",
    outlook: "New infrastructure resource for ITEC",
    summary:
      "Instructional data center environment with servers, networking, storage, and managed teaching access.",
    equipment: [
      { name: "Servers and virtualization environment", ownership: "purchase" },
      { name: "Additional servers", ownership: "purchase" },
      { name: "Switches and routers", ownership: "purchase" },
      { name: "Storage systems", ownership: "purchase" },
      { name: "Workbench/service area", ownership: "investigate" },
    ],
    space: [
      "Structured cabling",
      "Power management / UPS",
      "Cooling/environmental monitoring",
      "Patch panels",
      "Server racks",
      "Observation/instruction area for teaching",
      "Remote access capability for students",
    ],
    notes: [
      "Document identifies this as new resources to be obtained with NIST funds for the center.",
      "Could anchor networking, cybersecurity, cloud, systems administration, and remote lab experiences.",
    ],
  },
  {
    id: "network-fiber",
    name: "Network Engineering / Fiber Optics Area",
    shortName: "Network / Fiber",
    status: "planned",
    visual: "network",
    outlook: "Likely core technical area in ITEC",
    summary:
      "Hands-on network and fiber training environment with racks, tools, cabling stations, and wireless equipment.",
    equipment: [
      { name: "Routers, switches, and firewalls", ownership: "owned" },
      { name: "Rack infrastructure", ownership: "owned" },
      { name: "Copper and fiber cabling stations", ownership: "owned" },
      { name: "Network testing and diagnostic tools", ownership: "owned" },
      { name: "Wireless networking equipment", ownership: "investigate" },
      { name: "Fiber training tools", ownership: "owned" },
    ],
    space: [
      "Patch panels and termination hardware",
      "Fiber splicing/termination practice area",
      "Telecom cabinets",
      "Workbenches",
      "Secure lab network environment",
    ],
    notes: [
      "Naturally aligns with the data center, cybersecurity, and IoT spaces.",
      "A later planning pass should note any separation needed between noisy bench work and adjacent classrooms.",
    ],
  },
  {
    id: "soc",
    name: "Security Operations Center",
    shortName: "SOC",
    status: "planned",
    visual: "security",
    outlook: "Likely center showcase and teaching environment",
    summary:
      "Cybersecurity monitoring and incident response space designed for visible, collaborative, real-time learning.",
    equipment: [
      { name: "Monitoring wall/displays", ownership: "investigate" },
      { name: "Analyst workstations", ownership: "owned" },
      { name: "Access control/security hardware demos", ownership: "investigate" },
      { name: "SIEM/log analysis environment", ownership: "owned" },
    ],
    space: [
      "Secure network environment",
      "Incident response training tools",
      "Cyber range/simulation environment",
      "Forensics workspace",
      "Collaboration and briefing area",
    ],
    notes: [
      "Good candidate for tours, employer engagement, and interdisciplinary scenarios with networking and IoT.",
      "Could share backend infrastructure with the instructional data center.",
    ],
  },
  {
    id: "smart-factory",
    name: "Smart Factory / RFID / Supply Chain Operations Lab",
    shortName: "Smart Factory",
    status: "planned",
    visual: "factory",
    outlook: "Likely major experiential lab for ITEC",
    summary:
      "Integrated operations lab combining RFID, conveyor systems, PLC/HMI stations, robotics touchpoints, and process tracking.",
    equipment: [
      { name: "RFID readers and tags", ownership: "purchase" },
      { name: "Scanning stations", ownership: "purchase" },
      { name: "Inventory tracking software access", ownership: "investigate" },
      { name: "Conveyor/material handling systems", ownership: "purchase" },
      { name: "PLC/HMI stations", ownership: "investigate" },
      { name: "Industrial sensors", ownership: "purchase" },
      { name: "Robotics integration points", ownership: "purchase" },
      { name: "Machine monitoring displays", ownership: "investigate" },
      { name: "Quality inspection tools", ownership: "investigate" },
      { name: "Digital production tracking", ownership: "investigate" },
    ],
    space: [
      "Warehouse/supply chain demo setups",
      "Conveyor/material handling systems area",
      "Smart shelf or asset tracking examples",
      "Robotics integration area",
      "Networked data capture points",
      "Labeling/printing capability",
      "Integration with smart factory and data systems",
      "Automated production cell demos",
      "Safety systems",
      "Lean/process improvement space",
    ],
    notes: [
      "The planning document explicitly calls RFID a defined focus area.",
      "This lab could become a centerpiece linking manufacturing, logistics, analytics, and automation.",
    ],
  },
  {
    id: "digital-twin",
    name: "Digital Twin / Simulation Lab",
    shortName: "Digital Twin",
    status: "investigation",
    visual: "twin",
    outlook: "May be combined with other data/software spaces",
    summary:
      "Simulation-driven environment for system modeling, live data feeds, and cross-lab visualization.",
    equipment: [
      { name: "Simulation workstations", ownership: "investigate" },
      { name: "3D modeling tools", ownership: "owned" },
      { name: "Real-time sensor/data inputs", ownership: "investigate" },
      { name: "Integration with HVAC, robotics, CNC, and IoT labs", ownership: "investigate" },
    ],
    space: [
      "Visualization displays",
      "Building/system/process models",
      "Analytics dashboards",
      "Collaboration/project review area",
    ],
    notes: [
      "The source explicitly says this could be combined with data and software spaces.",
      "Marked under investigation because the exact footprint appears unresolved.",
    ],
  },
  {
    id: "analytics",
    name: "Data & Analytics Lab",
    shortName: "Analytics",
    status: "planned",
    visual: "analytics",
    outlook: "Shared analytics environment",
    summary:
      "Cross-disciplinary data space for dashboards, analysis, visualization, and simulation-linked learning.",
    equipment: [
      { name: "Analytics workstations", ownership: "investigate" },
      { name: "Data dashboards", ownership: "owned" },
      { name: "Visualization displays", ownership: "investigate" },
      { name: "Shared data environment", ownership: "owned" },
      { name: "Simulation and sensor data feeds", ownership: "investigate" },
    ],
    space: [
      "Collaboration area for cross-discipline projects",
    ],
    notes: [
      "Could act as a lighter-weight complement to the digital twin and data center spaces.",
      "A next phase should capture software stack, licensing, and access model.",
    ],
  },
  {
    id: "healthcare-tech",
    name: "Healthcare Technology / Simulation Space",
    shortName: "Healthcare Tech",
    status: "investigation",
    visual: "health",
    outlook: "Data collection planned from Building 14",
    summary:
      "Healthcare simulation and technology environment with clinical systems, device interfaces, and analytics-driven teamwork.",
    equipment: [
      { name: "Clinical simulation technology", ownership: "investigate" },
      { name: "EHR training environment", ownership: "owned" },
      { name: "Medical device interface demos", ownership: "investigate" },
      { name: "SIM data collection", ownership: "investigate" },
      { name: "VR healthcare simulation in the suggested VR space", ownership: "investigate" },
      { name: "Data capture/analytics tools", ownership: "investigate" },
      { name: "Team-based simulation area", ownership: "owned" },
    ],
    space: [
      "Team-based healthcare simulation area",
      "Technology-enabled training setups",
      "Connections to VR and analytics spaces",
    ],
    notes: [
      "The source notes that data will be collected and sent to ITEC from Building 14.",
      "Marked under investigation because the exact move scope is not yet confirmed.",
    ],
  },
  {
    id: "digital-media",
    name: "Digital Media / Visualization Space / Maker Space",
    shortName: "Digital Media",
    status: "investigation",
    visual: "media",
    outlook: "Needs definition of final footprint and shared use",
    summary:
      "Flexible creative technology environment for media creation, visualization, modeling, presentation, and light production.",
    equipment: [
      { name: "Media creation workstations", ownership: "investigate" },
      { name: "Video/audio editing capability", ownership: "owned" },
      { name: "3D modeling tools", ownership: "owned" },
      { name: "Visualization displays", ownership: "investigate" },
      { name: "Presentation/demo area", ownership: "investigate" },
      { name: "Capture studio corner or small production setup", ownership: "investigate" },
    ],
    space: [
      "Flexible project space",
      "Demo/presentation zone",
      "Small production or capture area",
    ],
    notes: [
      "This appears promising but not fully defined in the source document.",
      "Could overlap with XR, analytics storytelling, and showcase/event functions.",
    ],
  },
];

const statusConfig = {
  all: { label: "All Labs", className: "all" },
  planned: { label: "Planned For ITEC", className: "planned" },
  investigation: { label: "Under Investigation", className: "investigation" },
  proposed: { label: "New / Proposed", className: "proposed" },
};

const totalLabsEl = document.getElementById("totalLabs");
const plannedLabsEl = document.getElementById("plannedLabs");
const investigationLabsEl = document.getElementById("investigationLabs");
const proposedLabsEl = document.getElementById("proposedLabs");
const statusDonut = document.getElementById("statusDonut");
const statusDonutLegend = document.getElementById("statusDonutLegend");
const searchInput = document.getElementById("searchInput");
const toolbarSearchInput = document.getElementById("toolbarSearchInput");
const statusFilters = document.getElementById("statusFilters");
const labGrid = document.getElementById("labGrid");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const showAllBtn = document.getElementById("showAllBtn");
const presentationToggleBtn = document.getElementById("presentationToggleBtn");
const topWorkingModeBtn = document.getElementById("topWorkingModeBtn");
const kjModeBtn = document.getElementById("kjModeBtn");
const prevLabBtn = document.getElementById("prevLabBtn");
const nextLabBtn = document.getElementById("nextLabBtn");
const enterWorkingModeBtn = document.getElementById("enterWorkingModeBtn");
const exportPdfBtn = document.getElementById("exportPdfBtn");
const exportExcelBtn = document.getElementById("exportExcelBtn");
const statCards = Array.from(document.querySelectorAll(".stat-card[data-status]"));

const detailTitle = document.getElementById("detailTitle");
const detailSummary = document.getElementById("detailSummary");
const detailQuickStats = document.getElementById("detailQuickStats");
const kjPlanningHud = document.getElementById("kjPlanningHud");
const detailStatusSelect = document.getElementById("detailStatusSelect");
const detailStatusValue = document.getElementById("detailStatusValue");
const detailPanel = document.getElementById("detailPanel");
const detailSectionNav = document.getElementById("detailSectionNav");
const detailSectionTabs = Array.from(document.querySelectorAll(".detail-section-tab"));
const detailSections = Array.from(document.querySelectorAll(".detail-section[data-detail-section]"));
const detailOutlook = document.getElementById("detailOutlook");
const detailEquipment = document.getElementById("detailEquipment");
const equipmentSummary = document.getElementById("equipmentSummary");
const equipmentOwnershipSummary = document.getElementById("equipmentOwnershipSummary");
const equipmentReadinessValue = document.getElementById("equipmentReadinessValue");
const equipmentReadinessFill = document.getElementById("equipmentReadinessFill");
const detailSpace = document.getElementById("detailSpace");
const detailNotes = document.getElementById("detailNotes");
const workingModeSummary = document.getElementById("workingModeSummary");
const workingModeStrip = document.getElementById("workingModeStrip");
const kjHud = document.getElementById("kjHud");
const kjCountdownValue = document.getElementById("kjCountdownValue");
const kjFeaturedTitle = document.getElementById("kjFeaturedTitle");
const kjFeaturedSummary = document.getElementById("kjFeaturedSummary");
const kjFeaturedMetrics = document.getElementById("kjFeaturedMetrics");
const kjTotalLabs = document.getElementById("kjTotalLabs");
const kjTotalEquipment = document.getElementById("kjTotalEquipment");
const kjTotalSquareFootage = document.getElementById("kjTotalSquareFootage");
const kjNeedsReview = document.getElementById("kjNeedsReview");
const kjStatusSummary = document.getElementById("kjStatusSummary");
const kjStatusBars = document.getElementById("kjStatusBars");
const kjEquipmentSummary = document.getElementById("kjEquipmentSummary");
const kjEquipmentBars = document.getElementById("kjEquipmentBars");
const kjPhaseSummary = document.getElementById("kjPhaseSummary");
const kjPhaseBars = document.getElementById("kjPhaseBars");
const kjOwnerSummary = document.getElementById("kjOwnerSummary");
const kjOwnerBars = document.getElementById("kjOwnerBars");
const kjRiskSummary = document.getElementById("kjRiskSummary");
const kjRiskBars = document.getElementById("kjRiskBars");
const kjCoverageSummary = document.getElementById("kjCoverageSummary");
const kjCoverageBars = document.getElementById("kjCoverageBars");
const kjTelemetryBar = document.getElementById("kjTelemetryBar");
const selectedLabNameInput = document.getElementById("selectedLabNameInput");
const saveLabNameBtn = document.getElementById("saveLabNameBtn");
const deleteLabBtn = document.getElementById("deleteLabBtn");
const newEquipmentInput = document.getElementById("newEquipmentInput");
const addEquipmentBtn = document.getElementById("addEquipmentBtn");
const newLabNameInput = document.getElementById("newLabNameInput");
const newLabStatusSelect = document.getElementById("newLabStatusSelect");
const addLabBtn = document.getElementById("addLabBtn");
const editorFeedback = document.getElementById("editorFeedback");
const sqftFlatInput = document.getElementById("sqftFlatInput");
const saveSqftBtn = document.getElementById("saveSqftBtn");
const sqftResult = document.getElementById("sqftResult");
const totalSquareFootageValue = document.getElementById("totalSquareFootageValue");
const totalSquareFootageNote = document.getElementById("totalSquareFootageNote");
const workingModeBanner = document.getElementById("workingModeBanner");
const workingModeBannerTitle = document.getElementById("workingModeBannerTitle");
const workingModeBannerMeta = document.getElementById("workingModeBannerMeta");
const leadershipStrip = document.getElementById("leadershipStrip");
const planningOverview = document.getElementById("planningOverview");
const ownerLeadInput = document.getElementById("ownerLeadInput");
const nextStepInput = document.getElementById("nextStepInput");
const prioritySelect = document.getElementById("prioritySelect");
const phaseSelect = document.getElementById("phaseSelect");
const sharedUseInput = document.getElementById("sharedUseInput");
const buildingImpactInput = document.getElementById("buildingImpactInput");
const cloudSyncStatus = document.getElementById("cloudSyncStatus");
const cloudSyncLabel = document.getElementById("cloudSyncLabel");
const cloudSyncHint = document.getElementById("cloudSyncHint");
const syncNowBtn = document.getElementById("syncNowBtn");

const cloudConfig = {
  supabaseUrl: window.ITECLAB_CONFIG?.supabaseUrl || "",
  supabaseAnonKey: window.ITECLAB_CONFIG?.supabaseAnonKey || "",
  workspace: window.ITECLAB_CONFIG?.workspace || "iteclab-main",
  table: window.ITECLAB_CONFIG?.table || "lab_tracker_state",
  syncIntervalMs: Number(window.ITECLAB_CONFIG?.syncIntervalMs) || 20000,
};

const cloudState = {
  client: null,
  enabled: false,
  status: "local",
  hint: "Connect Supabase to share updates across computers and the live site.",
  lastSerialized: "",
  hasPendingWrite: false,
  initialized: false,
  pollId: null,
  writeTimerId: null,
};

const ownershipConfig = {
  owned: "Already Owned",
  purchase: "Needs Purchase",
  investigate: "Need To Confirm",
};

const ownershipSourceConfig = {
  owned: "Existing Resource",
  purchase: "New Purchase",
  investigate: "Planning Review",
};

const labVisuals = {
  robotics: { emoji: "🤖", className: "visual-robotics" },
  hvac: { emoji: "❄️", className: "visual-hvac" },
  cnc: { emoji: "⚙️", className: "visual-cnc" },
  iot: { emoji: "📡", className: "visual-iot" },
  gis: { emoji: "🗺️", className: "visual-gis" },
  xr: { emoji: "🥽", className: "visual-xr" },
  data: { emoji: "🖥️", className: "visual-data" },
  network: { emoji: "🔌", className: "visual-network" },
  security: { emoji: "🛡️", className: "visual-security" },
  factory: { emoji: "🏭", className: "visual-factory" },
  twin: { emoji: "🧩", className: "visual-twin" },
  analytics: { emoji: "📊", className: "visual-analytics" },
  health: { emoji: "🩺", className: "visual-health" },
  media: { emoji: "🎬", className: "visual-media" },
};

function normalizeLab(rawLab, override = null) {
  const merged = override ? { ...rawLab, ...override } : structuredClone(rawLab);
  merged.equipment = (merged.equipment || []).map((item) =>
    typeof item === "string" ? { name: item, ownership: "investigate" } : item,
  );
  merged.space = merged.space || [];
  merged.notes = merged.notes || [];
  merged.squareFeet = Number.isFinite(Number(merged.squareFeet)) ? Number(merged.squareFeet) : 0;
  merged.ownerLead = merged.ownerLead || "";
  merged.nextStep = merged.nextStep || "";
  merged.priority = merged.priority || "medium";
  merged.phase = merged.phase || "phase-1";
  merged.sharedUse = merged.sharedUse || "";
  merged.buildingImpact = merged.buildingImpact || "";
  merged.visual = merged.visual || "data";
  merged.summary = merged.summary || "New lab entry added during working mode planning.";
  merged.outlook = merged.outlook || "Needs planning review";
  if (merged.id === "soc" && (!override?.shortName || override.shortName === "Security Ops")) {
    merged.shortName = "SOC";
  }
  return merged;
}

function defaultLabIds() {
  return new Set(defaultLabs.map((lab) => lab.id));
}

function materializeLabs(savedLabs) {
  const knownDefaultIds = defaultLabIds();
  const savedArray = Array.isArray(savedLabs) ? savedLabs : [];
  const deletedDefaultIds = new Set(
    savedArray
      .filter((item) => item?.deleted && knownDefaultIds.has(item.id))
      .map((item) => item.id),
  );

  const mergedDefaults = defaultLabs
    .filter((lab) => !deletedDefaultIds.has(lab.id))
    .map((lab) => {
      const override = savedArray.find((item) => item.id === lab.id && !item.deleted);
      return normalizeLab(lab, override);
    });

  const customLabs = savedArray
    .filter((savedLab) => !savedLab?.deleted && !knownDefaultIds.has(savedLab.id))
    .map((lab) => normalizeLab(lab));

  return {
    labs: [...mergedDefaults, ...customLabs],
    deletedDefaultIds,
  };
}

function loadLocalLabs() {
  try {
    const saved = window.localStorage.getItem(storageKey);
    if (!saved) return materializeLabs(defaultLabs);

    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) return materializeLabs(defaultLabs);

    return materializeLabs(parsed);
  } catch {
    return materializeLabs(defaultLabs);
  }
}

const loadedState = loadLocalLabs();
const labs = loadedState.labs;
const deletedDefaultLabIds = loadedState.deletedDefaultIds;

const state = {
  search: "",
  status: "all",
  selectedId: labs[0]?.id ?? null,
  detailSection: "editor",
  presentationMode: window.localStorage.getItem(presentationKey) !== "false",
  futureSkin: window.localStorage.getItem(futureSkinKey) === "true",
  lastRenderedSelectedId: null,
};

let countdownIntervalId = null;

function serializeLabsForStorage(inputLabs, deletedDefaultIds = deletedDefaultLabIds) {
  const serializedLabs = inputLabs.map((lab) => normalizeLab(lab));
  const deletedDefaults = Array.from(deletedDefaultIds).map((id) => ({ id, deleted: true }));
  return JSON.stringify([...serializedLabs, ...deletedDefaults]);
}

function isCloudConfigured() {
  return Boolean(
    cloudConfig.supabaseUrl
      && cloudConfig.supabaseAnonKey
      && window.supabase?.createClient,
  );
}

function setCloudStatus(status, label, hint) {
  cloudState.status = status;
  cloudState.hint = hint;

  if (!cloudSyncStatus || !cloudSyncLabel || !cloudSyncHint) return;

  cloudSyncStatus.classList.remove("is-online", "is-syncing", "is-error");
  if (status === "online") cloudSyncStatus.classList.add("is-online");
  if (status === "syncing") cloudSyncStatus.classList.add("is-syncing");
  if (status === "error") cloudSyncStatus.classList.add("is-error");
  cloudSyncLabel.textContent = label;
  cloudSyncHint.textContent = hint;

  if (syncNowBtn) {
    syncNowBtn.disabled = status === "syncing";
    syncNowBtn.textContent = status === "syncing" ? "Syncing..." : "Sync Now";
  }
}

function ensureSelectedLab() {
  if (!labs.length) {
    state.selectedId = null;
    return;
  }

  if (!labs.some((lab) => lab.id === state.selectedId)) {
    state.selectedId = labs[0].id;
  }
}

function replaceDeletedDefaultLabIds(nextIds) {
  deletedDefaultLabIds.clear();
  nextIds.forEach((id) => deletedDefaultLabIds.add(id));
}

function replaceLabs(nextLabs, nextDeletedDefaultIds = deletedDefaultLabIds) {
  labs.splice(0, labs.length, ...nextLabs.map((lab) => normalizeLab(lab)));
  replaceDeletedDefaultLabIds(nextDeletedDefaultIds);
  ensureSelectedLab();
}

function persistLocalLabs() {
  const serialized = serializeLabsForStorage(labs);
  window.localStorage.setItem(storageKey, serialized);
  cloudState.lastSerialized = serialized;
}

async function saveLabsToCloud() {
  if (!cloudState.enabled || !cloudState.client) return false;

  cloudState.hasPendingWrite = false;
  const serialized = serializeLabsForStorage(labs);
  setCloudStatus("syncing", "Syncing to cloud...", "Saving shared tracker data for every device.");

  const { error } = await cloudState.client
    .from(cloudConfig.table)
    .upsert(
      {
        workspace: cloudConfig.workspace,
        labs: JSON.parse(serialized),
        updated_at: new Date().toISOString(),
      },
      { onConflict: "workspace" },
    );

  if (error) {
    console.error("Cloud sync failed:", error);
    cloudState.hasPendingWrite = true;
    setCloudStatus("error", "Cloud sync error", "Edits are still saved locally. Check your Supabase table, policies, and keys.");
    return false;
  }

  cloudState.lastSerialized = serialized;
  setCloudStatus("online", "Cloud sync connected", `Shared workspace "${cloudConfig.workspace}" is up to date.`);
  return true;
}

function queueCloudSave({ immediate = false } = {}) {
  if (!cloudState.enabled) return;

  cloudState.hasPendingWrite = true;
  if (cloudState.writeTimerId) {
    window.clearTimeout(cloudState.writeTimerId);
    cloudState.writeTimerId = null;
  }

  const runSave = () => {
    cloudState.writeTimerId = null;
    void saveLabsToCloud();
  };

  if (immediate) {
    runSave();
    return;
  }

  setCloudStatus("syncing", "Changes pending sync", "Saving to the shared workspace in a moment...");
  cloudState.writeTimerId = window.setTimeout(runSave, 500);
}

async function fetchLabsFromCloud() {
  if (!cloudState.enabled || !cloudState.client || cloudState.hasPendingWrite) return false;

  const { data, error } = await cloudState.client
    .from(cloudConfig.table)
    .select("labs, updated_at")
    .eq("workspace", cloudConfig.workspace)
    .maybeSingle();

  if (error) {
    console.error("Cloud load failed:", error);
    setCloudStatus("error", "Cloud sync error", "Using local data until the shared workspace can be reached.");
    return false;
  }

  if (!data?.labs) {
    setCloudStatus("syncing", "Creating cloud workspace...", "Publishing the current tracker state for shared use.");
    return saveLabsToCloud();
  }

  const remoteState = materializeLabs(data.labs);
  const remoteSerialized = serializeLabsForStorage(remoteState.labs, remoteState.deletedDefaultIds);
  if (remoteSerialized !== cloudState.lastSerialized) {
    replaceLabs(remoteState.labs, remoteState.deletedDefaultIds);
    persistLocalLabs();
    updateStats();
    render();
  }

  setCloudStatus("online", "Cloud sync connected", `Shared workspace "${cloudConfig.workspace}" is up to date.`);
  return true;
}

function startCloudPolling() {
  if (!cloudState.enabled || cloudState.pollId) return;

  cloudState.pollId = window.setInterval(() => {
    void fetchLabsFromCloud();
  }, cloudConfig.syncIntervalMs);

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      void fetchLabsFromCloud();
    }
  });

  window.addEventListener("online", () => {
    void fetchLabsFromCloud();
  });
}

async function initializeCloudSync() {
  persistLocalLabs();

  if (!isCloudConfigured()) {
    const missingPieces = [];
    if (!cloudConfig.supabaseUrl) missingPieces.push("Supabase URL");
    if (!cloudConfig.supabaseAnonKey) missingPieces.push("anon key");
    if (!window.supabase?.createClient) missingPieces.push("Supabase client library");

    setCloudStatus(
      "local",
      "Local only",
      missingPieces.length
        ? `Add ${missingPieces.join(", ")} in config.js to share changes online.`
        : "Connect Supabase to share updates across computers and the live site.",
    );
    cloudState.initialized = true;
    return;
  }

  cloudState.client = window.supabase.createClient(
    cloudConfig.supabaseUrl,
    cloudConfig.supabaseAnonKey,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    },
  );
  cloudState.enabled = true;

  await fetchLabsFromCloud();
  startCloudPolling();
  cloudState.initialized = true;
}

async function forceCloudSync() {
  if (!isCloudConfigured()) {
    setCloudStatus(
      "local",
      "Local only",
      "This page is not loading config.js yet, so it cannot sync. Refresh after the latest site files are deployed.",
    );
    return false;
  }

  if (!cloudState.enabled) {
    await initializeCloudSync();
  }

  persistLocalLabs();
  const saveWorked = await saveLabsToCloud();
  if (!saveWorked) return false;
  return fetchLabsFromCloud();
}

function animateDetailPanel() {
  detailPanel.classList.remove("is-transitioning");
  void detailPanel.offsetWidth;
  detailPanel.classList.add("is-transitioning");
}

function selectedLab() {
  return labs.find((lab) => lab.id === state.selectedId) || null;
}

function updateTopContextState() {
  document.body.classList.toggle("top-condensed", window.scrollY > 120);
}

function validDetailSections() {
  return new Set(detailSections.map((section) => section.dataset.detailSection).filter(Boolean));
}

function setActiveDetailSection(nextSection) {
  if (!validDetailSections().has(nextSection)) return;
  state.detailSection = nextSection;
}

function persistLabs(options = {}) {
  persistLocalLabs();
  queueCloudSave(options);
}

function persistPresentationMode() {
  window.localStorage.setItem(presentationKey, String(state.presentationMode));
}

function persistFutureSkin() {
  window.localStorage.setItem(futureSkinKey, String(state.futureSkin));
}

function countByStatus(status) {
  return labs.filter((lab) => lab.status === status).length;
}

function slugify(text) {
  return (text || "lab")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function setEditorFeedback(message) {
  editorFeedback.textContent = message;
}

function uniqueLabId(name) {
  const base = slugify(name) || "lab";
  let nextId = base;
  let index = 2;

  while (labs.some((lab) => lab.id === nextId)) {
    nextId = `${base}-${index}`;
    index += 1;
  }

  return nextId;
}

function parseSquareFootageInput() {
  const area = Number(sqftFlatInput.value);

  if (!area || area <= 0) {
    sqftResult.textContent = "Enter a positive square footage value.";
    return;
  }

  sqftResult.textContent = `${area.toLocaleString()} square feet ready to save`;
  return area;
}

function isDefaultLab(labId) {
  return defaultLabs.some((lab) => lab.id === labId);
}

function totalSquareFootage() {
  return labs.reduce((sum, lab) => sum + (Number(lab.squareFeet) || 0), 0);
}

function labsWithSquareFootageCount() {
  return labs.filter((lab) => (Number(lab.squareFeet) || 0) > 0).length;
}

function totalEquipmentCount() {
  return labs.reduce((sum, lab) => sum + lab.equipment.length, 0);
}

function totalOwnershipCounts() {
  return labs.reduce(
    (totals, lab) => {
      const counts = equipmentCounts(lab.equipment);
      totals.owned += counts.owned;
      totals.purchase += counts.purchase;
      totals.investigate += counts.investigate;
      return totals;
    },
    { owned: 0, purchase: 0, investigate: 0 },
  );
}

function labsNeedingReviewCount() {
  return labs.filter((lab) => {
    const counts = equipmentCounts(lab.equipment);
    return lab.status === "investigation" || counts.investigate > 0;
  }).length;
}

function phaseCounts() {
  return labs.reduce(
    (totals, lab) => {
      totals[lab.phase] = (totals[lab.phase] || 0) + 1;
      return totals;
    },
    { "phase-1": 0, "phase-2": 0, future: 0 },
  );
}

function ownerCoverage() {
  const assigned = labs.filter((lab) => lab.ownerLead.trim()).length;
  const open = labs.length - assigned;
  const uniqueOwners = new Set(
    labs.map((lab) => lab.ownerLead.trim()).filter(Boolean),
  ).size;

  return { assigned, open, uniqueOwners };
}

function riskCounts() {
  const missingOwner = labs.filter((lab) => !lab.ownerLead.trim()).length;
  const missingNextStep = labs.filter((lab) => !lab.nextStep.trim()).length;
  const missingSquareFootage = labs.filter((lab) => !(Number(lab.squareFeet) > 0)).length;
  const needsReview = labsNeedingReviewCount();

  return { missingOwner, missingNextStep, missingSquareFootage, needsReview };
}

function coverageCounts() {
  return labs.reduce(
    (totals, lab) => {
      const filledFields = [
        lab.ownerLead.trim(),
        lab.nextStep.trim(),
        Number(lab.squareFeet) > 0 ? "sqft" : "",
        lab.sharedUse.trim(),
        lab.buildingImpact.trim(),
      ].filter(Boolean).length;

      if (filledFields === 5) {
        totals.complete += 1;
      } else if (filledFields > 0) {
        totals.partial += 1;
      } else {
        totals.open += 1;
      }

      return totals;
    },
    { complete: 0, partial: 0, open: 0 },
  );
}

function featuredMissionLab() {
  if (!labs.length) return null;

  const priorityWeight = { high: 3, medium: 2, low: 1 };
  const phaseWeight = { "phase-1": 3, "phase-2": 2, future: 1 };

  const scored = labs.map((lab) => {
    const counts = equipmentCounts(lab.equipment);
    let score = 0;

    score += priorityWeight[lab.priority] || 0;
    score += phaseWeight[lab.phase] || 0;
    score += lab.status === "investigation" ? 3 : 0;
    score += lab.status === "proposed" ? 2 : 0;
    score += !lab.ownerLead.trim() ? 2 : 0;
    score += !lab.nextStep.trim() ? 2 : 0;
    score += !(Number(lab.squareFeet) > 0) ? 1 : 0;
    score += counts.investigate > 0 ? 2 : 0;

    return { lab, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored[0]?.lab || null;
}

function phaseLabel(value) {
  return (
    {
      "phase-1": "Phase 1",
      "phase-2": "Phase 2",
      future: "Future Ready",
    }[value] || "Phase 1"
  );
}

function priorityLabel(value) {
  return (
    {
      high: "High Priority",
      medium: "Medium Priority",
      low: "Low Priority",
    }[value] || "Medium Priority"
  );
}

function renderLeadershipSummary() {
  const missingOwner = labs.filter((lab) => !lab.ownerLead.trim()).length;
  const missingNextStep = labs.filter((lab) => !lab.nextStep.trim()).length;
  const highPriority = labs.filter((lab) => lab.priority === "high").length;
  const phaseOne = labs.filter((lab) => lab.phase === "phase-1").length;

  leadershipStrip.innerHTML = `
    <span class="mode-pill">${highPriority} high priority</span>
    <span class="mode-pill">${phaseOne} in Phase 1</span>
    <span class="mode-pill">${missingOwner} without owner</span>
    <span class="mode-pill">${missingNextStep} without next step</span>
  `;
}

function renderKjHud() {
  if (
    !kjTotalLabs ||
    !kjTotalEquipment ||
    !kjTotalSquareFootage ||
    !kjNeedsReview ||
    !kjStatusSummary ||
    !kjStatusBars ||
    !kjEquipmentSummary ||
    !kjEquipmentBars ||
    !kjPhaseSummary ||
    !kjPhaseBars ||
    !kjOwnerSummary ||
    !kjOwnerBars ||
    !kjRiskSummary ||
    !kjRiskBars ||
    !kjTelemetryBar
  ) {
    return;
  }

  const selected = selectedLab();
  const featured = featuredMissionLab();
  const planned = countByStatus("planned");
  const investigation = countByStatus("investigation");
  const proposed = countByStatus("proposed");
  const totalEquipment = totalEquipmentCount();
  const ownership = totalOwnershipCounts();
  const totalSqFt = totalSquareFootage();
  const reviewCount = labsNeedingReviewCount();
  const phases = phaseCounts();
  const owners = ownerCoverage();
  const risks = riskCounts();
  const coverage = coverageCounts();
  const total = labs.length || 1;
  const statusRows = [
    { label: "Planned", value: planned, className: "planned" },
    { label: "Investigation", value: investigation, className: "investigation" },
    { label: "Proposed", value: proposed, className: "proposed" },
  ];
  const equipmentRows = [
    { label: "Owned", value: ownership.owned, className: "owned" },
    { label: "Purchase", value: ownership.purchase, className: "purchase" },
    { label: "Confirm", value: ownership.investigate, className: "investigate" },
  ];
  const phaseRows = [
    { label: "Phase 1", value: phases["phase-1"], className: "planned" },
    { label: "Phase 2", value: phases["phase-2"], className: "proposed" },
    { label: "Future", value: phases.future, className: "investigation" },
  ];
  const ownerRows = [
    { label: "Assigned", value: owners.assigned, className: "owned" },
    { label: "Open", value: owners.open, className: "investigate" },
    { label: "Unique Leads", value: owners.uniqueOwners, className: "purchase" },
  ];
  const riskRows = [
    { label: "No Owner", value: risks.missingOwner, className: "investigate" },
    { label: "No Next Step", value: risks.missingNextStep, className: "investigate" },
    { label: "No Sq Ft", value: risks.missingSquareFootage, className: "purchase" },
    { label: "Need Review", value: risks.needsReview, className: "proposed" },
  ];
  const coverageRows = [
    { label: "Complete", value: coverage.complete, className: "owned" },
    { label: "Partial", value: coverage.partial, className: "purchase" },
    { label: "Open", value: coverage.open, className: "investigate" },
  ];

  if (kjFeaturedTitle && kjFeaturedSummary && kjFeaturedMetrics) {
    kjFeaturedTitle.textContent = featured ? featured.name : "Awaiting Mission Selection";
    kjFeaturedSummary.textContent = featured
      ? `${featured.summary} ${featured.outlook}.`
      : "Select or prioritize a lab to surface the current mission focus.";
    kjFeaturedMetrics.innerHTML = featured
      ? `
        <span class="kj-status-chip">${priorityLabel(featured.priority)}</span>
        <span class="kj-status-chip">${phaseLabel(featured.phase)}</span>
        <span class="kj-status-chip">${statusConfig[featured.status].label}</span>
        <span class="kj-status-chip">${(featured.squareFeet || 0).toLocaleString()} sq ft</span>
        <span class="kj-status-chip">${featured.ownerLead || "Owner needed"}</span>
        <span class="kj-status-chip">${featured.nextStep || "Next step needed"}</span>
      `
      : "";
  }

  kjTotalLabs.textContent = String(labs.length);
  kjTotalEquipment.textContent = String(totalEquipment);
  kjTotalSquareFootage.textContent = `${totalSqFt.toLocaleString()} sq ft`;
  kjNeedsReview.textContent = String(reviewCount);
  kjStatusSummary.textContent = `${planned} planned / ${investigation} investigation / ${proposed} proposed`;
  kjEquipmentSummary.textContent = `${ownership.owned} owned / ${ownership.purchase} purchase / ${ownership.investigate} confirm`;
  kjPhaseSummary.textContent = `${phases["phase-1"]} phase 1 / ${phases["phase-2"]} phase 2 / ${phases.future} future`;
  kjOwnerSummary.textContent = `${owners.assigned} assigned / ${owners.open} open`;
  kjRiskSummary.textContent = `${risks.missingOwner} owner / ${risks.missingNextStep} next step / ${risks.missingSquareFootage} sq ft / ${risks.needsReview} review`;
  if (kjCoverageSummary) {
    kjCoverageSummary.textContent = `${coverage.complete} complete / ${coverage.partial} partial / ${coverage.open} open`;
  }

  kjStatusBars.innerHTML = statusRows
    .map(
      (row) => `
        <div class="kj-bar-row">
          <span class="kj-bar-label">${row.label}</span>
          <div class="kj-bar-track">
            <span class="kj-bar-fill ${row.className}" style="width: ${(row.value / total) * 100}%"></span>
          </div>
          <strong class="kj-bar-value">${row.value}</strong>
        </div>`,
    )
    .join("");

  const totalEquipmentSafe = totalEquipment || 1;
  kjEquipmentBars.innerHTML = equipmentRows
    .map(
      (row) => `
        <div class="kj-bar-row">
          <span class="kj-bar-label">${row.label}</span>
          <div class="kj-bar-track">
            <span class="kj-bar-fill ${row.className}" style="width: ${(row.value / totalEquipmentSafe) * 100}%"></span>
          </div>
          <strong class="kj-bar-value">${row.value}</strong>
        </div>`,
    )
    .join("");

  kjPhaseBars.innerHTML = phaseRows
    .map(
      (row) => `
        <div class="kj-bar-row">
          <span class="kj-bar-label">${row.label}</span>
          <div class="kj-bar-track">
            <span class="kj-bar-fill ${row.className}" style="width: ${(row.value / total) * 100}%"></span>
          </div>
          <strong class="kj-bar-value">${row.value}</strong>
        </div>`,
    )
    .join("");

  kjOwnerBars.innerHTML = ownerRows
    .map(
      (row) => `
        <div class="kj-bar-row">
          <span class="kj-bar-label">${row.label}</span>
          <div class="kj-bar-track">
            <span class="kj-bar-fill ${row.className}" style="width: ${(row.value / total) * 100}%"></span>
          </div>
          <strong class="kj-bar-value">${row.value}</strong>
        </div>`,
    )
    .join("");

  kjRiskBars.innerHTML = riskRows
    .map(
      (row) => `
        <div class="kj-bar-row">
          <span class="kj-bar-label">${row.label}</span>
          <div class="kj-bar-track">
            <span class="kj-bar-fill ${row.className}" style="width: ${(row.value / total) * 100}%"></span>
          </div>
          <strong class="kj-bar-value">${row.value}</strong>
        </div>`,
    )
    .join("");

  if (kjCoverageBars) {
    kjCoverageBars.innerHTML = coverageRows
      .map(
        (row) => `
          <div class="kj-bar-row">
            <span class="kj-bar-label">${row.label}</span>
            <div class="kj-bar-track">
              <span class="kj-bar-fill ${row.className}" style="width: ${(row.value / total) * 100}%"></span>
            </div>
            <strong class="kj-bar-value">${row.value}</strong>
          </div>`,
      )
      .join("");
  }

  kjTelemetryBar.innerHTML = `
    <span class="kj-telemetry-pill">${labsWithSquareFootageCount()} labs with square footage</span>
    <span class="kj-telemetry-pill">${selected?.outlook || "Select a lab to inspect move outlook"}</span>
    <span class="kj-telemetry-pill">${reviewCount} labs still need review</span>
  `;
}

function updateKjCountdown() {
  if (!kjCountdownValue) return;

  const target = new Date("2028-01-01T00:00:00");
  const now = new Date();
  const diff = target.getTime() - now.getTime();

  if (diff <= 0) {
    kjCountdownValue.textContent = "Launch";
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  kjCountdownValue.textContent = `${days}d ${String(hours).padStart(2, "0")}h ${String(minutes).padStart(2, "0")}m ${String(seconds).padStart(2, "0")}s`;
}

function startKjCountdown() {
  updateKjCountdown();
  if (countdownIntervalId !== null) return;
  countdownIntervalId = window.setInterval(updateKjCountdown, 1000);
}

function updateSelectedLabPlanningField(field, value) {
  const lab = labs.find((item) => item.id === state.selectedId);
  if (!lab) return;
  lab[field] = value;
  persistLabs();
  renderWorkingModeSummary();
  renderLeadershipSummary();
  renderDetailPanel();
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function currentLabCsv(lab) {
  const rows = [["Section", "Item", "Status", "Source"]];

  rows.push(["Lab", lab.name, statusConfig[lab.status].label, lab.outlook]);
  lab.equipment.forEach((item) => {
    rows.push(["Equipment", item.name, ownershipConfig[item.ownership], ownershipSourceConfig[item.ownership]]);
  });
  lab.space.forEach((item) => {
    rows.push(["Space Consideration", item, "", ""]);
  });
  lab.notes.forEach((item) => {
    rows.push(["Planning Note", item, "", ""]);
  });

  return `${rows
    .map((row) => row.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(","))
    .join("\n")}\n`;
}

function exportCurrentLabCsv() {
  const lab = selectedLab();
  if (!lab) return;
  downloadFile(`${slugify(lab.name)}.csv`, currentLabCsv(lab), "text/csv;charset=utf-8");
}

function exportCurrentLabPdf() {
  const lab = selectedLab();
  if (!lab) return;

  const win = window.open("", "_blank", "width=1100,height=900");
  if (!win) return;

  const equipmentRows = lab.equipment
    .map(
      (item) => `
        <tr>
          <td>${escapeHtml(item.name)}</td>
          <td>${escapeHtml(ownershipConfig[item.ownership])}</td>
          <td>${escapeHtml(ownershipSourceConfig[item.ownership])}</td>
        </tr>`,
    )
    .join("");

  const spaceItems = lab.space.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  const noteItems = lab.notes.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  const sharedUseMarkup = lab.sharedUse
    ? `<p>${escapeHtml(lab.sharedUse)}</p>`
    : `<p class="muted">Not added yet.</p>`;
  const buildingImpactMarkup = lab.buildingImpact
    ? `<p>${escapeHtml(lab.buildingImpact).replace(/\n/g, "<br />")}</p>`
    : `<p class="muted">Not added yet.</p>`;
  const html = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>${escapeHtml(lab.name)}</title>
    <style>
      body { font-family: Arial, sans-serif; color: #172124; margin: 32px; line-height: 1.45; }
      h1, h2 { margin: 0 0 12px; }
      p { margin: 0; }
      .meta { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin: 20px 0; }
      .meta div { padding: 12px; border: 1px solid #d9d9d9; border-radius: 10px; }
      table { width: 100%; border-collapse: collapse; margin-top: 12px; }
      th, td { border-bottom: 1px solid #ddd; text-align: left; padding: 10px 8px; vertical-align: top; }
      th { background: #f5f7f8; }
      section { margin-top: 24px; }
      ul { margin: 8px 0 0; padding-left: 20px; }
      .muted { color: #61707c; }
    </style>
  </head>
  <body>
    <h1>${escapeHtml(lab.name)}</h1>
    <p>${escapeHtml(lab.summary)}</p>
    <div class="meta">
      <div><strong>Status</strong><br />${escapeHtml(statusConfig[lab.status].label)}</div>
      <div><strong>Move Outlook</strong><br />${escapeHtml(lab.outlook)}</div>
      <div><strong>Square Footage</strong><br />${escapeHtml((lab.squareFeet || 0).toLocaleString())} sq ft</div>
      <div><strong>Owner / Lead</strong><br />${escapeHtml(lab.ownerLead || "Not assigned yet")}</div>
      <div><strong>Priority</strong><br />${escapeHtml(priorityLabel(lab.priority))}</div>
      <div><strong>Phase</strong><br />${escapeHtml(phaseLabel(lab.phase))}</div>
      <div><strong>Next Step</strong><br />${escapeHtml(lab.nextStep || "Not added yet")}</div>
    </div>
    <section>
      <h2>Shared Use / Cross-Program Value</h2>
      ${sharedUseMarkup}
    </section>
    <section>
      <h2>Building Impacts</h2>
      ${buildingImpactMarkup}
    </section>
    <section>
      <h2>Equipment</h2>
      <table>
        <thead>
          <tr><th>Item</th><th>Status</th><th>Source</th></tr>
        </thead>
        <tbody>${equipmentRows}</tbody>
      </table>
    </section>
    <section>
      <h2>Space Considerations</h2>
      <ul>${spaceItems}</ul>
    </section>
    <section>
      <h2>Planning Notes</h2>
      <ul>${noteItems}</ul>
    </section>
  </body>
</html>`;

  win.document.open();
  win.document.write(html);
  win.document.close();
  win.onload = () => {
    win.focus();
    win.print();
  };
}

function updateStats() {
  const total = labs.length;
  const planned = countByStatus("planned");
  const investigation = countByStatus("investigation");
  const proposed = countByStatus("proposed");

  totalLabsEl.textContent = String(total);
  plannedLabsEl.textContent = String(planned);
  investigationLabsEl.textContent = String(investigation);
  proposedLabsEl.textContent = String(proposed);

  const plannedPct = total ? Math.round((planned / total) * 100) : 0;
  const investigationPct = total ? Math.round((investigation / total) * 100) : 0;
  const proposedPct = total ? Math.round((proposed / total) * 100) : 0;

  statusDonut.style.background = `conic-gradient(
    #d8ebf8 0% ${plannedPct}%,
    #f7e4ba ${plannedPct}% ${plannedPct + investigationPct}%,
    #dbeedc ${plannedPct + investigationPct}% ${plannedPct + investigationPct + proposedPct}%,
    rgba(24, 33, 39, 0.06) ${plannedPct + investigationPct + proposedPct}% 100%
  )`;

  statusDonutLegend.innerHTML = `
    <span><i class="legend-dot planned"></i> Planned</span>
    <span><i class="legend-dot investigation"></i> Investigation</span>
    <span><i class="legend-dot proposed"></i> New</span>
  `;
}

function createStatusFilters() {
  if (!statusFilters) return;

  Object.entries(statusConfig).forEach(([status, config]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chip ${config.className}`;
    button.textContent = config.label;
    button.addEventListener("click", () => {
      state.status = status;
      render();
    });
    statusFilters.appendChild(button);
  });
}

function filteredLabs() {
  const search = state.search.trim().toLowerCase();

  return labs.filter((lab) => {
    const statusMatch = state.status === "all" || lab.status === state.status;
    const searchMatch =
      search === "" ||
      [
        lab.name,
        lab.summary,
        lab.outlook,
        ...lab.equipment.map((item) => item.name),
        ...lab.space,
        ...lab.notes,
      ]
        .join(" ")
        .toLowerCase()
        .includes(search);

    return statusMatch && searchMatch;
  });
}

function renderStatusFilterState() {
  if (statusFilters) {
    Array.from(statusFilters.children).forEach((button, index) => {
      const key = Object.keys(statusConfig)[index];
      button.classList.toggle("active", key === state.status);
    });
  }

  statCards.forEach((card) => {
    card.classList.toggle("active", card.dataset.status === state.status);
  });
}

function clearSearch() {
  state.search = "";
  if (searchInput) searchInput.value = "";
  if (toolbarSearchInput) toolbarSearchInput.value = "";
}

function renderWorkingModeSummary() {
  const visibleLabs = filteredLabs();
  const selected = selectedLab();
  const filterLabel = statusConfig[state.status]?.label ?? "All Labs";
  const searchLabel = state.search.trim() ? `Search: "${state.search.trim()}"` : "No search";

  workingModeSummary.textContent = state.presentationMode
    ? "Presentation mode keeps the layout compact for walkthroughs and reviews."
    : "Working mode is set up for filtering, status updates, and equipment planning.";

  workingModeStrip.innerHTML = `
    <span class="mode-pill strong">${visibleLabs.length} visible</span>
    <span class="mode-pill">${filterLabel}</span>
    <span class="mode-pill">${searchLabel}</span>
    <span class="mode-pill">${selected ? `Selected: ${selected.shortName || selected.name}` : "No lab selected"}</span>
  `;

  const totalSqFt = totalSquareFootage();
  const countedLabs = labsWithSquareFootageCount();
  totalSquareFootageValue.textContent = `${totalSqFt.toLocaleString()} sq ft`;
  totalSquareFootageNote.textContent = countedLabs
    ? `${countedLabs} lab${countedLabs === 1 ? "" : "s"} currently included in the total.`
    : "Save square footage to each lab in Working Mode to build the total.";
}

function renderWorkingModeBanner() {
  if (!workingModeBanner || !workingModeBannerTitle || !workingModeBannerMeta) return;

  const selected = selectedLab();
  const visibleLabs = filteredLabs();
  const filterLabel = statusConfig[state.status]?.label ?? "All Labs";

  workingModeBanner.setAttribute("aria-hidden", String(state.presentationMode));
  workingModeBannerTitle.textContent = selected
    ? `Working on ${selected.name}`
    : "Select a lab to begin editing";
  workingModeBannerMeta.innerHTML = `
    <span class="working-mode-banner-pill">${selected ? `Selected: ${selected.shortName || selected.name}` : "No lab selected"}</span>
    <span class="working-mode-banner-pill">${visibleLabs.length} visible</span>
    <span class="working-mode-banner-pill">${filterLabel}</span>
  `;
}

function renderDetailSectionState() {
  const activeSection = validDetailSections().has(state.detailSection) ? state.detailSection : "editor";

  if (detailSectionNav) {
    detailSectionNav.setAttribute("aria-hidden", String(state.presentationMode));
  }

  detailSectionTabs.forEach((button) => {
    const isActive = button.dataset.section === activeSection;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  detailSections.forEach((section) => {
    section.classList.toggle(
      "is-collapsed",
      !state.presentationMode && section.dataset.detailSection !== activeSection,
    );
  });
}

function renderReadinessDots(items) {
  const counts = equipmentCounts(items);

  if (!items.length) {
    return `<span class="readiness-dot empty" title="No equipment listed yet"></span>`;
  }

  return ["owned", "purchase", "investigate"]
    .filter((key) => counts[key] > 0)
    .map((key) => {
      const label = ownershipConfig[key] || "Need To Confirm";
      return `<span class="readiness-dot ${key}" title="${label}: ${counts[key]} item${counts[key] === 1 ? "" : "s"}"></span>`;
    })
    .join("");
}

function renderLabGrid() {
  const visibleLabs = filteredLabs();
  labGrid.innerHTML = "";

  if (!visibleLabs.length) {
    const empty = document.createElement("article");
    empty.className = "panel empty-state";
    empty.innerHTML = `
      <h3>No labs match this view</h3>
      <p class="list-hint">Try clearing the search or switching the status filter.</p>
    `;
    labGrid.appendChild(empty);
    return;
  }

  if (!visibleLabs.some((lab) => lab.id === state.selectedId)) {
    state.selectedId = visibleLabs[0].id;
  }

  visibleLabs.forEach((lab) => {
    const card = document.createElement("article");
    card.className = `panel lab-card${lab.id === state.selectedId ? " selected" : ""}`;
    card.tabIndex = 0;
    const visual = labVisuals[lab.visual] || { emoji: "•", className: "visual-default" };
    const counts = equipmentCounts(lab.equipment);
    card.innerHTML = state.presentationMode
      ? `
        <div class="lab-header">
          <div class="lab-visual ${visual.className}" aria-hidden="true">${visual.emoji}</div>
          <div class="lab-title-wrap">
            <div class="lab-title">${lab.shortName || lab.name}</div>
            <div
              class="lab-readiness-dots"
              aria-label="Equipment status: ${counts.owned} owned, ${counts.purchase} needing purchase, ${counts.investigate} needing confirmation"
              title="Owned: ${counts.owned} | Needs purchase: ${counts.purchase} | Need to confirm: ${counts.investigate}"
            >
              ${renderReadinessDots(lab.equipment)}
            </div>
          </div>
        </div>
      `
      : `
        <div class="lab-header">
          <div class="lab-title">${lab.shortName || lab.name}</div>
          <span class="status-pill ${lab.status}">${statusConfig[lab.status].label}</span>
        </div>
        <p class="lab-summary">${lab.summary}</p>
        <div class="lab-meta">
          <span><strong>${lab.equipment.length}</strong> equipment items</span>
          <span><strong>${lab.space.length}</strong> space needs</span>
        </div>
      `;

    const select = () => {
      state.selectedId = lab.id;
      render();
    };

    card.addEventListener("click", select);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        select();
      }
    });

    labGrid.appendChild(card);
  });
}

function moveSelection(step) {
  const visibleLabs = filteredLabs();
  if (!visibleLabs.length) return;

  const currentIndex = visibleLabs.findIndex((lab) => lab.id === state.selectedId);
  const safeIndex = currentIndex === -1 ? 0 : currentIndex;
  const nextIndex = (safeIndex + step + visibleLabs.length) % visibleLabs.length;
  state.selectedId = visibleLabs[nextIndex].id;
  render();
}

function fillList(target, items) {
  target.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    target.appendChild(li);
  });
}

function equipmentCounts(items) {
  return items.reduce(
    (counts, item) => {
      counts[item.ownership] = (counts[item.ownership] || 0) + 1;
      return counts;
    },
    { owned: 0, purchase: 0, investigate: 0 },
  );
}

function spaceIcon(item) {
  const text = item.toLowerCase();
  if (text.includes("electrical") || text.includes("power")) return "🔌";
  if (text.includes("storage") || text.includes("parts") || text.includes("tools")) return "📦";
  if (text.includes("network") || text.includes("data") || text.includes("remote")) return "🌐";
  if (text.includes("safety") || text.includes("secure")) return "🛡️";
  if (text.includes("display") || text.includes("visual") || text.includes("projection")) return "🖥️";
  if (text.includes("collaboration") || text.includes("seating") || text.includes("review")) return "👥";
  if (text.includes("workbench") || text.includes("bench")) return "🛠️";
  return "•";
}

function renderSpace(items) {
  detailSpace.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    if (state.presentationMode) {
      li.innerHTML = `
        <div class="space-item">
          <span class="space-icon" aria-hidden="true">${spaceIcon(item)}</span>
          <span>${item}</span>
        </div>
      `;
    } else {
      li.textContent = item;
    }
    detailSpace.appendChild(li);
  });
}

function renderEquipment(selectedLab) {
  const counts = equipmentCounts(selectedLab.equipment);
  const readiness = selectedLab.equipment.length
    ? Math.round((counts.owned / selectedLab.equipment.length) * 100)
    : 0;

  equipmentReadinessValue.textContent = `${readiness}%`;
  equipmentReadinessFill.style.width = `${readiness}%`;
  equipmentSummary.innerHTML = `
    <span class="mini-pill owned">Owned: ${counts.owned}</span>
    <span class="mini-pill purchase">Purchase: ${counts.purchase}</span>
    <span class="mini-pill investigate">Confirm: ${counts.investigate}</span>
  `;
  equipmentOwnershipSummary.textContent =
    `${counts.owned} already owned, ${counts.purchase} needing purchase, and ${counts.investigate} needing confirmation.`;

  detailEquipment.innerHTML = "";

  if (state.presentationMode) {
    const table = document.createElement("table");
    table.className = "equipment-table";
    table.innerHTML = `
      <thead>
        <tr>
          <th>Item</th>
          <th>Status</th>
          <th>Source</th>
        </tr>
      </thead>
      <tbody></tbody>
    `;

    const tbody = table.querySelector("tbody");

    selectedLab.equipment.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.name}</td>
        <td><span class="table-badge ${item.ownership}">${ownershipConfig[item.ownership]}</span></td>
        <td>${ownershipSourceConfig[item.ownership]}</td>
      `;
      tbody.appendChild(row);
    });

    detailEquipment.appendChild(table);
    return;
  }

  selectedLab.equipment.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "equipment-row";

    const name = document.createElement("div");
    name.className = "equipment-name";
    name.textContent = state.presentationMode
      ? item.name
      : `${item.name}`;

    const select = document.createElement("select");
    select.className = "equipment-select";
    select.setAttribute("aria-label", `${item.name} ownership status`);
    select.innerHTML = Object.entries(ownershipConfig)
      .map(
        ([value, label]) => `<option value="${value}"${item.ownership === value ? " selected" : ""}>${label}</option>`,
      )
      .join("");

    select.addEventListener("change", (event) => {
      selectedLab.equipment[index].ownership = event.target.value;
      persistLabs({ immediate: true });
      render();
    });

    row.append(name, select);
    detailEquipment.appendChild(row);
  });
}

function renderDetailPanel() {
  const visibleLabs = filteredLabs();
  const selectedLab = visibleLabs.find((lab) => lab.id === state.selectedId) || labs.find((lab) => lab.id === state.selectedId);

  if (!selectedLab) {
    detailTitle.textContent = "Choose a lab";
    detailSummary.textContent = "Select a card to review its status, equipment list, and space requirements.";
    detailQuickStats.innerHTML = "";
    kjPlanningHud.innerHTML = "";
    detailStatusSelect.disabled = true;
    detailStatusSelect.innerHTML = `<option value="">No lab selected</option>`;
    detailStatusValue.textContent = "-";
    detailStatusValue.className = "detail-status-value";
    detailOutlook.textContent = "-";
    detailEquipment.innerHTML = "";
    equipmentSummary.innerHTML = "";
    equipmentOwnershipSummary.textContent = "";
    equipmentReadinessValue.textContent = "0%";
    equipmentReadinessFill.style.width = "0%";
    detailSpace.innerHTML = "";
    detailNotes.innerHTML = "";
    selectedLabNameInput.value = "";
    selectedLabNameInput.disabled = true;
    newEquipmentInput.value = "";
    newEquipmentInput.disabled = true;
    saveLabNameBtn.disabled = true;
    deleteLabBtn.disabled = true;
    addEquipmentBtn.disabled = true;
    saveSqftBtn.disabled = true;
    sqftFlatInput.value = "";
    ownerLeadInput.value = "";
    nextStepInput.value = "";
    prioritySelect.value = "medium";
    phaseSelect.value = "phase-1";
    sharedUseInput.value = "";
    buildingImpactInput.value = "";
    ownerLeadInput.disabled = true;
    nextStepInput.disabled = true;
    prioritySelect.disabled = true;
    phaseSelect.disabled = true;
    sharedUseInput.disabled = true;
    buildingImpactInput.disabled = true;
    planningOverview.innerHTML = "";
    prevLabBtn.disabled = true;
    nextLabBtn.disabled = true;
    return;
  }

  detailTitle.textContent = selectedLab.name;
  detailSummary.textContent = state.presentationMode
    ? `${selectedLab.summary} ${selectedLab.outlook}.`
    : selectedLab.summary;
  detailQuickStats.innerHTML = `
    <span class="quickstat-pill status-${selectedLab.status}">${statusConfig[selectedLab.status].label}</span>
    <span class="quickstat-pill">${selectedLab.equipment.length} equipment items</span>
    <span class="quickstat-pill">${selectedLab.space.length} space needs</span>
    <span class="quickstat-pill">${selectedLab.notes.length} planning notes</span>
    <span class="quickstat-pill">${(selectedLab.squareFeet || 0).toLocaleString()} sq ft</span>
    <span class="quickstat-pill">${priorityLabel(selectedLab.priority)}</span>
    <span class="quickstat-pill">${phaseLabel(selectedLab.phase)}</span>
  `;
  kjPlanningHud.innerHTML = `
    <article class="kj-plan-card">
      <span class="kj-label">Owner / Lead</span>
      <strong>${selectedLab.ownerLead || "Awaiting Assignment"}</strong>
    </article>
    <article class="kj-plan-card">
      <span class="kj-label">Next Step</span>
      <strong>${selectedLab.nextStep || "Define next action"}</strong>
    </article>
    <article class="kj-plan-card">
      <span class="kj-label">Priority</span>
      <strong>${priorityLabel(selectedLab.priority)}</strong>
    </article>
    <article class="kj-plan-card">
      <span class="kj-label">Phase</span>
      <strong>${phaseLabel(selectedLab.phase)}</strong>
    </article>
  `;
  detailStatusSelect.disabled = false;
  detailStatusSelect.innerHTML = Object.entries(statusConfig)
    .filter(([key]) => key !== "all")
    .map(
      ([key, config]) =>
        `<option value="${key}"${selectedLab.status === key ? " selected" : ""}>${config.label}</option>`,
    )
    .join("");
  detailStatusValue.textContent = statusConfig[selectedLab.status].label;
  detailStatusValue.className = `detail-status-value ${selectedLab.status}`;
  detailOutlook.textContent = selectedLab.outlook;
  renderEquipment(selectedLab);
  renderSpace(selectedLab.space);
  fillList(detailNotes, selectedLab.notes);
  selectedLabNameInput.disabled = false;
  newEquipmentInput.disabled = false;
  saveLabNameBtn.disabled = false;
  deleteLabBtn.disabled = false;
  addEquipmentBtn.disabled = false;
  saveSqftBtn.disabled = false;
  ownerLeadInput.disabled = false;
  nextStepInput.disabled = false;
  prioritySelect.disabled = false;
  phaseSelect.disabled = false;
  sharedUseInput.disabled = false;
  buildingImpactInput.disabled = false;
  selectedLabNameInput.value = selectedLab.name;
  sqftFlatInput.value = selectedLab.squareFeet || "";
  ownerLeadInput.value = selectedLab.ownerLead;
  nextStepInput.value = selectedLab.nextStep;
  prioritySelect.value = selectedLab.priority;
  phaseSelect.value = selectedLab.phase;
  sharedUseInput.value = selectedLab.sharedUse;
  buildingImpactInput.value = selectedLab.buildingImpact;
  sqftResult.textContent = selectedLab.squareFeet
    ? `Saved for ${selectedLab.shortName || selectedLab.name}: ${selectedLab.squareFeet.toLocaleString()} square feet`
    : "Enter a square footage value for the selected lab.";
  planningOverview.innerHTML = `
    <span class="quickstat-pill">${selectedLab.ownerLead ? `Owner: ${selectedLab.ownerLead}` : "Owner needed"}</span>
    <span class="quickstat-pill">${selectedLab.nextStep ? `Next: ${selectedLab.nextStep}` : "Next step needed"}</span>
    <span class="quickstat-pill">${priorityLabel(selectedLab.priority)}</span>
    <span class="quickstat-pill">${phaseLabel(selectedLab.phase)}</span>
  `;
  prevLabBtn.disabled = visibleLabs.length <= 1;
  nextLabBtn.disabled = visibleLabs.length <= 1;
}

function render() {
  const selectedChanged = state.lastRenderedSelectedId !== state.selectedId;
  document.body.classList.toggle("presentation-mode", state.presentationMode);
  document.body.classList.toggle("future-skin", state.presentationMode && state.futureSkin);
  presentationToggleBtn.textContent = state.presentationMode ? "Working Mode" : "Presentation Mode";
  if (kjModeBtn) {
    kjModeBtn.setAttribute("aria-pressed", String(state.futureSkin));
    kjModeBtn.textContent = state.futureSkin ? "KJ*" : "KJ";
  }
  renderStatusFilterState();
  renderWorkingModeSummary();
  renderWorkingModeBanner();
  renderLeadershipSummary();
  renderKjHud();
  renderLabGrid();
  renderDetailPanel();
  renderDetailSectionState();
  if (selectedChanged && state.lastRenderedSelectedId !== null) {
    animateDetailPanel();
  }
  state.lastRenderedSelectedId = state.selectedId;
}

if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    state.search = event.target.value;
    if (toolbarSearchInput) toolbarSearchInput.value = state.search;
    render();
  });
}

if (toolbarSearchInput) {
  toolbarSearchInput.addEventListener("input", (event) => {
    state.search = event.target.value;
    if (searchInput) searchInput.value = state.search;
    render();
  });
}

detailStatusSelect.addEventListener("change", (event) => {
  const selectedLab = labs.find((lab) => lab.id === state.selectedId);
  if (!selectedLab) return;

  selectedLab.status = event.target.value;
  persistLabs({ immediate: true });
  updateStats();
  render();
});

detailSectionTabs.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveDetailSection(button.dataset.section);
    renderDetailSectionState();
  });
});

showAllBtn.addEventListener("click", () => {
  clearSearch();
  state.status = "all";
  render();
});

clearSearchBtn.addEventListener("click", () => {
  clearSearch();
  render();
});

saveLabNameBtn.addEventListener("click", () => {
  setActiveDetailSection("editor");
  const lab = labs.find((item) => item.id === state.selectedId);
  const nextName = selectedLabNameInput.value.trim();

  if (!lab || !nextName) {
    setEditorFeedback("Choose a lab and enter a name before saving.");
    return;
  }

  lab.name = nextName;
  lab.shortName = nextName.length > 24 ? nextName.slice(0, 24).trim() : nextName;
  persistLabs({ immediate: true });
  setEditorFeedback(`Updated lab name to ${nextName}.`);
  render();
});

deleteLabBtn.addEventListener("click", () => {
  setActiveDetailSection("editor");
  const lab = labs.find((item) => item.id === state.selectedId);
  if (!lab) {
    setEditorFeedback("Choose a lab before trying to delete it.");
    return;
  }

  const confirmed = window.confirm(`Delete ${lab.name} from the tracker?`);
  if (!confirmed) {
    setEditorFeedback(`Kept ${lab.shortName || lab.name} in the tracker.`);
    return;
  }

  const visibleLabs = filteredLabs();
  const visibleIndex = visibleLabs.findIndex((item) => item.id === lab.id);
  const labIndex = labs.findIndex((item) => item.id === lab.id);
  if (labIndex === -1) return;

  labs.splice(labIndex, 1);
  if (isDefaultLab(lab.id)) {
    deletedDefaultLabIds.add(lab.id);
  }

  const remainingVisible = visibleLabs.filter((item) => item.id !== lab.id);
  const fallbackVisibleLab = remainingVisible[visibleIndex] || remainingVisible[visibleIndex - 1] || remainingVisible[0];
  state.selectedId = fallbackVisibleLab?.id || labs[0]?.id || null;

  persistLabs({ immediate: true });
  updateStats();
  setEditorFeedback(`Removed ${lab.name} from the tracker.`);
  render();
});

addEquipmentBtn.addEventListener("click", () => {
  setActiveDetailSection("equipment");
  const lab = labs.find((item) => item.id === state.selectedId);
  const equipmentName = newEquipmentInput.value.trim();

  if (!lab || !equipmentName) {
    setEditorFeedback("Choose a lab and enter equipment before adding it.");
    return;
  }

  lab.equipment.push({ name: equipmentName, ownership: "investigate" });
  newEquipmentInput.value = "";
  persistLabs({ immediate: true });
  setEditorFeedback(`Added equipment to ${lab.shortName || lab.name}.`);
  render();
});

addLabBtn.addEventListener("click", () => {
  setActiveDetailSection("editor");
  const name = newLabNameInput.value.trim();
  const status = newLabStatusSelect.value;

  if (!name) {
    setEditorFeedback("Enter a name for the new lab first.");
    return;
  }

  const newLab = {
    id: uniqueLabId(name),
    name,
    shortName: name.length > 24 ? name.slice(0, 24).trim() : name,
    status,
    visual: "data",
    outlook: status === "planned"
      ? "Planned for ITEC"
      : status === "investigation"
        ? "Needs planning review"
        : "New resource proposed for ITEC",
    summary: "New lab entry added during working mode planning.",
    squareFeet: 0,
    ownerLead: "",
    nextStep: "",
    priority: "medium",
    phase: "phase-1",
    sharedUse: "",
    buildingImpact: "",
    equipment: [],
    space: [],
    notes: ["Added in working mode. Update summary, space needs, and planning notes as decisions become clearer."],
  };

  labs.push(newLab);
  state.selectedId = newLab.id;
  newLabNameInput.value = "";
  persistLabs({ immediate: true });
  updateStats();
  setEditorFeedback(`Added ${name} and selected it for editing.`);
  render();
});

saveSqftBtn.addEventListener("click", () => {
  setActiveDetailSection("space");
  const lab = labs.find((item) => item.id === state.selectedId);
  const area = parseSquareFootageInput();

  if (!lab || !area) {
    setEditorFeedback("Choose a lab and enter a valid square footage number before saving.");
    return;
  }

  lab.squareFeet = area;
  persistLabs({ immediate: true });
  updateStats();
  setEditorFeedback(`Saved ${area.toLocaleString()} square feet for ${lab.shortName || lab.name}.`);
  render();
});

sqftFlatInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    saveSqftBtn.click();
  }
});

ownerLeadInput.addEventListener("input", (event) => {
  setActiveDetailSection("planning");
  updateSelectedLabPlanningField("ownerLead", event.target.value);
});

nextStepInput.addEventListener("input", (event) => {
  setActiveDetailSection("planning");
  updateSelectedLabPlanningField("nextStep", event.target.value);
});

prioritySelect.addEventListener("change", (event) => {
  setActiveDetailSection("planning");
  updateSelectedLabPlanningField("priority", event.target.value);
});

phaseSelect.addEventListener("change", (event) => {
  setActiveDetailSection("planning");
  updateSelectedLabPlanningField("phase", event.target.value);
});

sharedUseInput.addEventListener("input", (event) => {
  setActiveDetailSection("planning");
  updateSelectedLabPlanningField("sharedUse", event.target.value);
});

buildingImpactInput.addEventListener("input", (event) => {
  setActiveDetailSection("planning");
  updateSelectedLabPlanningField("buildingImpact", event.target.value);
});

presentationToggleBtn.addEventListener("click", () => {
  state.presentationMode = !state.presentationMode;
  persistPresentationMode();
  render();
});

topWorkingModeBtn.addEventListener("click", () => {
  state.presentationMode = false;
  persistPresentationMode();
  render();
});

if (syncNowBtn) {
  syncNowBtn.addEventListener("click", () => {
    void forceCloudSync();
  });
}

if (kjModeBtn) {
  kjModeBtn.addEventListener("click", () => {
    state.futureSkin = !state.futureSkin;
    persistFutureSkin();
    render();
  });
}

enterWorkingModeBtn.addEventListener("click", () => {
  state.presentationMode = false;
  persistPresentationMode();
  render();
});

prevLabBtn.addEventListener("click", () => {
  moveSelection(-1);
});

nextLabBtn.addEventListener("click", () => {
  moveSelection(1);
});

exportPdfBtn.addEventListener("click", exportCurrentLabPdf);
exportExcelBtn.addEventListener("click", exportCurrentLabCsv);

statCards.forEach((card) => {
  const applyFilter = () => {
    state.status = card.dataset.status;
    render();
  };

  card.addEventListener("click", applyFilter);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      applyFilter();
    }
  });
});

updateStats();
createStatusFilters();
render();
updateTopContextState();
startKjCountdown();
void initializeCloudSync();

window.addEventListener("scroll", updateTopContextState, { passive: true });
