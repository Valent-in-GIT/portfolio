import type { Conference } from "@/types";

/**
 * ─────────────────────────────────────────────────────────────────
 *  HOW TO UPDATE
 *  - Add or edit entries below.
 *  - status values: "cfp-open" | "upcoming" | "past" | "tba"
 *  - deadlines: array of { label, date } objects (ISO YYYY-MM-DD)
 *  - conferenceDate: { start, end, location, city, country }
 * ─────────────────────────────────────────────────────────────────
 */
export const conferences: Conference[] = [
  {
    id: "acl-2027",
    shortName: "ACL 2027",
    fullName: "Annual Meeting of the Association for Computational Linguistics",
    acronym: "ACL",
    url: "https://www.aclweb.org/",
    frequency: "annual",
    status: "tba",
    topics: ["NLP", "Computational Linguistics", "Language Models", "BCI", "Neural Decoding"],
    notes: "ACL 2026 took place July 2–7 in San Diego, CA. ACL 2027 dates and venue not yet announced. Submissions go through ARR (ACL Rolling Review).",
  },
  {
    id: "bci-meeting-2027",
    shortName: "12th Int'l BCI Meeting",
    fullName: "12th International BCI Meeting",
    acronym: "BCI Meeting",
    url: "https://bcisociety.org/bci-meeting/",
    conferenceDate: {
      start: "2027-06-07",
      end: "2027-06-10",
      location: "Convention Centre Šibenik",
      city: "Šibenik",
      country: "Croatia",
    },
    deadlines: [
      { label: "Concurrent session proposals", date: "2026-10-30" },
      { label: "Abstract submission", date: "2027-01-15" },
    ],
    frequency: "biennial",
    status: "cfp-open",
    topics: ["Brain-Computer Interfaces", "Neural Engineering", "Neuroprosthetics", "Signal Processing"],
    notes: "Premier global BCI gathering. Abstract deadline TBC — estimated January 2027 based on previous editions.",
  },
  {
    id: "graz-bci-2026",
    shortName: "Graz BCI 2026",
    fullName: "10th Graz Brain-Computer Interface Conference",
    acronym: "GBCIC",
    url: "https://www.tugraz.at/institute/ine/graz-bci-conferences/10th-graz-bci-conference-2026",
    conferenceDate: {
      start: "2026-09-14",
      end: "2026-09-17",
      location: "Technische Universität Graz",
      city: "Graz",
      country: "Austria",
    },
    frequency: "biennial",
    status: "past",
    topics: ["Brain-Computer Interfaces", "Motor Imagery", "EEG", "Rehabilitation"],
    notes: "Affiliated with the BCI Society. Next edition expected 2028.",
  },
  {
    id: "ner-2027",
    shortName: "IEEE NER 2027",
    fullName: "13th International IEEE EMBS Conference on Neural Engineering",
    acronym: "NER",
    url: "https://neuro.embs.org/2027/",
    conferenceDate: {
      start: "2027-09-07",
      end: "2027-09-10",
      location: "Milan, Italy",
      city: "Milan",
      country: "Italy",
    },
    frequency: "biennial",
    status: "upcoming",
    topics: ["Neural Engineering", "BCI", "Neuroprosthetics", "Computational Neuroscience", "Neural Interfaces"],
    notes: "IEEE EMBS flagship conference on neural engineering. Paper submission deadlines not yet published.",
  },
  {
    id: "embc-2027",
    shortName: "IEEE EMBC 2027",
    fullName: "49th Annual International Conference of the IEEE Engineering in Medicine and Biology Society",
    acronym: "EMBC",
    url: "https://embc.embs.org/2027/",
    conferenceDate: {
      start: "2027-07-11",
      end: "2027-07-15",
      location: "Suntec Singapore Convention & Exhibition Centre",
      city: "Singapore",
      country: "Singapore",
    },
    frequency: "annual",
    status: "upcoming",
    topics: ["Biomedical Engineering", "Neural & Rehabilitation Engineering", "Biomedical Signal Processing", "BCI", "Wearable Sensors"],
    notes: "IEEE EMBS flagship annual conference. Paper submission deadlines not yet published.",
  },
  {
    id: "winter-bci",
    shortName: "IEEE Winter BCI",
    fullName: "IEEE International Winter Conference on Brain-Computer Interface",
    acronym: "BCI",
    url: "https://www.bci-conf.org/",
    frequency: "annual",
    status: "tba",
    topics: ["Brain-Computer Interfaces", "EEG", "Motor Imagery", "Deep Learning", "Rehabilitation"],
    notes: "Annual winter conference held in South Korea, typically in February. Next edition dates not yet announced.",
  },
];
