export interface PestApiResponse {
    data: Pest[];
    to: number;
    per_page: number;
    current_page: number;
    from: number;
    last_page: number;
    total: number;
  }

export interface Pest {
    id: number;
    common_name: string;
    scientific_name: string;
    other_name: string[] | null;
    family: string | null;
    description: {
      subtitle: string;
      description: string;
    }[];
    solution: {
      subtitle: string;
      description: string;
    }[];
    host: string[];
    images: {
      license: number;
      license_name: string;
      license_url: string;
      original_url: string;
      regular_url: string;
      medium_url: string;
      small_url: string;
      thumbnail: string;
    }[];
  }

