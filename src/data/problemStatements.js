// ============================================================
// HACKSPHERE 2.0 — Problem Statements Data
// ------------------------------------------------------------
// HOW TO EDIT:
//  - Each statement supports: id, title, category, difficulty,
//    tags, shortDescription, description, objective,
//    expectedSolution, technologies, deliverables.
//  - PDF LINKS: update the PDF_LINKS map below. Paste a direct
//    PDF link or a Google Drive shareable link
//    (https://drive.google.com/file/d/.../view). Empty string
//    "" hides the "View Full Problem Statement" button.
//  - difficulty: "Easy" | "Medium" | "Hard"
//  - category must match one of the names in src/data/domains.js
// ============================================================

// ------------------------------------------------------------
// PDF LINKS — paste your Google Drive / PDF URLs here by ID.
// Example: HS01: 'https://drive.google.com/file/d/XXXX/view'
// ------------------------------------------------------------
const PDF_LINKS = {
  HS01: '',
  HS02: '',
  HS03: '',
  HS04: '',
  HS05: '',
  HS06: '',
  HS07: '',
  HS08: '',
  HS09: '',
  HS10: '',
  HS11: '',
  HS12: '',
  HS13: '',
  HS14: '',
  HS15: '',
  HS16: '',
  HS17: '',
  HS18: '',
  HS19: '',
  HS20: '',
  HS21: '',
  HS22: '',
  HS23: '',
  HS24: '',
  HS25: '',
  HS26: '',
  HS27: '',
  HS28: '',
  HS29: '',
  HS30: '',
  HS31: '',
  HS32: '',
  HS33: '',
  HS34: '',
  HS35: '',
  HS36: '',
  HS37: '',
  HS38: '',
  HS39: '',
  HS40: '',
  HS41: '',
  HS42: '',
  HS43: '',
  HS44: '',
  HS45: '',
  HS46: '',
  HS47: '',
  HS48: '',
  HS49: '',
  HS50: '',
  HS51: '',
  HS52: '',
  HS53: '',
  HS54: '',
  HS55: '',
  HS56: '',
  HS57: '',
  HS58: '',
  HS59: '',
  HS60: '',
  HS61: '',
};

const problemStatements = [
  // ============================================================
  // 1. ARTIFICIAL INTELLIGENCE & AGENTIC AI
  // ============================================================
  {
    id: 'HS01',
    title: 'AI-Powered Personal Task Agent',
    category: 'Artificial Intelligence & Agentic AI',
    difficulty: 'Medium',
    tags: ['LLM', 'Agents', 'Automation', 'Productivity'],
    shortDescription:
      'An autonomous assistant that plans, schedules and executes everyday tasks on your behalf using goal-driven reasoning.',
    description:
      'Modern professionals juggle dozens of micro-tasks — reminders, follow-ups, research, drafting replies. Build an agentic assistant that accepts a high-level goal ("prepare me for tomorrow\'s client meeting"), breaks it into subtasks, calls tools (calendar, notes, email drafts), and executes or proposes actions with user approval. Teams may use LLM APIs, function calling, or open-source agent frameworks.',
    objective:
      'Demonstrate reliable multi-step planning and tool use: the agent must decompose a goal, execute at least 3 tool actions, and ask for confirmation before irreversible steps.',
    expectedSolution:
      'A chat/web interface where users describe goals, watch the agent plan and act step-by-step, and approve or reject actions before execution.',
    technologies: ['Python', 'LangChain / CrewAI / custom agent loop', 'OpenAI / open-source LLM API', 'React or Streamlit UI'],
    deliverables: ['Working agent demo', 'Live or recorded demo video', 'Architecture diagram', 'README with setup steps'],
  },
  {
    id: 'HS02',
    title: 'Multi-Agent Disaster Response System',
    category: 'Artificial Intelligence & Agentic AI',
    difficulty: 'Hard',
    tags: ['Multi-Agent', 'Simulation', 'Coordination', 'NLP'],
    shortDescription:
      'Coordinate specialized AI agents to triage incidents, allocate resources and communicate during simulated disaster scenarios.',
    description:
      'During floods, fires or earthquakes, information is fragmented across agencies. Build a simulation where multiple specialized agents — triage, logistics, communications — receive incident reports, share a common situational picture, negotiate priorities, and produce a coordinated response plan. Use simulated incident feeds and resource inventories; no real emergency systems.',
    objective:
      'Show emergent coordination: agents must resolve at least one resource conflict and produce a prioritized, timestamped action plan from messy simulated input.',
    expectedSolution:
      'A simulation dashboard showing agents, live incident stream, resource board, and a generated response timeline that judges can replay.',
    technologies: ['Python', 'Agent framework (AutoGen / CrewAI / custom)', 'LLM API', 'Simulation state (JSON/SQLite)'],
    deliverables: ['Agent simulation demo', 'Scenario replay capability', 'Coordination log export', 'Demo video'],
  },
  {
    id: 'HS03',
    title: 'Intelligent Government Scheme Assistant',
    category: 'Artificial Intelligence & Agentic AI',
    difficulty: 'Medium',
    tags: ['RAG', 'NLP', 'GovTech', 'Chatbot'],
    shortDescription:
      'A multilingual assistant that helps citizens discover eligible government schemes and guides them through applications.',
    description:
      'Citizens often miss welfare schemes because eligibility rules are scattered across PDFs and portals. Build an assistant that ingests a curated dataset of scheme rules (provided or public sample data), answers eligibility questions in plain language, and produces a personalized checklist of documents and steps. Prototype with sample schemes only.',
    objective:
      'Answer scheme questions with citations to source rules and generate an accurate, personalized application checklist for at least one test citizen profile.',
    expectedSolution:
      'A chatbot/web app with retrieval-augmented answers, source citations, and a generated eligibility + document checklist.',
    technologies: ['RAG pipeline', 'Embeddings + vector store', 'LLM API', 'React / Streamlit frontend'],
    deliverables: ['Working chatbot demo', 'Sample scheme dataset', 'Evaluation of 5+ test queries', 'Demo video'],
  },
  {
    id: 'HS04',
    title: 'AI-Powered Fake News Detector',
    category: 'Artificial Intelligence & Agentic AI',
    difficulty: 'Medium',
    tags: ['NLP', 'Classification', 'Fact-Checking', 'LLM'],
    shortDescription:
      'Detect misleading news articles by analyzing linguistic cues, source credibility signals and claim consistency.',
    description:
      'Misinformation spreads faster than verification. Build a tool that takes a news article (paste text or URL), extracts key claims, flags sensationalist language, checks claims against a small curated fact database, and outputs a credibility score with explanations. Use public datasets or synthetic articles for training/evaluation.',
    objective:
      'Produce a credibility score with human-readable reasoning for each article, correctly flagging at least 80% of a provided test set of real vs. synthetic misinformation.',
    expectedSolution:
      'A web app where users submit articles and receive a credibility report: score, flagged claims, red-flag explanations.',
    technologies: ['Python / Node.js', 'NLP (spaCy / transformers)', 'LLM API for claim extraction', 'React frontend'],
    deliverables: ['Working detector demo', 'Test dataset + results', 'Explainability report sample', 'Demo video'],
  },
  {
    id: 'HS05',
    title: 'Multilingual Voice-Based Assistant',
    category: 'Artificial Intelligence & Agentic AI',
    difficulty: 'Hard',
    tags: ['Speech', 'i18n', 'ASR', 'Accessibility'],
    shortDescription:
      'A voice assistant that understands and responds in multiple Indian languages, bridging the digital divide.',
    description:
      'Hundreds of millions of users prefer voice in their regional language. Build a voice assistant supporting at least 3 languages (e.g., English, Hindi, Tamil/Telugu) that performs practical tasks: weather, reminders, simple Q&A, and form-filling guidance. Use speech-to-text and text-to-speech APIs or open-source models; support code-mixed input.',
    objective:
      'Demonstrate a full voice loop in 3+ languages: user speaks a task, the assistant understands intent, acts, and replies in the same language.',
    expectedSolution:
      'A web/mobile prototype with microphone input, multilingual intent handling, and spoken responses, tested across languages.',
    technologies: ['Web Speech API / Whisper', 'Translation API', 'LLM API', 'React / mobile web'],
    deliverables: ['Multilingual voice demo', 'Language coverage matrix', 'Latency + accuracy notes', 'Demo video'],
  },
  {
    id: 'HS06',
    title: 'AI Resume and Skill Gap Analyzer',
    category: 'Artificial Intelligence & Agentic AI',
    difficulty: 'Easy',
    tags: ['NLP', 'ATS', 'Career', 'LLM'],
    shortDescription:
      'Analyze resumes against job descriptions, score match quality and recommend concrete skill improvements.',
    description:
      'Job seekers struggle to understand why applications fail. Build a tool that parses a resume and target job description, extracts skills and experience, computes a match score, highlights missing keywords/competencies, and suggests a prioritized upskilling roadmap with free resources.',
    objective:
      'Produce a match score, gap analysis, and actionable skill roadmap for any uploaded resume + job description pair.',
    expectedSolution:
      'A web app accepting PDF/DOCX resumes and job text, rendering a visual match report with skill gaps and recommendations.',
    technologies: ['Python pdf parsing', 'spaCy / LLM API', 'React frontend', 'Charts (Recharts/D3)'],
    deliverables: ['Working analyzer demo', 'Sample resume + JD pair', 'Match report UI', 'Demo video'],
  },

  // ============================================================
  // 2. HEALTHCARE & MEDTECH
  // ============================================================
  {
    id: 'HS07',
    title: 'Smart Hospital Queue Management',
    category: 'Healthcare & MedTech',
    difficulty: 'Medium',
    tags: ['Queueing', 'Healthcare', 'Dashboard', 'Real-time'],
    shortDescription:
      'Reduce waiting times with live queue tracking, smart token allotment and doctor availability forecasting.',
    description:
      'Hospital OPDs waste hours in queues. Build a prototype queue system: patients check in via token, staff see live queue status per department, the system estimates wait times using simple queueing models, and notifies patients on token-to-phone. All data simulated — no real hospital integration required.',
    objective:
      'Demonstrate end-to-end check-in, live queue dashboard, wait-time estimation, and notification flow using simulated data.',
    expectedSolution:
      'A dashboard (staff view) + simple patient interface showing queue position, estimated wait, and department load.',
    technologies: ['React', 'Node.js / Firebase-style mock backend', 'Queueing model', 'WebSockets or polling'],
    deliverables: ['Working queue prototype', 'Wait-time estimation logic', 'Simulated patient flow demo', 'Demo video'],
  },
  {
    id: 'HS08',
    title: 'AI-Based Medicine Reminder System',
    category: 'Healthcare & MedTech',
    difficulty: 'Easy',
    tags: ['Adherence', 'Reminders', 'Health', 'Mobile'],
    shortDescription:
      'A smart adherence companion that reminds patients to take medicines on time and tracks missed doses.',
    description:
      'Medication non-adherence causes preventable health complications. Build an app where users or caregivers log prescriptions (name, dosage, schedule), receive intelligent reminders with snooze logic, and view adherence analytics. Include smart features like drug-interaction warnings using a public interaction dataset and refill alerts.',
    objective:
      'Deliver a working reminder + adherence tracker with schedule parsing, dose logging, and a weekly adherence report.',
    expectedSolution:
      'A mobile-first web app with prescription setup, reminder scheduling, dose check-off, and adherence analytics.',
    technologies: ['React / React Native', 'Local notifications', 'Chart library', 'Public drug-interaction dataset'],
    deliverables: ['Working reminder app', 'Adherence analytics view', 'Sample prescription dataset', 'Demo video'],
  },
  {
    id: 'HS09',
    title: 'Emergency Blood Donor Finder',
    category: 'Healthcare & MedTech',
    difficulty: 'Medium',
    tags: ['Matching', 'Geo', 'Healthcare', 'Emergency'],
    shortDescription:
      'Instantly locate compatible, nearby blood donors during emergencies using smart matching and geo-filtering.',
    description:
      'Finding the right blood group quickly saves lives. Build a platform where donors register once (blood group, location, availability windows) and hospitals/requesters can fire an emergency alert that matches compatible donors by group, distance, and availability — with privacy-preserving contact relay.',
    objective:
      'Match a simulated emergency request to the top-N compatible donors ranked by distance and availability within seconds.',
    expectedSolution:
      'A two-sided prototype: donor registration + emergency request flow returning a ranked donor list with contact reveal on consent.',
    technologies: ['React', 'Geo lookup / mock coordinates', 'Matching algorithm', 'Node.js / Firebase mock'],
    deliverables: ['Working matching demo', 'Donor + requester flows', 'Privacy-preserving contact design', 'Demo video'],
  },
  {
    id: 'HS10',
    title: 'Smart Elderly Fall Detection',
    category: 'Healthcare & MedTech',
    difficulty: 'Hard',
    tags: ['CV', 'Pose Estimation', 'Safety', 'Edge'],
    shortDescription:
      'Detect falls in real time using pose estimation from camera feeds and trigger instant caregiver alerts.',
    description:
      'Falls are a leading cause of injury in elderly care. Build a privacy-conscious fall detector: process simulated or recorded video (use public fall-detection datasets), estimate body pose, classify normal movement vs. fall events, and trigger an alert with confidence score and snapshot. Must run on CPU at usable framerates.',
    objective:
      'Classify fall vs. non-fall events in a test video set with >85% accuracy and demonstrate the alert pipeline end-to-end.',
    expectedSolution:
      'A pipeline demo: video input → pose estimation → fall classifier → alert dashboard with timestamped events.',
    technologies: ['MediaPipe / OpenPose', 'Python', 'Pose classification (ML model)', 'Alert dashboard UI'],
    deliverables: ['Working detection demo', 'Evaluation on test clips', 'Alert dashboard', 'Demo video'],
  },
  {
    id: 'HS11',
    title: 'Medical Report Simplifier',
    category: 'Healthcare & MedTech',
    difficulty: 'Easy',
    tags: ['NLP', 'Health Literacy', 'LLM', 'Translation'],
    shortDescription:
      'Translate complex medical reports into plain language patients actually understand, with safety disclaimers.',
    description:
      'Medical jargon confuses patients and leads to missed follow-ups. Build a tool that ingests a lab report or discharge summary (paste text or upload PDF), extracts key findings, explains them in simple language at a chosen reading level, highlights urgent items needing doctor attention, and always displays a "not medical advice" disclaimer.',
    objective:
      'Convert sample medical reports into accurate plain-language summaries with flagged urgent findings and clear disclaimers.',
    expectedSolution:
      'A web app where users upload/paste reports and receive a simplified, structured explanation with highlighted action items.',
    technologies: ['LLM API', 'PDF parsing', 'React frontend', 'Reading-level scoring'],
    deliverables: ['Working simplifier demo', '3+ sample report outputs', 'Disclaimer + safety framing', 'Demo video'],
  },
  {
    id: 'HS12',
    title: 'Ambulance Route Optimization',
    category: 'Healthcare & MedTech',
    difficulty: 'Medium',
    tags: ['Routing', 'Geo', 'Optimization', 'Emergency'],
    shortDescription:
      'Compute fastest ambulance routes considering traffic, hospital capacity and patient condition priority.',
    description:
      'Ambulance dispatchers juggle traffic and hospital readiness. Build a routing optimizer: given ambulance positions, patient locations, and hospital ER capacities, compute optimal assignments minimizing response time while respecting capacity constraints. Use simulated city data and real routing APIs where possible.',
    objective:
      'Produce an optimal ambulance→hospital assignment for a simulated scenario that beats naive nearest-hospital dispatch on response time.',
    expectedSolution:
      'A map-based dashboard showing dispatch scenario, computed routes, ETAs, and capacity-aware hospital recommendations.',
    technologies: ['Google Maps / OSRM API', 'Optimization algorithm (greedy/OR-tools)', 'React + map lib', 'Simulation data'],
    deliverables: ['Working routing demo', 'Scenario comparison (naive vs optimized)', 'Capacity-aware logic', 'Demo video'],
  },

  // ============================================================
  // 3. CYBERSECURITY & DIGITAL TRUST
  // ============================================================
  {
    id: 'HS13',
    title: 'AI-Based Phishing Detection',
    category: 'Cybersecurity & Digital Trust',
    difficulty: 'Medium',
    tags: ['Security', 'NLP', 'Phishing', 'Classification'],
    shortDescription:
      'Detect phishing emails and fake login pages using NLP analysis and URL/heuristic feature extraction.',
    description:
      'Phishing remains the #1 attack vector. Build a detector that analyzes suspicious emails/URLs using features like sender anomalies, urgency language, suspicious links, and domain typosquatting — outputting a risk score with explanations. Train on public phishing datasets (e.g., PhishTank-derived or Enron/spam corpora).',
    objective:
      'Classify a provided test set of phishing vs. legitimate samples with >90% precision, showing explainable reasons for each verdict.',
    expectedSolution:
      'A web tool where users paste an email or URL and receive a risk report: score, red flags, and recommendation.',
    technologies: ['Python', 'scikit-learn / transformers', 'URL feature extraction', 'React frontend'],
    deliverables: ['Working detector demo', 'Evaluation metrics on test set', 'Sample report output', 'Demo video'],
  },
  {
    id: 'HS14',
    title: 'Deepfake Image and Video Detector',
    category: 'Cybersecurity & Digital Trust',
    difficulty: 'Hard',
    tags: ['Deepfake', 'CV', 'Forensics', 'Media'],
    shortDescription:
      'Identify AI-generated or manipulated images and video frames using forensic artifact analysis.',
    description:
      'Deepfakes erode digital trust. Build a detector that analyzes images/video frames for artifacts: GAN fingerprints, inconsistent lighting, blending boundaries, metadata anomalies. Use public deepfake datasets (FaceForensics++, DFDC samples) and show a per-frame or per-image authenticity score.',
    objective:
      'Distinguish real vs. manipulated media in a test set with measurable accuracy, producing heatmap or artifact explanations.',
    expectedSolution:
      'A demo tool accepting image/video input and returning authenticity score with visual forensics highlights.',
    technologies: ['Python', 'OpenCV', 'CNN classifier / pretrained model', 'React frontend'],
    deliverables: ['Working detector demo', 'Accuracy report on dataset subset', 'Artifact visualization', 'Demo video'],
  },
  {
    id: 'HS15',
    title: 'Smart Password Leak Monitor',
    category: 'Cybersecurity & Digital Trust',
    difficulty: 'Easy',
    tags: ['Security', 'Passwords', 'HaveIBeenPwned', 'Privacy'],
    shortDescription:
      'Check whether passwords appear in known breaches using privacy-safe k-anonymity APIs — never sending raw passwords.',
    description:
      'Users reuse breached passwords unknowingly. Build a local-first checker: passwords are hashed client-side (SHA-1 prefix via k-anonymity), only the first 5 hash chars go to the HaveIBeenPwned Pwned Passwords API, and results show breach count + severity advice. Never store or transmit raw passwords.',
    objective:
      'Deliver a working checker that correctly reports breach counts for sample passwords while sending zero raw password data over the network.',
    expectedSolution:
      'A web app with real-time breach checking, strength meter, and clear remediation guidance per password.',
    technologies: ['React', 'SHA-1 hashing (Web Crypto)', 'HIBP Pwned Passwords API', 'Zero backend storage'],
    deliverables: ['Working checker demo', 'Privacy architecture note', 'Strength scoring logic', 'Demo video'],
  },
  {
    id: 'HS16',
    title: 'AI-Based Cyber Threat Intelligence Dashboard',
    category: 'Cybersecurity & Digital Trust',
    difficulty: 'Hard',
    tags: ['Threat Intel', 'Dashboard', 'NLP', 'Security Ops'],
    shortDescription:
      'Aggregate and analyze threat feeds to surface emerging attack patterns, IOCs and risk trends.',
    description:
      'Security teams drown in raw threat data. Build a dashboard that ingests public threat feeds (e.g., AbuseIPDB-style samples, AlienVault OTX free tier, or synthetic IOC streams), extracts indicators of compromise, clusters related campaigns with NLP, and visualizes trends, severity, and affected sectors.',
    objective:
      'Ingest a live or simulated feed and produce actionable summaries: top threats, IOC table, trend charts, and one-paragraph analyst briefing.',
    expectedSolution:
      'A dark-themed SOC-style dashboard with feed ingestion, IOC extraction, clustering view, and auto-generated briefings.',
    technologies: ['Python / Node.js', 'Threat feed APIs', 'NLP clustering', 'React + charts'],
    deliverables: ['Working dashboard demo', 'Feed ingestion pipeline', 'Analyst briefing sample', 'Demo video'],
  },
  {
    id: 'HS17',
    title: 'Secure Digital Document Verification',
    category: 'Cybersecurity & Digital Trust',
    difficulty: 'Medium',
    tags: ['Blockchain-lite', 'Verification', 'Documents', 'Trust'],
    shortDescription:
      'Verify document authenticity via cryptographic hashes and tamper-evident audit trails.',
    description:
      'Certificate and document fraud is rampant. Build a verification system: issuers generate a document, compute its SHA-256 hash, and register it (simulated blockchain ledger or signed JSON store); verifiers upload the document and get instant authenticity + tamper detection. Include QR-code verification flow.',
    objective:
      'Issue → verify → detect-tamper flow working end-to-end: any single-byte change must fail verification.',
    expectedSolution:
      'Two flows in one app: issuer dashboard (create + register docs) and verifier page (upload/scan → verdict).',
    technologies: ['Web Crypto API (SHA-256)', 'JSON ledger simulation or testnet', 'QR generation', 'React'],
    deliverables: ['Working verification demo', 'Tamper-detection proof', 'QR verify flow', 'Demo video'],
  },
  {
    id: 'HS18',
    title: 'AI-Based Scam Call and SMS Detector',
    category: 'Cybersecurity & Digital Trust',
    difficulty: 'Medium',
    tags: ['Fraud', 'NLP', 'Telecom', 'Scam'],
    shortDescription:
      'Analyze call/SMS content and metadata to warn users about likely scam attempts in real time.',
    description:
      'Digital arrest and KYC scams cost crores annually. Build a prototype that analyzes message text and call metadata (simulated transcripts/metadata — no real telecom access) for scam indicators: urgency, impersonation, suspicious links, payment demands. Output risk score + plain-language warning.',
    objective:
      'Classify a test set of scam vs. genuine messages with high recall on scams, and generate user-friendly warnings.',
    expectedSolution:
      'A checker where users paste SMS/call transcript and receive a scam-likelihood report with red-flag breakdown.',
    technologies: ['Python / Node.js', 'NLP classification', 'LLM API for explanation', 'React frontend'],
    deliverables: ['Working detector demo', 'Evaluation on scam corpus', 'Warning UX samples', 'Demo video'],
  },

  // ============================================================
  // 4. SMART AGRICULTURE & AGRITECH
  // ============================================================
  {
    id: 'HS19',
    title: 'AI-Based Crop Disease Detection',
    category: 'Smart Agriculture & AgriTech',
    difficulty: 'Medium',
    tags: ['CV', 'Plant Disease', 'Mobile', 'Farming'],
    shortDescription:
      'Identify crop diseases from leaf photos and guide farmers to treatment before yield is lost.',
    description:
      'Smallholder farmers lack agronomists on call. Build a leaf-image classifier using public datasets (PlantVillage, AI4AFS) or a pretrained vision model: identify disease, show confidence, suggest organic/chemical treatment, and display regional helpline info. Must work on phone-captured images.',
    objective:
      'Classify leaf images into ≥5 disease/healthy classes with >85% top-1 accuracy and show treatment guidance.',
    expectedSolution:
      'A mobile-friendly web app: snap/upload leaf → disease ID + confidence + treatment card.',
    technologies: ['TensorFlow / PyTorch or Teachable Machine', 'Transfer learning (MobileNet/EfficientNet)', 'React frontend', 'Public crop datasets'],
    deliverables: ['Working classifier demo', 'Accuracy report', 'Treatment knowledge base', 'Demo video'],
  },
  {
    id: 'HS20',
    title: 'Smart Irrigation Recommendation System',
    category: 'Smart Agriculture & AgriTech',
    difficulty: 'Medium',
    tags: ['IoT', 'Water', 'Agronomy', 'Dashboard'],
    shortDescription:
      'Recommend when and how much to irrigate using soil moisture, weather forecasts and crop stage data.',
    description:
      'Over/under-irrigation wastes water and reduces yield. Build a system that ingests simulated soil-moisture sensor data + weather API forecasts + crop profile, applies a simple water-balance model, and outputs irrigation schedules with water-volume estimates. Dashboard for farmers.',
    objective:
      'Produce a 7-day irrigation schedule per field that respects soil moisture thresholds and weather forecasts.',
    expectedSolution:
      'Dashboard showing field status, soil moisture trends, and recommended irrigation windows with amounts.',
    technologies: ['React', 'Weather API (Open-Meteo)', 'Water-balance model', 'Simulated sensor data'],
    deliverables: ['Working dashboard demo', 'Irrigation recommendation engine', '7-day forecast view', 'Demo video'],
  },
  {
    id: 'HS21',
    title: 'AI-Based Crop Price Prediction',
    category: 'Smart Agriculture & AgriTech',
    difficulty: 'Medium',
    tags: ['Time Series', 'ML', 'Market', 'Forecasting'],
    shortDescription:
      'Forecast mandi prices for key crops so farmers can time their sales and reduce distress selling.',
    description:
      'Price volatility hurts farmers badly. Build a forecasting tool using public Agmarknet/commodity price datasets: predict 7–15 day prices for 2+ crops, visualize historical trends vs. forecast, and flag high-price windows. Include confidence intervals and feature explanations.',
    objective:
      'Forecast prices with lower MAPE than a naive baseline on held-out test data, displayed with confidence bands.',
    expectedSolution:
      'Web dashboard with crop selector, price history chart, forecast band, and "sell/hold" signal explanation.',
    technologies: ['Python (Prophet/ARIMA/LightGBM)', 'Public mandi datasets', 'Chart.js / Recharts', 'React'],
    deliverables: ['Working forecaster demo', 'Model evaluation vs baseline', 'Explained signal logic', 'Demo video'],
  },
  {
    id: 'HS22',
    title: 'Farmer-to-Market Direct Platform',
    category: 'Smart Agriculture & AgriTech',
    difficulty: 'Medium',
    tags: ['Marketplace', 'Logistics', 'Agri', 'Web App'],
    shortDescription:
      'Connect farmers directly to buyers, cutting out middlemen with transparent pricing and logistics support.',
    description:
      'Intermediaries capture most of the farm-gate price gap. Build a marketplace prototype: farmers list produce with quantity/quality/price, buyers browse and place orders, and the platform computes logistics cost estimates and settlement splits. Use simulated listings and mock payments.',
    objective:
      'Complete flow working: listing → discovery → order → logistics quote → simulated settlement, with transparent price breakdown.',
    expectedSolution:
      'Responsive web app with role views (farmer/buyer), listing management, order pipeline, and price-transparency panel.',
    technologies: ['React', 'Node.js mock API / JSON store', 'Geo pricing model', 'Maps API'],
    deliverables: ['Working marketplace demo', 'Price transparency breakdown', 'Order flow demo', 'Demo video'],
  },
  {
    id: 'HS23',
    title: 'Smart Fertilizer Recommendation',
    category: 'Smart Agriculture & AgriTech',
    difficulty: 'Easy',
    tags: ['Soil', 'Recommendation', 'Agri', 'Expert System'],
    shortDescription:
      'Recommend precise fertilizer types and doses based on soil test results, crop and region.',
    description:
      'Blind fertilizer use degrades soil and wastes money. Build a recommendation engine: input soil NPK values, crop type, growth stage, and region; output a fertilizer plan with dosages, application timing, and cost estimate. Encode agronomy rules from public extension guidelines.',
    objective:
      'Generate agronomically sound fertilizer plans for 5+ crop/soil combinations, validated against extension guidelines.',
    expectedSolution:
      'Web form → recommendation report with dosage table, timing schedule, and estimated cost.',
    technologies: ['React', 'Rule-based expert system', 'Public soil-test datasets', 'PDF guideline corpus'],
    deliverables: ['Working recommender demo', 'Rule knowledge base', 'Sample recommendation reports', 'Demo video'],
  },
  {
    id: 'HS24',
    title: 'Agricultural Waste-to-Wealth Platform',
    category: 'Smart Agriculture & AgriTech',
    difficulty: 'Easy',
    tags: ['Circular Economy', 'Bio-energy', 'Agri', 'Marketplace'],
    shortDescription:
      'Turn crop residue and agri-waste into income by matching waste generators with buyers and processors.',
    description:
      'Burning stubble creates pollution and lost income. Build a platform cataloguing agri-waste types (straw, husk, peels), their conversion potential (biogas, compost, packaging), and connecting generators to processors/buyers with logistics coordination.',
    objective:
      'Demonstrate waste listing → matching → collection coordination flow for 5+ waste categories with value estimates.',
    expectedSolution:
      'Web platform with waste catalog, generator listings, processor directory, and a match/request flow.',
    technologies: ['React', 'JSON data backend', 'Value-estimation model', 'Map integration'],
    deliverables: ['Working platform demo', 'Waste catalog dataset', 'Match flow walkthrough', 'Demo video'],
  },

  // ============================================================
  // 5. SMART CITY & INTERNET OF THINGS
  // ============================================================
  {
    id: 'HS25',
    title: 'AI-Based Traffic Congestion Management',
    category: 'Smart City & IoT',
    difficulty: 'Hard',
    tags: ['Traffic', 'IoT', 'Optimization', 'Urban'],
    shortDescription:
      'Predict congestion hotspots and dynamically adjust signal timings and diversion routes.',
    description:
      'Congestion costs cities billions. Build a traffic management prototype on simulated or open traffic datasets (e.g., Pems, synthetic city grids): predict congestion 15–30 min ahead, identify hotspots, and recommend signal-timing or route-diversion actions. Simulate the effect on a live city map.',
    objective:
      'Predict congestion with measurable accuracy on held-out data and demonstrate a signal-timing adjustment that reduces simulated delay.',
    expectedSolution:
      'City map dashboard: live traffic state, hotspot predictions, recommended interventions, before/after simulation.',
    technologies: ['Python', 'Time-series forecasting', 'Map visualization', 'Simulation engine'],
    deliverables: ['Working prediction demo', 'Intervention simulator', 'Evaluation metrics', 'Demo video'],
  },
  {
    id: 'HS26',
    title: 'Smart Waste Segregation System',
    category: 'Smart City & IoT',
    difficulty: 'Medium',
    tags: ['CV', 'Waste', 'IoT', 'Sorting'],
    shortDescription:
      'Use computer vision to classify waste items and guide users/IoT bins toward correct segregation.',
    description:
      'Poor segregation contaminates recycling streams. Build a CV classifier for waste items (use public TrashNet dataset or synthetic images) that identifies material type (plastic, paper, metal, organic, e-waste) and outputs disposal guidance — plus a simulated smart-bin flow showing fill-level sensing.',
    objective:
      'Classify ≥5 waste categories with >80% accuracy and demonstrate the segregation guidance UX.',
    expectedSolution:
      'Camera/upload → classification + confidence + disposal instructions; optional bin-level simulation view.',
    technologies: ['TensorFlow/PyTorch', 'Transfer learning', 'TrashNet dataset', 'React frontend'],
    deliverables: ['Working classifier demo', 'Accuracy report', 'Disposal guidance DB', 'Demo video'],
  },
  {
    id: 'HS27',
    title: 'Intelligent Streetlight Management',
    category: 'Smart City & IoT',
    difficulty: 'Easy',
    tags: ['IoT', 'Energy', 'Smart City', 'Automation'],
    shortDescription:
      'Optimize streetlight brightness using ambient light, motion and grid load to cut energy waste.',
    description:
      'Streetlights burn full power all night regardless of need. Build a smart lighting controller prototype: simulated sensors (ambient light, motion, grid tariff) feed a dimming algorithm that adjusts brightness per pole; a city dashboard shows energy savings and fault alerts.',
    objective:
      'Demonstrate adaptive dimming that reduces simulated energy consumption ≥30% while maintaining minimum lux rules.',
    expectedSolution:
      'Dashboard + simulation: pole status map, dimming curves, energy-savings report, fault alerts.',
    technologies: ['React', 'Simulated sensor feeds', 'Dimming algorithm', 'Energy model'],
    deliverables: ['Working simulation demo', 'Energy savings calculation', 'Fault detection logic', 'Demo video'],
  },
  {
    id: 'HS28',
    title: 'Real-Time Water Leakage Detection',
    category: 'Smart City & IoT',
    difficulty: 'Medium',
    tags: ['IoT', 'Water', 'Anomaly Detection', 'Infrastructure'],
    shortDescription:
      'Detect pipeline leaks early by analyzing pressure/flow sensor anomalies and localizing faults.',
    description:
      'Undetected leaks waste millions of liters daily. Build an anomaly-detection system on simulated or public water-network data: ingest pressure/flow time series, flag anomalies via statistical/ML methods, estimate leak location along the pipe segment, and raise maintenance alerts.',
    objective:
      'Detect injected leak events in test data with >90% recall and localize them within a reasonable segment tolerance.',
    expectedSolution:
      'Monitoring dashboard: network map, sensor charts, anomaly alerts with location confidence and severity.',
    technologies: ['Python', 'Time-series anomaly detection', 'Simulated sensor network', 'React dashboard'],
    deliverables: ['Working detection demo', 'Localization accuracy report', 'Alert workflow', 'Demo video'],
  },
  {
    id: 'HS29',
    title: 'Smart Parking Availability System',
    category: 'Smart City & IoT',
    difficulty: 'Easy',
    tags: ['IoT', 'Parking', 'Mobile', 'Urban'],
    shortDescription:
      'Guide drivers to vacant spots in real time using simulated sensors and dynamic pricing signals.',
    description:
      'Drivers waste fuel circling for parking. Build a system with simulated in-ground/overhead sensors per spot: live occupancy map, nearest-spot guidance, occupancy forecasts by time-of-day, and optional dynamic pricing hints for high-demand zones.',
    objective:
      'Show real-time spot availability, navigation guidance to nearest vacancy, and a working occupancy simulation.',
    expectedSolution:
      'Map-based app: parking zones, live spot status, "find nearest" guidance, and occupancy analytics.',
    technologies: ['React + map lib', 'Simulated sensor feeds', 'Geo distance algorithm', 'WebSockets/polling'],
    deliverables: ['Working parking demo', 'Live occupancy simulation', 'Guidance UX', 'Demo video'],
  },
  {
    id: 'HS30',
    title: 'Urban Air Quality Monitoring Dashboard',
    category: 'Smart City & IoT',
    difficulty: 'Medium',
    tags: ['Air Quality', 'IoT', 'Data Viz', 'Health'],
    shortDescription:
      'Visualize real-time AQI across the city with pollution source analysis and health advisories.',
    description:
      'Air pollution demands hyperlocal awareness. Build a dashboard ingesting public air-quality APIs (e.g., OpenAQ, CPCB, WAQI) or simulated sensor grids: show AQI heatmaps, pollutant breakdowns (PM2.5, NO2, CO), trend forecasts, and health advisories by population group.',
    objective:
      'Render live or simulated AQI data on a city map with pollutant drill-down, 24h trends, and health advisory generation.',
    expectedSolution:
      'Dark dashboard: live AQI map, station details, pollutant trends, forecast, and advisory panel.',
    technologies: ['React', 'Air quality APIs (OpenAQ/WAQI)', 'Map library', 'Forecasting (simple)'],
    deliverables: ['Working dashboard demo', 'Live/simulated data pipeline', 'Advisory engine', 'Demo video'],
  },

  // ============================================================
  // 6. EDUCATION & EDTECH
  // ============================================================
  {
    id: 'HS31',
    title: 'AI-Powered Personalized Learning Platform',
    category: 'Education & EdTech',
    difficulty: 'Medium',
    tags: ['Adaptive Learning', 'LLM', 'Education', 'Analytics'],
    shortDescription:
      'Adapt lesson difficulty and content to each student\'s pace, style and knowledge gaps in real time.',
    description:
      'One-size-fits-all content leaves students behind or bored. Build a learning platform with a subject module (e.g., math or CS basics), a student model tracking mastery per topic, an adaptive engine that serves the next-best content, and an LLM tutor for doubt resolution.',
    objective:
      'Demonstrate measurable adaptation: students at different levels receive different content sequences, and the model updates mastery after each session.',
    expectedSolution:
      'Web app: onboarding → diagnostic → adaptive lesson path → quiz → updated learner model + teacher dashboard.',
    technologies: ['React', 'LLM API for tutoring', 'Knowledge-tracing model', 'JSON progress store'],
    deliverables: ['Working adaptive demo', 'Learner model visualization', 'Sample course content', 'Demo video'],
  },
  {
    id: 'HS32',
    title: 'Automatic Question Paper Generator',
    category: 'Education & EdTech',
    difficulty: 'Medium',
    tags: ['NLP', 'Education', 'Assessment', 'LLM'],
    shortDescription:
      'Generate balanced, syllabus-aligned question papers from uploaded notes or textbooks.',
    description:
      'Faculty spend hours crafting papers. Build a generator: upload course material (PDF/text), set constraints (marks, difficulty mix, question types, chapters), and receive a structured paper with answer key and Bloom\'s-taxonomy tagging per question.',
    objective:
      'Generate a complete paper (≥20 questions) that respects all constraints and stays grounded in the source material.',
    expectedSolution:
      'Web app: document upload → constraint form → generated paper with answer key, editable/exportable.',
    technologies: ['LLM API', 'PDF parsing', 'Constraint engine', 'React frontend'],
    deliverables: ['Working generator demo', 'Sample generated paper', 'Answer-key output', 'Demo video'],
  },
  {
    id: 'HS33',
    title: 'AI-Powered Programming Tutor',
    category: 'Education & EdTech',
    difficulty: 'Hard',
    tags: ['Code', 'Education', 'LLM', 'Feedback'],
    shortDescription:
      'Teach programming through Socratic hints, auto-graded exercises and personalized error explanations.',
    description:
      'Beginners stall on cryptic errors. Build a coding tutor: curated exercise set (Python/JS), an in-browser editor with auto-grading against test cases, and an LLM-powered hint system that gives Socratic guidance (never full answers first) plus error explanations.',
    objective:
      'Deliver ≥10 graded exercises with working test-case evaluation and a hint system that escalates from nudge to explanation.',
    expectedSolution:
      'Web IDE: exercise list → editor → run/tests → hints panel → progress tracking.',
    technologies: ['React + Monaco/CodeMirror', 'Judge0 API or local eval', 'LLM API for hints', 'Exercise JSON format'],
    deliverables: ['Working tutor demo', '10+ exercise bank', 'Grading + hint flow', 'Demo video'],
  },
  {
    id: 'HS34',
    title: 'Smart Attendance Using Face Recognition',
    category: 'Education & EdTech',
    difficulty: 'Medium',
    tags: ['Face Recognition', 'CV', 'Attendance', 'Privacy'],
    shortDescription:
      'Mark attendance automatically via consent-based face recognition with spoof-resistance basics.',
    description:
      'Manual attendance wastes class time. Build a consent-first attendance kiosk: enroll student faces (stored as embeddings, not images), recognize on camera, mark attendance with timestamp, and flag anomalies (multiple faces, spoofs via simple liveness checks). Provide manual override and privacy controls.',
    objective:
      'Demonstrate enrollment → recognition → attendance logging on a test set of ≥10 faces with low false-accept rate.',
    expectedSolution:
      'Kiosk-style web app: enroll flow, live recognition view, attendance sheet export, privacy settings.',
    technologies: ['face-api.js / MediaPipe', 'Python backend (optional)', 'Embedding storage', 'React frontend'],
    deliverables: ['Working kiosk demo', 'Attendance export', 'Privacy/liveness notes', 'Demo video'],
  },
  {
    id: 'HS35',
    title: 'Student Dropout Risk Prediction',
    category: 'Education & EdTech',
    difficulty: 'Medium',
    tags: ['ML', 'Education', 'Prediction', 'Analytics'],
    shortDescription:
      'Predict which students are at risk of dropping out using academic, attendance and engagement signals.',
    description:
      'Early intervention saves students. Build a predictive model on a public education dataset (e.g., OULAD, UCI student-performance): engineer features (attendance, grades trend, assignment submission), train a classifier, and present an at-risk dashboard with explainable top risk factors per student.',
    objective:
      'Achieve ROC-AUC ≥0.8 on held-out data and surface the top-3 contributing risk factors for each flagged student.',
    expectedSolution:
      'Dashboard: student list with risk scores, trend charts, and SHAP-style factor explanations.',
    technologies: ['Python (scikit-learn/SHAP)', 'Public education dataset', 'React + charts'],
    deliverables: ['Working predictor demo', 'Model evaluation report', 'Explainability view', 'Demo video'],
  },
  {
    id: 'HS36',
    title: 'Multilingual Lecture-to-Notes Generator',
    category: 'Education & EdTech',
    difficulty: 'Medium',
    tags: ['ASR', 'Summarization', 'i18n', 'Education'],
    shortDescription:
      'Convert lectures (audio/video) into structured notes in multiple languages with key-point extraction.',
    description:
      'Students miss content when lectures move fast or language is unfamiliar. Build a pipeline: audio/video input → speech-to-text → summarization into structured notes (headings, bullet points, key terms) → optional translation to another language. Handle noisy audio gracefully.',
    objective:
      'Produce coherent structured notes from a sample lecture in 2 languages, preserving key facts and technical terms.',
    expectedSolution:
      'Web app: upload audio/video → processing view → structured bilingual notes with timestamps.',
    technologies: ['Whisper (ASR)', 'LLM API (summarization + translation)', 'React frontend'],
    deliverables: ['Working pipeline demo', 'Sample bilingual notes', 'Timestamp alignment', 'Demo video'],
  },

  // ============================================================
  // 7. FINTECH & BLOCKCHAIN
  // ============================================================
  {
    id: 'HS37',
    title: 'AI-Based Financial Fraud Detection',
    category: 'FinTech & Blockchain',
    difficulty: 'Hard',
    tags: ['Fraud', 'ML', 'Finance', 'Anomaly'],
    shortDescription:
      'Detect suspicious transactions using anomaly detection and explainable risk scoring.',
    description:
      'Fraud costs the industry billions yearly. Build a transaction-monitoring prototype on public datasets (e.g., IEEE-CIS fraud, PaySim): engineer features (amount, velocity, time, merchant category), train an anomaly/fraud classifier, and produce per-transaction risk scores with SHAP explanations. Simulated data only.',
    objective:
      'Detect fraud with high recall at low false-positive rate on held-out data, with human-readable explanations per alert.',
    expectedSolution:
      'Dashboard: transaction stream, risk-scored alerts queue, feature explanation panel, analyst feedback loop.',
    technologies: ['Python (LightGBM/XGBoost/Isolation Forest)', 'SHAP', 'Public fraud dataset', 'React dashboard'],
    deliverables: ['Working detector demo', 'Evaluation report', 'Explainability samples', 'Demo video'],
  },
  {
    id: 'HS38',
    title: 'Blockchain-Based Certificate Verification',
    category: 'FinTech & Blockchain',
    difficulty: 'Medium',
    tags: ['Blockchain', 'Credentials', 'Verification', 'EdTech'],
    shortDescription:
      'Issue tamper-proof digital certificates on a blockchain testnet and verify them instantly.',
    description:
      'Fake certificates plague hiring and admissions. Build an issuance + verification system: institutions mint certificates as NFTs/metadata on a testnet (Polygon/Amoy/Sepolia) or simulated ledger; employers verify via QR/ID lookup showing issuer, date, and revocation status.',
    objective:
      'Issue a sample certificate on-chain (or simulated ledger), verify it publicly, and demonstrate revocation works.',
    expectedSolution:
      'Two interfaces: institution issuance dashboard and public verification page with QR scan.',
    technologies: ['Solidity / testnet', 'ethers.js or web3.py', 'React', 'IPFS or on-chain metadata'],
    deliverables: ['Working issuance demo', 'Public verification page', 'Revocation flow', 'Demo video'],
  },
  {
    id: 'HS39',
    title: 'Smart Expense Management Assistant',
    category: 'FinTech & Blockchain',
    difficulty: 'Easy',
    tags: ['Finance', 'Budgets', 'NLP', 'Mobile'],
    shortDescription:
      'Track expenses via natural-language entry ("spent 200 on lunch") with budgets and spending insights.',
    description:
      'Manual expense tracking is tedious. Build an assistant: parse natural-language expense entries, categorize automatically, enforce monthly budgets with alerts, visualize spending patterns, and generate a monthly summary. Mock bank-data import optional.',
    objective:
      'Accurately parse NL expense entries (>90%), categorize correctly, and surface budget alerts + insights.',
    expectedSolution:
      'Mobile-first app: NL input → categorized transaction → dashboard with budgets, charts, insights.',
    technologies: ['React', 'NL parsing (rules + LLM)', 'Chart library', 'Local JSON store'],
    deliverables: ['Working expense app demo', 'NL parser accuracy notes', 'Budget alert system', 'Demo video'],
  },
  {
    id: 'HS40',
    title: 'Digital Identity Verification Platform',
    category: 'FinTech & Blockchain',
    difficulty: 'Medium',
    tags: ['KYC', 'Identity', 'Security', 'Web3'],
    shortDescription:
      'Verify user identity once and issue reusable, revocable digital credentials for services.',
    description:
      'KYC is repeated endlessly across platforms. Build a self-sovereign identity prototype: users verify identity via document upload + liveness selfie (simulated), receive a signed verifiable credential (VC), and present it to services that verify signature without storing personal data.',
    objective:
      'Complete flow: enrollment → credential issuance → presentation → cryptographic verification, with revocation support.',
    expectedSolution:
      'App with enrollment wizard, credential wallet, and a verifier demo service checking signatures.',
    technologies: ['React', 'Verifiable Credentials concepts', 'Digital signatures (Web Crypto)', 'JSON-LD'],
    deliverables: ['Working identity demo', 'Credential format spec', 'Verification flow', 'Demo video'],
  },
  {
    id: 'HS41',
    title: 'Transparent Donation Tracking System',
    category: 'FinTech & Blockchain',
    difficulty: 'Medium',
    tags: ['Transparency', 'Blockchain', 'NGO', 'Donations'],
    shortDescription:
      'Let donors trace every rupee from contribution to on-ground impact with tamper-proof records.',
    description:
      'Donor trust erodes without transparency. Build a donation tracker: contributions recorded on a transparent ledger (testnet or simulated), funds allocated to projects with milestone milestones, and a public dashboard showing fund flow, beneficiary updates, and impact metrics.',
    objective:
      'Demonstrate donation → allocation → milestone → impact reporting with an immutable, publicly auditable trail.',
    expectedSolution:
      'Public dashboard + donor flow: contribute (simulated) → track allocation → view milestone impact reports.',
    technologies: ['React', 'Testnet or JSON ledger', 'Data visualization', 'Donation UX'],
    deliverables: ['Working tracker demo', 'Public audit view', 'Milestone reporting', 'Demo video'],
  },
  {
    id: 'HS42',
    title: 'AI-Based Insurance Claim Analyzer',
    category: 'FinTech & Blockchain',
    difficulty: 'Medium',
    tags: ['Insurance', 'NLP', 'Fraud', 'Claims'],
    shortDescription:
      'Accelerate claim processing by extracting policy details, checking coverage and flagging anomalies.',
    description:
      'Manual claim review is slow and inconsistent. Build an analyzer: ingest claim documents (text/PDF), extract incident details, match against policy terms (sample policy docs), compute coverage estimate, flag suspicious patterns, and draft an assessment summary. Prototype with synthetic claims.',
    objective:
      'Produce accurate coverage assessments and anomaly flags for a test set of ≥10 synthetic claims.',
    expectedSolution:
      'Claims dashboard: document upload → extracted fields → coverage analysis → anomaly flags → summary.',
    technologies: ['LLM API', 'PDF parsing', 'Rule engine', 'React frontend'],
    deliverables: ['Working analyzer demo', 'Sample claim outputs', 'Anomaly rule set', 'Demo video'],
  },

  // ============================================================
  // 8. CLIMATE TECH & SUSTAINABILITY
  // ============================================================
  {
    id: 'HS43',
    title: 'AI-Based Flood Prediction and Alert System',
    category: 'Climate Tech & Sustainability',
    difficulty: 'Hard',
    tags: ['Climate', 'Prediction', 'IoT', 'Alerts'],
    shortDescription:
      'Predict flood risk 24–72 hours ahead using rainfall, river-level and terrain data with tiered alerts.',
    description:
      'Early flood warning saves lives. Build a prototype on public datasets (IMD rainfall, river-gauge open data) or synthetic scenarios: train a model to predict water-level rise, map risk zones on a terrain view, and issue tiered alerts (watch/advisory/warning) to affected areas.',
    objective:
      'Forecast flood events with useful lead time on test scenarios and demonstrate the tiered alert pipeline.',
    expectedSolution:
      'Map dashboard: rainfall inputs, predicted water levels, risk zones, alert dispatch log.',
    technologies: ['Python', 'Time-series model', 'Map library', 'Public hydrology datasets'],
    deliverables: ['Working predictor demo', 'Alert tier logic', 'Scenario test results', 'Demo video'],
  },
  {
    id: 'HS44',
    title: 'Smart Energy Consumption Optimizer',
    category: 'Climate Tech & Sustainability',
    difficulty: 'Medium',
    tags: ['Energy', 'IoT', 'Optimization', 'Home'],
    shortDescription:
      'Cut home energy bills by scheduling appliances around solar generation and tariff windows.',
    description:
      'Home energy waste peaks at wrong times. Build an optimizer: ingest simulated smart-meter data + time-of-use tariff + solar forecast; schedule deferrable loads (EV, water heater, washing machine) into cheapest/greenest windows; show savings projections on a dashboard.',
    objective:
      'Demonstrate ≥15% simulated bill reduction vs. baseline scheduling while respecting user comfort constraints.',
    expectedSolution:
      'Dashboard: consumption chart, optimized schedule timeline, tariff overlay, savings report.',
    technologies: ['React', 'Optimization scheduler', 'Simulated meter data', 'Tariff model'],
    deliverables: ['Working optimizer demo', 'Savings calculation', 'Schedule UX', 'Demo video'],
  },
  {
    id: 'HS45',
    title: 'Carbon Footprint Calculator',
    category: 'Climate Tech & Sustainability',
    difficulty: 'Easy',
    tags: ['Carbon', 'Sustainability', 'Calculator', 'Behavior'],
    shortDescription:
      'Measure personal carbon footprints across transport, food and energy with actionable reduction tips.',
    description:
      'Awareness precedes action. Build a calculator covering transport, diet, home energy and shopping: input lifestyle data → footprint breakdown with benchmarks vs. national/global averages → personalized top-5 reduction actions with estimated impact.',
    objective:
      'Compute footprints within published methodology tolerances and deliver credible, personalized reduction recommendations.',
    expectedSolution:
      'Multi-step web app: questionnaire → footprint report → reduction plan with impact estimates.',
    technologies: ['React', 'Emission-factor database', 'Data visualization', 'JSON store'],
    deliverables: ['Working calculator demo', 'Emission factor dataset', 'Reduction planner', 'Demo video'],
  },
  {
    id: 'HS46',
    title: 'Solar Energy Performance Monitor',
    category: 'Climate Tech & Sustainability',
    difficulty: 'Medium',
    tags: ['Solar', 'IoT', 'Monitoring', 'Energy'],
    shortDescription:
      'Monitor rooftop solar performance, detect underperformance and forecast generation.',
    description:
      'Solar owners can\'t tell if panels underperform. Build a monitor on simulated inverter data: track generation vs. expected yield (irradiance model), detect faults (soiling, shading, inverter issues) via deviation analysis, and forecast next-day generation.',
    objective:
      'Detect injected faults in simulation with high accuracy and produce credible generation forecasts.',
    expectedSolution:
      'Dashboard: generation charts, performance ratio, fault alerts, weather-adjusted forecasts.',
    technologies: ['Python/React', 'Irradiance model', 'Anomaly detection', 'Simulated inverter feed'],
    deliverables: ['Working monitor demo', 'Fault detection logic', 'Forecast view', 'Demo video'],
  },
  {
    id: 'HS47',
    title: 'E-Waste Collection and Recycling Platform',
    category: 'Climate Tech & Sustainability',
    difficulty: 'Easy',
    tags: ['E-Waste', 'Circular', 'Logistics', 'Platform'],
    shortDescription:
      'Make e-waste disposal effortless: schedule pickups, track certified recyclers and reward responsible disposal.',
    description:
      'E-waste is the fastest-growing waste stream and mostly lands in landfills. Build a platform: users book doorstep pickups for electronics, system routes requests to certified recyclers, tracks items through the recycling chain, and issues impact rewards/points.',
    objective:
      'Complete flow working: booking → routing → tracking → completion certificate with impact stats.',
    expectedSolution:
      'Web/mobile app: item catalog → pickup booking → live tracking → completion report + rewards.',
    technologies: ['React', 'Mock logistics backend', 'Recycler directory data', 'Gamification'],
    deliverables: ['Working platform demo', 'Recycler directory', 'Tracking flow', 'Demo video'],
  },
  {
    id: 'HS48',
    title: 'Urban Heat Island Monitoring System',
    category: 'Climate Tech & Sustainability',
    difficulty: 'Medium',
    tags: ['Heat', 'Climate', 'IoT', 'Urban'],
    shortDescription:
      'Map and analyze urban heat islands using satellite/IoT temperature data to guide cooling interventions.',
    description:
      'Cities are 3–8°C hotter in built-up zones. Build a monitoring system ingesting public thermal/satellite data (e.g., Landsat LST via Google Earth Engine samples) or simulated sensor grids: visualize heat-island intensity, correlate with land cover, and recommend interventions (green cover, cool roofs) per zone.',
    objective:
      'Produce a heat-island map with zone-level severity and data-backed intervention recommendations.',
    expectedSolution:
      'Map dashboard: temperature layers, land-cover overlay, severity zones, intervention planner.',
    technologies: ['React + map lib', 'Satellite/open data', 'Geospatial analysis', 'Python backend (optional)'],
    deliverables: ['Working monitoring demo', 'Zone severity analysis', 'Intervention recommendations', 'Demo video'],
  },

  // ============================================================
  // 9. INDUSTRY 4.0 & PHYSICAL AI
  // ============================================================
  {
    id: 'HS49',
    title: 'AI-Based Predictive Maintenance',
    category: 'Industry 4.0 & Physical AI',
    difficulty: 'Hard',
    tags: ['Predictive', 'IoT', 'Manufacturing', 'ML'],
    shortDescription:
      'Predict machine failures before they happen using sensor telemetry and remaining-useful-life models.',
    description:
      'Unplanned downtime costs factories dearly. Build a predictive-maintenance prototype on public datasets (NASA turbofan, FEMTO bearing, or simulated CNC telemetry): train a model to forecast failures/RUL, trigger maintenance alerts with confidence, and estimate downtime cost avoided.',
    objective:
      'Predict failures with useful lead time on test data and demonstrate an alert → work-order workflow.',
    expectedSolution:
      'Factory dashboard: machine health scores, failure predictions, alert queue, maintenance history.',
    technologies: ['Python', 'Time-series ML', 'Public machinery datasets', 'React dashboard'],
    deliverables: ['Working predictor demo', 'Model evaluation', 'Alert workflow', 'Demo video'],
  },
  {
    id: 'HS50',
    title: 'Digital Twin for Smart Manufacturing',
    category: 'Industry 4.0 & Physical AI',
    difficulty: 'Hard',
    tags: ['Digital Twin', 'Simulation', 'Manufacturing', 'IoT'],
    shortDescription:
      'Create a live digital twin of a production line that mirrors real-time sensor data and simulates "what-if" scenarios.',
    description:
      'Digital twins let engineers test changes safely. Build a twin of a simulated production cell: live sensor feed updates a 3D/2D model, OEE metrics compute in real time, and a what-if simulator lets users change parameters (speed, downtime) to see impact before touching real equipment.',
    objective:
      'Demonstrate synchronized twin state, live OEE metrics, and a what-if simulation showing measurable output change.',
    expectedSolution:
      'Interactive twin UI: machine states, live metrics, parameter controls, what-if results comparison.',
    technologies: ['React + Three.js/2D canvas', 'Simulated PLC feed', 'OEE calculations', 'State management'],
    deliverables: ['Working twin demo', 'OEE dashboard', 'What-if simulator', 'Demo video'],
  },
  {
    id: 'HS51',
    title: 'AI-Based Quality Inspection',
    category: 'Industry 4.0 & Physical AI',
    difficulty: 'Medium',
    tags: ['CV', 'Quality', 'Manufacturing', 'Defect'],
    shortDescription:
      'Automatically detect surface defects in manufactured parts using computer vision on the line.',
    description:
      'Manual inspection is slow and inconsistent. Build a defect detector: image input (public datasets like KolektorSDD/MVTec or synthetic defect images) → segmentation/classification of defect types → pass/fail verdict with defect localization overlay and confidence.',
    objective:
      'Classify defect types with >85% accuracy and visualize defect regions on test images.',
    expectedSolution:
      'Inspection UI: image upload → defect overlay → verdict + confidence + defect type breakdown.',
    technologies: ['Python/CV', 'U-Net or CNN classifier', 'Public defect datasets', 'React frontend'],
    deliverables: ['Working inspector demo', 'Accuracy report', 'Defect localization', 'Demo video'],
  },
  {
    id: 'HS52',
    title: 'Smart Warehouse Inventory Management',
    category: 'Industry 4.0 & Physical AI',
    difficulty: 'Medium',
    tags: ['Inventory', 'IoT', 'Logistics', 'Forecasting'],
    shortDescription:
      'Track stock levels in real time, predict shortages and optimize reorder points automatically.',
    description:
      'Stockouts and overstocking both bleed money. Build an inventory system: simulated IoT weight/RFID sensors update stock levels, a demand-forecasting model sets reorder points, and the system auto-generates purchase suggestions with lead-time awareness.',
    objective:
      'Show live stock tracking, accurate demand forecasts, and reorder alerts that prevent simulated stockouts.',
    expectedSolution:
      'Warehouse dashboard: SKU grid, live levels, forecast charts, reorder queue, supplier suggestions.',
    technologies: ['React', 'Demand forecasting', 'Simulated sensor feed', 'Inventory model'],
    deliverables: ['Working inventory demo', 'Forecast model', 'Reorder logic', 'Demo video'],
  },
  {
    id: 'HS53',
    title: 'Autonomous Robot Navigation Simulator',
    category: 'Industry 4.0 & Physical AI',
    difficulty: 'Hard',
    tags: ['Robotics', 'Path Planning', 'Simulation', 'ROS'],
    shortDescription:
      'Simulate a warehouse robot navigating obstacles to targets using SLAM-lite and path-planning algorithms.',
    description:
      'Real robots are expensive to test. Build a 2D navigation simulator: robot with lidar-like sensor model, occupancy grid mapping, A*/RRT path planning, and dynamic obstacle avoidance. Visualize planned vs. executed paths with success metrics.',
    objective:
      'Robot reaches targets in ≥95% of randomized scenarios while avoiding collisions and replanning around dynamic obstacles.',
    expectedSolution:
      'Simulation UI: arena view, robot pose, sensor rays, planned path, path history, success/failure stats.',
    technologies: ['Python or JS', 'A*/RRT planning', 'Occupancy grid', 'Canvas/Three.js visualization'],
    deliverables: ['Working simulator demo', 'Path-planning metrics', 'Dynamic obstacle handling', 'Demo video'],
  },
  {
    id: 'HS54',
    title: 'Industrial Energy Optimization Platform',
    category: 'Industry 4.0 & Physical AI',
    difficulty: 'Medium',
    tags: ['Energy', 'IoT', 'Optimization', 'Industry'],
    shortDescription:
      'Analyze machine-level energy consumption, detect waste and recommend load-shifting strategies.',
    description:
      'Factories bleed energy through idle machines and poor scheduling. Build a platform ingesting simulated machine power telemetry: per-machine consumption analytics, idle-waste detection, peak-demand alerts, and a load-shifting scheduler showing cost savings.',
    objective:
      'Identify wasteful consumption patterns and produce a rescheduling plan with quantified savings.',
    expectedSolution:
      'Dashboard: machine energy profiles, waste alerts, peak-shaving schedule, savings report.',
    technologies: ['React', 'Time-series analytics', 'Optimization scheduler', 'Simulated telemetry'],
    deliverables: ['Working platform demo', 'Waste detection logic', 'Savings report', 'Demo video'],
  },

  // ============================================================
  // 10. OPEN INNOVATION & EMERGING TECHNOLOGY
  // ============================================================
  {
    id: 'HS55',
    title: 'AR-Based Interactive Campus Navigation',
    category: 'Open Innovation & Emerging Technology',
    difficulty: 'Medium',
    tags: ['AR', 'Navigation', 'Mobile', 'Campus'],
    shortDescription:
      'Navigate campus via AR overlays: directional arrows, POI info and indoor wayfinding on a phone camera.',
    description:
      'New students get lost constantly. Build an AR navigation prototype: phone camera view with virtual directional arrows/path overlay toward selected destinations (library, labs, hostels), POI cards on gaze/tap, and a fallback 2D map. Use WebAR (8th Wall/AR.js-style) or simulated AR if device access is limited.',
    objective:
      'Guide a user from point A to B with visible AR path overlay and working POI interactions.',
    expectedSolution:
      'Mobile web app: camera view, AR path overlay, destination selector, POI info cards.',
    technologies: ['React + WebAR/AR.js', 'GPS + compass fusion', 'POI dataset', 'Fallback 2D map'],
    deliverables: ['Working AR demo', 'Campus POI dataset', 'Fallback map', 'Demo video'],
  },
  {
    id: 'HS56',
    title: 'AI-Based Sign Language Learning Assistant',
    category: 'Open Innovation & Emerging Technology',
    difficulty: 'Hard',
    tags: ['Sign Language', 'CV', 'Accessibility', 'Education'],
    shortDescription:
      'Teach sign language through real-time hand-gesture recognition with feedback and practice games.',
    description:
      'Sign language learning lacks accessible tools. Build an assistant using webcam hand tracking (MediaPipe): recognize a curated gesture set (e.g., ISL alphabet), give real-time accuracy feedback, guide learners through progressive lessons, and run practice quizzes.',
    objective:
      'Recognize ≥26 gestures with >80% accuracy and deliver a structured lesson + quiz flow.',
    expectedSolution:
      'Web app: camera view → live gesture recognition → accuracy feedback → lessons/quizzes → progress.',
    technologies: ['MediaPipe Hands', 'Gesture classifier', 'React frontend', 'Lesson content'],
    deliverables: ['Working recognition demo', 'Lesson module', 'Quiz mode', 'Demo video'],
  },
  {
    id: 'HS57',
    title: 'Assistive Navigation for Visually Impaired People',
    category: 'Open Innovation & Emerging Technology',
    difficulty: 'Hard',
    tags: ['Accessibility', 'CV', 'Audio', 'Navigation'],
    shortDescription:
      'Help visually impaired users navigate by describing surroundings and obstacles through audio.',
    description:
      'Independence requires environmental awareness. Build a navigation aid: camera input → object/obstacle detection (public datasets or pretrained models) → spatial audio or speech descriptions ("chair 2 meters ahead, person on your left"), plus voice-command destination setting.',
    objective:
      'Provide timely, accurate spoken scene descriptions and obstacle warnings in a guided indoor test course.',
    expectedSolution:
      'Mobile/web app: camera → detection → spatialized audio cues + voice commands + progress feedback.',
    technologies: ['MediaPipe/YOLO', 'Web Speech API (TTS/STT)', 'Spatial audio', 'React'],
    deliverables: ['Working assistive demo', 'Obstacle detection accuracy', 'Audio UX', 'Demo video'],
  },
  {
    id: 'HS58',
    title: 'Satellite Image-Based Land Change Detection',
    category: 'Open Innovation & Emerging Technology',
    difficulty: 'Medium',
    tags: ['Remote Sensing', 'CV', 'Climate', 'Satellite'],
    shortDescription:
      'Detect urban expansion, deforestation and land-use changes by comparing satellite imagery over time.',
    description:
      'Land change drives climate and disaster risk. Build a change-detection tool: ingest multi-temporal satellite images (Sentinel-2 via public sources or sample chips), compute difference/change masks, classify change type (urban, vegetation loss, water), and visualize before/after.',
    objective:
      'Identify change regions in test image pairs with IoU-based accuracy and classify change categories.',
    expectedSolution:
      'Web viewer: side-by-side imagery, change heatmap, classified change polygons, statistics panel.',
    technologies: ['Python (rasterio/GDAL)', 'Change detection algorithm', 'Sentinel-2 samples', 'React + map'],
    deliverables: ['Working detection demo', 'Change statistics', 'Visualization UI', 'Demo video'],
  },
  {
    id: 'HS59',
    title: 'Post-Quantum Cryptography Demonstrator',
    category: 'Open Innovation & Emerging Technology',
    difficulty: 'Hard',
    tags: ['PQC', 'Cryptography', 'Security', 'Future'],
    shortDescription:
      'Demonstrate quantum-resistant encryption (Kyber/Dilithium) protecting data against future quantum attacks.',
    description:
      'Quantum computers threaten RSA/ECC. Build an educational demonstrator: encrypt/decrypt messages using post-quantum algorithms (liboqs, or simulated hybrid RSA+Kyber), show key sizes/signature sizes vs. classical, and run a "harvest-now-decrypt-later" attack simulation.',
    objective:
      'Working encrypt/decrypt + sign/verify flows with PQC algorithms, plus comparative security/performance metrics.',
    expectedSolution:
      'Web demo: message encryption playground, key/ciphertext visualization, attack-scenario simulator.',
    technologies: ['Python (liboqs/pqcrypto)', 'Node.js crypto', 'Web Crypto (classical)', 'React UI'],
    deliverables: ['Working crypto demo', 'Comparison metrics', 'Attack simulation', 'Demo video'],
  },
  {
    id: 'HS60',
    title: 'AI-Powered Disaster Resource Allocation',
    category: 'Open Innovation & Emerging Technology',
    difficulty: 'Hard',
    tags: ['Disaster', 'Optimization', 'AI', 'Logistics'],
    shortDescription:
      'Allocate rescue teams, medical supplies and shelters to maximize coverage during disaster scenarios.',
    description:
      'Disasters overwhelm manual allocation. Build an allocation optimizer: given affected zones, resource inventory (teams, supplies, vehicles), and demand estimates, compute assignments maximizing coverage/survival impact while respecting capacity and travel-time constraints. Use simulated disaster scenarios.',
    objective:
      'Produce allocations that outperform greedy baselines on coverage metrics across 3+ disaster scenarios.',
    expectedSolution:
      'Dashboard: scenario map, resource inventory, optimized allocation plan, coverage/impact metrics.',
    technologies: ['Python', 'Optimization (OR-tools/LP)', 'LLM for demand estimation', 'React + map'],
    deliverables: ['Working allocator demo', 'Scenario comparison', 'Impact metrics', 'Demo video'],
  },

  // ============================================================
  // 11. SATELLITE, GIS & GEOSPATIAL INTELLIGENCE (FLAGSHIP)
  // ============================================================
  {
    id: 'HS61',
    title: 'AI-Powered Satellite-Based Smart Waste Detection & Mapping System',
    category: 'Satellite, GIS & Geospatial Intelligence',
    difficulty: 'Advanced',
    flagship: true,
    tags: ['AI/ML', 'YOLO', 'Computer Vision', 'Satellite Imagery', 'GIS', 'Python', 'React.js', 'Leaflet', 'OpenStreetMap'],
    shortDescription:
      'Detect garbage accumulation zones from satellite imagery and recommend optimal locations for new public dustbins on an interactive GIS map.',
    description:
      'Cities generate large quantities of solid waste every day, yet municipal authorities struggle to identify open dumping sites, waste accumulation zones and areas where public dustbins are insufficient. Build an intelligent waste detection and mapping platform that uses satellite imagery, geospatial data and AI to identify potential garbage accumulation zones across urban areas — analyzing available satellite images, visualizing existing waste collection points, identifying underserved areas and recommending suitable locations for new public dustbins. 24-hour constraint: teams may use public satellite imagery, preprocessed sample images, open-source geographical datasets, pre-trained AI models, simulated dustbin location data and sample population density data. Important: satellite imagery may not have sufficient resolution to identify individual small dustbins — focus on detecting larger dumping zones and recommending dustbin locations, and do not claim simulated detections are verified real-world findings.',
    objective:
      'Analyze satellite imagery to identify potential waste accumulation zones; detect suspected open garbage dumping locations; display existing dustbin locations on an interactive city map; recommend suitable new dustbin locations using geographical information, population density and road accessibility; monitor changes in waste hotspots using images from different dates; and provide an interactive dashboard for municipal authorities.',
    expectedSolution:
      'A web-based application with five modules: (1) Satellite Image Analyzer — upload or select satellite images for waste analysis; (2) Garbage Hotspot Detection — display suspected dumping areas using colored markers and heatmaps; (3) Smart Dustbin Locator — show existing public dustbins and waste collection points on a city map; (4) AI-Based Dustbin Placement Recommendation — suggest new dustbin locations based on underserved areas, population density and accessibility; (5) Municipal Monitoring Dashboard — display total detected hotspots, existing dustbins, recommended locations and waste monitoring statistics.',
    technologies: ['Python', 'YOLO', 'Computer Vision', 'Google Earth Engine', 'Sentinel-2 Satellite Imagery', 'OpenStreetMap', 'GIS', 'React.js', 'Leaflet', 'FastAPI'],
    deliverables: ['Functional web application', 'Satellite image upload or selection', 'Garbage hotspot visualization', 'Interactive GIS map', 'Existing dustbin location mapping', 'AI-based dustbin placement recommendations', 'Monitoring dashboard', 'Project demonstration'],
  },
];

// Merge PDF links into statements
const merged = problemStatements.map((p) => ({
  ...p,
  pdfUrl: PDF_LINKS[p.id] || '',
}));

export default merged;
