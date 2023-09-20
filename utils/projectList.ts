import css from "@/asset/css.png"
import git from "@/asset/git.png"
import html from "@/asset/html.png"
import js from "@/asset/js.png"

type projectListType = {
    img: any,
    title: string,
    link?: string,
}

export const projectList: Array<projectListType> = [
    {
        img:css,
        title:"CSS",
    },
    {
        img: git,
        title: "Git" 
    },
    {
        img: html,
        title: "HTML" 
    },
    {
        img: js,
        title: "JS" 
    }
]