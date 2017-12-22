import { SpellMetaData } from "./spell-meta-data";

export interface Spell {
    name: string; // unique
    description: string;
    shortdescription: string;
    school: string;
    level: string;
    components: string;
    castingtime: string;
    range: string;
    target?: string;
    effect?: string;
    area?: string;
    duration: string;
    savingthrow?: string;
    spellresistance?: string;
    metaData?: SpellMetaData;
}
