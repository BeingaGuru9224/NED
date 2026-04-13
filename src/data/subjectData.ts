import { LucideIcon } from "lucide-react";

export const primarySubjects = {
  english: {
    subject: "English",
    iconName: "BookOpen",
    description: "Build strong reading, writing, and communication skills from an early age",
    topics: [
      { title: "Reading Comprehension", desc: "Understanding texts, inference, and analysis" },
      { title: "Creative Writing", desc: "Story writing, descriptive language, and imagination" },
      { title: "Grammar & Punctuation", desc: "Sentence structure, parts of speech, and punctuation rules" },
      { title: "Spelling & Phonics", desc: "Word patterns, phonetic sounds, and spelling strategies" },
      { title: "Speaking & Listening", desc: "Presentation skills, discussions, and verbal communication" },
      { title: "Poetry & Literature", desc: "Exploring poems, stories, and classic literature" },
    ],
  },
  maths: {
    subject: "Maths",
    iconName: "Calculator",
    description: "Master number skills, problem-solving, and mathematical reasoning",
    topics: [
      { title: "Number & Place Value", desc: "Understanding numbers, counting, and place value" },
      { title: "Addition & Subtraction", desc: "Mental and written calculation methods" },
      { title: "Multiplication & Division", desc: "Times tables, division facts, and problem-solving" },
      { title: "Fractions & Decimals", desc: "Understanding and working with fractions and decimals" },
      { title: "Measurement", desc: "Length, weight, volume, time, and money" },
      { title: "Geometry & Shapes", desc: "2D and 3D shapes, angles, and spatial reasoning" },
    ],
  },
  science: {
    subject: "Science",
    iconName: "Beaker",
    description: "Explore the natural world through hands-on experiments and investigations",
    topics: [
      { title: "Living Things", desc: "Plants, animals, habitats, and life cycles" },
      { title: "Materials", desc: "Properties of materials and their uses" },
      { title: "Forces & Motion", desc: "Pushes, pulls, friction, and magnets" },
      { title: "Light & Sound", desc: "How light travels and sound is produced" },
      { title: "Earth & Space", desc: "The solar system, seasons, and day/night" },
      { title: "Working Scientifically", desc: "Experiments, observations, and recording results" },
    ],
  },
  designTechnology: {
    subject: "Design & Technology",
    iconName: "Wrench",
    description: "Develop creativity, problem-solving, and practical skills",
    topics: [
      { title: "Design Process", desc: "Planning, designing, and evaluating products" },
      { title: "Materials & Tools", desc: "Working safely with different materials and tools" },
      { title: "Structures", desc: "Building strong and stable structures" },
      { title: "Mechanisms", desc: "Levers, pulleys, gears, and moving parts" },
      { title: "Textiles", desc: "Sewing, joining fabrics, and creating products" },
      { title: "Food Technology", desc: "Cooking, nutrition, and healthy eating" },
    ],
  },
  history: {
    subject: "History",
    iconName: "Clock",
    description: "Discover the past and understand how it shapes our present",
    topics: [
      { title: "Stone Age to Iron Age", desc: "Early humans and prehistoric Britain" },
      { title: "Romans in Britain", desc: "Roman invasion, life, and legacy" },
      { title: "Anglo-Saxons & Vikings", desc: "Invasions, settlements, and culture" },
      { title: "Medieval Britain", desc: "Castles, knights, and the feudal system" },
      { title: "Tudors & Stuarts", desc: "Henry VIII, Elizabeth I, and the English Civil War" },
      { title: "Victorian Era", desc: "Industrial Revolution and Victorian life" },
    ],
  },
  geography: {
    subject: "Geography",
    iconName: "Globe",
    description: "Explore the world, its people, places, and environments",
    topics: [
      { title: "Locational Knowledge", desc: "Countries, continents, oceans, and capitals" },
      { title: "Place Knowledge", desc: "Comparing different regions and countries" },
      { title: "Human Geography", desc: "Population, settlements, and land use" },
      { title: "Physical Geography", desc: "Mountains, rivers, climate, and weather" },
      { title: "Map Skills", desc: "Reading maps, compass directions, and grid references" },
      { title: "Fieldwork", desc: "Observations, measurements, and recording data" },
    ],
  },
};

export const secondarySubjects = {
  english: {
    subject: "English",
    iconName: "BookOpen",
    description: "Develop advanced literacy, critical analysis, and communication skills",
    topics: [
      { title: "Literature Analysis", desc: "Shakespeare, poetry, and modern texts" },
      { title: "Language Techniques", desc: "Metaphor, simile, and persuasive devices" },
      { title: "Essay Writing", desc: "Structured arguments and analytical writing" },
      { title: "Reading Comprehension", desc: "Inference, interpretation, and evaluation" },
      { title: "Creative Writing", desc: "Narrative, descriptive, and imaginative writing" },
      { title: "Speaking & Presenting", desc: "Presentations, debates, and spoken language" },
    ],
  },
  maths: {
    subject: "Maths",
    iconName: "Calculator",
    description: "Master advanced mathematical concepts and problem-solving techniques",
    topics: [
      { title: "Algebra", desc: "Equations, expressions, and algebraic manipulation" },
      { title: "Geometry", desc: "Angles, shapes, theorems, and proofs" },
      { title: "Statistics", desc: "Data handling, averages, and probability" },
      { title: "Number", desc: "Fractions, decimals, percentages, and ratios" },
      { title: "Trigonometry", desc: "Sin, cos, tan, and right-angled triangles" },
      { title: "Graphs & Functions", desc: "Linear, quadratic, and other functions" },
    ],
  },
  biology: {
    subject: "Biology",
    iconName: "Beaker",
    description: "Explore living organisms, cells, and life processes",
    topics: [
      { title: "Cell Biology", desc: "Cell structure, division, and specialization" },
      { title: "Human Biology", desc: "Organ systems, digestion, and circulation" },
      { title: "Genetics", desc: "DNA, inheritance, and variation" },
      { title: "Evolution", desc: "Natural selection and adaptation" },
      { title: "Ecology", desc: "Ecosystems, food chains, and environmental impact" },
      { title: "Disease & Health", desc: "Pathogens, immunity, and medicine" },
    ],
  },
  physics: {
    subject: "Physics",
    iconName: "Beaker",
    description: "Understand forces, energy, and the physical world",
    topics: [
      { title: "Forces & Motion", desc: "Newton's laws, speed, and acceleration" },
      { title: "Energy", desc: "Energy transfers, conservation, and efficiency" },
      { title: "Electricity", desc: "Circuits, current, voltage, and resistance" },
      { title: "Waves", desc: "Sound, light, and electromagnetic spectrum" },
      { title: "Magnetism", desc: "Magnetic fields and electromagnetism" },
      { title: "Atomic Structure", desc: "Atoms, radioactivity, and nuclear physics" },
    ],
  },
  chemistry: {
    subject: "Chemistry",
    iconName: "Beaker",
    description: "Discover the composition, properties, and reactions of matter",
    topics: [
      { title: "Atomic Structure", desc: "Atoms, elements, and the periodic table" },
      { title: "Chemical Bonding", desc: "Ionic, covalent, and metallic bonds" },
      { title: "Chemical Reactions", desc: "Equations, rates, and energy changes" },
      { title: "Acids & Bases", desc: "pH, neutralization, and salts" },
      { title: "Organic Chemistry", desc: "Hydrocarbons, polymers, and crude oil" },
      { title: "Earth Chemistry", desc: "Atmosphere, rocks, and resources" },
    ],
  },
};

export const primaryPricing = {
  group: {
    payAsYouGo: "£14/hr",
    weekly: "£39",
    monthly: "£150",
  },
  oneOnOne: {
    payAsYouGo: "£28/hr",
    weekly: "£78",
    monthly: "£150",
  },
};

export const secondaryPricing = {
  group: {
    payAsYouGo: "£20/hr",
    weekly: "£55",
    monthly: "£210",
  },
  oneOnOne: {
    payAsYouGo: "£40/hr",
    weekly: "£110",
    monthly: "£420",
  },
};
