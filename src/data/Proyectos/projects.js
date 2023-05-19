import html from '../../svg/front/html.svg'
import css from '../../svg/front/css.svg'
import js from '../../svg/front/js.svg'
import react from '../../svg/front/react.svg'
import next from '../../svg/front/next.svg'
import ts from '../../svg/front/ts.svg'
import tailwind from '../../svg/front/tailwind.svg'

import node from '../../svg/back/node.svg'
import postgresql from '../../svg/back/postgresql.svg'
import mysql from '../../svg/back/mysql.svg'
import graphql from '../../svg/back/graphql.svg'
import mongodb from '../../svg/back/mongodb.svg'


import github from '../../svg/socialmedia/github.svg'
import web from '../../svg/socialmedia/web.svg'

import citas from '../../assets/citas.webp'
import bm_Client from '../../assets/bm_Client.webp'
import bm_Admi from '../../assets/bm_Admi.webp'
import blogClient from '../../assets/blogClient.webp'
import VillaLibros from '../../assets/VillaLibro.webp'
import crmClient from '../../assets/crmClient.webp'
import areas from '../../assets/AreasG.webp'
import crud from '../../assets/crud.webp'


const projects = {
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
}

export default projects;