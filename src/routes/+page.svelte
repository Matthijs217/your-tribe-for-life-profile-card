<script>
    let { data } = $props(); // rune die data doorgeeft tussen page.server.js en page.svelte ("magische property")

    // Zet de members uit de data in een constante
    const member = data.members[0]; // We pakken de eerste naam uit de array
</script>

<!-- Autoplay voor het automatisch afspelen en loop zodat die opnieuw kan afspelen na het einde -->
<video class="bg-video" src="/newyork.webm" autoplay loop muted></video>

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
            <details name="favorites" open>
                <summary>Favoriete hobby</summary>
                <div class="content">
                    <p>{member.fav_hobby}</p>
                </div>
            </details>
                
            <details name="favorites">
                <summary>Favoriete Keuken</summary>
                <div class="content">
                    <p>{member.fav_kitchen}</p>
                </div>
            </details>

            <details name="favorites">
                <summary>Favoriete Emoji</summary>
                <div class="content">
                    <p>{member.fav_emoji}</p>
                </div>
            </details>

            <details name="favorites">
                <summary>Favoriet Dier</summary>
                <div class="content">
                    <p>{member.fav_animal}</p>
                </div>
            </details>
        </div>

        <a href="https://www.instagram.com/stories/highlights/18467473987075747/">
            <img class="flag-usa" src="/usa.webp" alt="Vlag van de Verenigde Staten" width="100" height="53">
        </a>

        <div class="socials">
            <a href="https://github.com/Matthijs217">
                <img src="/github.webp" alt="GitHub logo">
            </a>

            <a href="https://www.linkedin.com/in/matthijs-ten-brink-7620612a8/">
                <img src="/linkedin.webp" alt="LinkedIn logo">
            </a>
        </div>
    </section>
</main>

<style>
    main {
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
        height: 85vh;
        width: clamp(230px, 65%, 90vw);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: .75em;
        @media (min-width: 1100px) {
            padding: 3rem 1.75rem;
            height: 70vh;
            gap: 1.5em;
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
        @media (min-width: 600pçx) {
            margin-bottom: 1emc;
        }
    }

    .flag-usa {
        display: block;
        margin: 0.75em auto;
        width: 100px;
        height: auto;
        border: 1px solid #ccc;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        @media (min-width: 600px) {
            width: 150px;
        }
    }
    
    h1 {
        text-align: center;
        font-family: 'Gotham', 'Times New Roman', Times, serif;
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
        grid-template-columns:1fr;
        @media (min-width: 600px) {
            grid-template-columns: 1fr 1fr;
            gap: 2em;
        }
    }

    details {
        cursor: pointer;
    }

    @media (min-width: 1100px) {
        details:nth-of-type(1) {
            position: absolute;
            top: 15%;
            left: 10%;
        }
        details:nth-of-type(2) {
            position: absolute;
            top: 15%;
            right: 10%;
        }
        details:nth-of-type(3) {
            position: absolute;
            bottom: 15%;
            left: 10%;
        }
        details:nth-of-type(4) {
            position: absolute;
            bottom: 15%;
            right: 10%;
        }
    }

    summary {
        font-weight: bold;
        font-size: 1.1em;
        display: flex;
        align-items: center;
        list-style: none;
        position: relative;
    }

    /* Verplaats het standaard pijltje naar rechts */
    summary::-webkit-details-marker {
        display: none;
    }
    summary::after {
        content: "▶";
        transition: transform 0.2s;
        margin-right: 0;
        margin-left: .5em;
    }
    details[open] summary::after {
        transform: rotate(90deg);
    }

    .socials {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1em;
        img {
            object-fit: cover;
            border-radius: 50%;
            max-width: 85px;
            max-height: 85px;
        }
    }

    

</style>
