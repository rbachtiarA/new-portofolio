export type Content = {
  title: string;
  mainTitle?: string;
  slug: string;
  image?: string;
  icon?: string;
  link?: LinkProject;
  description?: string;
  tags?: string[];
  shortSummary?: string;
  type?: string;
  item?: Content[];
  level?: string;
};

type LinkProject = {
  github?: string;
  url?: string;
};
