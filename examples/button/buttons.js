/*
 * Ext JS Library 3.0 Pre-alpha
 * Copyright(c) 2006-2008, Ext JS, LLC.
 * licensing@extjs.com
 *
 * http://extjs.com/license
 */

Ext.onReady(function(){

    // This function renders a block of buttons
    function renderButtons(title){

        Ext.getBody().createChild({tag: 'h2', html: title});

        new ButtonPanel(
            'Text Only',
            [{
                text: 'הוספת משתמש'
            },{
                text: 'הוספת משתמש',
                scale: 'medium'
            },{
                text: 'הוספת משתמש',
                scale: 'large'
            }]
        );

        new ButtonPanel(
            'Icon Only',
            [{
                iconCls: 'add16'
            },{
                iconCls: 'add24',
                scale: 'medium'
            },{
                iconCls: 'add',
                scale: 'large'
            }]
        );

        new ButtonPanel(
            'Icon and Text (left)',
            [{
                text: 'הוספת משתמש',
                iconCls: 'add16'
            },{
                text: 'הוספת משתמש',
                iconCls: 'add24',
                scale: 'medium'
            },{
                text: 'הוספת משתמש',
                iconCls: 'add',
                scale: 'large'
            }]
        );

        new ButtonPanel(
            'Icon and Text (top)',
            [{
                text: 'הוספת משתמש',
                iconCls: 'add16',
                iconAlign: 'top'
            },{
                text: 'הוספת משתמש',
                iconCls: 'add24',
                scale: 'medium',
                iconAlign: 'top'
            },{
                text: 'הוספת משתמש',
                iconCls: 'add',
                scale: 'large',
                iconAlign: 'top'
            }]
        );

        new ButtonPanel(
            'Icon and Text (right)',
            [{
                text: 'הוספת משתמש',
                iconCls: 'add16',
                iconAlign: 'right'
            },{
                text: 'הוספת משתמש',
                iconCls: 'add24',
                scale: 'medium',
                iconAlign: 'right'
            },{
                text: 'הוספת משתמש',
                iconCls: 'add',
                scale: 'large',
                iconAlign: 'right'
            }]
        );

        new ButtonPanel(
            'Icon and Text (bottom)',
            [{
                text: 'הוספת משתמש',
                iconCls: 'add16',
                iconAlign: 'bottom'
            },{
                text: 'הוספת משתמש',
                iconCls: 'add24',
                scale: 'medium',
                iconAlign: 'bottom'
            },{
                text: 'הוספת משתמש',
                iconCls: 'add',
                scale: 'large',
                iconAlign: 'bottom'
            }]
        );
    }

    renderButtons('Normal Buttons');

    ButtonPanel.override({
        enableToggle: true
    });

    renderButtons('Toggle Buttons');

    ButtonPanel.override({
        enableToggle : undefined,
        menu : {items: [{text:'פריט בתפריט 1'},{text:'פריט בתפריט 2'},{text:'פריט בתפריט 3'}]}
    });

    renderButtons('Menu Buttons');

    ButtonPanel.override({
        split: true,
        defaultType: 'splitbutton'
    });

    renderButtons('Split Buttons');

    ButtonPanel.override({
        split: false,
        defaultType: 'button',
        arrowAlign: 'bottom'
    });

    renderButtons('Menu Buttons (Arrow on bottom)');

    ButtonPanel.override({
        split: true,
        defaultType: 'splitbutton'
    });

    renderButtons('Split Buttons (Arrow on bottom)');
});

// Helper class for organizing the buttons
ButtonPanel = Ext.extend(Ext.Panel, {
    layout:'table',
    defaultType: 'button',
    baseCls: 'x-plain',
    cls: 'btn-panel',
    renderTo : 'docbody',
    menu: undefined,
    split: false,

    layoutConfig: {
        columns:3
    },

    constructor: function(desc, buttons){
        // apply test configs
        for(var i = 0, b; b = buttons[i]; i++){
            b.menu = this.menu;
            b.enableToggle = this.enableToggle;
            b.split = this.split;
            b.arrowAlign = this.arrowAlign;
        }
        var items = [{
            xtype: 'box',
            autoEl: {tag: 'h3', html: desc, style:"padding:15px 0 3px;"},
            colspan: 3
        }].concat(buttons);

        ButtonPanel.superclass.constructor.call(this, {
            items: items
        });
    }
});