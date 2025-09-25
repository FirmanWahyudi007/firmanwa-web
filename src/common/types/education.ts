export interface EducationItemProps {
  institution: string;
  major: string;
  degree: string;
  logo: string;
  startYear: number;
  endYear: number | 'Present';
  link: string;
}
