

import {atom} from "recoil";
import {recoilPersist} from "recoil-persist";

const {persistAtom}=recoilPersist();
export const BlogState = atom({
        key:"BlogState",
        default:[],
        effects_UNSTABLE:[persistAtom]
    }
);