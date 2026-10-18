import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // Ana sayfamız (Eğer senin dosyanın adı _index.tsx ise "routes/home.tsx" kısmını "routes/_index.tsx" yapabilirsin)
  index("routes/home.tsx"), 
  
  // İşte yeni eklediğimiz sayfanın rotası!
  route("hakkinda", "routes/hakkinda.tsx") 
] satisfies RouteConfig;