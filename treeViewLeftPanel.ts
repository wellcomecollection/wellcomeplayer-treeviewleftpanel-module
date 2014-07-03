/// <reference path="../../js/jquery.d.ts" />

import basePanel = require("../coreplayer-treeviewleftpanel-module/treeViewLeftPanel");
import utils = require("../../utils");
import journal = require("./journalView");
import tree = require("../coreplayer-treeviewleftpanel-module/treeView");

export class TreeViewLeftPanel extends basePanel.TreeViewLeftPanel {

    constructor($element: JQuery) {
        super($element);
    }

    create(): void {

        this.setConfig('treeViewLeftPanel');

        super.create();
    }

    createTreeView(): void {

        var manifestType = this.provider.getManifestType();

        if (manifestType.toLowerCase() === "periodicalissue"){
            this.treeView = new journal.JournalView(this.$treeView);
        } else {
            this.treeView = new tree.TreeView(this.$treeView);
        }
    }
}