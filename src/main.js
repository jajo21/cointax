import { Home } from "./pages/home.js";
import { Button } from "./ui/button.js";

let content = 'asdas dasd asdasd asd asd asda sd';
let h = new Home('title');
h.setContent(content);
h.appendToElement('main');

/* let b = new Button('Hej');
b.appendToElement('body'); */