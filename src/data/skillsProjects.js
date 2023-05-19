// TODO: Front
import html from '../svg/front/html.svg'
import css from '../svg/front/css.svg'
import js from '../svg/front/js.svg'
import react from '../svg/front/react.svg'
import tailwind from '../svg/front/tailwind.svg'
import ts from '../svg/front/ts.svg'
import next from '../svg/front/next.svg'
import bootstrap from '../svg/front/bootstrap.svg'

// TODO: BACK
import node from '../svg/back/node.svg'
import express from '../svg/back/express.svg'
import mysql from '../svg/back/mysql.svg'
import graphql from '../svg/back/graphql.svg'
import postgresql from '../svg/back/postgresql.svg'
import mongodb from '../svg/back/mongodb.svg'

// TODO: TOOLS
import git from '../svg/tool/git.svg'
import vscode from '../svg/tool/vscode.svg'
import figma from '../svg/tool/figma.svg'
import postman from '../svg/tool/postman.svg'
import trello from '../svg/tool/trello.svg'
import jira from '../svg/tool/jira.svg'
import github from '../svg/socialmedia/github.svg'
import web from '../svg/socialmedia/web.svg'

// TODO: PROJECTS
import citas from '../assets/citas.webp'
import bm_Client from '../assets/bm_Client.webp'
import bm_Admi from '../assets/bm_Admi.webp'
import blogClient from '../assets/blogClient.webp'
import VillaLibros from '../assets/VillaLibro.webp'
import crmClient from '../assets/crmClient.webp'
import areas from '../assets/AreasG.webp'
import crud from '../assets/crud.webp'


const SkillProjects = {

  // TODO: Para el FRONT
  descriptionFront: [
    {
      "id": "1",
      "title": "FRONTEND",
      "description": "Domino HTML, CSS y JAVASCRIPT. En cuanto a frameworks, empecé con React y ahora estoy aprendiendo Next y TypeScript. También he trabajado con librerías de css como Tailwind y estoy aprendiendo Bootstrap."
    },
  ],
  habilidadesFront: [
    {
      "id": '1',
      "image": html,
      "title": "HTML",
    },
    {
      "id": '2',
      "image": css,
      "title": "CSS",
    },
    {
      "id": '3',
      "image": js,
      "title": "JavaScript",
    },
    {
      "id": '4',
      "image": react,
      "title": "React",
    },
    {
      "id": '5',
      "image": ts,
      "title": "TypeScript",
    },
    {
      "id": '6',
      "image": next,
      "title": "Next",
    },
    {
      "id": '7',
      "image": tailwind,
      "title": "Tailwind",
    },
    {
      "id": '8',
      "image": bootstrap,
      "title": "Bootstrap",
    },

  ],

  // TODO:! Para el BACK
  descriptionBack: [
    {
      "id": "1",
      "title": "BACKEND",
      "description": "Tengo la capacidad de crear un crud con NODE y EXPRESS. En cuanto a bases de datos he trabajado con MONGODB, MYSQL Y POSTGRESQL."
    },
  ],
  habilidadesBack: [
    {
      "id": '1',
      "image": node,
      "title": "Node"
    },
    {
      "id": '2',
      "image": express,
      "title": "Express"
    },
    {
      "id": '3',
      "image": mysql,
      "title": "MySQL"
    },
    {
      "id": '4',
      "image": graphql,
      "title": "GraphQL"
    },
    {
      "id": '5',
      "image": postgresql,
      "title": "PostgreSQL"
    },
    {
      "id": '6',
      "image": mongodb,
      "title": "MongoDB"
    }
  ],

  // TODO:! Para los TOOLS
  descriptionTools: [
    {
      "id": "1",
      "title": "TOOLS",
      "description": "Los proyectos que realizo lo hago mediante algunas herramientas como GIT, VS Code, Figma, Postman por otro lado recién estoy aprendiendo herramientas para admistrar proyectos como Trello y Jira."
    }
  ],
  tools : [
    {
      "id": "1",
      "image": git,
      "title": "Git"
    },
    {
      "id": "2",
      "image": vscode,
      "title": "VS Code"
    },
    {
      "id": "3",
      "image": figma,
      "title": "Figma"
    },
    {
      "id": "4",
      "image": postman,
      "title": "Postman"
    },
    {
      "id": "5",
      "image": trello,
      "title": "Trello"
    },
    {
      "id": "6",
      "image": jira,
      "title": "Jira"
    }
  ],

  // TODO:! Para los PROYECTOS
  projects : [
    {
      id: "1",
      image: `${bm_Client}`,	
      title: "eCommerce Cevicheria Client",
      linkp: "https://brisas-marina-front-end-cliente.vercel.app/brisasMarinas",
      info: "Proyecto universitario responsive",
      description: "Sistema web para la compra de platillo por parte del cliente en una cevichería.",
      habilidades: [
        { id:"1", subSkill: `${html}`},
        { id:"2", subSkill: `${react}`},
        { id:"3", subSkill: `${css}`},
        { id:"4", subSkill: `${ts}`},
      ],
      sitio: [
        { id:"1", icon: web, txt: "Ir a la web", link: "https://brisas-marina-front-end-cliente.vercel.app/brisasMarinas"},
        { id:"2", icon: github, txt: "Ir a al repositorio", link: "https://github.com/asem210/BrisasMarina-FrontEnd-Cliente"}
      ]
    },
    {
      id: "2",
      image: `${citas}`,	
      title: "Control de Citas",
      linkp: "https:/citas-control.netlify.app/",
      info: "Proyecto propio responsive",
      description: "Control de citas de su mascota almacenandose en LocalStorage",
      habilidades: [
        { id:"1", subSkill: `${html}`},
        { id:"2", subSkill: `${css}`},
        { id:"3", subSkill: `${js}`}
      ],
      sitio: [
        { id:"1", icon: web , txt: "Ir a la web", link: "https:/citas-control.netlify.app/"},
        // { id:"2", icon: github,  txt: "Ir a al repositorio"}
      ]
    },
    {
      id: "3",
      image: `${bm_Admi}`,
      title: "eCommerce Cevicheria Admi",
      linkp: "https://brisas-marinas-front-end.vercel.app/",
      info: "Proyecto universitario no esponsive",
      description: "Sistema web para la administración de platillos (CRUD) de una cevichería.",
      habilidades: [
        { id:"1", subSkill: `${react}`},
        { id:"2", subSkill: `${node}`},
        { id:"3", subSkill: `${ts}`},
        { id:"4", subSkill: `${postgresql}`},
      ],
      sitio: [
        { id:"1", icon: web, txt: "Ir a la web", link: "https://brisas-marinas-front-end.vercel.app/"},
        { id:"2", icon: github, txt: "Ir a al repositorio", link: "https://github.com/asem210/Brisas-Marinas-FrontEnd"}
      ]
    },
    {
      id: "4",
      image: `${blogClient}`,
      title: "Blog - Cliente",
      linkp: "https://blog-personal-front.netlify.app/",
      info: "Proyecto propio responsive",
      description: "Diseño FrontEnd realizado para un blog personal.",
      habilidades: [
        { id:"1", subSkill: `${html}`},
        { id:"2", subSkill: `${css}`},
        { id:"3", subSkill: `${js}`},
      ],
      sitio: [
        { id:"1", icon: web, txt: "Ir a la web", link: "https://blog-personal-front.netlify.app/"},
        { id:"2", icon: github, txt: "Ir a al repositorio", link: "https://github.com/Erick-vc/BlogPersonal-FrontEnd"}
      ]
    },
    {
      id: "5",
      image: `${VillaLibros}`,
      title: "eComerce Libreria",
      linkp: "https://villa-libros.vercel.app/",
      info: "Proyecto universitario responsive",
      description: "Sistema web (frontEnd) para la compra de libros por parte del client.",
      habilidades: [
        { id:"1", subSkill: `${html}`},
        { id:"2", subSkill: `${react}`},
        { id:"3", subSkill: `${css}`},
      ],
      sitio: [
        { id:"1", icon: web, txt: "Ir a la web", link: "https://villa-libros.vercel.app/"},
        { id:"2", icon: github, txt: "Ir a al repositorio", link: "https://github.com/asem210/villalibros-project"}
      ]
    },
    {
      id: "6",
      image: `${crmClient}`,
      title: "CRM Client",
      linkp: "https://crm-clients-next.netlify.app",
      info: "Proyecto propio responsive",
      description: "Sistema para llevar el control de clientes, vendedores y productos.",
      habilidades: [
        { id:"1", subSkill: `${next}`},
        { id:"2", subSkill: `${react}`},
        { id:"5", subSkill: `${tailwind}`},
        { id:"3", subSkill: `${graphql}`},
        { id:"4", subSkill: `${mongodb}`},
      ],
      sitio: [
        { id:"1", icon: web, txt: "Ir a la web", link: "https://crm-clients-next.netlify.app"},
        { id:"2", icon: github, txt: "Ir a al repositorio", link: "https://github.com/Erick-vc/CRMClient"}
      ]
    },
    {
      id: "7",
      image: `${areas}`,
      title: "Calculador de Areas",
      linkp: "https://areas-geometricas.netlify.app",
      info: "Proyecto propio responsive",
      description: "Calculador de area geometricas utilizando lógica de programación.",
      habilidades: [
        { id:"1", subSkill: `${html}`},
        { id:"2", subSkill: `${css}`},
        { id:"3", subSkill: `${js}`},
      ],
      sitio: [
        { id:"1", icon: web, txt: "Ir a la web", link: "https://areas-geometricas.netlify.app"},
        { id:"2", icon: github, txt: "Ir a al repositorio", link: "https://github.com/Erick-vc/Areas-Geometricas"}
      ]
    },
    {
      id: "8",
      image: `${crud}`,
      title: "CRUD Client",
      linkp: "https://curd-client-mysql.netlify.app",
      info: "Proyecto propio responsive",
      description: "CRUD sencillo para llevar el registro de tus clientes",
      habilidades: [
        { id:"1", subSkill: `${next}`},
        { id:"4", subSkill: `${tailwind}`},
        { id:"2", subSkill: `${node}`},
        { id:"3", subSkill: `${mysql}`},
      ],
      sitio: [
        { id:"1", icon: web, txt: "Ir a la web", link: "https://curd-client-mysql.netlify.app"},
        { id:"2", icon: github, txt: "Ir a al repositorio", link: "https://github.com/Erick-vc/CRUD-FRONT-NETLIFY"}
      ]
    },
  ]

};



export default SkillProjects;