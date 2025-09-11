<script>
    let { data } = $props(); // rune die data doorgeeft tussen page.server.js en page.svelte ("magische property")

    // Zet de members uit de data in een constante
    const member = data.members[0]; // We pakken de eerste naam uit de array
</script>

<main>
    <section>
        <div class="profile-pic">
            <img
                src={`https://fdnd.directus.app/assets/${member.mugshot}?width=140&height=200`}
                alt={`portret ${member.name}`}
                height="200"
                width="140"
                onerror={(e) => (e.currentTarget.src = "/noname.webp")}
            />
        </div>

        <h1>{member.name}</h1>
        <p class="bio">{member.bio}</p>

        <div class="details">
            <details>
                <summary>Favoriete hobby</summary>
                <p>{member.fav_hobby}</p>
            </details>
                
            <details>
                <summary>Favoriete Keuken</summary>
                <p>{member.fav_kitchen}</p>
            </details>

            <details>
                <summary>Favoriete Emoji</summary>
                <p>{member.fav_emoji}</p>
            </details>

            <details>
                <summary>Favoriet Dier</summary>
                <p>{member.fav_animal}</p>
            </details>
        </div>

        <a href="https://www.instagram.com/stories/highlights/18467473987075747/">
            <img class="flag-usa" src="/usa.webp" alt="Vlag van de Verenigde Staten">
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
        height: 100vh;
        width: 100%;
        background-image: url("/newyork.webp");
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    section {
        background-color: rgba(255, 255, 255, 0.89);
        padding: 3rem 2.75rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .profile-pic {
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;
        img {
            object-fit: cover;
            border-radius: 50%;
            width: 140px;
            height: 140px;
        }
    }

    .flag-usa {
        display: block;
        margin: 2.5em auto;
        width: 150px;
        height: auto;
        border: 1px solid #ccc;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    h1 {
        text-align: center;
        font-family: 'Gotham', 'Times New Roman', Times, serif;
        margin: 0;
        padding: 0;
    }
    
    .bio {
        margin-top: .25em;
        text-align: center;
        color: #555;
    }

    .details {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2em;
    }

    details {
        margin-top: 1em;
        cursor: pointer;
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
        gap: 1.5em;
        margin-top: 1.5em;
        img {
            object-fit: cover;
            border-radius: 50%;
            width: 140px;
            height: 140px;
        }
        a:nth-of-type(1) img {
            height: 100px;
            width: 100px;
        }
    }

    

</style>
