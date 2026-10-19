import { ArchitectureLayer, CourseworkItem, ProjectData } from "../types";
import { Language } from "./translations";

export const PROFILE_INFO_EN = {
  name: "Michail Farmakis",
  handle: "m3rcena",
  monogram: "MF.",
  role: "Full-Stack Software Engineer & CS Student",
  university: "National and Kapodistrian University of Athens (NKUA)",
  department: "Department of Informatics and Telecommunications",
  location: "Athens, Greece",
  timezone: "UTC+3 (Athens, GR)",
  email: "michail.frm@gmail.com",
  github: "https://github.com/m3rcena",
  linkedin: "https://www.linkedin.com/in/michail-farmakis",
  liveSite: "https://m3rcena.github.io/",
  headline: "Full-Stack Software Engineer & CS Student at NKUA. Bridging low-level systems programming (C/C++, Assembly, FPGAs) with resilient modern web architectures, distributed backends, and high-performance desktop clients.",
  about: "Builder with a first-principles engineering mindset. I specialize in end-to-end software delivery: from low-level systems logic, POSIX concurrency, and FPGA digital synthesis to resilient microservices and high-framerate, reactive user interfaces. My academic foundation at NKUA Department of Informatics & Telecommunications provides deep insight into hardware constraints and memory locality, allowing me to write predictable, high-performance software across any layer of the stack.",
  stats: [
    { label: "GitHub Stars", value: "62+", subtext: "Across open-source tools" },
    { label: "NPM Packages", value: "1 (Zero-Dep)", subtext: "Published TypeScript engine" },
    { label: "University", value: "NKUA DIT", subtext: "Top Greek CS Department" },
    { label: "Stack Depth", value: "6 Tiers", subtext: "Silicon to Reactive Web" },
  ],
};

export const PROFILE_INFO_EL = {
  name: "Μιχαήλ Φαρμάκης",
  handle: "m3rcena",
  monogram: "MF.",
  role: "Full-Stack Μηχανικός Λογισμικού & Φοιτητής Πληροφορικής",
  university: "Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών (ΕΚΠΑ)",
  department: "Τμήμα Πληροφορικής και Τηλεπικοινωνιών",
  location: "Αθήνα, Ελλάδα",
  timezone: "UTC+3 (Αθήνα, GR)",
  email: "michail.frm@gmail.com",
  github: "https://github.com/m3rcena",
  linkedin: "https://www.linkedin.com/in/michail-farmakis",
  liveSite: "https://m3rcena.github.io/",
  headline: "Full-Stack Μηχανικός Λογισμικού & Φοιτητής Πληροφορικής στο ΕΚΠΑ. Συνδυάζω προγραμματισμό συστημάτων χαμηλού επιπέδου (C/C++, Assembly, FPGAs) με ανθεκτικές σύγχρονες web αρχιτεκτονικές, distributed backends και desktop εφαρμογές υψηλών επιδόσεων.",
  about: "Μηχανικός με νοοτροπία βασικών αρχών (first-principles). Ειδικεύομαι στην υλοποίηση λογισμικού από άκρο σε άκρο: από λογική συστημάτων χαμηλού επιπέδου, POSIX παραλληλία και ψηφιακή σύνθεση FPGA, μέχρι ανθεκτικά microservices και αντιδραστικές διεπαφές χρήστη υψηλής απόκρισης. Οι σπουδές μου στο Τμήμα Πληροφορικής & Τηλεπικοινωνιών του ΕΚΠΑ παρέχουν βαθιά κατανόηση των περιορισμών υλικού και της τοπικότητας μνήμης, επιτρέποντάς μου να γράφω αποδοτικό και προβλέψιμο κώδικα σε κάθε επίπεδο του stack.",
  stats: [
    { label: "Αστέρια GitHub", value: "62+", subtext: "Σε εργαλεία ανοιχτού κώδικα" },
    { label: "Πακέτα NPM", value: "1 (Zero-Dep)", subtext: "Δημοσιευμένη μηχανή TypeScript" },
    { label: "Πανεπιστήμιο", value: "ΕΚΠΑ ΤΠ&Τ", subtext: "Κορυφαίο Ελληνικό Τμήμα CS" },
    { label: "Βάθος Stack", value: "6 Επίπεδα", subtext: "Από το Πυρίτιο στον Ιστό" },
  ],
};

export const PROJECTS_EN: ProjectData[] = [
  {
    id: "udeler-reborn",
    name: "Udeler-Reborn",
    tagline: "Cross-platform desktop application revitalizing offline course and asset management.",
    category: "DESKTOP",
    categoryLabel: "Desktop Application",
    badge: "★ 62+ STARS // RELEASE v3.x",
    status: "PRODUCTION",
    stars: "62+",
    accent: "#ff5722",
    summary: "Engineered cross-platform desktop suite using Electron, TypeScript, and React. Built resilient multi-threaded download stream worker pools, typed ContextBridge IPC communication, automatic SHA-256 checksum validation, and automated multi-OS release builds using GitHub Actions.",
    metrics: [
      { label: "Architecture", value: "ContextIsolation IPC" },
      { label: "Concurrency", value: "Multi-Threaded Worker Pool" },
      { label: "Targets", value: "Windows / macOS / Linux" },
      { label: "Community", value: "62+ Stars • Active Forks" },
    ],
    architectureFlow: ["React / TypeScript UI", "Typed ContextBridge IPC", "Node.js Stream Worker Pool", "Local FS & SHA-256 Cache"],
    stack: ["TypeScript", "Electron", "React", "Node.js Streams", "CI/CD", "GitHub Actions"],
    githubUrl: "https://github.com/m3rcena/Udeler-Reborn",
    liveUrl: "https://github.com/m3rcena/Udeler-Reborn/releases",
    keyHighlights: ["Isolated renderer process from Node.js runtime using strict ContextBridge IPC APIs for zero-trust security", "Designed dynamic backpressure stream queues with automatic retry on intermittent packet loss", "Built automated CI/CD pipelines deploying signed binaries (.exe, .dmg, .AppImage) to GitHub Releases"],
    demoType: "stream",
    terminalLogs: ["[IPC_BRIDGE] Handshake established (ContextIsolation: TRUE, NodeIntegration: FALSE)", "[QUEUE_MGR] Spawning 4 concurrent chunk workers for asset stream...", "[WORKER_01] Chunk 001/048 (4.2MB) -> Downloaded [12.4 MB/s]", "[FS_WRITER] Checksum SHA-256 verified -> Local cache committed.", "[CI_PIPELINE] Built Win-x64 (.exe), macOS (.dmg), Linux (.AppImage)"],
  },
  {
    id: "chronogit",
    name: "ChronoGit",
    tagline: "Automated documentation engine & GitHub Apps real-time webhook workbench.",
    category: "DEVELOPER_TOOLS",
    categoryLabel: "GitHub App & Developer Tool",
    badge: "v0.1.0-alpha // ACTIVE DEV",
    status: "ACTIVE_DEV",
    accent: "#38bdf8",
    summary: "Engineered GitHub App that synchronizes dynamic directory architecture trees directly into README files upon push events via verified bot commits. Incorporates constant-time HMAC-SHA256 signature verification, WebAuthn passkey authentication, and bi-directional WebSocket telemetry.",
    metrics: [
      { label: "Webhook Security", value: "Constant-Time HMAC-SHA256" },
      { label: "Auth Protocol", value: "FIDO2 WebAuthn Passkeys" },
      { label: "Telemetry", value: "Bi-Directional WebSockets" },
      { label: "Commit Engine", value: "Verified Bot Signatures" },
    ],
    architectureFlow: ["Git Push Event", "HMAC-SHA256 Verifier", "AST Directory Parser", "Verified README Tree Commit"],
    stack: ["GitHub Apps API", "TypeScript", "WebSockets", "WebAuthn", "Node.js"],
    githubUrl: "https://github.com/m3rcena",
    keyHighlights: ["Implemented timing-safe buffer comparison to prevent side-channel timing attacks on webhook payloads", "Built AST parser to traverse deep repository directories and produce deterministic markdown visual trees", "Integrated WebAuthn hardware passkeys for passwordless, cryptographically signed administrative sessions"],
    demoType: "webhook",
    terminalLogs: ["[WEBHOOK] POST /api/github/hook (X-Hub-Signature-256 verified in 0.3ms)", "[WEBAUTHN] Hardware passkey assertion validated for administrative session.", "[TREE_SYNC] Parsed 54 repository nodes -> Diff detected in /src", "[GIT_BOT] Committed updated architecture tree [verified-signature]"],
  },
  {
    id: "weky",
    name: "@m3rcena/weky",
    tagline: "Modular, type-safe gaming engine built for Discord.js with zero dependencies.",
    category: "DEVELOPER_TOOLS",
    categoryLabel: "NPM Registry Package",
    badge: "NPM REGISTRY // ZERO-DEP",
    status: "PUBLISHED",
    accent: "#10b981",
    summary: "High-performance zero-dependency TypeScript package published on the NPM registry. Delivers interactive canvas and button components, deterministic finite state machines, and lifecycle collector event handlers for Discord bots.",
    metrics: [
      { label: "Install Command", value: "npm i @m3rcena/weky" },
      { label: "Dependencies", value: "Zero External Bloat" },
      { label: "Type Safety", value: "100% Strict Declarations" },
      { label: "Core Engine", value: "Deterministic State Machines" },
    ],
    architectureFlow: ["Discord Interaction Event", "Finite State Machine Transition", "Interactive Canvas Renderer", "Collector Lifecycle Hook"],
    stack: ["TypeScript", "Node.js", "Discord.js", "State Machines", "NPM Registry"],
    githubUrl: "https://github.com/m3rcena/weky",
    npmUrl: "https://www.npmjs.com/package/@m3rcena/weky",
    installCmd: "npm i @m3rcena/weky",
    keyHighlights: ["Engineered with zero third-party dependencies to ensure maximal security and minimal bundle footprint", "Architected strict TypeScript typings that infer Discord interaction button and modal event payloads", "Built deterministic finite state machines guaranteeing zero memory leaks during long-running bot instances"],
    demoType: "fsm",
    terminalLogs: ["$ npm i @m3rcena/weky", "[NPM_REGISTRY] Fetched tarball (0 external dependencies)", "[ENGINE_INIT] Initializing 24 state nodes in 1.2ms", "[TEST_SUITE] 42/42 tests passing with 100% type coverage"],
  },
  {
    id: "burgers",
    name: "Burger Builder SPA",
    tagline: "Full-stack reactive web application with dynamic sandwich assembly and order pipeline.",
    category: "WEB_APPS",
    categoryLabel: "Reactive Web Application",
    badge: "REACT & REDUX // LIVE DEMO",
    status: "PRODUCTION",
    accent: "#eab308",
    summary: "Interactive single-page application built with React and Redux. Features dynamic ingredient physics, cart checkout calculation, asynchronous order processing via REST backend, and responsive UI states.",
    metrics: [
      { label: "State Management", value: "Redux Store & Middleware" },
      { label: "Routing", value: "Dynamic React Router" },
      { label: "Persistence", value: "Firebase REST Storage" },
      { label: "UI Paradigm", value: "Dynamic Ingredient Assembly" },
    ],
    architectureFlow: ["Ingredient Dispatcher", "Redux Reducer Calculation", "Live Burger Stack Renderer", "Checkout API Submission"],
    stack: ["React", "Redux", "JavaScript ES6+", "CSS Modules", "Firebase API"],
    githubUrl: "https://github.com/m3rcena",
    liveUrl: "/projects/burgers.html",
    keyHighlights: ["Engineered centralized immutable state with Redux thunks handling checkout side-effects", "Implemented real-time visual sandwich assembler with responsive layout across mobile and desktop", "Asynchronous validation against cloud endpoints with order receipt generation"],
    demoType: "iframe",
    terminalLogs: ['[STORE] Dispatched action ADD_INGREDIENT { type: "bacon", cost: 0.70 }', "[PRICE_CALC] Total updated: $6.40", "[ORDER_DISPATCH] Submitting order payload to REST backend...", "[ORDER_RESPONSE] 201 Created -> Order ID #88492"],
  },
];

export const PROJECTS_EL: ProjectData[] = [
  {
    id: "udeler-reborn",
    name: "Udeler-Reborn",
    tagline: "Cross-platform desktop εφαρμογή για offline διαχείριση εκπαιδευτικών μαθημάτων και πόρων.",
    category: "DESKTOP",
    categoryLabel: "Εφαρμογή Desktop",
    badge: "★ 62+ STARS // ΕΚΔΟΣΗ v3.x",
    status: "PRODUCTION",
    stars: "62+",
    accent: "#ff5722",
    summary: "Cross-platform desktop σουίτα με Electron, TypeScript και React. Πολυνηματικό worker pool για download streams, ασφαλές ContextBridge IPC, αυτόματη επαλήθευση ακεραιότητας SHA-256 και αυτοματοποιημένα multi-OS builds με GitHub Actions.",
    metrics: [
      { label: "Αρχιτεκτονική", value: "ContextIsolation IPC" },
      { label: "Παραλληλία", value: "Multi-Threaded Worker Pool" },
      { label: "Πλατφόρμες", value: "Windows / macOS / Linux" },
      { label: "Κοινότητα", value: "62+ Stars • Active Forks" },
    ],
    architectureFlow: ["React / TypeScript UI", "Typed ContextBridge IPC", "Node.js Stream Worker Pool", "Local FS & SHA-256 Cache"],
    stack: ["TypeScript", "Electron", "React", "Node.js Streams", "CI/CD", "GitHub Actions"],
    githubUrl: "https://github.com/m3rcena/Udeler-Reborn",
    liveUrl: "https://github.com/m3rcena/Udeler-Reborn/releases",
    keyHighlights: ["Απομόνωση διαδικασίας renderer από το Node.js runtime μέσω strict ContextBridge IPC APIs για ασφάλεια zero-trust", "Σχεδίαση δυναμικών ουρών ροής με backpressure και αυτόματη επαναπροσπάθεια σε απώλεια πακέτων", "Αυτοματοποιημένες CI/CD ροές για έκδοση signed binaries (.exe, .dmg, .AppImage) στα GitHub Releases"],
    demoType: "stream",
    terminalLogs: ["[IPC_BRIDGE] Σύνδεση επιτεύχθηκε (ContextIsolation: TRUE, NodeIntegration: FALSE)", "[QUEUE_MGR] Εκκίνηση 4 παράλληλων chunk workers για τη ροή δεδομένων...", "[WORKER_01] Τμήμα 001/048 (4.2MB) -> Λήφθηκε [12.4 MB/s]", "[FS_WRITER] Επαλήθευση SHA-256 επιτυχής -> Εγγραφή στην τοπική cache.", "[CI_PIPELINE] Δημιουργήθηκαν εκδόσεις Win-x64 (.exe), macOS (.dmg), Linux (.AppImage)"],
  },
  {
    id: "chronogit",
    name: "ChronoGit",
    tagline: "Μηχανή αυτοματοποιημένης τεκμηρίωσης και real-time GitHub Apps webhook workbench.",
    category: "DEVELOPER_TOOLS",
    categoryLabel: "GitHub App & Εργαλείο Προγραμματιστών",
    badge: "v0.1.0-alpha // ΣΕ ΑΝΑΠΤΥΞΗ",
    status: "ACTIVE_DEV",
    accent: "#38bdf8",
    summary: "GitHub App που συγχρονίζει δυναμικά δέντρα αρχιτεκτονικής αρχείων απευθείας σε README αρχεία μέσω verified bot commits. Περιλαμβάνει constant-time HMAC-SHA256 signature verification, WebAuthn passkeys και αμφίδρομη WebSocket τηλεμετρία.",
    metrics: [
      { label: "Ασφάλεια Webhook", value: "Constant-Time HMAC-SHA256" },
      { label: "Πρωτόκολλο Auth", value: "FIDO2 WebAuthn Passkeys" },
      { label: "Τηλεμετρία", value: "Αμφίδρομα WebSockets" },
      { label: "Μηχανή Commit", value: "Επαληθευμένες Υπογραφές Bot" },
    ],
    architectureFlow: ["Git Push Event", "HMAC-SHA256 Verifier", "AST Directory Parser", "Verified README Tree Commit"],
    stack: ["GitHub Apps API", "TypeScript", "WebSockets", "WebAuthn", "Node.js"],
    githubUrl: "https://github.com/m3rcena",
    keyHighlights: ["Υλοποίηση timing-safe σύγκρισης buffer για αποτροπή επιθέσεων side-channel timing σε payloads", "AST parser για αναδρομική διάσχιση αποθετηρίων και δημιουργία ντετερμινιστικών markdown visual trees", "Ενσωμάτωση WebAuthn hardware passkeys για συνεδρίες διαχείρισης χωρίς κωδικούς με κρυπτογραφική υπογραφή"],
    demoType: "webhook",
    terminalLogs: ["[WEBHOOK] POST /api/github/hook (Επαλήθευση X-Hub-Signature-256 σε 0.3ms)", "[WEBAUTHN] Επαληθεύτηκε hardware passkey για συνεδρία διαχειριστή.", "[TREE_SYNC] Ανάλυση 54 κόμβων -> Εντοπίστηκε διαφορά στο /src", "[GIT_BOT] Commit ανανεωμένου δέντρου αρχιτεκτονικής [verified-signature]"],
  },
  {
    id: "weky",
    name: "@m3rcena/weky",
    tagline: "Αρθρωτή, type-safe μηχανή παιχνιδιών για το Discord.js με μηδενικές εξωτερικές εξαρτήσεις.",
    category: "DEVELOPER_TOOLS",
    categoryLabel: "Πακέτο Μητρώου NPM",
    badge: "NPM REGISTRY // ZERO-DEP",
    status: "PUBLISHED",
    accent: "#10b981",
    summary: "Πακέτο TypeScript μηδενικών εξαρτήσεων δημοσιευμένο στο μητρώο NPM. Παρέχει διαδραστικά canvas components, πεπερασμένα αυτόματα καταστάσεων (FSM) και collectors κύκλου ζωής για Discord bots.",
    metrics: [
      { label: "Εντολή Εγκατάστασης", value: "npm i @m3rcena/weky" },
      { label: "Εξαρτήσεις", value: "Μηδενικές Εξωτερικές Εξαρτήσεις" },
      { label: "Type Safety", value: "100% Strict Δηλώσεις Τύπων" },
      { label: "Πυρήνας", value: "Ντετερμινιστικές Μηχανές Καταστάσεων" },
    ],
    architectureFlow: ["Discord Interaction Event", "Finite State Machine Transition", "Interactive Canvas Renderer", "Collector Lifecycle Hook"],
    stack: ["TypeScript", "Node.js", "Discord.js", "State Machines", "NPM Registry"],
    githubUrl: "https://github.com/m3rcena/weky",
    npmUrl: "https://www.npmjs.com/package/@m3rcena/weky",
    installCmd: "npm i @m3rcena/weky",
    keyHighlights: ["Σχεδιασμένο χωρίς καμία εξωτερική εξάρτηση τρίτων για μέγιστη ασφάλεια και ελάχιστο μέγεθος bundle", "Αυστηρά TypeScript types με εξαγωγή συμπερασμάτων για button και modal events του Discord", "Ντετερμινιστικά finite state machines που εγγυώνται μηδενικές διαρροές μνήμης σε πολύωρη λειτουργία bot"],
    demoType: "fsm",
    terminalLogs: ["$ npm i @m3rcena/weky", "[NPM_REGISTRY] Λήψη αρχείου πακέτου (0 εξωτερικές εξαρτήσεις)", "[ENGINE_INIT] Αρχικοποίηση 24 κόμβων κατάστασης σε 1.2ms", "[TEST_SUITE] 42/42 tests επιτυχή με 100% κάλυψη τύπων"],
  },
  {
    id: "burgers",
    name: "Burger Builder SPA",
    tagline: "Full-stack reactive web εφαρμογή με δυναμική σύνθεση υλικών και σύστημα παραγγελιών.",
    category: "WEB_APPS",
    categoryLabel: "Εφαρμογή Web (SPA)",
    badge: "REACT & REDUX // LIVE DEMO",
    status: "PRODUCTION",
    accent: "#eab308",
    summary: "Διαδραστική single-page application με React και Redux. Διαθέτει δυναμική φυσική υλικών, υπολογισμό καλαθιού, ασύγχρονη επεξεργασία παραγγελιών μέσω REST backend και responsive UI.",
    metrics: [
      { label: "Διαχείριση Κατάστασης", value: "Redux Store & Middleware" },
      { label: "Δρομολόγηση", value: "Δυναμικό React Router" },
      { label: "Αποθήκευση", value: "Firebase REST Storage" },
      { label: "Μοντέλο UI", value: "Δυναμική Σύνθεση Υλικών" },
    ],
    architectureFlow: ["Ingredient Dispatcher", "Redux Reducer Calculation", "Live Burger Stack Renderer", "Checkout API Submission"],
    stack: ["React", "Redux", "JavaScript ES6+", "CSS Modules", "Firebase API"],
    githubUrl: "https://github.com/m3rcena",
    liveUrl: "/projects/burgers.html",
    keyHighlights: ["Κεντρική immutable κατάσταση με Redux thunks για διαχείριση ασύγχρονων side-effects παραγγελίας", "Οπτικός συναρμολογητής υλικών σε πραγματικό χρόνο με responsive σχεδίαση για mobile και desktop", "Ασύγχρονη επικύρωση σε cloud endpoints με παραγωγή ηλεκτρονικής απόδειξης παραγγελίας"],
    demoType: "iframe",
    terminalLogs: ['[STORE] Αποστολή δράσης ADD_INGREDIENT { type: "bacon", cost: 0.70 }', "[PRICE_CALC] Νέο σύνολο: €6.40", "[ORDER_DISPATCH] Αποστολή δεδομένων παραγγελίας στο REST backend...", "[ORDER_RESPONSE] 201 Created -> Κωδικός Παραγγελίας #88492"],
  },
];

export const ARCHITECTURE_LAYERS_EN: ArchitectureLayer[] = [
  {
    id: "layer-01",
    layerNumber: "LAYER 01",
    name: "Low-Level Systems & POSIX Concurrency",
    role: "Compute Engine, Memory Safety & Core Logic",
    domain: "Systems Programming & OS Internals",
    color: "#ff5722",
    specs: [
      { label: "Languages", value: "C, C++, x86-64 / MIPS Assembly" },
      { label: "Concurrency", value: "POSIX Threads, Mutexes, Semaphores" },
      { label: "Debugging", value: "GDB, Valgrind (Memcheck, Helgrind)" },
      { label: "OS Primitives", value: "Pipes, Sockets, Virtual Memory" },
    ],
    skills: ["C (C99/C11)", "C++ (Modern)", "x86-64 Assembly", "POSIX Threads", "Pipes & Sockets", "Valgrind", "Memory Layout"],
    description: "Core foundation in systems programming at NKUA: process scheduling, virtual memory paging, inter-process communication (pipes, shared memory), multi-threading synchronization with semaphores, and manual memory management without leaks.",
    codeLanguage: "c",
    codeSnippet: `// POSIX Shared Memory & Producer-Consumer Synchronization
#include <pthread.h>
#include <semaphore.h>

typedef struct {
    int buffer[BUFFER_CAPACITY];
    int head, tail;
    sem_t empty_slots;
    sem_t full_slots;
    pthread_mutex_t lock;
} RingBuffer;

void ring_buffer_push(RingBuffer* rb, int val) {
    sem_wait(&rb->empty_slots);
    pthread_mutex_lock(&rb->lock);
    rb->buffer[rb->head] = val;
    rb->head = (rb->head + 1) % BUFFER_CAPACITY;
    pthread_mutex_unlock(&rb->lock);
    sem_post(&rb->full_slots);
}`,
  },
  {
    id: "layer-02",
    layerNumber: "LAYER 02",
    name: "Digital Logic & FPGA Hardware Synthesis",
    role: "Hardware Synthesis & Register Transfer Level",
    domain: "Digital Systems & Telecommunications",
    color: "#a855f7",
    specs: [
      { label: "Synthesis Suite", value: "Xilinx Vivado" },
      { label: "Languages", value: "VHDL, Verilog RTL" },
      { label: "Coursework", value: "NKUA Digital Circuit Design" },
      { label: "Components", value: "ALU, Datapath, Finite State Machines" },
    ],
    skills: ["VHDL", "Verilog", "Xilinx Vivado", "FSM Synthesis", "ALU Architecture", "Timing Constraints", "Pipeline Hazards"],
    description: "RTL digital hardware design studied at NKUA Informatics. Synthesizing combinatorial and sequential logic, datapath design, control units, pipeline hazard resolution, and timing simulations on FPGA silicon.",
    codeLanguage: "vhdl",
    codeSnippet: `-- Synchronous Finite State Machine in VHDL
entity FSM_Controller is
    port (
        clk     : in  std_logic;
        reset   : in  std_logic;
        trigger : in  std_logic;
        state_out : out std_logic_vector(1 downto 0)
    );
end entity;

architecture Behavioral of FSM_Controller is
    type state_type is (IDLE, FETCH, EXECUTE, COMMIT);
    signal state, next_state : state_type;
begin
    process(clk, reset)
    begin
        if reset = '1' then
            state <= IDLE;
        elsif rising_edge(clk) then
            state <= next_state;
        end if;
    end process;
end architecture;`,
  },
  {
    id: "layer-03",
    layerNumber: "LAYER 03",
    name: "Cross-Platform Desktop & Native Runtimes",
    role: "Isolated Processes & High-Throughput Streams",
    domain: "Native Clients & Stream Architectures",
    color: "#38bdf8",
    specs: [
      { label: "Runtime", value: "Electron, Node.js Internal Streams" },
      { label: "Security", value: "ContextBridge IPC, ContextIsolation" },
      { label: "Build CI/CD", value: "GitHub Actions Matrix (Win/Mac/Linux)" },
      { label: "Concurrency", value: "Node Worker Threads / Pool" },
    ],
    skills: ["Electron", "ContextBridge IPC", "Node.js Streams", "Worker Threads", "Cross-Platform Packaging", "GitHub Actions"],
    description: "Building robust desktop applications that pair native operating system features with reactive Web interfaces. Strict zero-trust ContextBridge IPC boundaries prevent code injection while background stream workers process asset downloads at link speed.",
    codeLanguage: "typescript",
    codeSnippet: `// Typed ContextBridge IPC Handler (Electron Preload)
import { contextBridge, ipcRenderer } from 'electron';

export interface DesktopBridge {
  startStream: (manifest: DownloadManifest) => Promise<StreamAck>;
  onChunkProgress: (cb: (progress: ChunkProgress) => void) => () => void;
}

contextBridge.exposeInMainWorld('desktopBridge', {
  startStream: (manifest) => ipcRenderer.invoke('STREAM:INIT', manifest),
  onChunkProgress: (cb) => {
    const listener = (_: any, p: ChunkProgress) => cb(p);
    ipcRenderer.on('STREAM:PROGRESS', listener);
    return () => ipcRenderer.removeListener('STREAM:PROGRESS', listener);
  }
} as DesktopBridge);`,
  },
  {
    id: "layer-04",
    layerNumber: "LAYER 04",
    name: "Reactive Frontend & Interactive UIs",
    role: "Dynamic State Engines & Framerate Acceleration",
    domain: "Frontend Architecture & Modern Web",
    color: "#10b981",
    specs: [
      { label: "Core Libraries", value: "React 18, TypeScript, Tailwind CSS" },
      { label: "State Models", value: "Redux Store, Deterministic FSMs" },
      { label: "Motion", value: "Framer Motion, Canvas Animations" },
      { label: "Performance", value: "60 FPS, Sub-millisecond Interaction" },
    ],
    skills: ["React 18", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Framer Motion", "HTML5 Canvas", "Responsive Design"],
    description: "Designing performant, high-framerate interactive client experiences. Proficient in typed component architectures, state-driven UI trees, micro-animations, and modern front-end build pipelines (Vite).",
    codeLanguage: "typescript",
    codeSnippet: `// Type-Safe Deterministic State Machine in React
type State = 'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR';
type Action = { type: 'SUBMIT' } | { type: 'RESOLVE' } | { type: 'FAIL'; err: string };

function stateReducer(state: State, action: Action): State {
  switch (state) {
    case 'IDLE':
      return action.type === 'SUBMIT' ? 'LOADING' : state;
    case 'LOADING':
      return action.type === 'RESOLVE' ? 'SUCCESS' : action.type === 'FAIL' ? 'ERROR' : state;
    default:
      return state;
  }
}`,
  },
  {
    id: "layer-05",
    layerNumber: "LAYER 05",
    name: "Backend Infrastructure & Persistent Data",
    role: "ACID Compliance, REST/WebSocket APIs & Caching",
    domain: "Distributed Services & Database Engineering",
    color: "#eab308",
    specs: [
      { label: "Runtimes", value: "Node.js, Express, WebSockets" },
      { label: "Databases", value: "PostgreSQL, SQLite, Redis" },
      { label: "Data Access", value: "Prisma ORM, Parameterized SQL" },
      { label: "Guarantees", value: "ACID Transactions, Normalized Schemas" },
    ],
    skills: ["Node.js", "Express", "WebSockets", "PostgreSQL", "SQLite", "Redis", "Prisma ORM", "Relational Schemas"],
    description: "Architecting persistent data models, ACID-compliant transactions, indexing strategies, normalized schemas, and fast streaming writes for production services.",
    codeLanguage: "typescript",
    codeSnippet: `// Atomic Database Transaction with Prisma ORM
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function processAccountTransfer(fromId: string, toId: string, amount: number) {
  return await prisma.$transaction(async (tx) => {
    const sender = await tx.account.update({
      where: { id: fromId },
      data: { balance: { decrement: amount } }
    });
    if (sender.balance < 0) throw new Error('Insufficient Funds');
    const recipient = await tx.account.update({
      where: { id: toId },
      data: { balance: { increment: amount } }
    });
    return { sender, recipient };
  });
}`,
  },
  {
    id: "layer-06",
    layerNumber: "LAYER 06",
    name: "Protocol Security, Cryptography & DevOps",
    role: "Zero-Trust Verification, Cryptography & Containers",
    domain: "Security Protocols & Automated Pipelines",
    color: "#06b6d4",
    specs: [
      { label: "Crypto", value: "Constant-Time HMAC-SHA256, WebAuthn" },
      { label: "Pipelines", value: "GitHub Actions CI/CD (Multi-Platform)" },
      { label: "Containers", value: "Docker, Linux System Administration" },
      { label: "Hosting", value: "GitHub Pages, Automated Cloud Deployments" },
    ],
    skills: ["HMAC-SHA256", "WebAuthn / FIDO2", "Docker", "Linux Administration", "GitHub Actions", "TCP/IP Sockets (C)"],
    description: "Socket programming in C (TCP/UDP), secure HMAC webhook pipelines, bi-directional WebSocket telemetry, containerized deployments, and automated testing workflows with GitHub Actions.",
    codeLanguage: "typescript",
    codeSnippet: `// Constant-Time HMAC-SHA256 Webhook Verification
import crypto from 'node:crypto';

export function verifyWebhookSignature(payload: string, signature: string, secret: string): boolean {
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(payload, 'utf8');
  const digest = Buffer.from(\`sha256=\${hmac.digest('hex')}\`, 'utf8');
  const checksum = Buffer.from(signature, 'utf8');

  if (digest.length !== checksum.length) return false;
  return crypto.timingSafeEqual(digest, checksum); // Constant-time protection
}`,
  },
];

export const ARCHITECTURE_LAYERS_EL: ArchitectureLayer[] = [
  {
    id: "layer-01",
    layerNumber: "ΕΠΙΠΕΔΟ 01",
    name: "Συστήματα Χαμηλού Επιπέδου & POSIX Παραλληλία",
    role: "Μηχανή Υπολογισμού, Ασφάλεια Μνήμης & Βασική Λογική",
    domain: "Προγραμματισμός Συστημάτων & Εσωτερικά Λειτουργικών",
    color: "#ff5722",
    specs: [
      { label: "Γλώσσες", value: "C, C++, x86-64 / MIPS Assembly" },
      { label: "Παραλληλία", value: "POSIX Threads, Mutexes, Semaphores" },
      { label: "Debugging", value: "GDB, Valgrind (Memcheck, Helgrind)" },
      { label: "Πρωτόγονα ΛΣ", value: "Pipes, Sockets, Εικονική Μνήμη" },
    ],
    skills: ["C (C99/C11)", "C++ (Modern)", "x86-64 Assembly", "POSIX Threads", "Pipes & Sockets", "Valgrind", "Διάταξη Μνήμης"],
    description: "Θεμελιώδεις αρχές προγραμματισμού συστημάτων στο ΕΚΠΑ: χρονοπρογραμματισμός διεργασιών, σελιδοποίηση εικονικής μνήμης, διαδιεργασιακή επικοινωνία (pipes, κοινόχρηστη μνήμη), συγχρονισμός νημάτων με σημαφόρους και χειροκίνητη διαχείριση μνήμης χωρίς διαρροές.",
    codeLanguage: "c",
    codeSnippet: `// POSIX Shared Memory & Producer-Consumer Synchronization
#include <pthread.h>
#include <semaphore.h>

typedef struct {
    int buffer[BUFFER_CAPACITY];
    int head, tail;
    sem_t empty_slots;
    sem_t full_slots;
    pthread_mutex_t lock;
} RingBuffer;

void ring_buffer_push(RingBuffer* rb, int val) {
    sem_wait(&rb->empty_slots);
    pthread_mutex_lock(&rb->lock);
    rb->buffer[rb->head] = val;
    rb->head = (rb->head + 1) % BUFFER_CAPACITY;
    pthread_mutex_unlock(&rb->lock);
    sem_post(&rb->full_slots);
}`,
  },
  {
    id: "layer-02",
    layerNumber: "ΕΠΙΠΕΔΟ 02",
    name: "Ψηφιακή Λογική & Σύνθεση Υλικού FPGA",
    role: "Σύνθεση Υλικού & Register Transfer Level",
    domain: "Ψηφιακά Συστήματα & Τηλεπικοινωνίες",
    color: "#a855f7",
    specs: [
      { label: "Σουίτα Σύνθεσης", value: "Xilinx Vivado" },
      { label: "Γλώσσες", value: "VHDL, Verilog RTL" },
      { label: "Μαθήματα", value: "Σχεδιασμός Ψηφιακών Κυκλωμάτων ΕΚΠΑ" },
      { label: "Δομικά Στοιχεία", value: "ALU, Μονοπάτι Δεδομένων, Αυτόματα FSM" },
    ],
    skills: ["VHDL", "Verilog", "Xilinx Vivado", "FSM Synthesis", "ALU Architecture", "Περιορισμοί Χρονισμού", "Pipeline Hazards"],
    description: "RTL σχεδιασμός ψηφιακού υλικού στο Τμήμα Πληροφορικής ΕΚΠΑ. Σύνθεση συνδυαστικής και ακολουθιακής λογικής, datapath, μονάδες ελέγχου, επίλυση pipeline hazards και προσομοιώσεις χρονισμού σε silicon FPGA.",
    codeLanguage: "vhdl",
    codeSnippet: `-- Synchronous Finite State Machine in VHDL
entity FSM_Controller is
    port (
        clk     : in  std_logic;
        reset   : in  std_logic;
        trigger : in  std_logic;
        state_out : out std_logic_vector(1 downto 0)
    );
end entity;

architecture Behavioral of FSM_Controller is
    type state_type is (IDLE, FETCH, EXECUTE, COMMIT);
    signal state, next_state : state_type;
begin
    process(clk, reset)
    begin
        if reset = '1' then
            state <= IDLE;
        elsif rising_edge(clk) then
            state <= next_state;
        end if;
    end process;
end architecture;`,
  },
  {
    id: "layer-03",
    layerNumber: "ΕΠΙΠΕΔΟ 03",
    name: "Cross-Platform Desktop & Εγγενή Runtimes",
    role: "Απομονωμένες Διεργασίες & Ροές Υψηλής Διαμεταγωγής",
    domain: "Native Clients & Αρχιτεκτονικές Ροών",
    color: "#38bdf8",
    specs: [
      { label: "Runtime", value: "Electron, Node.js Internal Streams" },
      { label: "Ασφάλεια", value: "ContextBridge IPC, ContextIsolation" },
      { label: "Build CI/CD", value: "GitHub Actions Matrix (Win/Mac/Linux)" },
      { label: "Παραλληλία", value: "Node Worker Threads / Pool" },
    ],
    skills: ["Electron", "ContextBridge IPC", "Node.js Streams", "Worker Threads", "Cross-Platform Packaging", "GitHub Actions"],
    description: "Ανάπτυξη αξιόπιστων desktop εφαρμογών που συνδυάζουν εγγενείς δυνατότητες λειτουργικού συστήματος με αντιδραστικές Web διεπαφές. Αυστηρά όρια ContextBridge IPC για αποτροπή code injection ενώ workers στο παρασκήνιο διαχειρίζονται λήψεις αρχείων στη μέγιστη ταχύτητα σύνδεσης.",
    codeLanguage: "typescript",
    codeSnippet: `// Typed ContextBridge IPC Handler (Electron Preload)
import { contextBridge, ipcRenderer } from 'electron';

export interface DesktopBridge {
  startStream: (manifest: DownloadManifest) => Promise<StreamAck>;
  onChunkProgress: (cb: (progress: ChunkProgress) => void) => () => void;
}

contextBridge.exposeInMainWorld('desktopBridge', {
  startStream: (manifest) => ipcRenderer.invoke('STREAM:INIT', manifest),
  onChunkProgress: (cb) => {
    const listener = (_: any, p: ChunkProgress) => cb(p);
    ipcRenderer.on('STREAM:PROGRESS', listener);
    return () => ipcRenderer.removeListener('STREAM:PROGRESS', listener);
  }
} as DesktopBridge);`,
  },
  {
    id: "layer-04",
    layerNumber: "ΕΠΙΠΕΔΟ 04",
    name: "Αντιδραστικό Frontend & Διαδραστικά UIs",
    role: "Δυναμικές Μηχανές Κατάστασης & Επιτάχυνση 60 FPS",
    domain: "Αρχιτεκτονική Frontend & Σύγχρονος Ιστός",
    color: "#10b981",
    specs: [
      { label: "Βασικές Βιβλιοθήκες", value: "React 18, TypeScript, Tailwind CSS" },
      { label: "Μοντέλα Κατάστασης", value: "Redux Store, Deterministic FSMs" },
      { label: "Κίνηση", value: "Framer Motion, Canvas Animations" },
      { label: "Απόδοση", value: "60 FPS, Sub-millisecond Απόκριση" },
    ],
    skills: ["React 18", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Framer Motion", "HTML5 Canvas", "Responsive Design"],
    description: "Σχεδίαση υψηλής απόκρισης και ρυθμού ανανέωσης διαδραστικών εμπειριών. Εξειδίκευση σε typed αρχιτεκτονικές components, state-driven δέντρα UI, micro-animations και σύγχρονα build pipelines (Vite).",
    codeLanguage: "typescript",
    codeSnippet: `// Type-Safe Deterministic State Machine in React
type State = 'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR';
type Action = { type: 'SUBMIT' } | { type: 'RESOLVE' } | { type: 'FAIL'; err: string };

function stateReducer(state: State, action: Action): State {
  switch (state) {
    case 'IDLE':
      return action.type === 'SUBMIT' ? 'LOADING' : state;
    case 'LOADING':
      return action.type === 'RESOLVE' ? 'SUCCESS' : action.type === 'FAIL' ? 'ERROR' : state;
    default:
      return state;
  }
}`,
  },
  {
    id: "layer-05",
    layerNumber: "ΕΠΙΠΕΔΟ 05",
    name: "Υποδομή Backend & Επίμονα Δεδομένα",
    role: "ACID Συμβατότητα, REST/WebSocket APIs & Caching",
    domain: "Κατανεμημένες Υπηρεσίες & Μηχανική Βάσεων Δεδομένων",
    color: "#eab308",
    specs: [
      { label: "Runtimes", value: "Node.js, Express, WebSockets" },
      { label: "Βάσεις Δεδομένων", value: "PostgreSQL, SQLite, Redis" },
      { label: "Πρόσβαση Δεδομένων", value: "Prisma ORM, Παραμετροποιημένη SQL" },
      { label: "Εγγυήσεις", value: "ACID Συναλλαγές, Κανονικοποιημένα Σχήματα" },
    ],
    skills: ["Node.js", "Express", "WebSockets", "PostgreSQL", "SQLite", "Redis", "Prisma ORM", "Σχεσιακά Σχήματα"],
    description: "Αρχιτεκτονική επίμονων μοντέλων δεδομένων, συναλλαγές με εγγυήσεις ACID, στρατηγικές ευρετηρίασης, κανονικοποιημένα σχήματα και ταχείες εγγραφές ροών για παραγωγικές υπηρεσίες.",
    codeLanguage: "typescript",
    codeSnippet: `// Atomic Database Transaction with Prisma ORM
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function processAccountTransfer(fromId: string, toId: string, amount: number) {
  return await prisma.$transaction(async (tx) => {
    const sender = await tx.account.update({
      where: { id: fromId },
      data: { balance: { decrement: amount } }
    });
    if (sender.balance < 0) throw new Error('Insufficient Funds');
    const recipient = await tx.account.update({
      where: { id: toId },
      data: { balance: { increment: amount } }
    });
    return { sender, recipient };
  });
}`,
  },
  {
    id: "layer-06",
    layerNumber: "ΕΠΙΠΕΔΟ 06",
    name: "Ασφάλεια Πρωτοκόλλων, Κρυπτογραφία & DevOps",
    role: "Zero-Trust Επαλήθευση, Κρυπτογραφία & Containers",
    domain: "Πρωτόκολλα Ασφαλείας & Αυτοματοποιημένα Pipelines",
    color: "#06b6d4",
    specs: [
      { label: "Κρυπτογραφία", value: "Constant-Time HMAC-SHA256, WebAuthn" },
      { label: "Pipelines", value: "GitHub Actions CI/CD (Multi-Platform)" },
      { label: "Containers", value: "Docker, Διαχείριση Συστημάτων Linux" },
      { label: "Hosting", value: "GitHub Pages, Αυτοματοποιημένες Cloud Αναπτύξεις" },
    ],
    skills: ["HMAC-SHA256", "WebAuthn / FIDO2", "Docker", "Linux Administration", "GitHub Actions", "TCP/IP Sockets (C)"],
    description: "Προγραμματισμός sockets σε C (TCP/UDP), ασφαλείς ροές webhooks με HMAC, αμφίδρομη WebSocket τηλεμετρία, containerized αναπτύξεις με Docker και αυτοματοποιημένοι έλεγχοι με GitHub Actions.",
    codeLanguage: "typescript",
    codeSnippet: `// Constant-Time HMAC-SHA256 Webhook Verification
import crypto from 'node:crypto';

export function verifyWebhookSignature(payload: string, signature: string, secret: string): boolean {
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(payload, 'utf8');
  const digest = Buffer.from(\`sha256=\${hmac.digest('hex')}\`, 'utf8');
  const checksum = Buffer.from(signature, 'utf8');

  if (digest.length !== checksum.length) return false;
  return crypto.timingSafeEqual(digest, checksum); // Constant-time protection
}`,
  },
];

export const COURSEWORK_ITEMS_EN: CourseworkItem[] = [
  {
    code: "CS-SYS-01",
    title: "Operating Systems & Systems Programming",
    category: "Systems",
    description: "Process scheduling algorithms, virtual memory paging & segmentation, kernel system calls, inter-process communication (pipes, shared memory, message queues), and POSIX multithreading with semaphores.",
    tags: ["C", "Linux Kernel", "Pthreads", "GDB", "Valgrind"],
  },
  {
    code: "CS-HW-02",
    title: "Digital Circuit Design & FPGA Synthesis",
    category: "Digital Logic",
    description: "Combinatorial and sequential logic synthesis, datapath design, ALU implementation, control units, pipeline hazard resolution, and timing simulations using Xilinx Vivado and VHDL.",
    tags: ["VHDL", "Xilinx Vivado", "FPGA", "ALU Design", "FSMs"],
  },
  {
    code: "CS-ARCH-03",
    title: "Computer Architecture & Assembly Language",
    category: "Systems",
    description: "Microprocessor architectures (x86-64 / MIPS), cache hierarchies and cache line associativity, instruction pipeline hazards, branch prediction, and manual assembly optimization.",
    tags: ["x86-64", "MIPS", "Memory Hierarchy", "Pipelining"],
  },
  {
    code: "CS-NET-04",
    title: "Computer Networks & Socket Programming",
    category: "Systems",
    description: "OSI and TCP/IP stack layers, raw socket programming in C (TCP stream & UDP datagram sockets), congestion control, flow control, DNS, HTTP/1.1 to HTTP/3 protocols.",
    tags: ["C Sockets", "TCP/IP", "Wireshark", "Protocols"],
  },
  {
    code: "CS-ALG-05",
    title: "Data Structures, Algorithms & Complexity",
    category: "Theory",
    description: "Asymptotic time/space complexity analysis (Big-O), self-balancing trees (AVL, Red-Black), graph algorithms (Dijkstra, Bellman-Ford, A*), dynamic programming, and greedy heuristics.",
    tags: ["Algorithms", "Graph Theory", "Data Structures", "Complexity"],
  },
  {
    code: "CS-DB-06",
    title: "Database Systems & Data Modeling",
    category: "Software",
    description: "Relational algebra, E-R modeling, B+ Tree indexing, query optimization plans, transaction management, ACID guarantees, and 2-phase locking concurrency control.",
    tags: ["Relational Algebra", "PostgreSQL", "B+ Trees", "ACID"],
  },
];

export const COURSEWORK_ITEMS_EL: CourseworkItem[] = [
  {
    code: "CS-SYS-01",
    title: "Λειτουργικά Συστήματα & Προγραμματισμός Συστημάτων",
    category: "Systems",
    description: "Αλγόριθμοι χρονοπρογραμματισμού διεργασιών, σελιδοποίηση & κατάτμηση εικονικής μνήμης, κλήσεις συστήματος πυρήνα, διαδιεργασιακή επικοινωνία (pipes, shared memory, ουρές μηνυμάτων) και POSIX πολυνηματικότητα με σημαφόρους.",
    tags: ["C", "Linux Kernel", "Pthreads", "GDB", "Valgrind"],
  },
  {
    code: "CS-HW-02",
    title: "Σχεδίαση Ψηφιακών Κυκλωμάτων & Σύνθεση FPGA",
    category: "Digital Logic",
    description: "Σύνθεση συνδυαστικής και ακολουθιακής λογικής, σχεδιασμός διαδρομής δεδομένων, υλοποίηση ALU, μονάδες ελέγχου, επίλυση κινδύνων σωλήνωσης (pipeline hazards) και προσομοιώσεις χρονισμού με Xilinx Vivado και VHDL.",
    tags: ["VHDL", "Xilinx Vivado", "FPGA", "ALU Design", "FSMs"],
  },
  {
    code: "CS-ARCH-03",
    title: "Αρχιτεκτονική Υπολογιστών & Γλώσσα Assembly",
    category: "Systems",
    description: "Αρχιτεκτονικές μικροεπεξεργαστών (x86-64 / MIPS), ιεραρχίες κρυφής μνήμης και συσχέτιση γραμμών cache, κίνδυνοι διοχέτευσης εντολών, πρόβλεψη διακλαδώσεων και βελτιστοποίηση κώδικα assembly.",
    tags: ["x86-64", "MIPS", "Memory Hierarchy", "Pipelining"],
  },
  {
    code: "CS-NET-04",
    title: "Δίκτυα Υπολογιστών & Προγραμματισμός Sockets",
    category: "Systems",
    description: "Επίπεδα στοίβας OSI και TCP/IP, προγραμματισμός raw sockets σε C (TCP stream & UDP datagram), έλεγχος συμφόρησης, έλεγχος ροής, DNS, πρωτόκολλα HTTP/1.1 έως HTTP/3.",
    tags: ["C Sockets", "TCP/IP", "Wireshark", "Protocols"],
  },
  {
    code: "CS-ALG-05",
    title: "Δομές Δεδομένων, Αλγόριθμοι & Πολυπλοκότητα",
    category: "Theory",
    description: "Ασυμπτωτική ανάλυση χρονικής/χωρικής πολυπλοκότητας (Big-O), αυτοεξισορροπούμενα δέντρα (AVL, Red-Black), αλγόριθμοι γραφημάτων (Dijkstra, Bellman-Ford, A*), δυναμικός προγραμματισμός και άπληστες ευρετικές μέθοδοι.",
    tags: ["Algorithms", "Graph Theory", "Data Structures", "Complexity"],
  },
  {
    code: "CS-DB-06",
    title: "Συστήματα Βάσεων Δεδομένων & Μοντελοποίηση",
    category: "Software",
    description: "Σχεσιακή άλγεβρα, μοντελοποίηση E-R, ευρετήρια B+ Tree, πλάνα βελτιστοποίησης επερωτήσεων, διαχείριση δοσοληψιών, εγγυήσεις ACID και έλεγχος ταυτοχρονισμού με κλείδωμα δύο φάσεων (2PL).",
    tags: ["Relational Algebra", "PostgreSQL", "B+ Trees", "ACID"],
  },
];

// Helper functions that return language-specific data
export const getProfileInfo = (lang: Language = "en") => (lang === "el" ? PROFILE_INFO_EL : PROFILE_INFO_EN);

export const getProjects = (lang: Language = "en"): ProjectData[] => (lang === "el" ? PROJECTS_EL : PROJECTS_EN);

export const getArchitectureLayers = (lang: Language = "en"): ArchitectureLayer[] => (lang === "el" ? ARCHITECTURE_LAYERS_EL : ARCHITECTURE_LAYERS_EN);

export const getCourseworkItems = (lang: Language = "en"): CourseworkItem[] => (lang === "el" ? COURSEWORK_ITEMS_EL : COURSEWORK_ITEMS_EN);

// Default exports for backwards compatibility
export const PROFILE_INFO = PROFILE_INFO_EN;
export const PROJECTS = PROJECTS_EN;
export const ARCHITECTURE_LAYERS = ARCHITECTURE_LAYERS_EN;
export const COURSEWORK_ITEMS = COURSEWORK_ITEMS_EN;
