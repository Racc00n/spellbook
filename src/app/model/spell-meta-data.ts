export class SpellMetaData {
    constructor(
        public known: boolean = false,
        public preparedUses = 0,
        public remainingUses = 0) {
    }
}
