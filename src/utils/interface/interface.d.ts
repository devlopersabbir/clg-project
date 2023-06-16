export interface IModalView {
  heading?: string;
  isOpen?: boolean;
  onClose?: () => void;
  role?: number;
  tech?: string;
  collageName?: string;
  data?: any;
}

export interface CModelView {
  heading?: string;
  isOpen?: boolean;
  onClose?: () => void;
  gread?: any; 
  point?: any
}

export interface GDiplomaResults {

    result: string

}
export interface IDiplomaResults {
  _id: string;
  technology: string;
  results: {
    passed: string;
    rollP: string;
    gpa: string;
    GPA: null;
    CGPA: null;
    CGPAp: null;
    failed: null;
    rollF: null;
    subjects: null;
  };
  semester: string;
  regulation: null;
  Date: string;
  roll: string;
  institute: string;
}


interface Notices {
  id: string;
  title: string;
  date: string;
  link: string;
}

interface Data {
  data: Notices[];
}