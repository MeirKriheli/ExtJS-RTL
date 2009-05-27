// default menu align for button menu
Ext.override(Ext.Button, { menuAlign:'tr-br?', iconAlign: 'right' });

// isClickOnArrow for SplitButton shpuld check for smaller than left
Ext.override(Ext.SplitButton, {
    isClickOnArrow : function(e){
        return this.arrowAlign != 'bottom' ?
               e.getPageX() < this.el.child(this.buttonSelector).getRegion().left :
               e.getPageY() > this.el.child(this.buttonSelector).getRegion().bottom;
    },
});