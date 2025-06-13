export interface PageRequest {
  page?: string;
  size?: string;
  sort?: string;
  [key: string]: string | undefined;
}

export interface PageResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}
