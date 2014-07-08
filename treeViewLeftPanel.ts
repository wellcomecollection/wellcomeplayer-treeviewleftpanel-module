/// <reference path="../../js/jquery.d.ts" />

import basePanel = require("../coreplayer-treeviewleftpanel-module/treeViewLeftPanel");
import utils = require("../../utils");
import tree = require("../coreplayer-treeviewleftpanel-module/treeView");
import journalSortType = require("../../extensions/wellcomeplayer-seadragon-extension/journalSortType");

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

        this.treeView = new tree.TreeView(this.$treeView);

        if (manifestType.toLowerCase() === "periodicalissue"){
            this.treeView.rootNode = this.provider.getJournalTree(journalSortType.JournalSortType.date);
        } else {
            this.treeView.rootNode = this.provider.getTree();
        }

        this.treeView.dataBind();
    }
}