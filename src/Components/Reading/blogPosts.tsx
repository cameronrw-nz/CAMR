import { IStoryPanelInfo } from "../StoryPanel";
import { NavigationConstants } from "../NavigationConstants";

const bookShelf = `
The Book Shelf
============

Being the massive nerd that I am I have started reading the Warhammer 40k lore series by the Black Library.

<img class="embedded-images" alt="rubric" src="${
    process.env.PUBLIC_URL
}/Images/BookShelf.jpg"/>

A few years ago I first started on the book Night lords by Aaron Dembski-Bowden. This trilogy was amazing and furthered my love for the Warhammer 40k universe. Then again I discovered the universe again via Helsreach, Talon of Horus and Black Legion all by Aaron Dembski-Bowden.

From this point I was addicted and started on the Horus Heresy series, which starts with Horus Rising and onto False gods of which I just finished both of these. As I keep reading more and more it just deepens my love for the series and addiction.

Both of these books are pre-heresy during the Great Crusade of the Imperium of Man. They set the scene for who the main Antagonists are of the Heresy and shows a great deal how the Imperium treats Xenos races and even other lost Human civilisations from the Dark Age of Technology.

Some of the greatest moments for me in these books were following the character of Loken when he was interacting with a Human of one of the lost worlds. It was interesting to see how similar the characters were and how even though they are worlds apart the thinking is still the same with the same sense of duty and learning.

However as to not burn myself out on the Horus Heresy series I am currently reading the Devastation of Baal. This is focused on the Blood Angels of the 41st Millennium and their struggle in their war against the menance that is the Tyranids of the splinter fleet Leviathan.
`;

export default [
    {
        createdDate: new Date(2019, 2, 26),
        title: "The Book Shelf",
        id: "bookShelf",
        markDown: bookShelf,
        item: NavigationConstants.Reading,
        imageUrl: `${process.env.PUBLIC_URL}/Images/BookShelf.jpg`
    }
] as IStoryPanelInfo[];
