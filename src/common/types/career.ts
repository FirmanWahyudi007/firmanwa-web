export interface CareerItemProps {
  company: string;
  position: string;
  type?: string;
  logo: string;
  startDate: string;
  endDate: string | 'Present';
  responsibilities: string[];
  link: string;
}
