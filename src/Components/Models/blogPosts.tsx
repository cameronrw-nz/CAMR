import { IStoryPanelInfo } from "../StoryPanel";
import { NavigationConstants } from "../NavigationConstants";

const firstRubric = `
My First Rubric
============

These series of Model posts are going to follow my journey in creating Warhammer 40k armies and any other gaming figure related topics.

As of the title of the post I have completed 1 whole squad of Thousand Sons Rubrics and I plan on build a few more squads of paint them. In the immediate future expect to see Scarab Occult Terminators, more Rubrics, Abaddon and some CSM.

<img class="embedded-images" alt="rubric" src="${process.env.PUBLIC_URL}/Images/TS-Marine.jpg"/>

It took me a while to decide on a colour scheme as the classic blue and gold is too prominent and I wanted to set my Thousands sons apart. I also wanted to create a custom warband so it's possible to ally in CSM without any lore troubles or without it seeming too much like Chaos Soup. 

I think the paint scheme has turned out well, the red was inspired from the old thousands sons scheme of red and gold. But I decided to dull it down as the candied affect is too much. Next was the trim colour, I wanted to something Tizcan/Egyptian themed that was non-metallic, the bone effect works really well I think. The only thing that's not too great is the base colours imo. It could do with some additional contrast from the other model colour, so perhaps some industrial ruin colouring would have been better, but at this stage I am committed to it :D.

The new release of Vigilus ablaze is on its way along with Abaddon the Despoiler!

<img alt="abaddon" class="embedded-images" src="https://whc-cdn.games-workshop.com/wp-content/uploads/2019/02/40kAbaddon-Mar5-Abaddon7tyerhvfsh.jpg" />
`

export default [
    {
        title: "My First Rubric",
        id: "firstRubric",
        markDown: firstRubric,
        item: NavigationConstants.Models,
        imageUrl: `${process.env.PUBLIC_URL}/Images/TS-Marine.jpg`,
        createdDate: new Date(2019, 2, 24)
    }
] as IStoryPanelInfo[]
