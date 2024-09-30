
import {recoilPersist} from "recoil-persist";
import {atom} from "recoil";


const {persistAtom}=recoilPersist();

export const FavoritesComics = atom({
    key:"FavoritesComics",
    default: [],
    effects_UNSTABLE:[persistAtom]
});

