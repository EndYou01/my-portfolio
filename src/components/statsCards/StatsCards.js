import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import skills from '../../constant/skills';

export const StatsCards = () => {
    const { t } = useTranslation("global");
    const [projectCount, setProjectCount] = useState(0);
    const [yearsOfExperience, setYearsOfExperience] = useState(0);
    const [techCount, setTechCount] = useState(0);

    useEffect(() => {
        // Calculate years of experience
        const currentYear = new Date().getFullYear();
        const experienceYears = currentYear - 2022;
        setYearsOfExperience(experienceYears);

        // Animate project count
        let count = 0;
        const projectTarget = 16;
        const projectDuration = 2000;
        const projectIncrement = projectTarget / (projectDuration / 16);

        // Animate tech count
        let techCount = 0;
        const techTarget = skills.length;
        const techDuration = 2500;
        const techIncrement = techTarget / (techDuration / 16);

        const projectTimer = setInterval(() => {
            count += projectIncrement;
            if (count >= projectTarget) {
                setProjectCount(projectTarget);
                clearInterval(projectTimer);
            } else {
                setProjectCount(Math.floor(count));
            }
        }, 16);

        const techTimer = setInterval(() => {
            techCount += techIncrement;
            if (techCount >= techTarget) {
                setTechCount(techTarget);
                clearInterval(techTimer);
            } else {
                setTechCount(Math.floor(techCount));
            }
        }, 16);

        return () => {
            clearInterval(projectTimer);
            clearInterval(techTimer);
        };
    }, []);

    return (
        <div className="stats-section">
            <div className="stats-container">
                <div className="stats-card">
                    <div className="card-header">
                        <h3 className="card-title">{t("statsCards.experience")}</h3>
                        <span className="trend-badge positive">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            +100%
                        </span>
                    </div>
                    <div className="card-content">
                        <div className="card-value">+{yearsOfExperience} {t("statsCards.years")}</div>
                        <p className="card-description">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            {t("statsCards.constantGrowth")}
                        </p>
                        <p className="card-subtitle">{t("statsCards.buildingEnterpriseSolutions")}</p>
                    </div>
                </div>

                <div className="stats-card">
                    <div className="card-header">
                        <h3 className="card-title">{t("statsCards.projectsCompleted")}</h3>
                        <span className="trend-badge positive">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            +25%
                        </span>
                    </div>
                    <div className="card-content">
                        <div className="card-value">{projectCount}</div>
                        <p className="card-description">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            {t("statsCards.successfullyDelivered")}
                        </p>
                        <p className="card-subtitle">{t("statsCards.fromConceptToProduction")}</p>
                    </div>
                </div>

                <div className="stats-card">
                    <div className="card-header">
                        <h3 className="card-title">{t("statsCards.technologies")}</h3>
                        <span className="trend-badge positive">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            +15%
                        </span>
                    </div>
                    <div className="card-content">
                        <div className="card-value">{techCount}</div>
                        <p className="card-description">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            {t("statsCards.masteredTools")}
                        </p>
                        <p className="card-subtitle">{t("statsCards.modernTechStack")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};