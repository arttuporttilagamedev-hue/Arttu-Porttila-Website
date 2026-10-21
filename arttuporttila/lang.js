 const translations = {
    fi: {
        /*Navbar*/
        nav_home: "KOTI",
        nav_about: "TIETOA MINUSTA",
        nav_skills: "OSAAMINEN",
        nav_projects: "PROJEKTIT",
        nav_contact: "OTA YHTEYTTÄ",

        /*Hero*/
        hero_title: "Tervetuloa Sivulleni",
        hero_text: "Olen Arttu, ohjelmistokehityksen opiskelija ja tämä nettisivu kertoo minusta.",

        /*Cards*/
        card_about_title: "TIETOA MINUSTA",
        card_about_text: "Olen Arttu toisen vuoden ohjelmistokehityksen opiskelija.",
        card_about_more: "Lue lisää →",

        card_skills_title: "OSAAMINEN",
        card_skills_text: "Osaamista minulta löytyy jo paljon ohjelmointiin ja 3D-mallinnukseen liittyen.",
        card_skills_more: "Lue lisää →",

        card_projects_title: "PROJEKTIT",
        card_projects_text: "Olen tehnyt muutamia projekteja myös tämän nettisivun lisäksi.",
        card_projects_more: "Katso projektit →",

        card_contact_title: "OTA YHTEYTTÄ",
        card_contact_text: "Onko sinulla idea tai kysyttävää? Laita viestiä!",
        card_contact_more: "Lähetä viesti →",

        /*Footer*/
        footer_text: "Täältä löydät kaikki sivut ja sosiaalisen median linkit",
        footer_home: "KOTI",
        footer_about: "TIETOA MINUSTA",
        footer_skills: "OSAAMINEN",
        footer_projects: "PROJEKTIT",
        footer_contact: "OTA YHTEYTTÄ",

        /*About me*/
        about_title: "Hei, olen Arttu.",
        about_intro: "Olen toisen vuoden tieto- ja viestintätekniikan opiskelija, joka on erikoistunut ohjelmistokehitykseen. Tällä sivulla kerron hieman itsestäni, taustastani ja siitä, mikä minua kiinnostaa.",
        about_story_title: "Tarinani",
        about_story1: "Kiinnostukseni ohjelmointiin alkoi ajatuksesta toteuttaa pelejä, joista minä ja muut voisivat saada iloa.",
        about_story2: "Ymmärsin kuitenkin nopeasti, että pelkkä ajatus ei riitä vaan minulla on paljon opittavaa, josta motivoituneena päätin toteuttaa ensimmäisen projektini eli matopelin pythonilla.",
        about_story3: "Sen jälkeen olen jatkanut uusien projektien tekoa ja uutena tavoitteenani on pystyä toteuttamaan laadukkaita 3D-malleja ja animaatioita peleihin ohjelmoinnin ohella.",
        about_facts_title: "Pikatiedot",
        about_timeline_title: "Polkuni tähän asti",
        about_interests_title: "Mikä minua kiinnostaa",
        about_cta_title: "Tehdäänkö jotain yhdessä?",
        about_cta_text: "Onko sinulla idea tai kysymys? Lähetä minulle viestiä.",
        about_cta_btn: "Ota yhteyttä →",

        /*Skills*/
        skills_title: "Osaaminen",
        skills_intro: "Tälle sivulle on koottu osaamistani liittyen ohjelmointikieliin ja työkaluihin, jonka lisäksi kerron myös taidoista ja muista ominaisuuksistani.",
        skills_langs_title: "Ohjelmointikielet",
        skills_about_title: "Osaamisesta",
        skills_about_text1: "Opintojeni ja vapaa-aikani kautta hankkimani taidot pohjautuvat vahvaan haluun oppia ja etsiä jatkuvasti uutta tietoa. Olen erittäin utelias, oppimishaluinen ja oma-aloitteinen. Nautin myös suuresti ongelmanratkaisusta, ja minulla on vahva hahmotuskyky, jota hyödynnän jatkuvasti kootessani palapelejä.",
        skills_about_text2: "Sujuvimmat ohjelmointikieleni ovat C# ja Python. Pelikehityksessä käytän Godot-pelimoottoria, jonka parissa opettelen jatkuvasti uusia pelimekaniikkoja.",
        skills_about_text3: "Minulta löytyy osaamista myös web-kehityksestä. Hallitsen HTML:n, CSS:n ja JavaScriptin perusteet, joita käyttäen olen luonut esimerkiksi tämän oman nettisivuni. Osaan myös lisäksi vähän Reactia.",
        skills_about_text4: "3D-mallinnuksessa kehittyminen on tällä hetkellä yksi tavoitteistani. Osaan luoda Blenderillä yksinkertaisia 3D-malleja ja hallitsen vähän riggausta, texturien luontia ja pystyn luomaan yksinkertaisia animaatioita",
        skills_other_title: "Muuta osaamista",

        /*Projects*/
        projects_title: "Projektit",
        projects_intro: "Tähän on koottu projekteja, joita olen tehnyt. Jokaisessa projektissa on myös linkki GitHubiin, josta voi tarkastella projekteja tarkemmin.",
        btn_github: "GitHub →",
        btn_demo: "Katso sivu →",
        soon: "Lisää projekteja tulossa...",

        /*Contact*/
        contact_title: "Ota yhteyttä",
        contact_intro: "Onko sinulla kysymys tai idea mielessä? Lähetä viesti, niin vastaan niin pian kuin mahdollista.",
        label_name: "Nimi",
        label_email: "Sähköpostiosoitteesi",
        label_subject: "Otsikko",
        label_message: "Viesti",
        btn_send: "Lähetä viesti",
        btn_sending: "Lähetetään...",
        words_left: (n, total) => `${n} / ${total} sanaa. Kirjoita vielä ${total - n} sanaa.`,
        words_ok: (n, total) => `${n} sanaa. Viestin voi lähettää.`,
        err_fields: "Täytä kaikki kentät.",
        err_email: "Tarkista sähköpostiosoite.",
        err_words: (total) => `Viestin täytyy sisältää vähintään ${total} sanaa.`,
        err_config: "Lomakkeen lähetys ei ole tällä hetkellä käytössä.",
        err_send: "Viestin lähetys epäonnistui. Yritä hetken päästä uudelleen.",
        ok_send: "Kiitos! Viestisi on lähetetty."
    },
    en: {
        /*Navbar*/
        nav_home: "HOME",
        nav_about: "ABOUT ME",
        nav_skills: "SKILLS",
        nav_projects: "PROJECTS",
        nav_contact: "CONTACT",

        /*Hero*/
        hero_title: "Welcome to my website",
        hero_text: "I am Arttu, a software development student, and this website is about me.",

        /*Cards*/
        card_about_title: "ABOUT ME",
        card_about_text: "I am Arttu, a second-year software development student.",
        card_about_more: "Read more →",

        card_skills_title: "SKILLS",
        card_skills_text: "I already possess a great deal of expertise in programming and 3D modeling.",
        card_skills_more: "Read more →",

        card_projects_title: "PROJECTS",
        card_projects_text: "I have also completed a few projects in addition to this website.",
        card_projects_more: "View projects →",

        card_contact_title: "CONTACT",
        card_contact_text: "Do you have an idea or a question? Send me a message!",
        card_contact_more: "Send a message →",

        /*Footer*/
        footer_text: "Here you will find all the pages and social media links.",
        footer_home: "HOME",
        footer_about: "ABOUT ME",
        footer_skills: "SKILLS",
        footer_projects: "PROJECTS",
        footer_contact: "CONTACT",

        /*About me*/
        about_title: "Hello, I'm Arttu.",
        about_intro: "I am a second-year information and communication technology student specializing in software development. On this page, I share a little about myself, my background, and my interests.",
        about_story_title: "My story",
        about_story1: "My interest in programming began with the idea of creating games that both I and others could enjoy.",
        about_story2: "However, I quickly realized that the idea alone wasn't enough and that I had a lot to learn; motivated by this, I decided to carry out my first project: a Snake game in Python.",
        about_story3: "Since then, I have continued working on new projects, and my new goal is to be able to create high-quality 3D models and animations for games, alongside programming.",
        about_facts_title: "Quick facts",
        about_timeline_title: "My path so far",
        about_interests_title: "What interests me",
        about_cta_title: "Shall we make something together?",
        about_cta_text: "Do you have an idea or a question? Send me a message.",
        about_cta_btn: "Get in touch →",

        /*Skills*/
        skills_title: "Skills",
        skills_intro: "This page compiles my expertise regarding programming languages and tools, and also outlines my other skills and attributes.",
        skills_langs_title: "Programming languages",
        skills_about_title: "Of expertise",
        skills_about_text1: "The skills I have gained through my studies and free time are rooted in a strong desire to learn and continuously seek new information. I am highly curious, eager to learn, and proactive. I also greatly enjoy problem-solving and possess strong spatial reasoning skills, which I constantly put to use when solving jigsaw puzzles.",
        skills_about_text2: "My most proficient programming languages are C# and Python. For game development, I use the Godot game engine, with which I am constantly learning new game mechanics.",
        skills_about_text3: "I also have skills in web development. I have mastered the basics of HTML, CSS, and JavaScript, which I used to create this website of mine, for example. I also have some knowledge of React.",
        skills_about_text4: "3D-mallinnuksessa kehittyminen on tällä hetkellä yksi tavoitteistani. Osaan luoda Blenderillä yksinkertaisia 3D-malleja ja hallitsen vähän riggausta, texturien luontia ja pystyn luomaan yksinkertaisia animaatioita",
        skills_other_title: "Other skills",

        /*Projects*/
        projects_title: "Projects",
        projects_intro: "Here is a collection of projects I have worked on. Each project includes a link to GitHub, where you can view the projects in more detail.",
        btn_github: "GitHub →",
        btn_demo: "View live →",
        soon: "More projects coming soon...",

        /*Contact*/
        contact_title: "Get in touch",
        contact_intro: "Do you have a question or an idea in mind? Send me a message, and I will reply as soon as possible.",
        label_name: "Name",
        label_email: "Your email address",
        label_subject: "Title",
        label_message: "Message",
        btn_send: "Send message",
        btn_sending: "Sending...",
        words_left: (n, total) => `${n} / ${total} words. Write ${total - n} more.`,
        words_ok: (n, total) => `${n} words. Ready to send.`,
        err_fields: "Please fill in all fields.",
        err_email: "Please check your email address.",
        err_words: (total) => `Your message must contain at least ${total} words.`,
        err_config: "The contact form is not configured yet.",
        err_send: "Sending failed. Please try again in a moment.",
        ok_send: "Thank you! Your message has been sent."
    }
};

let currentLang = "fi";

function t(key, ...args) {
    const value = translations[currentLang][key];
    return typeof value === "function" ? value(...args) : value;
}

function setLanguage(lang) {
    if (!translations[lang]) lang = "fi";
    currentLang = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const text = translations[lang][el.dataset.i18n];
        if (typeof text === "string") el.textContent = text;
    });

    document.querySelectorAll(".lang-switch button").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    try { localStorage.setItem("lang", lang); } catch (e) {}

    document.dispatchEvent(new CustomEvent("languagechange", { detail: { lang } }));
}

document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

let savedLang = "fi";
try { savedLang = localStorage.getItem("lang") || "fi"; } catch (e) {}
setLanguage(savedLang);