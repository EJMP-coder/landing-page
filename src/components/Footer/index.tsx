import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contáctanos")}</Language>
              <Large to="/">{t("cuéntanos todo lo que necesites")}</Large>
              <Para>
                {t(`Tienes alguna duda, escríbenos.`)}
              </Para>
              <a href="mailto:lord_edwin@hotmail.com">
                <Chat>{t(`Vamos al Chat`)}</Chat>
              </a>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Políticas")}</Title>
              <Large to="/">{t("Seguridad")}</Large>
              <Large to="/">{t("Software Principios")}</Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <a href="https://wa.me/+34642571418?text=Hola,%20quiero%20saber%20más%20sobre%20sus%20productos">
              <Chat>{t("Centro de soporte")}</Chat>
              <Chat>{t("Soporte al consumidor")}</Chat>
              </a>
            </Col>
          </Row>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>{t("Dirección")}</Language>
              <Para>Talavera de la Reina</Para>
              <Para>Toledo</Para>
              <Para>España</Para>
            </Col>          
            <Col lg={6} md={6} sm={12} xs={12}>
              <Label htmlFor="select-lang">{t("Language")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src="united-states.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("es")}>
                  <SvgIcon
                    src="spain.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="101px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://github.com/EJMP-coder"
                src="github.svg"
              />
              <SocialLink
                href="https://twitter.com/ej_medina"
                src="twitter.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/in/Edwin-Medina-Perez/"
                src="linkedin.svg"
              />
             </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
