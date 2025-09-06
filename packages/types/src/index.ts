export type UUID = string & { readonly brand: unique symbol };

export interface User {
  id: UUID;
  email: string;
  name: string | null;
  organizationId: UUID | null;
  role: "ADMIN" | "MANAGER" | "RECRUITER" | "VIEWER";
}

export interface Organization {
  id: UUID;
  name: string;
  domain: string | null;
}

export interface Candidate {
  id: UUID;
  fullName: string;
  email: string | null;
  phone: string | null;
  headline: string | null;
  location: string | null;
  source: "LINKEDIN" | "REFERRAL" | "JOB_BOARD" | "OTHER";
  status: "NEW" | "CONTACTED" | "QUALIFIED" | "INTERVIEWING" | "OFFER" | "HIRED" | "REJECTED";
}

export interface Job {
  id: UUID;
  title: string;
  department: string | null;
  description: string;
  seniority: "INTERN" | "JUNIOR" | "MID" | "SENIOR" | "STAFF" | "LEAD" | "DIRECTOR" | "VP" | "CLEVEL";
}

export interface OutreachMessage {
  id: UUID;
  candidateId: UUID;
  channel: "LINKEDIN" | "EMAIL" | "SMS" | "CALL";
  direction: "OUTBOUND" | "INBOUND";
  body: string;
  timestamp: string; // ISO
}

export interface SearchCriteria {
  keywords?: string[];
  locations?: string[];
  seniority?: string[];
}

export interface ScoredCandidate {
  candidateId: UUID;
  score: number;
  explanation?: string;
}

export interface MessageTemplate {
  id: UUID;
  name: string;
  body: string;
}

export interface OutreachResult {
  success: boolean;
  messageId?: UUID;
  error?: string;
}

