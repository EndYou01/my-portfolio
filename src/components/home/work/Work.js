import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import { LearnMoreButton } from "../../learnMoreButton/LearnMoreButton";
import { FillContext } from "../../../context/FillContext";
import { ImageLoaded } from "../../imageLoaded/ImageLoaded";
import { Link, useLocation } from "react-router-dom";
import { ShowTechIcons } from "../../showTechIcons/ShowTechIcons";

const ProjectSection = ({
  title,
  description,
  bgImage,
  logoImage,
  altText,
  buttonPath,
  technologies,
  role,
  period,
}) => {
  const { t } = useTranslation("global");


  return (
    <section
      className={`projects_section ${!useContext(FillContext).fillVariable && "projects_section_dark"
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

            <div className="project_meta">
              {role && (
                <div className="project_role">
                  <strong>Rol:</strong> {role}
                </div>
              )}
              {period && (
                <div className="project_period">
                  <strong>{t("general.period")}:</strong> {period}
                </div>
              )}
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <LearnMoreButton pathname={buttonPath} />

              {technologies && (
                <div className="project_tech_container">
                  <ShowTechIcons technologies={technologies} position='start' lite={true} />
                </div>
              )}
            </div>
          </div>
        </div>
      </Fade>
    </section>
  )
};

export const Work = () => {
  const { t } = useTranslation("global");
  const isWorkLocation = useLocation().pathname.includes("work");

  const projects = [
    {
      title: "Fuego Abierto GelSoft",
      description: t("fuegoabierto.p1"),
      bgImage: "fuegoAbierto/fuegoabierto1.png",
      logoImage: "logos/fuegoabierto_logo.png",
      buttonPath: "/fuegoabierto",
      altText: "Fuego Abierto",
      technologies: ["React", "TypeScript", "NestJS", "MySQL", "Tailwind"],
      role: "FullStack - Software Architect",
      period: "Nov/2025 - Dic/2025",
    },
    {
      title: "CugrancaXXI",
      description: t("cugranca.p1"),
      bgImage: "cugranca/cugrancaxxi1.png",
      logoImage: "logos/cugranca_logo.png",
      buttonPath: "/cugranca",
      altText: "CugrancaXXI",
      technologies: ["React", "TypeScript", "NestJS", "MySQL", "Tailwind"],
      role: "FullStack - Software Architect",
      period: "Ago/2025 - Oct/2025",
    },
    {
      title: "RedCollege",
      description: t("redcollege.p1"),
      bgImage: "redcollege/redcollege1.jpg",
      logoImage: "logos/redcollege_logo.png",
      buttonPath: "/redcollege",
      altText: "RedCollege",
      technologies: ["Vue", "Nuxt", "TypeScript", "PostgreSQL", "AdonisJs"],
      role: "FullStack",
      period: "Ene/2025 - Jun/2025",
    },
    ...(isWorkLocation
      ? [
        {
          title: "El Gabán",
          description: t("elgaban.p1"),
          bgImage: "freelance/elgaban/elgaban1.png",
          logoImage: "logos/gabanLogo.png",
          buttonPath: "/elgaban",
          altText: "El Gaban",
          technologies: ["React", "Tailwind", "TypeScript"],
          role: "Frontend",
          period: "Dic/2024",
        },
        {
          title: t("gelato.t1"),
          description: t("gelato.p1"),
          bgImage: "freelance/gelato/gelato1.png",
          logoImage: "logos/gelatologo.jpg",
          buttonPath: "/gelato",
          altText: "Gelato",
          technologies: ["React", "Tailwind", "TypeScript"],
          role: "Frontend",
          period: "Oct/2024",
        },
        {
          title: "Celebren Web",
          description: t("celebren.p1"),
          bgImage: "freelance/celebren/celebren1.png",
          logoImage: "logos/celebrenlogo.png",
          buttonPath: "/celebren",
          altText: "CelebrenWeb",
          technologies: ["React", "Tailwind", "TypeScript", "Vite"],
          role: "Frontend",
          period: "Jul/2024 - Dic/2024",
        },
        {
          title: "SinTerceros",
          description: t("sinterceros.p1"),
          bgImage: "freelance/sinterceros/st1.png",
          logoImage: "logos/sintercerosLogo.png",
          buttonPath: "/sinterceros",
          altText: "SinTerceros",
          technologies: ["React", "Tailwind", "TypeScript", "Vite"],
          role: "Frontend",
          period: "May/2024",
        },
        {
          title: "Lyn-Arte-Gráfico",
          description: t("lyn.p1"),
          bgImage: "freelance/lyn/lyn1.png",
          logoImage: "logos/lynLogo.png",
          buttonPath: "/lyn",
          altText: "Lyn-Arte-Gráfico",
          technologies: ["React", "Tailwind", "TypeScript", "Vite"],
          role: "Frontend",
          period: "Ago/2023",
        },
        {
          title: t("tecoposadmin.t1"),
          description: t("tecoposadmin.p1"),
          bgImage: "freelance/tecopos/tecopos9.png",
          logoImage: "logos/TecoposLogo.png",
          buttonPath: "/tecoposadmin",
          altText: "TecoposAdmin",
          technologies: ["React", "Tailwind", "TypeScript"],
          role: "Frontend",
          period: "Jul/2023 - Dic/2024",
        },
        {
          title: "Cross Border Trade",
          description: t("crossBorder.p1"),
          bgImage: "freelance/crossBorderTrade/crossBorder.jpg",
          logoImage: "logos/crossBorder_logo.png",
          buttonPath: "/crossBorder",
          altText: "Cross Border Trade",
          technologies: ["React", "SASS", "TypeScript", "Redux"],
          role: "Frontend",
          period: "Jun/2023 - Jul/2023",
        },
        {
          title: "Kids'R'Us",
          description: t("kidsrUs.p1"),
          bgImage: "freelance/kidsrUs/KidsrUs_image.png",
          logoImage: "logos/kidsrUs_logo.png",
          buttonPath: "/kidsrUs",
          altText: "Kids'R'Us",
          technologies: ["React", "SASS", "TypeScript", "Redux"],
          role: "Frontend",
          period: "May/2023",
        },
        {
          title: "Confort",
          description: t("confort.p"),
          bgImage: "freelance/confort/Pantalla_Principal.jpg",
          logoImage: "logos/confort_logo.png",
          buttonPath: "/confort",
          altText: "Confort",
          technologies: ["Javascript", "CSS", "HTML"],
          role: "Frontend",
          period: "Abr/2023 - May/2023",
        },
        {
          title: "Coremant",
          description: t("coremant.p"),
          bgImage: "freelance/coremant/coremant.png",
          logoImage: "logos/coremant_logo.png",
          buttonPath: "/coremant",
          altText: "Coremant",
          technologies: ["React", "SASS"],
          role: "Frontend",
          period: "Mar/2023",
        },
        {
          title: "SNB 2022",
          description: t("snb.p1"),
          bgImage: "snb2022/snb_1.jpg",
          logoImage: "logos/snb_logo1x5.png",
          buttonPath: "/snb",
          altText: "SNB 2022",
          technologies: ["Java", "MySql"],
          role: "FullStack",
          period: "Dec/2022",
        },
        {
          title: "CitasApp",
          description: t("citas.p1"),
          bgImage: "freelance/citasApp/citas1.png",
          logoImage: "logos/citas_logo.png",
          buttonPath: "/citasApp",
          altText: "CitasApp",
          technologies: ["Javascript", "AntDesign", "HTML"],
          role: "Frontend",
          period: "Nov/2022",
        },
        {
          title: t("tmf.h2"),
          description: t("tmf.p1"),
          bgImage: "tmf/tmf1.png",
          logoImage: "logos/tmf_logo.png",
          buttonPath: "/mandalorian",
          altText: "TMF",
          technologies: ["C"],
          role: "Frontend",
          period: "Nov/2022",
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
