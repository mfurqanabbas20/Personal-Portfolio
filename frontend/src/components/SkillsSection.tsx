import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import js from "../assets/skills/js.png";
import typescript from "../assets/skills/typescript.png";
import react from "../assets/skills/react.png";
import next from "../assets/skills/nextjs.png";
import java from "../assets/skills/java.png";
import node from "../assets/skills/node.png";
import github from "../assets/skills/github.png";
import docker from "../assets/skills/docker.png";
import tailwind from "../assets/skills/tailwind.png";
import aws from "../assets/skills/aws.png";
import pg from "../assets/skills/postgre.png";
import nestjs from "../assets/skills/nestjs.svg";
import express from "../assets/skills/express.png";
import python from "../assets/skills/python.png";
import sql from "../assets/skills/sql.png";
import mongodb from "../assets/skills/mongodb.png";



const skills = [
	html,
	css,
    tailwind,
	js,
	typescript,
	react,
	next,
	node,
	express,
	nestjs,
    mongodb,
	python,
	java,
    sql,
	pg,
	aws,
	github,
	docker,
	// mongo,
]

const SkillsSection = () => {
    return(
        <div className='text-white'>
			<h1>Skills:</h1>
			<div className='flex items-center flex-wrap gap-4 my-4'>
				{
					skills.map((item) => (
						<img className='size-10 object-cover' src={item} />
					))
				}
			</div>
		</div>
    )
}

export default SkillsSection;
