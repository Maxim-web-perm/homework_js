import { headerIndent } from "./header.js";
import { mobileMenu } from "./burger.js";
import { toggleTags } from "./tegs.js";
import { selectList } from "./select-list.js";
import { sorting } from "./sorting.js";
import "./swiper.js";
import { calculator, addProductToCart } from "./quantity.js";
import { initReviews } from "./review.js";
import { toggleNews } from "./news-toggle.js";

headerIndent();
mobileMenu();
toggleTags();
selectList();
sorting();
calculator();
addProductToCart();
initReviews();
toggleNews();
