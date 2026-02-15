import { redirect } from "next/navigation";

export default function RootPage() {
  // Redirige automáticamente a /es al entrar en la raíz
  redirect("/es");
}
