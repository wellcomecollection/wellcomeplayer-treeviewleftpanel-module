/// <reference path="../../js/jquery.d.ts" />

import basePanel = require("../coreplayer-treeviewleftpanel-module/treeViewLeftPanel");
import utils = require("../../utils");
import tree = require("../coreplayer-treeviewleftpanel-module/treeView");
import journalSortType = require("../../extensions/wellcomeplayer-seadragon-extension/journalSortType");

export class TreeViewLeftPanel extends basePanel.TreeViewLeftPanel {

    $treeViewOptions: JQuery;
    $sortByLabel: JQuery;
    $sortList: JQuery;

    constructor($element: JQuery) {
        super($element);
    }

    create(): void {

        this.setConfig('treeViewLeftPanel');

        super.create();

        this.$treeViewOptions = $('<div class="treeView"></div>');
        this.$options.append(this.$treeViewOptions);

        this.$sortByLabel = $('<span class="sort">Sort By:</span>');
        this.$treeViewOptions.append(this.$sortByLabel);

        this.$sortList = $('<select>\
                                <option value="date">Date</option>\
                                <option value="volume">Volume</option>\
                            </select>');

        this.$treeViewOptions.append(this.$sortList);

        var that = this;

        // events
        this.$sortList.on('change', function(e) {
            var val = $(this).find('option:selected').val();

            switch(val){
                case "date":
                    that.treeView.rootNode = that.provider.getJournalTree(journalSortType.JournalSortType.date);
                    break;
                case "volume":
                    that.treeView.rootNode = that.provider.getJournalTree(journalSortType.JournalSortType.volume);
                    break;
            }

            that.treeView.dataBind();
        });

        this.$sortList.hide();
    }

    createTreeView(): void {

        var manifestType = this.provider.getManifestType();

        this.treeView = new tree.TreeView(this.$treeView);

        if (manifestType.toLowerCase() === "periodicalissue"){
            this.$sortList.show();
            this.treeView.rootNode = this.provider.getJournalTree(journalSortType.JournalSortType.date);
        } else {
            this.treeView.rootNode = this.provider.getTree();
        }

        this.treeView.dataBind();
    }

    openTreeView(): void{

        this.$treeViewOptions.show();
        super.resize();
        super.openTreeView();
    }

    openThumbsView(): void{

        this.$treeViewOptions.hide();
        super.resize();
        super.openThumbsView();
    }
}