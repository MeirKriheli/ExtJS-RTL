/*
 * Ext JS Library 3.0 Pre-alpha
 * Copyright(c) 2006-2008, Ext JS, LLC.
 * licensing@extjs.com
 *
 * http://extjs.com/license
 */

Ext.onReady(function(){
    Ext.get('mb1').on('click', function(e){
        Ext.MessageBox.confirm('אישור', 'האם ברצונך לעשות זאת?', showResult);
    });

    Ext.get('mb2').on('click', function(e){
        Ext.MessageBox.prompt('שם', 'נא להזין את שמך:', showResultText);
    });

    Ext.get('mb3').on('click', function(e){
        Ext.MessageBox.show({
           title: 'כתובת',
           msg: 'נא להזין כתובת:',
           width:300,
           buttons: Ext.MessageBox.OKCANCEL,
           multiline: true,
           fn: showResultText,
           animEl: 'mb3'
       });
    });

    Ext.get('mb4').on('click', function(e){
        Ext.MessageBox.show({
           title:'לשמור שינויים?',
           msg: 'אתה סוגר טאב הכולל שינויים אשר לא נשמרו. <br />האם ברצונך לשמור את השינויים?',
           buttons: Ext.MessageBox.YESNOCANCEL,
           fn: showResult,
           animEl: 'mb4',
           icon: Ext.MessageBox.QUESTION
       });
    });

    Ext.get('mb6').on('click', function(){
        Ext.MessageBox.show({
           title: 'נא להמתין',
           msg: 'טוען פריטים...',
           progressText: 'מאתחל...',
           width:300,
           progress:true,
           closable:false,
           animEl: 'mb6'
       });

       // this hideous block creates the bogus progress
       var f = function(v){
            return function(){
                if(v == 12){
                    Ext.MessageBox.hide();
                    Ext.example.msg('סיום', 'הפריטים המזויפים שלך נטענו!');
                }else{
                    var i = v/11;
                    Ext.MessageBox.updateProgress(i, Math.round(100*i)+'% completed');
                }
           };
       };
       for(var i = 1; i < 13; i++){
           setTimeout(f(i), i*500);
       }
    });

    Ext.get('mb7').on('click', function(){
        Ext.MessageBox.show({
           msg: 'שומר את המידע שלך, נא להמתין...',
           progressText: 'שומר...',
           width:300,
           wait:true,
           waitConfig: {interval:200},
           icon:'ext-mb-download', //custom class in msg-box.html
           animEl: 'mb7'
       });
        setTimeout(function(){
            //This simulates a long-running operation like a database save or XHR call.
            //In real code, this would be in a callback function.
            Ext.MessageBox.hide();
            Ext.example.msg('סיום', 'המידע המזוייף שלך נשמר!');
        }, 8000);
    });

    Ext.get('mb8').on('click', function(){
        Ext.MessageBox.alert('Status', 'השינויים נשמרו בהצלחה.', showResult);
    });

    //Add these values dynamically so they aren't hard-coded in the html
    Ext.fly('info').dom.value = Ext.MessageBox.INFO;
    Ext.fly('question').dom.value = Ext.MessageBox.QUESTION;
    Ext.fly('warning').dom.value = Ext.MessageBox.WARNING;
    Ext.fly('error').dom.value = Ext.MessageBox.ERROR;

    Ext.get('mb9').on('click', function(){
        Ext.MessageBox.show({
           title: 'תמיכה בצלמיות',
           msg: 'הנה תיבת שיח עם צלמית!',
           buttons: Ext.MessageBox.OK,
           animEl: 'mb9',
           fn: showResult,
           icon: Ext.get('icons').dom.value
       });
    });

    function showResult(btn){
        Ext.example.msg('לחיצה על לחצן', 'לחצת על לחצן  {0}', btn);
    };

    function showResultText(btn, text){
        Ext.example.msg('לחיצה על לחצן', 'לחצת על  {0} והזנת את הטקסט "{1}".', btn, text);
    };
});