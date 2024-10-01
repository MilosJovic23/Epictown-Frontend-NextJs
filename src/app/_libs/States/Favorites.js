
import {recoilPersist} from "recoil-persist";
import {atom} from "recoil";


const {persistAtom}=recoilPersist();

export const FavoriteComics = atom({
    key:"FavoriteComics",
    default: [],
    effects_UNSTABLE:[persistAtom]
});

