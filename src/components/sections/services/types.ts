export type Service = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  cta: string;
  featured?: boolean;
  badge?: string;
};

<<<<<<< HEAD
export type ServiceItem = Pick<Service, "id" | "featured">;
=======
export type ServiceItem = {
  id: string;
  featured?: boolean;
};
>>>>>>> fix/navbar
