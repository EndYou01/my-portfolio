import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import { LearnMoreButton } from "../../learnMoreButton/LearnMoreButton";
import { FillContext } from "../../../context/FillContext";
import { ImageLoaded } from "../../imageLoaded/ImageLoaded";
import { Link, useLocation } from "react-router-dom";

const ProjectSection = ({
  title,
  description,
  bgImage,
  logoImage,
  altText,
  buttonPath,
}) => (
  <section
    className={`projects_section ${
      !useContext(FillContext).fillVariable && "projects_section_dark"
    }`}
  >
    <Fade>
      <div className="project_container">
        <ImageLoaded
          effect="blur"
          classname="bg_image"
          alt={`${altText} Background`}
          src={bgImage}
        />
        <div className="project_image_container">
          <ImageLoaded
            effect="blur"
            classname="project_image"
            alt={`${altText} Logo`}
            src={logoImage}
          />
        </div>
        <div className="project_info_container">
          <h2>{title}</h2>
          <p>{description}</p>
          <LearnMoreButton pathname={buttonPath} />
        </div>
      </div>
    </Fade>
  </section>
);

export const Work = () => {
  const { t } = useTranslation("global");
  const isWorkLocation = useLocation().pathname.includes("work");

  const projects = [
    {
      title: "Tecopos Administracion",
      description: t("sinterceros.p1"),
      bgImage: "freelance/tecopos/tecopos9.png",
      logoImage: "logos/TecoposLogo.png",
      buttonPath: "/tecoposadmin",
      altText: "TecoposAdmin",
    },
    {
      title: "SinTerceros",
      description: t("sinterceros.p1"),
      bgImage: "freelance/sinterceros/st1.png",
      logoImage: "logos/sintercerosLogo.png",
      buttonPath: "/sinterceros",
      altText: "SinTerceros",
    },
    {
      title: "El Gelato",
      description: t("sinterceros.p1"),
      bgImage: "freelance/gelato/gelato1.png",
      logoImage: "logos/gelatologo.jpg",
      buttonPath: "/sinterceros",
      altText: "Gelato",
    },
    ...(isWorkLocation
      ? [
          {
            title: "El Gabán",
            description: t("lyn.p1"),
            bgImage: "freelance/elgaban/elgaban1.png",
            logoImage: "logos/gabanLogo.png",
            buttonPath: "/elgaban",
            altText: "El Gaban",
          },
          {
            title: "Lyn-Arte-Gráfico",
            description: t("lyn.p1"),
            bgImage: "freelance/lyn/lyn1.png",
            logoImage: "logos/lynLogo.png",
            buttonPath: "/lyn",
            altText: "Lyn-Arte-Gráfico",
          },
          {
            title: t("tmf.h2"),
            description: t("tmf.p1"),
            bgImage: "tmf/tmf1.png",
            logoImage: "logos/tmf_logo.png",
            buttonPath: "/mandalorian",
            altText: "TMF",
          },
          {
            title: "SNB 2022",
            description: t("snb.p1"),
            bgImage: "snb2022/snb_1.jpg",
            logoImage: "logos/snb_logo1x5.png",
            buttonPath: "/snb",
            altText: "SNB 2022",
          },
          {
            title: "Celebren Web",
            description: t("sinterceros.p1"),
            bgImage: "freelance/celebren/celebren1.png",
            logoImage: "logos/celebrenlogo.png",
            buttonPath: "/sinterceros",
            altText: "CelebrenWeb",
          },
          {
            title: "Kids'R'Us",
            description: t("kidsrUs.p1"),
            bgImage: "freelance/kidsrUs/KidsrUs_image.png",
            logoImage: "logos/kidsrUs_logo.png",
            buttonPath: "/kidsrUs",
            altText: "Kids'R'Us",
          },
          {
            title: "Cross Border Trade",
            description: t("crossBorder.p1"),
            bgImage: "freelance/crossBorderTrade/crossBorder.jpg",
            logoImage: "logos/crossBorder_logo.png",
            buttonPath: "/crossBorder",
            altText: "Cross Border Trade",
          },
          {
            title: "Confort",
            description: t("confort.p"),
            bgImage: "freelance/confort/Pantalla_Principal.jpg",
            logoImage: "logos/confort_logo.png",
            buttonPath: "/confort",
            altText: "Confort",
          },
          {
            title: "Coremant",
            description: t("coremant.p"),
            bgImage: "freelance/coremant/coremant.png",
            logoImage: "logos/coremant_logo.png",
            buttonPath: "/coremant",
            altText: "Coremant",
          },
          {
            title: "CitasApp",
            description: t("citas.p1"),
            bgImage: "freelance/citasApp/citas1.png",
            logoImage: "logos/citas_logo.png",
            buttonPath: "/citasApp",
            altText: "CitasApp",
          },
        ]
      : []),
  ];

  return (
    <div id="work" className="work_container">
      <Fade>
        <h1 className="header">{t("work.h1")}</h1>
      </Fade>
      {projects.map((project, index) => (
        <React.Fragment key={index}>
          <ProjectSection {...project} />
          <br />
        </React.Fragment>
      ))}
      {!isWorkLocation && (
        <>
          <br />
          <br />
          <Link to="/work" className="seeMore">
            {t("general.seeMore")}
          </Link>
        </>
      )}
    </div>
  );
};
