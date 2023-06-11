import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import { GetStaticProps } from 'next'
import { Experience, PageInfo, Project, Skill, Social } from "../typings"
import { fetchSkills } from '../utils/fetchSkills'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocials } from '../utils/fetchSocials'
import { urlFor } from '../sanity'

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  projects: Project[];
  socials: Social[];
  experiences: Experience[];
}

const inter = Inter({ subsets: ['latin'] })

export default function Home({pageInfo, projects, socials, experiences, skills}: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>{" Tanveer's Portfolio "}</title>
      </Head>
      
      <Header socials={socials}/>

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo}/>
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo}/>
      </section>

      <section id="experience" className='snap-center'>
        <WorkExperience experiences={experiences}/>
      </section>

      <section id="skills" className='snap-start'>
        <Skills skills={skills}/>
      </section>

      <section id="projects" className='snap-start'>
        <Projects projects={projects}/>
      </section>

      <section id="contact" className='snap-start'>
        <ContactMe pageInfo={pageInfo}/>
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img 
            className='h-12 w-12 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
            src={urlFor(pageInfo?.heroImage).url()}
            alt="footer image" />
          </div>

        </footer>
      </Link>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async() => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();
  const skills: Skill[] = await fetchSkills();
  return {
    props: {
      pageInfo,
      experiences,
      projects,
      socials,
      skills
    },
    revalidate: 10
  }
}