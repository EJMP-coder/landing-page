import { SvgIconProps } from "../types";

const SEO_ALT_TEXTS: Record<string, string> = {
  "intro-corporate.jpg":
    "Diseño y desarrollo de páginas web profesionales y seguras para empresas",
  "about-services.jpg":
    "Panel de resultados comprobados y crecimiento empresarial en diseño web",
  "mission-sales.jpg":
    "Embudo de conversión y ventas 24/7 mediante páginas web corporativas",
  "product-ecommerce.jpg":
    "Tienda en línea y comercio electrónico global con pagos seguros",
  "ai-integration.jpg":
    "Integración de Inteligencia Artificial, chatbots y ciberseguridad para sitios web",
  "logo.svg": "TuPortalWeb - Desarrollo de Software y Diseño Web Empresarial",
  "notes.svg": "Icono de solución digital empresarial",
  "github.svg": "Perfil de GitHub",
  "twitter.svg": "Perfil de Twitter",
  "linkedin.svg": "Perfil de LinkedIn",
  "spain.svg": "Cambiar idioma a Español",
  "united-states.svg": "Switch language to English",
  "scroll-top.svg": "Volver arriba",
};

export const SvgIcon = ({ src, width, height }: SvgIconProps) => {
  const altText = SEO_ALT_TEXTS[src] || src.replace(/\.(svg|jpg|png)$/i, "");
  const isHeroImage = src === "intro-corporate.jpg" || src === "logo.svg";

  return (
    <img
      src={`/img/svg/${src}`}
      alt={altText}
      width={width}
      height={height}
      loading={isHeroImage ? "eager" : "lazy"}
      decoding="async"
    />
  );
};
