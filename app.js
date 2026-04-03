const storageKey = "itec-lab-tracker-state-v1";
const presentationKey = "itec-lab-tracker-presentation-mode-v1";

const defaultLabs = [
  {
    id: "robotics",
    name: "Robotics Lab",
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
const searchInput = document.getElementById("searchInput");
const statusFilters = document.getElementById("statusFilters");
const labGrid = document.getElementById("labGrid");
const showAllBtn = document.getElementById("showAllBtn");
const presentationToggleBtn = document.getElementById("presentationToggleBtn");
const prevLabBtn = document.getElementById("prevLabBtn");
const nextLabBtn = document.getElementById("nextLabBtn");

const detailTitle = document.getElementById("detailTitle");
const detailSummary = document.getElementById("detailSummary");
const detailStatusSelect = document.getElementById("detailStatusSelect");
const detailStatusValue = document.getElementById("detailStatusValue");
const detailOutlook = document.getElementById("detailOutlook");
const detailEquipment = document.getElementById("detailEquipment");
const equipmentSummary = document.getElementById("equipmentSummary");
const equipmentOwnershipSummary = document.getElementById("equipmentOwnershipSummary");
const detailSpace = document.getElementById("detailSpace");
const detailNotes = document.getElementById("detailNotes");

const ownershipConfig = {
  owned: "Already Owned",
  purchase: "Needs Purchase",
  investigate: "Need To Confirm",
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

function loadLabs() {
  try {
    const saved = window.localStorage.getItem(storageKey);
    if (!saved) return structuredClone(defaultLabs);

    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) return structuredClone(defaultLabs);

    return defaultLabs.map((lab) => {
      const override = parsed.find((item) => item.id === lab.id);
      const merged = override ? { ...lab, ...override } : structuredClone(lab);
      merged.equipment = (merged.equipment || []).map((item) =>
        typeof item === "string" ? { name: item, ownership: "investigate" } : item,
      );
      return merged;
    });
  } catch {
    return structuredClone(defaultLabs);
  }
}

const labs = loadLabs();

const state = {
  search: "",
  status: "all",
  selectedId: labs[0]?.id ?? null,
  presentationMode: window.localStorage.getItem(presentationKey) === "true",
};

function persistLabs() {
  window.localStorage.setItem(storageKey, JSON.stringify(labs));
}

function persistPresentationMode() {
  window.localStorage.setItem(presentationKey, String(state.presentationMode));
}

function countByStatus(status) {
  return labs.filter((lab) => lab.status === status).length;
}

function updateStats() {
  totalLabsEl.textContent = String(labs.length);
  plannedLabsEl.textContent = String(countByStatus("planned"));
  investigationLabsEl.textContent = String(countByStatus("investigation"));
  proposedLabsEl.textContent = String(countByStatus("proposed"));
}

function createStatusFilters() {
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
  Array.from(statusFilters.children).forEach((button, index) => {
    const key = Object.keys(statusConfig)[index];
    button.classList.toggle("active", key === state.status);
  });
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
    card.innerHTML = state.presentationMode
      ? `
        <div class="lab-header">
          <div class="lab-visual ${visual.className}" aria-hidden="true">${visual.emoji}</div>
          <div class="lab-title">${lab.name}</div>
        </div>
      `
      : `
        <div class="lab-header">
          <div class="lab-title">${lab.name}</div>
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

function renderEquipment(selectedLab) {
  const counts = equipmentCounts(selectedLab.equipment);
  equipmentSummary.innerHTML = `
    <span class="mini-pill owned">Owned: ${counts.owned}</span>
    <span class="mini-pill purchase">Purchase: ${counts.purchase}</span>
    <span class="mini-pill investigate">Confirm: ${counts.investigate}</span>
  `;
  equipmentOwnershipSummary.textContent =
    `${counts.owned} already owned, ${counts.purchase} needing purchase, and ${counts.investigate} needing confirmation.`;

  detailEquipment.innerHTML = "";

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
      persistLabs();
      renderEquipment(selectedLab);
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
    detailStatusSelect.disabled = true;
    detailStatusSelect.innerHTML = `<option value="">No lab selected</option>`;
    detailStatusValue.textContent = "-";
    detailStatusValue.className = "detail-status-value";
    detailOutlook.textContent = "-";
    detailEquipment.innerHTML = "";
    equipmentSummary.innerHTML = "";
    equipmentOwnershipSummary.textContent = "";
    detailSpace.innerHTML = "";
    detailNotes.innerHTML = "";
    prevLabBtn.disabled = true;
    nextLabBtn.disabled = true;
    return;
  }

  detailTitle.textContent = selectedLab.name;
  detailSummary.textContent = state.presentationMode
    ? `${selectedLab.summary} ${selectedLab.outlook}.`
    : selectedLab.summary;
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
  fillList(detailSpace, selectedLab.space);
  fillList(detailNotes, selectedLab.notes);
  prevLabBtn.disabled = visibleLabs.length <= 1;
  nextLabBtn.disabled = visibleLabs.length <= 1;
}

function render() {
  document.body.classList.toggle("presentation-mode", state.presentationMode);
  presentationToggleBtn.textContent = state.presentationMode ? "Working Mode" : "Presentation Mode";
  renderStatusFilterState();
  renderLabGrid();
  renderDetailPanel();
}

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  render();
});

detailStatusSelect.addEventListener("change", (event) => {
  const selectedLab = labs.find((lab) => lab.id === state.selectedId);
  if (!selectedLab) return;

  selectedLab.status = event.target.value;
  persistLabs();
  updateStats();
  render();
});

showAllBtn.addEventListener("click", () => {
  state.search = "";
  state.status = "all";
  searchInput.value = "";
  render();
});

presentationToggleBtn.addEventListener("click", () => {
  state.presentationMode = !state.presentationMode;
  persistPresentationMode();
  render();
});

prevLabBtn.addEventListener("click", () => {
  moveSelection(-1);
});

nextLabBtn.addEventListener("click", () => {
  moveSelection(1);
});

updateStats();
createStatusFilters();
render();
