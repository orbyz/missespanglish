export type Service = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  cta: string;
  featured?: boolean;
  badge?: string;
};

export type ServiceItem = Pick<Service, "id" | "featured">;
