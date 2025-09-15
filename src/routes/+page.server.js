export async function load({ url }) {
    // haalt alle members op uit de database van jaar 25-26 jaar 2
    const membersResponse = await fetch ("https://fdnd.directus.app/items/person/161");
    const membersData = await membersResponse.json();

    // returned deze data zodat we deze in de .svelte view kunnen gebruiker
    return {members: membersData.data};
}