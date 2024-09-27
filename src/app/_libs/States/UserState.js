import {recoilPersist} from "recoil-persist";
import {atom} from "recoil";


const {persistAtom}=recoilPersist();

export const UserState = atom({
    key:"userState",
    default: {},
    effects_UNSTABLE:[persistAtom]
});

