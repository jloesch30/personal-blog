import { atom } from "jotai";
import { PostParams } from "./types";

const ContentListAtom = atom<PostParams | undefined>(undefined);

export { ContentListAtom };
