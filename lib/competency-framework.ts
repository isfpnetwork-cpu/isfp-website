export const frameworkDimensions = [
  { id: "knowledge", name: "Knowledge" },
  { id: "skills", name: "Skills" },
  { id: "professionalBehaviours", name: "Professional Behaviours" },
  { id: "impactOrientation", name: "Impact Orientation" }
] as const;

type FrameworkDomain = {
  id: string;
  name: string;
  description: string;
  dimensions: Record<(typeof frameworkDimensions)[number]["id"], string>;
};

export const frameworkDomains = [
  {
    id: "foundations",
    name: "Foundations of Sustainable Finance",
    description: "Core concepts, sustainability science, policy and financial systems.",
    dimensions: {
      knowledge: "Understands the core concepts, objectives and financial system context of sustainable finance.",
      skills: "Identifies sustainability considerations relevant to financial activities and explains their significance.",
      professionalBehaviours: "Questions sustainability claims, recognises limitations in personal expertise and seeks reliable evidence.",
      impactOrientation: "Considers how finance can contribute to environmental and social outcomes."
    }
  },
  {
    id: "governance-ethics",
    name: "Governance, Ethics & Professional Conduct",
    description: "Responsible decision-making, accountability and professional integrity.",
    dimensions: {
      knowledge: "Understands governance responsibilities, ethical principles and standards relevant to sustainable finance.",
      skills: "Identifies ethical dilemmas, assesses conflicts of interest and applies appropriate governance processes.",
      professionalBehaviours: "Acts with integrity, challenges misleading practices and takes responsibility for professional decisions.",
      impactOrientation: "Considers how governance and professional conduct influence sustainability outcomes and stakeholder interests."
    }
  },
  {
    id: "integration-risk",
    name: "Integration & Risk Management",
    description: "Incorporating sustainability considerations into financial decisions and risk processes.",
    dimensions: {
      knowledge: "Understands how sustainability factors affect financial risks, opportunities and decision-making.",
      skills: "Applies sustainability analysis to risk assessments, investment decisions and financial processes.",
      professionalBehaviours: "Challenges assumptions, communicates uncertainty and takes responsibility for risk judgements.",
      impactOrientation: "Considers how financial decisions affect people and the environment alongside their financial implications."
    }
  },
  {
    id: "impact-reporting",
    name: "Impact Measurement & Reporting",
    description: "Understanding sustainability outcomes, measurement and disclosure.",
    dimensions: {
      knowledge: "Understands sustainability indicators, measurement approaches and reporting frameworks, including their limitations.",
      skills: "Selects relevant indicators, evaluates data and communicates sustainability performance and outcomes.",
      professionalBehaviours: "Reports transparently, acknowledges data limitations and avoids overstating results.",
      impactOrientation: "Uses evidence to assess outcomes and inform improvements in sustainability performance."
    }
  },
  {
    id: "capital-mobilisation",
    name: "Capital Mobilisation",
    description: "Financing approaches and instruments that support sustainability objectives.",
    dimensions: {
      knowledge: "Understands financing instruments, structures and sources of capital that support sustainability objectives.",
      skills: "Assesses financing needs and helps structure solutions that connect capital with suitable projects.",
      professionalBehaviours: "Communicates financing claims transparently and exercises judgement over competing stakeholder interests.",
      impactOrientation: "Considers whether financing contributes to credible, measurable sustainability outcomes."
    }
  },
  {
    id: "leadership-engagement",
    name: "Leadership & Stakeholder Engagement",
    description: "Collaboration, communication and organisational change.",
    dimensions: {
      knowledge: "Understands approaches to organisational change, stakeholder engagement and leadership in sustainable finance.",
      skills: "Builds collaboration, communicates sustainability priorities and supports their implementation.",
      professionalBehaviours: "Listens to different perspectives, challenges constructively and follows through on commitments.",
      impactOrientation: "Aligns engagement and leadership activities with meaningful sustainability outcomes."
    }
  }
] satisfies FrameworkDomain[];
