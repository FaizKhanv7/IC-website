/*
 * Showcase of student projects from Forsyth Central Highschool CS Pathway.
 * Covering IST, AP CSP, AP CSA, and PGAS.
 */

export const projects = [
  {
    id: "campus-navigator",
    title: "Central Navigator & Campus Guide",
    course: "IST",
    courseFull: "Information Science & Technology",
    gradeLevel: "9th Grade Capstone",
    year: "2025",
    tagline: "Interactive campus navigation and club directory for incoming Forsyth Central freshmen.",
    description: "Built as an IST capstone project, Central Navigator helps new students and visitors navigate the Forsyth Central Highschool campus. It features an interactive SVG building map, search for teacher classrooms, bell schedule countdown, and an up-to-date extracurricular clubs catalog.",
    tags: ["HTML5", "CSS3 Grid", "Vanilla JavaScript", "SVG Mapping", "Local Storage"],
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
    iconName: "Compass",
    featured: true,
    stats: {
      metric: "500+ Visits",
      highlight: "Adopted by FCHS Orientation Team"
    },
    features: [
      "Dynamic interactive floor plans for all FCHS wings and STEM labs",
      "Real-time bell schedule calculator with period countdown timer",
      "Club catalog with contact info, meeting dates, and filterable categories",
      "Accessible high-contrast mode compliant with WCAG guidelines"
    ],
    studentTeam: "Liam K. & Maya R. (Class of '28)"
  },
  {
    id: "ecotrack-watershed",
    title: "EcoTrack: Forsyth County Water Quality",
    course: "AP CSP",
    courseFull: "AP Computer Science Principles",
    gradeLevel: "10th Grade Create Task",
    year: "2025",
    tagline: "Data visualization and environmental health monitoring for Chattahoochee basin tributaries.",
    description: "Developed for the AP CSP Create Performance Task, EcoTrack ingests open-data water sensors across Forsyth County watersheds and Lake Lanier. The application computes water safety indices, turbidity warnings, and historical runoff graphs to educate local residents on environmental stewardship.",
    tags: ["Python", "JavaScript", "Chart.js", "REST APIs", "Data Analysis"],
    gradient: "linear-gradient(135deg, #065f46 0%, #10b981 100%)",
    iconName: "BarChart3",
    featured: true,
    stats: {
      metric: "12 Sensor Stations",
      highlight: "College Board Create Task Perfect Score"
    },
    features: [
      "Fetches real-time sensor streams from USGS and local watershed monitors",
      "Calculates safety scores based on pH, dissolved oxygen, and turbidity",
      "Interactive time-series charts showing rainfall vs runoff impact",
      "Educational quiz testing user knowledge on local aquatic ecosystems"
    ],
    studentTeam: "Sophia Chen (Class of '27)"
  },
  {
    id: "cyberquest-dungeon",
    title: "CyberQuest: 2D Java Rogue-lite",
    course: "AP CSA",
    courseFull: "AP Computer Science A",
    gradeLevel: "11th Grade Final Project",
    year: "2024",
    tagline: "Object-oriented dungeon exploration game built from scratch in Java.",
    description: "An extensive object-oriented application implementing polymorphism, inheritance hierarchies, and recursive maze-generation algorithms. Players explore procedurally generated levels, solve algorithmic security challenges, and battle autonomous enemy agents driven by A* pathfinding.",
    tags: ["Java", "OOP Architecture", "Algorithms", "A* Pathfinding", "Swing/Canvas"],
    gradient: "linear-gradient(135deg, #4c1d95 0%, #8b5cf6 100%)",
    iconName: "Gamepad2",
    featured: true,
    stats: {
      metric: "6,500+ Lines Java",
      highlight: "1st Place FCHS CS Showcase"
    },
    features: [
      "Custom procedural map generation using recursive backtracker algorithm",
      "Robust class hierarchy with abstract Entity, Item, and Ability models",
      "Enemy AI utilizing A* pathfinding and situational decision trees",
      "Save/load system serializing game state to encrypted JSON/binary"
    ],
    studentTeam: "Marcus Vance & David Zhang (Class of '26)"
  },
  {
    id: "bulldog-autonomous-rover",
    title: "Bulldog Autonomous Rover",
    course: "PGAS",
    courseFull: "Programming, Games, Apps, and Society",
    gradeLevel: "12th Grade Capstone",
    year: "2024",
    tagline: "Sensor-guided rover built for autonomous obstacle detection and navigation.",
    description: "A student-built mechatronics project, the Bulldog Autonomous Rover combines a custom chassis, microcontroller, distance sensors, and motor drivers to navigate a course and avoid obstacles without remote control.",
    tags: ["Arduino", "C++", "Ultrasonic Sensors", "Motor Control", "CAD", "Robotics"],
    gradient: "linear-gradient(135deg, #991b1b 0%, #ef4444 100%)",
    iconName: "Bot",
    featured: true,
    stats: {
      metric: "Autonomous Navigation",
      highlight: "Sensor-Guided Obstacle Avoidance"
    },
    features: [
      "Custom-designed chassis assembled to support stable movement and sensor placement",
      "Ultrasonic sensors detect obstacles and guide real-time navigation decisions",
      "Microcontroller software coordinates motor drivers and turning behavior",
      "Iterative testing tunes steering and obstacle-avoidance performance"
    ],
    studentTeam: "Student Mechatronics Team"
  },
  {
    id: "robotics-telemetry",
    title: "Bulldog Robotics Telemetry Suite",
    course: "AP CSA",
    courseFull: "AP Computer Science A",
    gradeLevel: "11th Grade Interdisciplinary",
    year: "2025",
    tagline: "Real-time WebSocket telemetry and motor diagnostics for the FCHS Robotics team.",
    description: "Built in collaboration between the Computer Science pathway and Forsyth Central Robotics team (Bulldogs). Provides real-time dashboard visualization for robot sensor readings, gyro alignment, battery discharge curves, and autonomous path tracking during competition matches.",
    tags: ["Java", "WebSockets", "React", "State Machines", "Telemetry"],
    gradient: "linear-gradient(135deg, #78350f 0%, #d97706 100%)",
    iconName: "Cpu",
    featured: true,
    stats: {
      metric: "60 FPS Updates",
      highlight: "Used at GA FIRST Robotics State Championship"
    },
    features: [
      "Sub-20ms WebSocket pipeline transmitting live motor currents and speeds",
      "Field coordinate visualizer tracking autonomous odometry trajectories",
      "Battery health regression model warning drivers of voltage drops",
      "Diagnostic log exporter formatted for post-match analysis in CSV and JSON"
    ],
    studentTeam: "Ethan Brooks & Team Bulldog (Class of '26)"
  },
  {
    id: "pixelpaws-rescue",
    title: "PixelPaws: Forsyth County Pet Matcher",
    course: "AP CSP",
    courseFull: "AP Computer Science Principles",
    gradeLevel: "10th Grade Project",
    year: "2024",
    tagline: "Web app pairing Forsyth County shelter animals with prospective adoptive families.",
    description: "Designed to address overcrowding in local animal shelters, PixelPaws guides families through an interactive lifestyle assessment to recommend ideal dog and cat companions. Connects directly to local shelter public APIs.",
    tags: ["JavaScript", "HTML5/CSS3", "REST APIs", "Filter Algorithms", "Mobile First"],
    gradient: "linear-gradient(135deg, #0e7490 0%, #06b6d4 100%)",
    iconName: "HeartHandshake",
    featured: true,
    stats: {
      metric: "40+ Adoptions",
      highlight: "Featured in Forsyth County News"
    },
    features: [
      "Custom matching algorithm weighing yard size, activity level, and allergies",
      "Dynamic filtering by breed, age, temperament, and rescue shelter location",
      "Direct integration with shelter volunteer contact forms",
      "Favorites list saved locally for student and family discussions"
    ],
    studentTeam: "Chloe Nguyen (Class of '27)"
  },
  {
    id: "algorithmic-synth",
    title: "HarmoniCode: Java Audio Synthesizer",
    course: "AP CSA",
    courseFull: "AP Computer Science A",
    gradeLevel: "11th Grade Project",
    year: "2024",
    tagline: "Software synthesizer and algorithmic music generator programmed in Java.",
    description: "An advanced AP CSA independent exploration translating algorithmic principles into acoustic sound waves. Implements sine, square, and sawtooth waveform generation, MIDI track parsing, and custom binary search tree queues for scheduling notes.",
    tags: ["Java Sound API", "Data Structures", "Binary Trees", "Audio DSP", "OOP"],
    gradient: "linear-gradient(135deg, #831843 0%, #db2777 100%)",
    iconName: "Music",
    featured: true,
    stats: {
      metric: "4 Wave Types",
      highlight: "AP CSA Creative Computing Award"
    },
    features: [
      "Real-time waveform mathematical generation (Sine, Square, Sawtooth, Triangle)",
      "Polyphonic playback engine using multithreaded audio output lines",
      "Interactive on-screen piano keyboard with configurable octave shifts",
      "Algorithmic arpeggiator generating chord progressions based on mathematical sequences"
    ],
    studentTeam: "Noah Reynolds (Class of '26)"
  },
  {
    id: "autodeploy-monitor",
    title: "CloudWatch Sentinel: Container Monitor",
    course: "PGAS",
    courseFull: "Programming, Games, Apps, and Society",
    gradeLevel: "12th Grade Project",
    year: "2025",
    tagline: "Automated container health monitor and Slack alerting bot for school servers.",
    description: "Built by seniors to keep school web servers resilient. CloudWatch Sentinel monitors Docker container health, network latency, and memory spikes, dispatching automated alerts to webhook endpoints and self-healing failed instances.",
    tags: ["Docker", "Python", "Cloud Architecture", "Webhooks", "Monitoring"],
    gradient: "linear-gradient(135deg, #111827 0%, #374151 100%)",
    iconName: "ShieldCheck",
    featured: true,
    stats: {
      metric: "100% Automated",
      highlight: "Self-Healing Container Automation"
    },
    features: [
      "Docker socket listener detecting container crashes and restarting instances",
      "Prometheus-compatible metric scraper tracking CPU and RAM utilization",
      "Automated Slack alert notifications with incident diagnostic summaries",
      "Lightweight dashboard displaying cluster health status in real time"
    ],
    studentTeam: "Student Development Team"
  }
];

export function getProject(id) {
  return projects.find(function (p) { return p.id === id; });
}

export function getProjectsByCourse(course) {
  if (!course || course === "ALL") return projects;
  return projects.filter(function (p) { return p.course.toLowerCase() === course.toLowerCase(); });
}
