# GA-SEI-Project-Two
## Pokémon Card Collection
#### SEI: 1130, Project Two
#### Joachim Cañete

## Welcome
Welcome to **Pokémon Card Collection**! This web-app is an homage to the cards used in the **Pokémon Trading Card Game**(PokémonTCG) released in Japan, 1996, and in the US, 1998. The web-app itself was developed by **Joachim Cañete**, a student in General Assembly's Software Engineering Immersive program, Cohort SEI: 1130.

## About
**Pokémon Card Collection** was built through `React` and incorporates the usage of `JavaScript` and `CSS`. Through `React`, a variety of components were built to render **6 decks** - each deck displaying their respective collection of cards, upon which the user can select a single card to read more information on them. You can view the **Pokémon Card Collection** [HERE](pokemon-card-collection.surge.sh)!

## Deployment
**Pokémon Card Collection** was deployed through [Surge](https://surge.sh/), a publishing platform for static web-apps.

## Interaction
Upon entering the initial link for **Pokémon Card Collection**, the user will be presented with the homepage which features 6 decks, each titled as *Sets*. The original *Base Set* of the PokémonTCG received additions after its initial release. These additions varied between different card styles, new support cards, and new pokémon types (e.g. Dark Pokémon).

![PokemonCC](https://raw.githubusercontent.com/CLNEulalia/PokeCards/main/src/Assets/Pokemon_CC.png)

When the user selects one of the *sets*, they will be routed to the card collection of that that *set*.

![PokemonSD](https://raw.githubusercontent.com/CLNEulalia/PokeCards/main/src/Assets/Pokemon_SD.png)

From there the user may select any one of the cards to view more information on that specific card. These actions are applicable across all 6 *sets*.

![PokemonCD](https://raw.githubusercontent.com/CLNEulalia/PokeCards/main/src/Assets/Pokemon_CD.png)

## Development
Through the use of the [PokémonTCG API](https://pokemontcg.io/) Development of **Pokémon Card Collection** started with mapping of a component hierarchy. Based on this structure, I had a clear idea of how I could import and link my various components. 

![compHeir](https://raw.githubusercontent.com/CLNEulalia/PokeCards/main/src/Assets/pokemonTCG_hierarchy.png)

Through my own investigations into the API, I was able to learn about the various decks released throughout history, and the number of sets released in the PokémonTCG **Base Set**. With a strong idea of how I wanted to structure the web-app, I proceeded to set up the *sets* as they were stacked 'decks' on a table that could be entered into and spread out for further investigation.

![wireFrame](https://raw.githubusercontent.com/CLNEulalia/PokeCards/main/src/Assets/pokemonTCG_wireFrame.png)

## User Stories
> As a user, I would like to choose what deck of cards I'd like to see more of
>
> As a user, I would like to be able to read more information about a specific card and its respective content
>
> As a user, I would like to be able to learn more about the history of the Pokémon TCG
>
> As a user, I would like to get back to the homepage

## Bugs
There is only one known bug, where the API call will occasionally be throttled. This may in part be due to the request limit of 5000 requests per hour. While that may seem like a tall order to exceed, the structuring of my fetch calls spread over 6 different sets certainly attempts to breach the request limit.