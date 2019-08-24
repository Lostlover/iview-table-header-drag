import {dragTable} from "./drag";

export default function install(_Vue, Table) {
    if (Table && Table.name !== 'Table') {
        throw 'Table Component is not found';
    }

    const mixin = {
        mounted() {
            const dom = this.$refs.header.getElementsByTagName("th");
            dragTable(this, dom);
        }
    };

    Table.mixins.push(mixin);
}