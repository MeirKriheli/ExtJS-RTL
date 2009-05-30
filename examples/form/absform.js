/*
 * Ext JS Library 3.0 Pre-alpha
 * Copyright(c) 2006-2008, Ext JS, LLC.
 * licensing@extjs.com
 *
 * http://extjs.com/license
 */

Ext.onReady(function() {
    var form = new Ext.form.FormPanel({
        baseCls: 'x-plain',
        layout:'absolute',
        url:'save-form.php',
        defaultType: 'textfield',

        items: [{
            x: 0,
            y: 5,
            anchor: '100%',
            xtype:'label',
            text: 'שלח אל:'
        },{
            x: 0,
            y: 0,
            name: 'to',
            anchor:'-60'  // anchor width by percentage
        },{
            x: 0,
            y: 35,
            anchor: '100%',
            xtype:'label',
            text: 'נושא:'
        },{
            x: 0,
            y: 30,
            name: 'subject',
            anchor: '-60'  // anchor width by percentage
        },{
            x:0,
            y: 60,
            xtype: 'textarea',
            name: 'msg',
            anchor: '100% 100%'  // anchor width and height
        }]
    });

    var window = new Ext.Window({
        title: 'שנו את הגודל שלי',
        width: 500,
        height:300,
        minWidth: 300,
        minHeight: 200,
        layout: 'fit',
        plain:true,
        bodyStyle:'padding:5px;',
        buttonAlign:'center',
        items: form,

        buttons: [{
            text: 'שלח'
        },{
            text: 'בטל'
        }]
    });

    window.show();
});