
export const activateDarkMode = () => {

    const infoContains = document.body.querySelectorAll('.infoContain')
    const projectsSections = document.body.querySelectorAll('.projects_section')
    const footer_content = document.querySelector('.footer_section')
    const columns = document.querySelectorAll('.columns')

    console.log(footer_content)

    infoContains.forEach( element => {
        element.classList.toggle('project_info_container_dark')
    })
    projectsSections.forEach( element => {
        element.classList.toggle('project_info_container_dark')
    })
    columns.forEach( element => {
        element.classList.toggle('liDark')
    })
    
    footer_content.classList.toggle('footerDark');
    document.body.classList.toggle('body-dark-mode');

}