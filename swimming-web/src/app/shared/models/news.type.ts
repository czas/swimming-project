/**
 * News type definition
 * @description This is a DTO for the news entity
 */
export type News = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  content: string;
  slug: string;
  publication_date: Date;
};

/** Null object pattern for the News type */
export const NULL_NEWS: News = {
  id: 0,
  title: '',
  subtitle: '',
  description: '',
  content: '',
  slug: '',
  publication_date: new Date(),
};
