/// <reference path="../../js/jquery.d.ts" />

import basePanel = require("../coreplayer-treeviewleftpanel-module/treeViewLeftPanel");
import utils = require("../../utils");

export class TreeViewLeftPanel extends basePanel.TreeViewLeftPanel {

    constructor($element: JQuery) {
        super($element);
    }

    create(): void {

        this.setConfig('treeViewLeftPanel');

        super.create();
    }
}