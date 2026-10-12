/**
 * Beliefs use Kevin's October 7, 2026 revision; priorities use his October 6 version.
 * Wording, heading structure, and order preserved; repeated whitespace normalized.
 * Candidate details approved September 25; replacement logo supplied by Michala October 8.
 * His ballot-name spelling, domain ownership, and footer wording remain pending.
 */
export const site = {
  title: 'Hawkins for Schools',
  description: 'Kevin Hawkins, candidate for South Bend Community School Corporation School Board Member representing District 1. Read his beliefs and priorities.',
  candidateName: 'Kevin Hawkins',
  role: 'Candidate for School Board Member',
  district: 'South Bend Community School Corporation',
  seat: 'District 1',
  video: {
    id: '0cZHzmhVvik',
    title: 'One-on-One with South Bend School Board District 1 Candidate Kevin Jerome Hawkins',
    publisher: 'WSBT-TV',
  },
  feedback: {
    label: 'Thoughts / Comments / Suggestions',
    email: 'dayspring89005@gmail.com',
  },
  beliefsHeading: 'What I believe',
  prioritiesHeading: 'Priorities',
  beliefs: [
    {
      title: 'Student-centered decisions-Budgeting with purpose',
      body: 'The school board must make policy and budgeting choices that directly support student growth and development: mastering literacy skills, reading comprehension, and social-emotional learning that builds individual agency and community. Barriers like food insecurity, teacher continuity and transportation concerns must also be addressed to provide a positive student experience.',
    },
    {
      title: 'Restoring trust through real coordination',
      body: 'We must work together to strengthen cooperation across the entire district ecosystem: students, families, teachers, school leaders & support staff, district administration, the board and the community. We must have clarity on our roles and our accountability, as well as consistent and thorough communication throughout. This will foster a more stable learning environment in which students can feel safe and secure.',
    },
    {
      title: 'Building the essentials that make achievement possible',
      body: 'We must have sensible, consistent student and staff assignment processes. We need stronger parent involvement. We must recruit, retain and support qualified licensed teachers. We need to share and communicate our positive accomplishments to show the value of public education to our South Bend community.',
    },
  ],
  priorities: [
    'Student literacy & reading comprehension',
    'Social/emotional learning & student agency',
    'Support students experiencing food insecurity',
    'Reasonable & stable school assignments for all',
    'Consistent & reliable student transportation',
    'Recruitment & retention of qualified teachers',
    'Promote consistent parent & family involvement',
    'Illustrate the value of public education to the community',
  ],
} as const;
