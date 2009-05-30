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
        labelWidth: 55,
        url:'save-form.php',
        defaultType: 'textfield',

        items: [{
            fieldLabel: 'שלח אל',
            name: 'to',
            anchor:'100%'  // anchor width by percentage
        },{
            fieldLabel: 'נושא',
            name: 'subject',
            anchor: '100%'  // anchor width by percentage
        }, {
            xtype: 'textarea',
            hideLabel: true,
            name: 'msg',
            anchor: '100% -53'  // anchor width by percentage and height by raw adjustment
        }]
    });

    var window = new Ext.Window({
        title: 'שנו את גודלי',
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