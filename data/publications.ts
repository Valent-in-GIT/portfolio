import type { Publication } from "@/types";

/**
 * ─────────────────────────────────────────────────────────────────
 *  HOW TO UPDATE
 *  1. Copy a block and fill in your paper's details.
 *  2. Set `venueType` to: "journal" | "conference" | "workshop" | "preprint" | "thesis"
 *  3. Add a DOI or URL so readers can reach the paper.
 *  4. Save the file — the site reloads automatically in dev mode.
 *
 *  Google Scholar: https://scholar.google.com/citations?user=nNHPDbEAAAAJ&hl=en
 * ─────────────────────────────────────────────────────────────────
 */
export const publications: Publication[] = [
  {
    id: "pub-004",
    title:
      "A Comparative Study of EEG Representations and Channel Settings for EEG-to-Text Decoding during Reading Tasks",
    authors: [
      "Pérez Hernández, Eduardo V.",
      "Torres-García, Alejandro A.",
      "Villaseñor-Pineda, Luis",
    ],
    year: 2026,
    venue: "10th Graz Brain-Computer Interface Conference 2026",
    venueType: "conference",
    abstract:
      "Decoding natural language from electroencephalography (EEG) signals remains a major challenge in brain–computer interface research for assistive communication. This work presents a comparative study of EEG representations and channel configurations for EEG-to-text decoding during reading tasks. We evaluate Hilbert–Huang Transform (HHT) features, power spectral density (PSD), and temporal statistical descriptors across three spatial configurations: full-head EEG, a reduced 10–20 system, and a Broca–Wernicke subset. Experiments are conducted on the ZuCo v1 and v2 datasets using fully autoregressive decoding without teacher forcing. Results show that temporal statistical features achieve the best overlap-based performance under the full-head configuration (BLEU-1 = 11.45, ROUGE-1 F1 = 11.52), while reduced channel subsets remain competitive despite lower spatial dimensionality.",
    accepted: true,
    tags: ["EEG-to-Text", "BCI", "Language Decoding", "Deep Learning"],
  },
  {
    id: "pub-003",
    title:
      "Evaluation of spatial and frequency features for improving the classification of motor imagery",
    authors: [
      "Pérez Hernández, Eduardo V.",
      "Aviña-Corral, Margarita",
      "Torres-García, Alejandro A.",
      "Carrasco-Ochoa, J. A.",
      "Martínez-Trinidad, José Fco.",
    ],
    year: 2025,
    venue: "11th International Brain-Computer Interface Meeting 2025",
    venueType: "conference",
    abstract:
      "The present proposal focused on characterizing EEG signals from the sub-bands associated with motor imagery, by extracting features to subsequently generate a feature vector, the dimensionality of which was reduced using the Relief-F algorithm. Evaluations were carried out using frequency-based features through Discrete Wavelet Transform (DWT) and spatial features using Common Spatial Pattern (CSP). The IVa dataset from the III BCI Competition was used, including 118-channel EEG recordings from 5 subjects. Results show that the EEGNET+DWT model outperforms others, achieving an average accuracy of 71.13%.",
    doi: "10.3217/978-3-99161-050-2",
    url: "https://doi.org/10.3217/978-3-99161-050-2",
    tags: ["Motor Imagery", "EEG", "BCI", "DWT", "CSP"],
  },
  {
    id: "pub-001",
    title:
      "Intersubject Variability in Classification Models for Brain-Computer Interfaces",
    authors: [
      "Pérez Hernández, Eduardo V.",
      "Aviña-Corral, Margarita",
      "Gárate-Cahuantzi, Zaida Adriana",
      "Carrasco-Ochoa, J. A.",
      "Martínez-Trinidad, José Fco.",
      "Torres-García, Alejandro A.",
    ],
    year: 2025,
    venue: "Research in Computing Science, Vol. 154(10), pp. 143–154",
    venueType: "journal",
    abstract:
      "Intersubject variability in electroencephalography (EEG) signals presents a significant challenge in developing motor imagery-based brain-computer interface (BCI) systems. This study investigates the impact of different training strategies using Dataset IVa from the BCI Competition III. Building upon recent successful methodologies, we employ a feature extraction pipeline based on Common Spatial Patterns (CSP) across multiple frequency sub-bands, followed by classification using Linear Discriminant Analysis (LDA) and Support Vector Machines (SVM). We evaluate four training schemes: subject-specific models, a multisubject model, models trained on high-performing subjects, and models trained on low-performing subjects. The subject-specific model achieved the highest accuracy (90.71%), while the multisubject model yielded a competitive 88.14% without requiring individual calibration.",
    tags: ["Intersubject Variability", "EEG", "BCI", "Motor Imagery", "CSP"],
  },
  {
    id: "pub-002",
    title:
      "Estudio fuera de línea de una Interfaz Cerebro Computadora para el control de un robot móvil holonómico",
    authors: [
      "Pérez Hernández, Eduardo V.",
      "Morin Castillo, María Monserrat",
      "Conde Sánchez, José Rubén",
    ],
    year: 2024,
    venue: "ACONTACS, Vol. 6, pp. 18–25",
    venueType: "journal",
    abstract:
      "This work presents a classification methodology based on the EEGNet convolutional neural network model, validated offline. Using electroencephalogram (EEG) data from the four-class Motor Imagery paradigm of the BCI Competition 2008 2A, the EEG signals are used to generate commands that control a three-wheeled holonomic mobile robot. The growing interest in BCIs has generated a wide range of contributions aimed at improving human-machine communication through neural signals.",
    tags: ["BCI", "Mobile Robot", "EEGNet", "Motor Imagery", "Offline Validation"],
  },
];

export const SCHOLAR_PROFILE =
  "https://scholar.google.com/citations?hl=en&view_op=list_works&authuser=1&gmla=ACrTK9UvNiskhdd26VlKmYBqyM2WhnaauMnL5Q0PK3rYQR2Eq6hXUcvwrR8-h3zysyrLPHwgyeSEKbphr835QQ&user=nNHPDbEAAAAJ";
