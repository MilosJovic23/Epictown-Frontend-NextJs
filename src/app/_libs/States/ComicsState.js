


import {atom} from "recoil";
import {recoilPersist} from "recoil-persist";

const {persistAtom}=recoilPersist();
export const ComicsState = atom({
        key:"comicsState",
        default:[],
        effects_UNSTABLE:[persistAtom]
    }
);