export type Language = "en" | "el";

export interface Translations {
  nav: {
    projects: string;
    architecture: string;
    academic: string;
    terminal: string;
    contact: string;
    role: string;
    search: string;
    resume: string;
    cv: string;
    soundOn: string;
    soundOff: string;
    langSwitch: string;
  };
  hero: {
    location: string;
    uniBadge: string;
    headlineStart: string;
    headlineSystems: string;
    headlineMiddle: string;
    headlineReactive: string;
    bioIntro: string;
    bioStudent: string;
    bioRest: string;
    exploreProjects: string;
    openTerminal: string;
    copyEmail: string;
    emailCopied: string;
    downloadCV: string;
    verifiedStudent: string;
    degree: string;
    institution: string;
    status: string;
    directDispatch: string;
    consoleTitle: string;
    expandConsole: string;
    systemsEngine: string;
    clientRuntime: string;
    persistenceOps: string;
    statStarsLabel: string;
    statStarsSub: string;
    statNpmLabel: string;
    statNpmSub: string;
    statUniLabel: string;
    statUniSub: string;
    statStackLabel: string;
    statStackSub: string;
  };
  projects: {
    sectionBadge: string;
    heading: string;
    subheading: string;
    filterAll: string;
    filterDesktop: string;
    filterDevTools: string;
    filterWebApps: string;
    viewArchitecture: string;
    liveDemo: string;
    githubRepo: string;
    npmPackage: string;
    interactiveDemo: string;
  };
  modal: {
    architectureFlow: string;
    engineeringMetrics: string;
    keyHighlights: string;
    liveTelemetry: string;
    close: string;
    stack: string;
    installPackage: string;
  };
  architecture: {
    sectionBadge: string;
    heading: string;
    subtitle: string;
    coreCompetencies: string;
    architecturalScope: string;
    productionSpec: string;
    codeImplementation: string;
    copyCode: string;
    codeCopied: string;
  };
  academic: {
    sectionBadge: string;
    heading: string;
    subtitle: string;
    degreeName: string;
    degreeFocus: string;
    courseworkPill: string;
    categories: {
      systems: string;
      digitalLogic: string;
      software: string;
      theory: string;
    };
  };
  terminal: {
    sectionBadge: string;
    heading: string;
    shellNotice: string;
    shellNoticeEnd: string;
    placeholder: string;
    execute: string;
    clear: string;
    availableCommands: string;
    helpAbout: string;
    helpSkills: string;
    helpProjects: string;
    helpNeofetch: string;
    helpDownloadCv: string;
    helpContact: string;
    helpClear: string;
  };
  contact: {
    sectionBadge: string;
    heading: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendBtn: string;
    sendingBtn: string;
    successMsg: string;
    sendAnother: string;
    directChannels: string;
    primaryEmail: string;
    copyEmail: string;
    locationTitle: string;
    locationVal: string;
    availabilityTitle: string;
    availabilityVal: string;
  };
  footer: {
    builtWith: string;
    copyright: string;
    backToTop: string;
    location: string;
  };
  commandPalette: {
    placeholder: string;
    noResults: string;
    navigation: string;
    projects: string;
    architecture: string;
    actions: string;
    escToClose: string;
    downloadResumeAction: string;
    toggleSoundAction: string;
    copyEmailAction: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    nav: {
      projects: "Projects",
      architecture: "Stack",
      academic: "Academics",
      terminal: "Console",
      contact: "Contact",
      role: "Full-Stack & Systems",
      search: "Search",
      resume: "Resume",
      cv: "CV",
      soundOn: "Mute Audio",
      soundOff: "Enable Audio",
      langSwitch: "ΕΛ",
    },
    hero: {
      location: "ATHENS [UTC+3]",
      uniBadge: "NKUA INFORMATICS & CS",
      headlineStart: "Bridging",
      headlineSystems: "Low-Level Systems",
      headlineMiddle: "with",
      headlineReactive: "Reactive Architecture.",
      bioIntro: "I'm",
      bioStudent: ", a Full-Stack Software Engineer and Computer Science Student at the Department of Informatics & Telecommunications (NKUA).",
      bioRest: " I bridge low-level constraints in C/C++, assembly, and FPGA hardware synthesis with resilient desktop runtimes (Electron) and high-framerate web applications.",
      exploreProjects: "Explore Projects",
      openTerminal: "Terminal Shell",
      copyEmail: "Copy Email",
      emailCopied: "Copied!",
      downloadCV: "Resume (PDF)",
      verifiedStudent: "Verified Computer Science Student",
      degree: "B.Sc. in Informatics & Telecommunications",
      institution: "NKUA (Panepistimio Athinon)",
      status: "Status: 4th Year // Active Standing",
      directDispatch: "Direct Dispatch:",
      consoleTitle: "m3rcena@workstation:~ (telemetry)",
      expandConsole: "Expand Console",
      systemsEngine: "SYSTEMS ENGINE",
      clientRuntime: "CLIENT & RUNTIME",
      persistenceOps: "PERSISTENCE & OPS",
      statStarsLabel: "GitHub Stars",
      statStarsSub: "Open-source tools",
      statNpmLabel: "NPM Packages",
      statNpmSub: "Published TypeScript engine",
      statUniLabel: "University",
      statUniSub: "Top Greek CS Department",
      statStackLabel: "Stack Depth",
      statStackSub: "Silicon to Reactive Web",
    },
    projects: {
      sectionBadge: "01 // Featured Systems & Production Code",
      heading: "Engineered for Concurrency, Reliability & Scale",
      subheading: "Each application solves high-throughput computing, developer workflow synchronization, or systems-level packaging challenges.",
      filterAll: "ALL",
      filterDesktop: "DESKTOP",
      filterDevTools: "DEV TOOLS",
      filterWebApps: "WEB APPS",
      viewArchitecture: "Architecture & Sandbox",
      liveDemo: "Live Demo",
      githubRepo: "GitHub Repo",
      npmPackage: "NPM Package",
      interactiveDemo: "Interactive Demo Available",
    },
    modal: {
      architectureFlow: "Architecture Flow",
      engineeringMetrics: "Engineering Metrics",
      keyHighlights: "Key Engineering Highlights",
      liveTelemetry: "Live Telemetry Stream",
      close: "Close",
      stack: "Technologies & Stack",
      installPackage: "Install Package",
    },
    architecture: {
      sectionBadge: "02 // Systems Architecture Matrix",
      heading: "Six Layers of Engineering Competency",
      subtitle: "From bare-metal digital circuits and kernel memory management up to reactive distributed frontends.",
      coreCompetencies: "Core Competencies",
      architecturalScope: "Architectural Scope",
      productionSpec: "Production Technical Specifications",
      codeImplementation: "Verified Code Implementation",
      copyCode: "Copy Snippet",
      codeCopied: "Copied!",
    },
    academic: {
      sectionBadge: "03 // Academic Rigor & Theoretical Foundation",
      heading: "National and Kapodistrian University of Athens",
      subtitle: "Department of Informatics & Telecommunications — Ranked #1 CS Department in Greece",
      degreeName: "B.Sc. in Computer Science & Telecommunications",
      degreeFocus: "Rigorous theoretical mathematics, operating systems architecture, digital electronics & telecommunications theory.",
      courseworkPill: "Core University Coursework",
      categories: {
        systems: "Systems",
        digitalLogic: "Digital Logic",
        software: "Software",
        theory: "Theory",
      },
    },
    terminal: {
      sectionBadge: "04 // Interactive Console",
      heading: "Direct Shell Transmission",
      shellNotice: "FarmakisOS Shell v3.2 • Type",
      shellNoticeEnd: "to explore all system options.",
      placeholder: "type help, skills, projects, download-cv...",
      execute: "Execute",
      clear: "Clear Terminal",
      availableCommands: "Available Commands:",
      helpAbout: "Biography and first-principles overview",
      helpSkills: "Six-layer architecture competency ladder",
      helpProjects: "Production software & repositories",
      helpNeofetch: "System specs & environment",
      helpDownloadCv: "Download official resume PDF",
      helpContact: "Direct transmission channels",
      helpClear: "Clear screen scrollback",
    },
    contact: {
      sectionBadge: "05 // Transmission & Channels",
      heading: "Initiate Contact",
      subtitle: "Interested in discussing full-stack engineering, systems architecture, or high-impact opportunities? Reach out directly via Formspree below, email, or LinkedIn.",
      nameLabel: "Your Name",
      namePlaceholder: "Linus Torvalds",
      emailLabel: "Email Address",
      emailPlaceholder: "name@example.com",
      messageLabel: "Message Transmission",
      messagePlaceholder: "Discussing systems architecture, roles, or project collaborations...",
      sendBtn: "Send Message",
      sendingBtn: "Transmitting...",
      successMsg: "Message transmitted successfully! I will reply shortly.",
      sendAnother: "Send another message",
      directChannels: "Direct Channels",
      primaryEmail: "Primary Email",
      copyEmail: "Copy Email",
      locationTitle: "Current Base",
      locationVal: "Athens, Greece [UTC+3]",
      availabilityTitle: "Availability",
      availabilityVal: "Open to Full-Stack & Systems Roles",
    },
    footer: {
      builtWith: "Engineered with React 18, TypeScript, Tailwind CSS & Framer Motion.",
      copyright: "All Rights Reserved.",
      backToTop: "Back to Top",
      location: "Athens, Greece",
    },
    commandPalette: {
      placeholder: "Search projects, technical skills, layers, or execute actions...",
      noResults: "No matches found.",
      navigation: "Navigation",
      projects: "Projects",
      architecture: "Architecture Stack",
      actions: "Quick Actions",
      escToClose: "ESC to close",
      downloadResumeAction: "Download Official Resume PDF",
      toggleSoundAction: "Toggle Interface Sound Effects",
      copyEmailAction: "Copy Email Address to Clipboard",
    },
  },
  el: {
    nav: {
      projects: "Έργα",
      architecture: "Αρχιτεκτονική",
      academic: "Σπουδές",
      terminal: "Κονσόλα",
      contact: "Επικοινωνία",
      role: "Full-Stack & Systems",
      search: "Αναζήτηση",
      resume: "Βιογραφικό",
      cv: "CV",
      soundOn: "Σίγαση Ήχου",
      soundOff: "Ήχοι Διεπαφής",
      langSwitch: "EN",
    },
    hero: {
      location: "ΑΘΗΝΑ [UTC+3]",
      uniBadge: "ΕΚΠΑ ΠΛΗΡΟΦΟΡΙΚΗ & CS",
      headlineStart: "Γεφυρώνοντας",
      headlineSystems: "Συστήματα Χαμηλού Επιπέδου",
      headlineMiddle: "με",
      headlineReactive: "Αντιδραστική Αρχιτεκτονική.",
      bioIntro: "Είμαι ο",
      bioStudent: ", Μηχανικός Λογισμικού Full-Stack και Φοιτητής Πληροφορικής στο Τμήμα Πληροφορικής & Τηλεπικοινωνιών του ΕΚΠΑ.",
      bioRest: " Συνδέω τους περιορισμούς χαμηλού επιπέδου σε C/C++, Assembly και σύνθεση κυκλωμάτων FPGA με αξιόπιστα desktop runtimes (Electron) και ταχύτατες εφαρμογές web.",
      exploreProjects: "Εξερεύνηση Έργων",
      openTerminal: "Τερματικό Shell",
      copyEmail: "Αντιγραφή Email",
      emailCopied: "Αντιγράφηκε!",
      downloadCV: "Βιογραφικό (PDF)",
      verifiedStudent: "Πιστοποιημένος Φοιτητής Πληροφορικής",
      degree: "Πτυχίο Πληροφορικής & Τηλεπικοινωνιών",
      institution: "ΕΚΠΑ (Πανεπιστήμιο Αθηνών)",
      status: "Κατάσταση: 4ο Έτος // Ενεργή Φοίτηση",
      directDispatch: "Άμεση Επικοινωνία:",
      consoleTitle: "m3rcena@workstation:~ (τηλεμετρία)",
      expandConsole: "Άνοιγμα Κονσόλας",
      systemsEngine: "ΜΗΧΑΝΗ ΣΥΣΤΗΜΑΤΩΝ",
      clientRuntime: "CLIENT & RUNTIME",
      persistenceOps: "ΒΑΣΕΙΣ & DEVOPS",
      statStarsLabel: "Αστέρια GitHub",
      statStarsSub: "Σε open-source εργαλεία",
      statNpmLabel: "Πακέτα NPM",
      statNpmSub: "TypeScript engine",
      statUniLabel: "Πανεπιστήμιο",
      statUniSub: "Κορυφαίο Τμήμα CS",
      statStackLabel: "Βάθος Stack",
      statStackSub: "Πυρίτιο έως Web",
    },
    projects: {
      sectionBadge: "01 // Επιλεγμένα Συστήματα & Παραγωγικός Κώδικας",
      heading: "Σχεδιασμένα για Παραλληλία, Αξιοπιστία & Κλίμακα",
      subheading: "Κάθε εφαρμογή επιλύει πραγματικές προκλήσεις σε high-throughput streams, συγχρονισμό εργαλείων και packaging συστημάτων.",
      filterAll: "ΟΛΑ",
      filterDesktop: "DESKTOP",
      filterDevTools: "DEV TOOLS",
      filterWebApps: "WEB APPS",
      viewArchitecture: "Αρχιτεκτονική & Sandbox",
      liveDemo: "Ζωντανό Demo",
      githubRepo: "GitHub Repo",
      npmPackage: "Πακέτο NPM",
      interactiveDemo: "Διαδραστικό Demo",
    },
    modal: {
      architectureFlow: "Ροή Αρχιτεκτονικής",
      engineeringMetrics: "Τεχνικές Μετρικές",
      keyHighlights: "Κύρια Σημεία Υλοποίησης",
      liveTelemetry: "Ζωντανή Ροή Τηλεμετρίας",
      close: "Κλείσιμο",
      stack: "Τεχνολογίες & Εργαλεία",
      installPackage: "Εγκατάσταση",
    },
    architecture: {
      sectionBadge: "02 // Πίνακας Αρχιτεκτονικής Συστημάτων",
      heading: "Έξι Επίπεδα Μηχανικής Ικανότητας",
      subtitle: "Από ψηφιακά κυκλώματα σε FPGA και διαχείριση μνήμης πυρήνα έως σύγχρονα αντιδραστικά frontends.",
      coreCompetencies: "Βασικές Ικανότητες",
      architecturalScope: "Πεδίο Εφαρμογής",
      productionSpec: "Τεχνικές Προδιαγραφές Παραγωγής",
      codeImplementation: "Πραγματική Υλοποίηση Κώδικα",
      copyCode: "Αντιγραφή Κώδικα",
      codeCopied: "Αντιγράφηκε!",
    },
    academic: {
      sectionBadge: "03 // Ακαδημαϊκή Βάση & Κατάρτιση",
      heading: "Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών",
      subtitle: "Τμήμα Πληροφορικής & Τηλεπικοινωνιών — Το κορυφαίο τμήμα CS στην Ελλάδα",
      degreeName: "Πτυχίο στην Επιστήμη Υπολογιστών & Τηλεπικοινωνιών",
      degreeFocus: "Αυστηρά θεωρητικά μαθηματικά, αρχιτεκτονική λειτουργικών συστημάτων, ψηφιακά ηλεκτρονικά και θεωρία τηλεπικοινωνιών.",
      courseworkPill: "Βασικά Μαθήματα Προγράμματος Σπουδών",
      categories: {
        systems: "Συστήματα",
        digitalLogic: "Ψηφιακή Λογική",
        software: "Λογισμικό",
        theory: "Θεωρία",
      },
    },
    terminal: {
      sectionBadge: "04 // Διαδραστική Κονσόλα",
      heading: "Άμεση Επικοινωνία μέσω Κελύφους",
      shellNotice: "Κέλυφος FarmakisOS v3.2 • Πληκτρολογήστε",
      shellNoticeEnd: "για να δείτε όλες τις διαθέσιμες επιλογές.",
      placeholder: "πληκτρολογήστε help, skills, projects, download-cv...",
      execute: "Εκτέλεση",
      clear: "Καθαρισμός",
      availableCommands: "Διαθέσιμες Εντολές:",
      helpAbout: "Βιογραφικό σημείωμα & φιλοσοφία μηχανικής",
      helpSkills: "Αρχιτεκτονική 6 επιπέδων και δεξιότητες",
      helpProjects: "Παραγωγικό λογισμικό και αποθετήρια",
      helpNeofetch: "Προδιαγραφές συστήματος & περιβάλλον",
      helpDownloadCv: "Λήψη επίσημου βιογραφικού σε PDF",
      helpContact: "Κανάλια άμεσης επικοινωνίας",
      helpClear: "Καθαρισμός οθόνης τερματικού",
    },
    contact: {
      sectionBadge: "05 // Κανάλια Επικοινωνίας",
      heading: "Έναρξη Επικοινωνίας",
      subtitle: "Ενδιαφέρεστε για συνεργασία σε full-stack μηχανική, αρχιτεκτονική συστημάτων ή απαιτητικά έργα; Επικοινωνήστε απευθείας μέσω της φόρμας, email ή LinkedIn.",
      nameLabel: "Το Όνομά σας",
      namePlaceholder: "Μιχαήλ Παπαδόπουλος",
      emailLabel: "Διεύθυνση Email",
      emailPlaceholder: "name@example.com",
      messageLabel: "Μήνυμα",
      messagePlaceholder: "Σχετικά με αρχιτεκτονική συστημάτων, ρόλους μηχανικού ή συνεργασίες...",
      sendBtn: "Αποστολή Μηνύματος",
      sendingBtn: "Αποστολή...",
      successMsg: "Το μήνυμα στάλθηκε επιτυχώς! Θα σας απαντήσω άμεσα.",
      sendAnother: "Αποστολή άλλου μηνύματος",
      directChannels: "Άμεσα Κανάλια",
      primaryEmail: "Κύριο Email",
      copyEmail: "Αντιγραφή Email",
      locationTitle: "Έδρα",
      locationVal: "Αθήνα, Ελλάδα [UTC+3]",
      availabilityTitle: "Διαθεσιμότητα",
      availabilityVal: "Διαθέσιμος για Ρόλους Full-Stack & Συστημάτων",
    },
    footer: {
      builtWith: "Αναπτύχθηκε με React 18, TypeScript, Tailwind CSS & Framer Motion.",
      copyright: "Όλα τα δικαιώματα διατηρούνται.",
      backToTop: "Κορυφή",
      location: "Αθήνα, Ελλάδα",
    },
    commandPalette: {
      placeholder: "Αναζήτηση έργων, τεχνολογιών, επιπέδων ή εκτέλεση ενεργειών...",
      noResults: "Δεν βρέθηκαν αποτελέσματα.",
      navigation: "Πλοήγηση",
      projects: "Έργα",
      architecture: "Αρχιτεκτονικό Stack",
      actions: "Γρήγορες Ενέργειες",
      escToClose: "ESC για κλείσιμο",
      downloadResumeAction: "Λήψη Επίσημου Βιογραφικού PDF",
      toggleSoundAction: "Εναλλαγή Ηχητικών Εφέ",
      copyEmailAction: "Αντιγραφή Διεύθυνσης Email",
    },
  },
};
