import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { About } from '../../components/home/about/About'
import { Skills } from '../../components/home/skills/Skills'
import { FillContext } from '../../context/FillContext';
import { useEffect } from 'react';
import { scrollToTop } from '../../functions/scrollToTop';

export const AboutPage = () => {

    const [text] = useTranslation("global")

    useEffect(() => {

        scrollToTop()

    }, []);

    return (
        <>
            <About />

            <h2 className='center'>{text("about.profExp")}</h2>

            <div className='about_container'>

                <div className={"table"}>
                    <div style={{ border: "none" }} className={"tr"}>
                        <div className={"first_td"}>2020/09 - 2022/12</div>
                        <div className={"second_td"}>
                            <h3>{text("about.fronh4")}</h3>
                            <p className='secundary_color'>{text("about.PreparationAndFreelanceWork")}</p>
                            <div className='info'>
                                <p>{text("about.fronp1")}</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ border: "none" }} className={"tr"}>
                        <div className={"first_td"}>2022/12 - 2023/06</div>

                        <div className={"second_td"}>
                            <h3>{text("general.FrontendWebDeveloper")}</h3>
                            <div className='second_td_empressContainer'>
                                <a className='secundary_color' href="https://catalogo.godjango.dev/nosotros/">GoDjango Technology Company, La Habana</a>
                                <img className='second_td_empressIMG' src="logos/GoDjangoLogo.png" alt="..." />
                            </div>
                            <h4>{text("general.KeyResponsibilities")}.</h4>
                            <ul>
                                <li>
                                    {text("about.worksInfo.text1")}
                                    <ul>
                                        <li>
                                            {text("about.worksInfo.text2")}
                                        </li>
                                        <li>
                                            {text("about.worksInfo.text3")}
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    {text("about.worksInfo.text4")}
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div style={{ border: "none" }} className={"tr"}>
                        <div className={"first_td"}>2023/07 - {text("general.present")}</div>

                        <div className={"second_td"}>
                            <h3>{text("general.FrontendWebDeveloper")}</h3>
                            <div className='second_td_empressContainer'>
                                <a className='secundary_color' href="https://www.tecopos.com/">TecoPos Technology Company, La Habana</a>
                                <img className='second_td_empressIMG' src="logos/TecoposLogo2.jpg" alt="..." />
                            </div>
                            <h4>{text("general.KeyResponsibilities")}.</h4>
                            <ul>
                                <li>
                                    {text("about.worksInfo.text5")}
                                    <ul>
                                        <li>
                                            {text("about.worksInfo.text6")}
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    {text("about.worksInfo.text7")}
                                </li>
                                <li>
                                    {text("about.worksInfo.text8")}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <Skills />
        </>
    )
}
