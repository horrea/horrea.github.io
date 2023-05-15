import { RexTool } from "@rex/model";

export class SetCurrentTool {
    static readonly type = '[REX-TOOLS] Set current tool';
    constructor(public tool: RexTool) {
    }
}