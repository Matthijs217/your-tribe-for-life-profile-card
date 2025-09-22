<script>
    import { onMount } from "svelte";
    let { data } = $props();
    const member = data.members;
</script>

<!-- Autoplay voor het automatisch afspelen en loop zodat die opnieuw kan afspelen na het einde -->
<video class="bg-video" src="/newyork.webm" autoplay loop muted >
    <track src="captions_en.vtt" kind="captions" srclang="en" label="english_captions">
</video>

<main>
    <section>
        <div class="profile-pic">
            <img
                src={`https://fdnd.directus.app/assets/${member.mugshot}?width=200&height=200`}
                alt={`portret ${member.name}`}
                height="200"
                width="140"
                onerror={(e) => (e.currentTarget.src = "/noname.webp")}
            />
        </div>

        <h1>{member.name}</h1>
        <p class="bio">{member.bio}</p>

        <div class="details-grid">
            <button class="button-about-me" popovertarget="aboutPopover">Over mij</button>
            <div popover id="aboutPopover">
            <dl>
                <dt>Favoriete hobby:</dt>
                <dd>{member.fav_hobby}</dd>
                <dt>Favoriete keuken:</dt>
                <dd>{member.fav_kitchen}</dd>
                <dt>Favoriete emoji:</dt>
                <dd>{member.fav_emoji}</dd>
                <dt>Favoriete dier:</dt>
                <dd>{member.fav_animal}</dd>
            </dl>
            <button popovertarget="aboutPopover">Sluiten</button>
            </div>
        </div>

        <div class="socials">
            <a href="https://www.instagram.com/stories/highlights/18467473987075747/" class="flag-usa-link">
                <img class="flag-usa" src="/usa.webp" alt="Vlag van de Verenigde Staten" width="100" height="53">
            </a>
            <a href="https://github.com/Matthijs217" class="github-link">
                <img src="/github.webp" alt="GitHub logo" width="60" height="60">
            </a>
            <a href="https://www.linkedin.com/in/matthijs-ten-brink-7620612a8/" class="linkedin-link">
                <img src="/linkedin.webp" alt="LinkedIn logo" width="60" height="85">
            </a>
        </div>
    </section>
</main>

<style>
    @font-face {
        font-family: 'NewYork';
        src: url('/NewYork.otf') format('opentype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    main {
        font-family: 'NewYork', 'Gotham', 'Times New Roman', Times, serif;
        position: relative;
        min-height: 100vh;
        z-index: 0;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .bg-video {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        z-index: -1;
        pointer-events: none;
    }
    section {
        position: relative;
        z-index: 1;
        background-color: rgba(255, 255, 255, 0.92);
        padding: 1.5rem 1.75rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        height: 70vh;
        width: clamp(230px, 65%, 90vw);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: .75em;
        @media (min-width: 600px) {
            gap: 0.1em;
        }
        @media (min-width: 1100px) {
            gap: 1em;
            padding: 3rem 1.75rem;
            height: 65vh;
        }
    }

    .profile-pic {
        display: flex;
        justify-content: center;
        img {
            object-fit: cover;
            border-radius: 50%;
            width: 140px;
            height: 140px;
        }
        @media (min-width: 600px) {
            margin-bottom: 1em;
        }
    }

    
    h1 {
        text-align: center;
        margin: 0;
        padding: 0;
        @media (min-width: 600px) {
            font-size: 2.5em;
        }
    }
    
    .bio {
        margin-top: .25em;
        text-align: center;
        color: #555;
        @media (min-width: 600px) {
            font-size: 1.25em;
        }
    }

    .details-grid {
        display: grid;
        grid-template-columns:1fr 1fr;
        grid-auto-rows: 1fr;
        grid-template-rows: min-content;
        gap: .5em;
        align-items: stretch;
        @media (min-width: 600px) {
            grid-template-columns: 1fr 1fr;
            gap: 2em;
        }
    }

    #aboutPopover {
        border: none;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        padding: 1em;
        font-size: 0.9em;
        background-color: #f9f9f9;
        color: #333;
        max-width: 300px;
        text-align: center;
        @media (min-width: 600px) {
            font-size: 1.1em;
            max-width: 500px;
        }
        @media (min-width: 1100px) {
            font-size: 1.25em;
            max-width: 500px;
        }
        dl {
            font-family: 'Gotham', 'Times New Roman', Times, serif;
            display: grid;
            grid-template-columns: 1fr 1fr;
            justify-items: start;
            gap: .5em 1em;
            dt {
                font-weight: bold;
            }
        }
        button {
            margin-top: 1em;
            padding: 0.5em 1em;
            border: none;
            border-radius: 4px;
            background-color: #007BFF;
            color: white;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        button:hover {
            background-color: #0056b3;
        }
    }

    .button-about-me {
        padding: 1em 2em;
        border: none;
        border-radius: 10px;
        background-color: #016cde;
        color: white;
        cursor: pointer;
        transition: background-color 0.3s ease;
        grid-column: span 2; /* Neem de volledige breedte van de grid in beslag */
        justify-self: center;
        font-family: 'Gotham', 'Times New Roman', Times, serif;

    }
    .button-about-me:hover {
        background-color: #0056b3;
    }


    .socials {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto 1fr;
        gap: 1em;
        justify-content: center;
        align-items: center;
        margin-top: 2vh;
    }
    .flag-usa-link {
        grid-column: 1 / 3;
        grid-row: 1;
        display: flex;
        justify-content: center;
    }
    .github-link {
        grid-column: 1;
        grid-row: 2;
        display: flex;
        justify-content: center;
    }
    .linkedin-link {
        grid-column: 2;
        grid-row: 2;
        display: flex;
        justify-content: center;
    }
    .flag-usa {
        width: 100%;
        max-width: 120px;
        height: auto;
        border-radius: 0 !important;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        border: 1px solid #ccc;
        display: block;
        margin: 0 auto;
    }
    .socials img:not(.flag-usa) {
        object-fit: cover;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        @media (min-width: 1100px) {
            width: 80px;
            height: 80px;
        }
    }

    @media (min-width: 600px) {
        .socials {
            margin-top: 5vh ;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr;
        }
        .github-link {
            grid-column: 1;
            grid-row: 1;
        }
        .flag-usa-link {
            grid-column: 2;
            grid-row: 1;
        }
        .linkedin-link {
            grid-column: 3;
            grid-row: 1;
        }
    }

    

</style>
